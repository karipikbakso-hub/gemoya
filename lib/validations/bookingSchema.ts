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

  usiaBayi: z.enum(
    ['0-3 bulan', '3-6 bulan', '6-9 bulan', '9-12 bulan', '1-2 tahun', '2-5 tahun'],
    {
      required_error: 'Pilih usia bayi',
      invalid_type_error: 'Usia bayi tidak valid',
    }
  ),

  layanan: z
    .string()
    .min(1, 'Pilih layanan yang diinginkan'),

  addOn: z
    .array(z.string())
    .optional()
    .default([]),

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

  alamatLengkap: z
    .string()
    .min(20, 'Alamat lengkap minimal 20 karakter')
    .max(200, 'Alamat maksimal 200 karakter'),

  area: z.enum(
    ['Kota Jogja', 'Sleman', 'Bantul', 'Kulon Progo', 'Magelang', 'Lainnya'],
    {
      required_error: 'Pilih area layanan',
      invalid_type_error: 'Area tidak valid',
    }
  ),

  catatanKhusus: z
    .string()
    .max(200, 'Catatan maksimal 200 karakter')
    .optional(),

  agreement: z
    .boolean()
    .refine((val) => val === true, {
      message: 'Anda harus menyetujui syarat dan ketentuan',
    }),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
