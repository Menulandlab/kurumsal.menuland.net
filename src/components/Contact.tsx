// src/components/Contact.tsx

import React from 'react';
import { MotionDiv } from './MotionDiv'; // Animasyon için köprü bileşenimizi import ediyoruz

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* BAŞLIK VE AÇIKLAMA BÖLÜMÜ */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Sorularınız mı var?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Aklınıza takılan her konuda bize yazabilirsiniz. Ekibimiz en kısa sürede size geri dönecektir.
          </p>
        </MotionDiv>

        {/* İLETİŞİM FORMU */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <form 
            action="https://formspree.io/f/xxxxxxxx" // LÜTFEN KENDİ FORMSPREE URL'NİZİ BURAYA YAPIŞTIRIN
            method="POST"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="sr-only">Adınız</label>
              <input type="text" id="name" name="name" placeholder="Adınız" className="w-full bg-slate-50 text-gray-900 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-menuland focus:border-menuland transition" required />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email Adresiniz</label>
              <input type="email" id="email" name="email" placeholder="Email Adresiniz" className="w-full bg-slate-50 text-gray-900 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-menuland focus:border-menuland transition" required />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Mesajınız</label>
              <textarea id="message" name="message" placeholder="Mesajınız..." rows={5} className="w-full bg-slate-50 text-gray-900 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-menuland focus:border-menuland transition" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-menuland text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300">
                Mesajı Gönder
              </button>
            </div>
          </form>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Contact;
