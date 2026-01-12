@echo off
echo ===========================================
echo  Gemoya Baby Spa Landing Page Setup
echo  Next.js 16 + React 19 Edition
echo ===========================================
echo.

echo Installing dependencies...
npm install

if %errorlevel% neq 0 (
    echo.
    echo Error: npm install failed. Please check your Node.js installation.
    echo Make sure you have Node.js 18+ and npm installed.
    echo.
    echo Manual installation commands:
    echo npm install next@^16.0.0 react@^19.0.0 react-dom@^19.0.0
    echo npm install lucide-react@^0.468.0 react-hook-form@^7.53.2 zod@^3.23.8 resend@^4.0.1
    echo npm install -D typescript@^5.7.2 @types/node@^22.10.1 @types/react@^19.0.1 @types/react-dom@^19.0.1
    echo npm install -D eslint@^9.15.0 eslint-config-next@^16.0.0 tailwindcss@^3.4.15 autoprefixer@^10.4.20 postcss@^8.5.1
    pause
    exit /b 1
)

echo.
echo Dependencies installed successfully!
echo.

echo Setting up environment variables...
if not exist .env.local (
    copy .env.local.example .env.local
    echo .env.local created. Please edit it with your API keys.
) else (
    echo .env.local already exists.
)

echo.
echo Setup complete! Run 'npm run dev' to start the development server.
echo.
pause
