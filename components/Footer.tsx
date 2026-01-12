import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Clock, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-text-heading text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent-teal rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gradient">Gemoya</h3>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Baby Spa & Pijat Bayi panggilan terbaik di Jogja & Magelang. Terapis bersertifikat,
              peralatan steril, home service nyaman. Dipercaya 500+ ibu sejak 2018.
            </p>

            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/banuababyspa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-teal transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/6285920255497"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-teal transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#layanan" className="text-gray-300 hover:text-accent-teal transition-colors duration-200">
                  Baby Spa Hydrotherapy
                </Link>
              </li>
              <li>
                <Link href="#layanan" className="text-gray-300 hover:text-accent-teal transition-colors duration-200">
                  Pijat Bayi
                </Link>
              </li>
              <li>
                <Link href="#layanan" className="text-gray-300 hover:text-accent-teal transition-colors duration-200">
                  Paket Membership
                </Link>
              </li>
              <li>
                <Link href="#paket" className="text-gray-300 hover:text-accent-teal transition-colors duration-200">
                  Paket Hemat
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+62 859-2025-5497</p>
                  <p className="text-sm text-gray-400">WhatsApp 24/7</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">info@gemoya.id</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Home Service</p>
                  <p className="text-sm text-gray-400">Jogja & Sekitarnya</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Hours */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-accent-teal" />
                <h4 className="text-lg font-semibold">Jam Operasional</h4>
              </div>
              <div className="space-y-1 text-gray-300">
                <p>Senin - Sabtu: 08:00 - 20:00</p>
                <p>Minggu: 09:00 - 17:00</p>
                <p className="text-sm text-accent-teal">*Booking diluar jam operasional tetap dilayani</p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-300 mb-4">Siap melayani kebutuhan baby spa Anda</p>
              <a
                href="https://wa.me/6285920255497?text=Halo%20Gemoya,%20saya%20ingin%20booking%20baby%20spa"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Booking Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Gemoya Baby Spa. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-accent-teal transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-accent-teal transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
