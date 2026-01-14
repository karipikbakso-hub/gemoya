import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { bookingSchema, type BookingFormData } from '@/lib/validations/bookingSchema';
import { generateBookingId, formatDateTime } from '@/lib/utils';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the request body
    const validationResult = bookingSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: validationResult.error.issues,
        },
        { status: 400 }
      );
    }

    const data: BookingFormData = validationResult.data;

    // Generate booking ID
    const bookingId = generateBookingId();

    // Get service details
    const servicesData = await import('@/lib/data/services.json');
    const selectedService = servicesData.default.find(s => s.id === data.layanan);

    // Format the data for email
    const formattedDateTime = formatDateTime(data.tanggalJam);

    // Send email notification
    const emailResult = await resend.emails.send({
      from: 'Gemoya Booking <booking@gemoya.id>',
      to: [process.env.EMAIL_TO || 'owner@gemoya.id'],
      subject: `[BOOKING BARU] ${data.namaIbu} - ${selectedService?.name || data.layanan}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .header { background: linear-gradient(135deg, #FADADD, #D6ECF8); padding: 20px; border-radius: 10px; margin-bottom: 20px; }
              .header h2 { color: #1A4D4E; margin: 0; }
              .booking-id { background: #4F8A8B; color: white; padding: 5px 10px; border-radius: 5px; display: inline-block; margin-bottom: 15px; }
              .details { background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 10px 0; }
              .detail-row { margin-bottom: 8px; }
              .label { font-weight: bold; color: #1A4D4E; }
              .footer { margin-top: 20px; padding-top: 15px; border-top: 1px solid #eee; font-size: 12px; color: #666; }
            </style>
          </head>
          <body>
            <div class="header">
              <h2>🎉 Booking Baru Masuk!</h2>
              <div class="booking-id">ID: ${bookingId}</div>
            </div>

            <div class="details">
              <div class="detail-row">
                <span class="label">Nama Ibu:</span> ${data.namaIbu}
              </div>
              <div class="detail-row">
                <span class="label">WhatsApp:</span> ${data.nomorWhatsApp}
              </div>
              <div class="detail-row">
                <span class="label">Layanan:</span> ${selectedService?.name || data.layanan}
              </div>
              <div class="detail-row">
                <span class="label">Harga:</span> ${selectedService?.priceDisplay || 'TBD'}
              </div>
              <div class="detail-row">
                <span class="label">Tanggal & Jam:</span> ${formattedDateTime}
              </div>
            </div>

            <div class="footer">
              <p><strong>Waktu Booking:</strong> ${new Date().toLocaleString('id-ID')}</p>
              <p><strong>⚠️ DETAIL LENGKAP BELUM TERKUMPUL:</strong></p>
              <p>Alamat, usia bayi, email, dan detail lainnya akan dikumpulkan via WhatsApp follow-up.</p>
              <p>📞 Segera hubungi: <a href="https://wa.me/6285920255497?text=Halo%20${encodeURIComponent(data.namaIbu)}%2C%20terima%20kasih%20sudah%20booking%20layanan%20baby%20spa">0859-2025-5497</a></p>
              <p>💬 <strong>Next Action:</strong> Collect alamat, usia bayi, email via WhatsApp</p>
            </div>
          </body>
        </html>
      `,
    });

    if (emailResult.error) {
      console.error('Email sending failed:', emailResult.error);
      return NextResponse.json(
        { error: 'Failed to send email notification' },
        { status: 500 }
      );
    }

    // Return success response with booking details
    return NextResponse.json({
      success: true,
      bookingId,
      message: 'Booking berhasil! Kami akan segera menghubungi Anda.',
      data: {
        ...data,
        bookingId,
        formattedDateTime,
      },
    });

  } catch (error) {
    console.error('Booking API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
