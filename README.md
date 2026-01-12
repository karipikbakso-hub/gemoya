# Gemoya Baby Spa Landing Page

Landing page untuk Gemoya Baby Spa - Baby Spa & Massage Home Service Jogja.

## ✨ What's New (Next.js 16 Upgrade)
- **Next.js 16**: Latest stable version with improved performance
- **React 19**: Enhanced concurrent features and performance
- **Updated Dependencies**: All packages upgraded to latest compatible versions
- **Better Performance**: Optimized package imports and bundling

## Tech Stack
- Next.js 16 (App Router) - Latest Stable
- React 19
- Tailwind CSS
- React Hook Form + Zod
- Resend (Email)
- Lucide React (Icons)

## Local Development

### Quick Setup (Windows)
1. Clone repository
2. Run the setup script:
```bash
   setup.bat
```
This will automatically install dependencies and set up environment variables.

### Manual Setup
1. Clone repository
2. Install dependencies:
```bash
   npm install
```
3. Copy `.env.local.example` ke `.env.local` dan isi:
```
RESEND_API_KEY=re_xxxxxxxx
EMAIL_TO=owner@gemoya.id
```
4. Run development server:
```bash
   npm run dev
```
5. Open [http://localhost:3000](http://localhost:3000)

### Troubleshooting
If you encounter issues with `npm install`:

1. **Check Node.js version**: Make sure you have Node.js 18+ installed
2. **Clear npm cache**: `npm cache clean --force`
3. **Use different registry**: `npm config set registry https://registry.npmjs.org/`
4. **Manual installation**: Run the individual commands shown in `setup.bat`

**Common Issues:**
- `E404 @types/react-hook-form`: This package was removed from package.json as it's not needed
- `cmd.exe not recognized`: Try running commands directly in PowerShell or Command Prompt

## Deploy to Vercel

1. Push ke GitHub repository
2. Import project di Vercel
3. Set environment variables:
   - `RESEND_API_KEY`
   - `EMAIL_TO`
4. Deploy!

## Resend Setup

1. Sign up di [resend.com](https://resend.com)
2. Verifikasi domain (atau pakai sandbox domain untuk testing)
3. Generate API Key
4. Copy ke `.env.local`

## Performance Optimization

- ✅ Image optimization (next/image, WebP)
- ✅ Lazy loading components
- ✅ Font optimization (next/font)
- ✅ Lighthouse score target: 90+

## SEO

- ✅ Meta tags optimized
- ✅ Open Graph & Twitter Card
- ✅ LocalBusiness structured data
- ✅ Sitemap.xml
- ✅ Robots.txt

## Contact

- WhatsApp: 0859-2025-5497
- Instagram: @banuababyspa
- Email: info@gemoya.id
