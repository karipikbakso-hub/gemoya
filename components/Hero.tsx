'use client';

import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onBookingClick?: () => void;
}

export default function Hero({ onBookingClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-pink via-primary-blue to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-teal rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-teal rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary-pink rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            {/* Social Proof Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium text-text-heading">
                ⭐ 4.9/5 dari 150+ review • Harga Terjangkau, Kualitas Premium
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-heading leading-tight">
              Baby Spa dengan
              <span className="block text-gradient">Konsultasi Gratis di Jogja & Magelang</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-text-body max-w-2xl leading-relaxed">
              Layanan baby spa, pijat bayi, dan terapi khusus langsung ke rumah Anda.
              Gratis konsultasi sebelum treatment, terapis bersertifikat, peralatan steril, dan foto dokumentasi setiap sesi.
              Harga terjangkau dengan kualitas premium di Jogja & Magelang.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button
                onClick={onBookingClick}
                className="btn-primary text-center inline-flex items-center justify-center gap-2 group"
              >
                Booking Sekarang
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#paket"
                className="btn-secondary text-center inline-flex items-center justify-center"
              >
                Lihat Paket Hemat
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-6 text-sm text-text-body">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                <span>Konsultasi Gratis Tanpa Syarat</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                <span>Home Service Nyaman</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                <span>Terapis Bersertifikat</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                <span>Garansi Kepuasan 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                <span>Foto Dokumentasi HD</span>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="relative lg:block hidden">
            <div className="space-y-8">
              {/* Stat 1 */}
              <div className="card-pastel p-8 rounded-3xl text-center animate-fade-in">
                <div className="text-4xl font-bold text-accent-dark mb-2">50+</div>
                <div className="text-text-heading font-medium">Keluarga Terlayani</div>
                <div className="text-text-body text-sm mt-1">Sejak grand opening</div>
              </div>

              {/* Stat 2 */}
              <div className="card-pastel p-8 rounded-3xl text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="text-4xl font-bold text-accent-teal mb-2">⭐ 4.9/5</div>
                <div className="text-text-heading font-medium">Rating</div>
                <div className="text-text-body text-sm mt-1">Dari ulasan pelanggan</div>
              </div>

              {/* Stat 3 */}
              <div className="card-pastel p-8 rounded-3xl text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
                <div className="text-4xl font-bold text-text-heading mb-2">6+</div>
                <div className="text-text-heading font-medium">Tahun Pengalaman</div>
                <div className="text-text-body text-sm mt-1">Bidan Rumah Sakit</div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
