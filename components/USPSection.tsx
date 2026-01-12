'use client';

import { Award, ShieldCheck, Home, Camera, MessageCircle, BadgeCheck } from 'lucide-react';

const uspData = [
  {
    icon: Award,
    title: "Terapis Bersertifikat",
    description: "Certified Baby Spa Therapist dengan pengalaman 8+ tahun"
  },
  {
    icon: ShieldCheck,
    title: "Peralatan Baby-Safe",
    description: "Medical grade, steril, dan aman untuk kulit sensitif bayi"
  },
  {
    icon: Home,
    title: "Home Service Nyaman",
    description: "Tanpa ribet ke klinik, terapis datang ke rumah Anda"
  },
  {
    icon: Camera,
    title: "Foto Dokumentasi HD",
    description: "Setiap sesi didokumentasikan (khusus paket tertentu)"
  },
  {
    icon: MessageCircle,
    title: "Follow Up 7 Hari",
    description: "Konsultasi gratis via WhatsApp setelah treatment"
  },
  {
    icon: BadgeCheck,
    title: "Garansi Kepuasan 100%",
    description: "Uang kembali jika tidak puas dengan layanan kami"
  }
];

export default function USPSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
            Kenapa Pilih Gemoya?
          </h2>
          <p className="text-lg text-text-body max-w-2xl mx-auto">
            Kami hadir untuk memberikan pengalaman baby spa terbaik dengan standar keamanan dan kenyamanan tertinggi
          </p>
        </div>

        {/* USP Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uspData.map((usp, index) => {
            const IconComponent = usp.icon;
            return (
              <div
                key={index}
                className="card p-6 text-center group hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-pink to-primary-blue rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-accent-dark" />
                </div>

                <h3 className="text-xl font-semibold text-text-heading mb-3">
                  {usp.title}
                </h3>

                <p className="text-text-body leading-relaxed">
                  {usp.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary-pink to-primary-blue rounded-3xl px-8 py-6 shadow-lg">
            <div className="text-left">
              <div className="text-2xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-white/90">Ibu Puas</div>
            </div>

            <div className="w-px h-12 bg-white/30"></div>

            <div className="text-left">
              <div className="text-2xl font-bold text-white mb-1">⭐ 4.9/5</div>
              <div className="text-sm text-white/90">Rating</div>
            </div>

            <div className="w-px h-12 bg-white/30"></div>

            <div className="text-left">
              <div className="text-2xl font-bold text-white mb-1">150+</div>
              <div className="text-sm text-white/90">Review</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
