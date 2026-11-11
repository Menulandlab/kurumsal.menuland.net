import { NextRequest, NextResponse } from "next/server";
import { headers, cookies } from "next/headers";
import crypto from "crypto";

/**
 * Standard SHA-256 hashing helper matching Meta rules (lowercase, trimmed)
 */
const hashField = (val: string | undefined): string | null => {
  if (!val) return null;
  const normalized = val.trim().toLowerCase();
  return crypto.createHash("sha256").update(normalized).digest("hex");
};

/**
 * Normalize and hash phone numbers (keep only digits)
 */
const hashPhone = (phone: string | undefined): string | null => {
  if (!phone) return null;
  // Keep only digits
  const normalized = phone.replace(/\D/g, "");
  return crypto.createHash("sha256").update(normalized).digest("hex");
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { eventName, eventId, customData = {}, userData = {} } = body;

    if (!eventName || !eventId) {
      return NextResponse.json(
        { error: "Missing eventName or eventId" },
        { status: 400 }
      );
    }

    const reqHeaders = headers();
    const reqCookies = cookies();

    // 1. Gather User Agent and IP address
    const userAgent = reqHeaders.get("user-agent") || "";
    // Fetch client IP, standard headers used by Vercel / proxies
    let clientIp =
      reqHeaders.get("x-forwarded-for")?.split(",")[0].trim() ||
      reqHeaders.get("x-real-ip") ||
      "";

    // Normalize IPv6 localhost loopback to standard client formats
    if (clientIp === "::1" || clientIp === "127.0.0.1") {
      clientIp = "88.243.123.45"; // Development dummy IP to pass Meta validations
    }

    // 2. Fetch Meta-specific cookie identifiers
    const fbp = reqCookies.get("_fbp")?.value || "";
    const fbc = reqCookies.get("_fbc")?.value || "";

    // 3. Normalize and hash personal customer identifiers
    const hashedEmail = hashField(userData.email);
    const hashedPhone = hashPhone(userData.phone);
    const hashedFirstName = hashField(userData.firstName);
    const hashedLastName = hashField(userData.lastName);

    // 4. Construct CAPI payload
    const capiPayload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          event_source_url: reqHeaders.get("referer") || "https://kurumsal.menuland.net",
          action_source: "website",
          user_data: {
            // Include hashed identifiers
            ...(hashedEmail && { em: [hashedEmail] }),
            ...(hashedPhone && { ph: [hashedPhone] }),
            ...(hashedFirstName && { fn: [hashedFirstName] }),
            ...(hashedLastName && { ln: [hashedLastName] }),
            // Include connection properties
            client_ip_address: clientIp,
            client_user_agent: userAgent,
            ...(fbp && { fbp }),
            ...(fbc && { fbc }),
          },
          custom_data: {
            ...customData,
          },
        },
      ],
      // Test olayları yalnızca META_TEST_EVENT_CODE tanımlıysa gönderilir; yoksa olaylar canlı sayılır.
      ...(process.env.META_TEST_EVENT_CODE ? { test_event_code: process.env.META_TEST_EVENT_CODE } : {}),
    };

    const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID || "1971172710431675";
    // Erişim anahtarı yalnızca Vercel ortam değişkeninden okunur. Depo herkese açık olduğu için koda yazılmaz
    // (11.11.2026'ya kadar yedek olarak kodda duruyordu; o anahtar Meta'da iptal edilmeli).
    const capiToken = process.env.META_CAPI_ACCESS_TOKEN;
    if (!capiToken) {
      console.error("[Meta CAPI] META_CAPI_ACCESS_TOKEN tanımlı değil; olay gönderilmedi.");
      return NextResponse.json({ success: false, skipped: "token_missing" }, { status: 503 });
    }

    const metaEndpoint = `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${capiToken}`;

    // 5. Send POST request to Meta Conversion API
    const response = await fetch(metaEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(capiPayload),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error("[Meta CAPI Error Response]", responseData);
      return NextResponse.json(
        { error: "Meta CAPI endpoint rejected payload", details: responseData },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, metaResponse: responseData });
  } catch (err) {
    console.error("[CAPI System Error]", err);
    return NextResponse.json(
      { error: "Internal server error triggering CAPI" },
      { status: 500 }
    );
  }
}
