import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
}

export function formatDateTime(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export function generateBookingId(): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `GEM-${timestamp}-${random}`;
}

export function getWhatsAppUrl(phone: string, message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

export function calculateDiscount(originalPrice: number, discountPercent: number): number {
  return originalPrice - (originalPrice * discountPercent / 100);
}

export function getServiceCategoryName(category: string): string {
  const categories = {
    'baby-care': 'Baby Care (0-12 bulan)',
    'kids-care': 'Kids Care (1-5 tahun)',
    'mom-care': 'Mom & Family Care',
  };
  return categories[category as keyof typeof categories] || category;
}
