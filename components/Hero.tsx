'use client';

import Link from 'next/link';
import { ArrowRight, Star, Heart } from 'lucide-react';

interface HeroProps {
  onBookingClick?: () => void;
}

export default function Hero({ onBookingClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-pink/10 via-primary-blue/10 to-white overflow-hidden">
      {/* Background Pattern - Subtle */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-teal rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-teal rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-md mx-auto text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-accent-teal rounded-2xl flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-text-heading leading-tight">
              Baby Spa dengan Konsultasi Gratis di Jogja & Magelang
            </h1>
            <p className="text-base text-text-body leading-relaxed px-2">
              Layanan baby spa, pijat bayi, dan terapi khusus langsung ke rumah Anda.
              Gratis konsultasi sebelum treatment, terapis bersertifikat, peralatan steril, dan foto dokumentasi setiap sesi.
            </p>
          </div>

          {/* Pricing */}
          <div className="space-y-2">
            <div className="text-2xl font-bold text-accent-teal">
              Mulai Rp 50.000
            </div>
            <p className="text-sm text-text-body">
              Mandi • Pijat • Spa • Konsultasi
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button
              onClick={() => window.open('https://wa.me/6285920255497?text=Halo%20Gemoya,%20saya%20ingin%20booking%20baby%20spa', '_blank')}
              className="w-full btn-primary py-4 text-lg font-semibold"
            >
              Chat & Booking Sekarang
            </button>
          </div>

          {/* Trust Indicators - Horizontal Layout */}
          <div className="pt-6">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              <div className="flex items-center gap-2 text-xs text-text-body">
                <div className="w-1.5 h-1.5 bg-accent-teal rounded-full flex-shrink-0"></div>
                <span>Konsultasi Gratis Tanpa Syarat</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-body">
                <div className="w-1.5 h-1.5 bg-accent-teal rounded-full flex-shrink-0"></div>
                <span>Home Service Nyaman</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-body">
                <div className="w-1.5 h-1.5 bg-accent-teal rounded-full flex-shrink-0"></div>
                <span>Terapis Bersertifikat</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-body">
                <div className="w-1.5 h-1.5 bg-accent-teal rounded-full flex-shrink-0"></div>
                <span>Foto Dokumentasi HD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
