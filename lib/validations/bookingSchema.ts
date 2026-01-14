import { z } from 'zod';

export const bookingSchema = z.object({
  namaIbu: z
    .string()
    .min(3, 'Nama minimal 3 karakter')
    .max(50, 'Nama maksimal 50 karakter'),

  nomorWhatsApp: z
    .string()
    .regex(/^08[0-9]{8,11}$/, 'Nomor WhatsApp harus dimulai dengan 08 dan 10-13 digit')
    .min(10, 'Nomor WhatsApp minimal 10 digit')
    .max(13, 'Nomor WhatsApp maksimal 13 digit'),

  layanan: z
    .string()
    .min(1, 'Pilih layanan yang diinginkan'),

  tanggalJam: z
    .string()
    .min(1, 'Pilih tanggal dan jam')
    .refine((val) => {
      const selectedDate = new Date(val);
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);

      return selectedDate >= tomorrow;
    }, 'Jadwal minimal H+1 dari hari ini'),

  agreement: z
    .boolean()
    .refine((val) => val === true, {
      message: 'Anda harus menyetujui syarat dan ketentuan',
    }),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
