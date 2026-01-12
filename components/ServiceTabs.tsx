'use client';

import { useState } from 'react';
import { Baby, Smile, Heart, Star, BadgeCheck, Waves, Dumbbell, HandHeart } from 'lucide-react';
import servicesData from '@/lib/data/services.json';

const categories = [
  {
    id: 'baby-care',
    name: 'Baby',
    shortName: '👶 Baby',
    icon: Baby,
    color: 'from-primary-pink to-primary-blue',
  },
  {
    id: 'kids-care',
    name: 'Kids',
    shortName: '👦 Kids',
    icon: Smile,
    color: 'from-accent-teal to-primary-blue',
  },
  {
    id: 'mom-care',
    name: 'Mom',
    shortName: '🤱 Mom',
    icon: Heart,
    color: 'from-primary-pink to-accent-teal',
  },
  {
    id: 'consultation',
    name: 'Konsultasi',
    shortName: '⭐ Konsultasi',
    icon: Star,
    color: 'from-accent-dark to-accent-teal',
  },
];

const getIconComponent = (iconName: string) => {
  const icons: Record<string, any> = {
    Baby, Waves, Dumbbell, HandHeart, Smile, Activity: BadgeCheck, Heart, Milk: Waves, Users: Heart,
    Scissors: BadgeCheck, Droplets: Waves, Thermometer: BadgeCheck, Stomach: BadgeCheck, Cloud: Waves,
    Sparkles: Star, Bandage: BadgeCheck, Stethoscope: BadgeCheck, Apple: BadgeCheck, TrendingUp: BadgeCheck
  };
  return icons[iconName] || Baby;
};

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState('baby-care');

  const activeServices = servicesData.filter(service => service.category === activeTab);

  return (
    <section id="layanan" className="py-16 bg-gradient-to-br from-primary-pink/5 to-primary-blue/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
            Layanan & Harga
          </h2>
          <p className="text-lg text-text-body max-w-2xl mx-auto">
            Pilih layanan yang sesuai dengan kebutuhan bayi dan keluarga Anda
          </p>
        </div>

        {/* Tab Navigation - Horizontal Scroll di Mobile */}
        <div className="flex justify-center mb-12">
          <div className="flex overflow-x-auto scrollbar-hide bg-white rounded-3xl p-2 shadow-lg gap-1 min-w-0">
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isActive = activeTab === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex-shrink-0 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'text-text-body hover:text-text-heading hover:bg-gray-50'
                  }`}
                >
                  <IconComponent className={`w-4 h-4 ${isActive ? 'text-white' : 'text-accent-teal'}`} />
                  <span className="font-medium text-sm">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Display - Responsive */}
        {/* Mobile: Horizontal scroll with compact cards */}
        <div className="block md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {activeServices.map((service, index) => (
              <div key={service.id} className="flex-shrink-0 w-64">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 min-w-0">
                  {/* Header with Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded-lg bg-gradient-to-r ${categories.find(c => c.id === activeTab)?.color}`}>
                        {(() => {
                          const IconComponent = getIconComponent(service.icon);
                          return <IconComponent className="w-4 h-4 text-white" />;
                        })()}
                      </div>
                      {service.badge && (
                        <span className="text-xs font-medium text-accent-dark bg-accent-dark/10 px-2 py-1 rounded-full">
                          {service.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Service Name */}
                  <h3 className="text-base font-semibold text-text-heading mb-2 overflow-hidden">
                    {service.name.length > 25 ? `${service.name.substring(0, 25)}...` : service.name}
                  </h3>

                  {/* Duration */}
                  <p className="text-xs text-accent-dark font-medium mb-3">
                    {service.duration}
                  </p>

                  {/* Price - Highlight */}
                  <div className="mb-3">
                    <div className="text-xl font-bold text-accent-teal">
                      {service.priceDisplay}
                    </div>
                    {service.disclaimer && (
                      <p className="text-xs text-red-500 mt-1">{service.disclaimer}</p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full btn-primary text-sm py-2">
                    Pesan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeServices.map((service, index) => (
            <div
              key={service.id}
              className="card group hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                {/* Service Icon */}
                <div className="relative h-48 bg-gradient-to-br from-primary-pink to-primary-blue rounded-t-3xl overflow-hidden flex items-center justify-center">
                  <div className="text-white/90 group-hover:text-white transition-colors duration-300">
                    {(() => {
                      const IconComponent = getIconComponent(service.icon);
                      return <IconComponent className="w-24 h-24" />;
                    })()}
                  </div>

                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-4 left-4 bg-accent-dark text-white px-3 py-1 rounded-full text-xs font-medium">
                      {service.badge}
                    </div>
                  )}
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-xl bg-gradient-to-r ${categories.find(c => c.id === activeTab)?.color}`}>
                      {(() => {
                        const IconComponent = getIconComponent(service.icon);
                        return <IconComponent className="w-5 h-5 text-white" />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-heading">
                        {service.name}
                      </h3>
                      <p className="text-sm text-accent-dark font-medium">
                        {service.duration}
                      </p>
                    </div>
                  </div>

                  <p className="text-text-body text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2 mb-4">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent-teal rounded-full"></div>
                        <span className="text-xs text-text-body">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-text-heading">
                        {service.priceDisplay}
                      </div>
                      {service.disclaimer && (
                        <p className="text-xs text-red-500 mt-1">{service.disclaimer}</p>
                      )}
                    </div>

                    <button className="btn-outline text-xs px-3 py-2">
                      Pesan Sekarang
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-heading mb-4">
              Siap Memesan Layanan?
            </h3>
            <p className="text-text-body mb-6">
              Konsultasikan kebutuhan bayi Anda dengan terapis kami secara gratis
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Booking Sekarang
              </button>
              <button className="btn-secondary">
                Tanya Terapis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
