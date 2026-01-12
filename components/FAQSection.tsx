'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import faqData from '@/lib/data/faq.json';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary-pink/5 to-primary-blue/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-4">
            <HelpCircle className="w-4 h-4 text-accent-teal" />
            <span className="text-sm font-medium text-text-heading">
              Pertanyaan yang Sering Ditanyakan
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
            FAQ <span className="text-gradient">Gemoya</span>
          </h2>
          <p className="text-lg text-text-body max-w-2xl mx-auto">
            Jawaban untuk pertanyaan umum dari ibu-ibu tentang layanan baby spa kami
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 focus:outline-none focus:ring-2 focus:ring-accent-teal focus:ring-opacity-50"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-text-heading pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-accent-teal" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-accent-teal" />
                    )}
                  </div>
                </div>

                {openIndex === index && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-text-body leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-text-body mb-4">
            Masih ada pertanyaan? Jangan ragu untuk menghubungi kami!
          </p>
          <a
            href="https://wa.me/6285920255497?text=Halo%20Gemoya,%20saya%20ingin%20konsultasi%20tentang%20baby%20spa"
            className="btn-primary inline-flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HelpCircle className="w-4 h-4" />
            Konsultasi Gratis via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
