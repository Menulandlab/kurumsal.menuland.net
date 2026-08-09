/**
 * Generate a unique Event ID for deduplication (matches client and server events)
 */
export const generateEventId = (): string => {
  const ts = Date.now();
  const rand = Math.random().toString(36).substring(2, 9);
  return `evt_${ts}_${rand}`;
};

interface CustomData {
  value?: number;
  currency?: string;
  content_name?: string;
  content_category?: string;
  [key: string]: any;
}

interface UserData {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  [key: string]: any;
}

/**
 * Trigger a hybrid Meta conversion event (Browser Pixel + Server CAPI)
 */
export const trackMetaEvent = async (
  eventName: string,
  eventId: string,
  customData: CustomData = {},
  userData: UserData = {}
) => {
  // 1. Browser-Side tracking (Meta Pixel)
  if (typeof window !== "undefined" && (window as any).fbq) {
    try {
      // Add test_event_code to customData temporarily for browser events to appear under Meta Test Events tab
      const extendedData = { ...customData, test_event_code: "TEST96992" };
      (window as any).fbq("track", eventName, extendedData, { eventID: eventId });
      
      if (process.env.NODE_ENV === "development") {
        console.log(`[Meta Pixel] Tracked ${eventName} with ID ${eventId}`, extendedData);
      }
    } catch (err) {
      console.error("[Meta Pixel Error]", err);
    }
  } else if (process.env.NODE_ENV === "development") {
    console.warn(`[Meta Pixel Warning] fbq is not defined. Tracked: ${eventName}`);
  }

  // 2. Server-Side tracking (Meta Conversion API)
  try {
    const response = await fetch("/api/meta-capi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventName,
        eventId,
        customData,
        userData,
      }),
    });

    if (!response.ok && process.env.NODE_ENV === "development") {
      const errText = await response.text();
      console.error(`[Meta CAPI] Server CAPI failed for ${eventName}:`, errText);
    } else if (process.env.NODE_ENV === "development") {
      console.log(`[Meta CAPI] Hybrid Server Triggered for ${eventName} with ID ${eventId}`);
    }
  } catch (err) {
    console.error("[Meta CAPI Error]", err);
  }
};
