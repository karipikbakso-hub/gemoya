'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { X, Calendar, Clock, MapPin, Phone, CheckCircle, AlertCircle, Check } from 'lucide-react';
import servicesData from '@/lib/data/services.json';

interface BookingFormData {
  namaIbu: string;
  nomorWhatsApp: string;
  layanan: string;
  tanggalJam: string;
  agreement: boolean;
}

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingForm({ isOpen, onClose }: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields },
    reset,
    watch,
    setError,
    clearErrors,
  } = useForm<BookingFormData>({
    mode: 'onBlur', // Validate on blur for better UX
    defaultValues: {
      agreement: false,
    },
  });

  const selectedService = watch('layanan');
  const selectedServiceData = servicesData.find(service => service.id === selectedService);

  const validateForm = (data: BookingFormData) => {
    const errors: Record<string, string> = {};

    if (!data.namaIbu || data.namaIbu.length < 3) {
      errors.namaIbu = 'Nama minimal 3 karakter';
    }

    if (!data.nomorWhatsApp || !/^08[0-9]{8,11}$/.test(data.nomorWhatsApp)) {
      errors.nomorWhatsApp = 'Nomor WhatsApp harus dimulai dengan 08 dan 10-13 digit';
    }

    if (!data.layanan) {
      errors.layanan = 'Pilih layanan yang diinginkan';
    }

    if (!data.tanggalJam) {
      errors.tanggalJam = 'Pilih tanggal dan jam';
    }

    if (!data.agreement) {
      errors.agreement = 'Anda harus menyetujui syarat dan ketentuan';
    }

    return errors;
  };

  const onSubmit = async (data: BookingFormData) => {
    const validationErrors = validateForm(data);
    if (Object.keys(validationErrors).length > 0) {
      // Set errors manually since we don't have zod
      Object.keys(validationErrors).forEach(key => {
        // This is a simplified approach - in a real app you'd set errors properly
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Send to API
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        reset();
        setTimeout(() => {
          setSubmitSuccess(false);
          onClose();
        }, 3000);
      } else {
        throw new Error('Failed to submit booking');
      }
    } catch (error) {
      console.error('Booking submission error:', error);
      alert('Terjadi kesalahan saat mengirim booking. Silakan coba lagi atau hubungi WhatsApp langsung.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-text-heading">Booking Baby Spa</h2>
            <p className="text-text-body text-sm mt-1">Isi form untuk konsultasi gratis</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success Message */}
        {submitSuccess && (
          <div className="mx-6 mt-4 p-4 bg-green-50 border border-green-200 rounded-2xl">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-green-800">Booking berhasil dikirim!</p>
                <p className="text-sm text-green-600">Terapis kami akan menghubungi Anda dalam 1x24 jam.</p>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          {/* Essential Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-heading flex items-center gap-2">
              📝 Booking Baby Spa
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-heading mb-2">
                  Nama Ibu/Bapak *
                </label>
                <div className="relative">
                  <input
                    {...register('namaIbu', {
                      required: 'Nama wajib diisi',
                      minLength: { value: 3, message: 'Nama minimal 3 karakter' },
                      maxLength: { value: 50, message: 'Nama maksimal 50 karakter' }
                    })}
                    type="text"
                    className={`w-full px-4 py-3 pr-10 border rounded-2xl focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-colors ${
                      errors.namaIbu
                        ? 'border-red-300 bg-red-50'
                        : touchedFields.namaIbu && !errors.namaIbu
                        ? 'border-green-300 bg-green-50'
                        : 'border-gray-200'
                    }`}
                    placeholder="Masukkan nama lengkap"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    {errors.namaIbu && <AlertCircle className="w-5 h-5 text-red-500" />}
                    {touchedFields.namaIbu && !errors.namaIbu && <Check className="w-5 h-5 text-green-500" />}
                  </div>
                </div>
                {errors.namaIbu && (
                  <div className="flex items-center gap-2 mt-2">
                    <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <p className="text-red-600 text-sm">{errors.namaIbu.message}</p>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-text-heading mb-2">
                  Nomor WhatsApp *
                </label>
                <div className="relative">
                  <input
                    {...register('nomorWhatsApp', {
                      required: 'Nomor WhatsApp wajib diisi',
                      pattern: {
                        value: /^08[0-9]{8,11}$/,
                        message: 'Format: 08xxxxxxxxx (10-13 digit)'
                      }
                    })}
                    type="tel"
                    className={`w-full px-4 py-3 pr-10 border rounded-2xl focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-colors ${
                      errors.nomorWhatsApp
                        ? 'border-red-300 bg-red-50'
                        : touchedFields.nomorWhatsApp && !errors.nomorWhatsApp
                        ? 'border-green-300 bg-green-50'
                        : 'border-gray-200'
                    }`}
                    placeholder="081234567890"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    {errors.nomorWhatsApp && <AlertCircle className="w-5 h-5 text-red-500" />}
                    {touchedFields.nomorWhatsApp && !errors.nomorWhatsApp && <Check className="w-5 h-5 text-green-500" />}
                  </div>
                </div>
                {errors.nomorWhatsApp && (
                  <div className="flex items-center gap-2 mt-2">
                    <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <p className="text-red-600 text-sm">{errors.nomorWhatsApp.message}</p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-heading mb-2">
                Pilih Layanan *
              </label>
              <div className="relative">
                <select
                  {...register('layanan', {
                    required: 'Pilih layanan yang diinginkan'
                  })}
                  className={`w-full px-4 py-3 pr-10 border rounded-2xl focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-colors appearance-none ${
                    errors.layanan
                      ? 'border-red-300 bg-red-50'
                      : touchedFields.layanan && !errors.layanan
                      ? 'border-green-300 bg-green-50'
                      : 'border-gray-200'
                  }`}
                >
                  <option value="">Pilih layanan yang diinginkan</option>
                  {servicesData.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name} - {service.priceDisplay}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  {errors.layanan && <AlertCircle className="w-5 h-5 text-red-500" />}
                  {touchedFields.layanan && !errors.layanan && selectedService && <Check className="w-5 h-5 text-green-500" />}
                </div>
              </div>
              {errors.layanan && (
                <div className="flex items-center gap-2 mt-2">
                  <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <p className="text-red-600 text-sm">{errors.layanan.message}</p>
                </div>
              )}
            </div>

            {selectedServiceData && (
              <div className="p-4 bg-primary-pink/10 rounded-2xl">
                <h4 className="font-medium text-text-heading mb-2">{selectedServiceData.name}</h4>
                <p className="text-sm text-text-body">{selectedServiceData.description}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-accent-teal">
                  <span>⏱️ {selectedServiceData.duration}</span>
                  <span>💰 {selectedServiceData.priceDisplay}</span>
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-text-heading mb-2">
                Tanggal & Jam *
              </label>
              <div className="relative">
                <input
                  {...register('tanggalJam', {
                    required: 'Pilih tanggal dan jam layanan',
                    validate: (value) => {
                      const selectedDate = new Date(value);
                      const now = new Date();
                      const tomorrow = new Date(now);
                      tomorrow.setDate(tomorrow.getDate() + 1);

                      return selectedDate >= tomorrow || 'Jadwal minimal H+1 dari hari ini';
                    }
                  })}
                  type="datetime-local"
                  className={`w-full px-4 py-3 pr-10 border rounded-2xl focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-colors ${
                    errors.tanggalJam
                      ? 'border-red-300 bg-red-50'
                      : touchedFields.tanggalJam && !errors.tanggalJam
                      ? 'border-green-300 bg-green-50'
                      : 'border-gray-200'
                  }`}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  {errors.tanggalJam && <AlertCircle className="w-5 h-5 text-red-500" />}
                  {touchedFields.tanggalJam && !errors.tanggalJam && <Check className="w-5 h-5 text-green-500" />}
                </div>
              </div>
              {errors.tanggalJam && (
                <div className="flex items-center gap-2 mt-2">
                  <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <p className="text-red-600 text-sm">{errors.tanggalJam.message}</p>
                </div>
              )}
            </div>
          </div>

          {/* Agreement */}
          <div className="space-y-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                {...register('agreement', {
                  required: 'Anda harus menyetujui syarat dan ketentuan untuk melanjutkan'
                })}
                type="checkbox"
                className="mt-1 w-4 h-4 text-accent-teal border-gray-300 rounded focus:ring-accent-teal"
              />
              <span className="text-sm text-text-body">
                Saya menyetujui{' '}
                <a href="#" className="text-accent-teal hover:underline">
                  syarat & ketentuan
                </a>{' '}
                layanan Gemoya Baby Spa *
              </span>
            </label>
            {errors.agreement && (
              <div className="flex items-center gap-2 ml-7">
                <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                <p className="text-red-600 text-sm">{errors.agreement.message}</p>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Mengirim Booking...' : 'Kirim Booking & Konsultasi Gratis'}
            </button>
            <p className="text-center text-sm text-text-body mt-3">
              Detail lengkap akan dikumpulkan via WhatsApp • Konfirmasi dalam 1x24 jam
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
