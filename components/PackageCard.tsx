'use client';

import { Package, Star, Crown } from 'lucide-react';
import { calculateDiscount } from '@/lib/utils';

interface PackageCardProps {
  pkg: {
    id: string;
    name: string;
    slug: string;
    type: string;
    sessions: number;
    validity: string;
    price: number;
    priceDisplay: string;
    normalPrice: number;
    discount: number;
    badge: string;
    icon: string;
    description: string;
    includes: string[];
    image: string;
  };
  isMobile?: boolean;
  onBookingClick?: () => void;
}

export default function PackageCard({ pkg, isMobile = false, onBookingClick }: PackageCardProps) {
  const getIconComponent = (iconName: string) => {
    const icons: Record<string, any> = {
      Package, Star, Crown
    };
    return icons[iconName] || Package;
  };

  const IconComponent = getIconComponent(pkg.icon);
  const isMembership = pkg.type === 'membership';

  if (isMobile) {
    // Mobile: Compact horizontal card
    return (
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 min-w-0">
        {/* Header with Badge */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-gradient-to-r from-primary-pink to-primary-blue">
              <IconComponent className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs font-medium text-accent-dark bg-accent-dark/10 px-2 py-1 rounded-full">
              {pkg.badge}
            </span>
          </div>
          {isMembership && (
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-1 rounded-full">
              <Crown className="w-3 h-3" />
            </div>
          )}
        </div>

        {/* Package Name */}
        <h3 className="text-base font-semibold text-text-heading mb-2 overflow-hidden">
          {pkg.name.length > 25 ? `${pkg.name.substring(0, 25)}...` : pkg.name}
        </h3>

        {/* Sessions & Validity */}
        <p className="text-xs text-accent-dark font-medium mb-3">
          {pkg.sessions} sesi • {pkg.validity}
        </p>

        {/* Price - Highlight */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-1">
            <div className="text-xl font-bold text-accent-teal">
              {pkg.priceDisplay}
            </div>
            {pkg.discount > 0 && (
              <div className="bg-red-100 text-red-600 px-1.5 py-0.5 rounded text-xs font-medium">
                -{pkg.discount}%
              </div>
            )}
          </div>
          {pkg.discount > 0 && (
            <div className="text-xs text-text-body line-through">
              Rp {pkg.normalPrice.toLocaleString('id-ID')}
            </div>
          )}
        </div>

        {/* CTA Button */}
        <button
          onClick={onBookingClick}
          className="w-full btn-primary text-sm py-2"
        >
          {isMembership ? 'Langganan' : 'Pesan'}
        </button>
      </div>
    );
  }

  // Desktop: Full card layout
  return (
    <div className="card group hover:scale-105 transition-all duration-300 animate-fade-in">
      <div className="relative">
        {/* Package Icon */}
        <div className="relative h-48 bg-gradient-to-br from-primary-pink to-primary-blue rounded-t-3xl overflow-hidden flex items-center justify-center">
          <div className="text-white/90 group-hover:text-white transition-colors duration-300">
            <IconComponent className="w-24 h-24" />
          </div>

          {/* Badge */}
          <div className="absolute top-4 left-4 bg-accent-dark text-white px-3 py-1 rounded-full text-xs font-medium">
            {pkg.badge}
          </div>

          {/* Membership Indicator */}
          {isMembership && (
            <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-2 rounded-full">
              <Crown className="w-4 h-4" />
            </div>
          )}
        </div>

        {/* Package Content */}
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-xl bg-gradient-to-r from-primary-pink to-primary-blue">
              <IconComponent className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-heading">
                {pkg.name}
              </h3>
              <p className="text-sm text-accent-dark font-medium">
                {pkg.sessions} sesi • {pkg.validity}
              </p>
            </div>
          </div>

          <p className="text-text-body text-sm leading-relaxed mb-4">
            {pkg.description}
          </p>

          {/* Includes */}
          <div className="space-y-2 mb-4">
            <h4 className="font-medium text-text-heading text-sm">Termasuk:</h4>
            {pkg.includes.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent-teal rounded-full"></div>
                <span className="text-xs text-text-body">{item}</span>
              </div>
            ))}
            {pkg.includes.length > 3 && (
              <div className="text-xs text-accent-teal font-medium">
                +{pkg.includes.length - 3} benefit lainnya
              </div>
            )}
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <div className="text-2xl font-bold text-text-heading">
                  {pkg.priceDisplay}
                </div>
                {pkg.discount > 0 && (
                  <div className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium">
                    -{pkg.discount}%
                  </div>
                )}
              </div>
              {pkg.discount > 0 && (
                <div className="text-sm text-text-body line-through">
                  Rp {pkg.normalPrice.toLocaleString('id-ID')}
                </div>
              )}
            </div>

            <button
              onClick={onBookingClick}
              className="btn-outline text-xs px-3 py-2"
            >
              {isMembership ? 'Langganan' : 'Pesan Paket'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
