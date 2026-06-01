"use client"; // Form etkileşimi için bu bir Client Component olmalı.

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { generateEventId, trackMetaEvent } from '@/utils/meta-pixel';

// Formu Suspense içinde çağırmak en iyi pratiktir.
const RegistrationFormContent = () => {
  const searchParams = useSearchParams();
  const [plan, setPlan] = useState('');
  
  // Form alanları için state'ler
  const [businessName, setBusinessName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Gönderim durumu için state'ler
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // URL'den gelen 'plan' parametresini oku ve state'e ata
    const planFromUrl = searchParams.get('plan');
    if (planFromUrl) {
      // İlk harfi büyük yapıp daha güzel gösterelim
      setPlan(planFromUrl.charAt(0).toUpperCase() + planFromUrl.slice(1));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    // Parse names for higher match quality
    const nameParts = ownerName.trim().split(/\s+/);
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // Trigger CompleteRegistration event (when B2B registration form is submitted)
    const registrationEventId = generateEventId();
    trackMetaEvent(
      'CompleteRegistration',
      registrationEventId,
      {
        content_name: plan,
        content_category: 'B2B Registration'
      },
      {
        email,
        phone,
        firstName,
        lastName
      }
    );

    // SİZİN ADMIN PANELİNİZİN BEKLEDİĞİ JSON YAPISI
    const formData = {
      plan_type: plan.toLowerCase(),
      business_name: businessName,
      contact_name: ownerName,
      email: email,
      phone: phone,
    };

    try {
      // SİZİN API ENDPOINT URL'NİZE POST İSTEĞİ
      const response = await fetch("https://service.menuland.net/api/plan-register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Başvurunuz başarıyla alındı! En kısa sürede sizinle iletişime geçeceğiz.');

        // Trigger Lead event (when B2B form is successfully submitted)
        const leadEventId = generateEventId();
        trackMetaEvent(
          'Lead',
          leadEventId,
          {
            content_name: plan,
            content_category: businessName
          },
          {
            email,
            phone,
            firstName,
            lastName
          }
        );

        // Başarı durumunda formu temizle
        setBusinessName('');
        setOwnerName('');
        setEmail('');
        setPhone('');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Bilinmeyen bir hata oluştu.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-2xl"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-2">İşletme Kayıt Formu</h2>
      <p className="text-gray-600 mb-8">Menuland ailesine katılmak için ilk adımı atın.</p>
      
      {message ? (
        <div className={`p-4 rounded-lg text-center ${message.includes('başarıyla') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {message}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="plan" className="block text-sm font-medium text-gray-700">Seçilen Plan</label>
            <input
              type="text"
              id="plan"
              value={plan}
              readOnly
              className="w-full mt-1 bg-gray-200 text-gray-500 rounded-lg border-gray-300 px-4 py-3 cursor-not-allowed"
            />
          </div>
          <div>
            <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">İşletme Adı</label>
            <input type="text" id="businessName" name="business_name" value={businessName} onChange={(e) => setBusinessName(e.target.value)} required className="w-full mt-1 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-menuland focus:border-menuland transition" />
          </div>
          <div>
            <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">Yetkili Adı Soyadı</label>
            <input type="text" id="ownerName" name="contact_name" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} required className="w-full mt-1 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-menuland focus:border-menuland transition" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">İletişim E-postası</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full mt-1 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-menuland focus:border-menuland transition" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefon Numarası</label>
            <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full mt-1 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-menuland focus:border-menuland transition" />
          </div>
          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-menuland text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Gönderiliyor...' : 'Kaydı Tamamla'}
            </button>
          </div>
        </form>
      )}
    </motion.div>
  );
};

const RegistrationForm = () => (
  <Suspense fallback={<div>Yükleniyor...</div>}>
    <RegistrationFormContent />
  </Suspense>
);

export default RegistrationForm;