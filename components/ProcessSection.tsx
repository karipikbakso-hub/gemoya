'use client';

import { CheckCircle, Phone, UserCheck, Home, Camera, Heart } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      icon: Phone,
      title: 'Booking & Konsultasi',
      description: 'Hubungi via WhatsApp untuk booking. Terapis akan konsultasi gratis tentang kondisi bayi, alergi, dan preferensi layanan.',
      duration: '5-10 menit',
    },
    {
      icon: UserCheck,
      title: 'Persiapan Terapis',
      description: 'Terapis bersertifikat datang tepat waktu dengan peralatan lengkap: kolam spa portable, minyak baby-safe, handuk steril.',
      duration: '15-30 menit',
    },
    {
      icon: Home,
      title: 'Treatment di Rumah',
      description: 'Treatment dilakukan di rumah Anda dengan suasana nyaman. Terapis fokus pada kenyamanan bayi dengan teknik yang sudah terbukti.',
      duration: '45-60 menit',
    },
    {
      icon: Camera,
      title: 'Dokumentasi & Follow-up',
      description: 'Foto dokumentasi treatment dikirim via WhatsApp. Terapis berikan tips perawatan bayi dan saran jadwal treatment berikutnya.',
      duration: '5-10 menit',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
            Bagaimana Cara Kerja <span className="text-gradient">Gemoya?</span>
          </h2>
          <p className="text-lg text-text-body max-w-2xl mx-auto">
            Proses layanan baby spa yang aman, nyaman, dan terpercaya langsung di rumah Anda
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent-teal text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>

                {/* Step Card */}
                <div className="card text-center p-6 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-pink to-primary-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-text-heading mb-3">
                    {step.title}
                  </h3>

                  <p className="text-text-body text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="text-xs text-accent-teal font-medium">
                    ⏱️ {step.duration}
                  </div>
                </div>

                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent-teal transform -translate-y-1/2"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 bg-primary-pink/10 px-8 py-4 rounded-2xl">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-accent-teal" />
              <span className="text-sm font-medium text-text-heading">Garansi Kepuasan 100%</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent-teal" />
              <span className="text-sm font-medium text-text-heading">Terapis Bersertifikat</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent-teal" />
              <span className="text-sm font-medium text-text-heading">Peralatan Steril</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
