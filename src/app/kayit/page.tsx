import RegistrationForm from "@/components/RegistrationForm";

export default function RegisterPage() {
  return (
    // Sayfaya biraz dolgu ve arkaplan rengi veriyoruz
    <div className="bg-slate-50 py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <RegistrationForm />
      </div>
    </div>
  );
}