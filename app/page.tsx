'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import USPSection from '@/components/USPSection';
import ServiceTabs from '@/components/ServiceTabs';
import PackageCard from '@/components/PackageCard';
import ProcessSection from '@/components/ProcessSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import packagesData from '@/lib/data/packages.json';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero onBookingClick={() => setIsBookingOpen(true)} />

      {/* Services Section */}
      <section id="layanan">
        <ServiceTabs />
      </section>

      {/* Packages Section */}
      <section id="paket" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
              Paket Hemat
            </h2>
            <p className="text-lg text-text-body max-w-2xl mx-auto">
              Hemat lebih banyak dengan paket bundling dan membership bulanan
            </p>
          </div>

          {/* Packages Display - Responsive */}
          {/* Mobile: Horizontal scroll */}
          <div className="block md:hidden">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {packagesData.map((pkg, index) => (
                <div key={pkg.id} className="flex-shrink-0 w-64">
                  <PackageCard pkg={pkg} isMobile={true} />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packagesData.map((pkg, index) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proses">
        <ProcessSection />
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <FAQSection />
      </section>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Booking Form Modal */}
      <BookingForm
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </main>
  );
}
