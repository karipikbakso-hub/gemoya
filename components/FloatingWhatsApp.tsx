'use client';

import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/utils';

const whatsappConfig = {
  number: '6285920255497',
  display: '0859-2025-5497',
  defaultMessage: 'Halo Gemoya, saya mau booking Baby Spa untuk bayi saya 😊'
};

export default function FloatingWhatsApp() {
  const whatsappUrl = getWhatsAppUrl(whatsappConfig.number, whatsappConfig.defaultMessage);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Hubungi via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
      <span className="sr-only">Hubungi via WhatsApp</span>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {whatsappConfig.display}
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </a>
  );
}
