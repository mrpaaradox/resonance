# Resonance

A voice cloning and text-to-speech (TTS) application built with Next.js. Create, manage, and generate AI-powered voice outputs with ease.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Clerk
- **Storage**: Cloudflare R2
- **Payments**: Polar
- **API Layer**: tRPC
- **UI**: Shadcn UI + Radix primitives
- **Styling**: Tailwind CSS

## Features

- Voice cloning and management
- Text-to-speech generation
- Audio recording and playback
- Organization-based voice scoping
- Usage tracking and billing
- Multiple voice categories (audiobook, podcast, narration, etc.)

## Prerequisites

- Node.js 18+
- pnpm (recommended)
- PostgreSQL database
- Cloudflare R2 account (for storage)
- Clerk account (for authentication)
- Polar account (for payments)

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd resonance
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and configure the following variables:

```env
# App
SKIP_ENV_VALIDATION=true
APP_URL="http://localhost:3000"

# Database (Prisma)
DATABASE_URL="postgres://..."

# Clerk Authentication
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Cloudflare R2 Storage
R2_ACCOUNT_ID="..."
R2_ACCESS_KEY_ID="..."
R2_SECRET_ACCESS_KEY="..."
R2_BUCKET_NAME="resonance-app"
R2_TOKEN="..."

# Polar (Payments)
POLAR_ACCESS_TOKEN=polar_oat_...
POLAR_SERVER=sandbox
POLAR_PRODUCT_ID=...
POLAR_METER_VOICE_CREATION=voice_creation
POLAR_METER_TTS_GENERATION=tts_generation
POLAR_METER_TTS_PROPERTY=characters

# ChatterBox (TTS API)
CHATTERBOX_API_KEY=your-api-key
CHATTERBOX_API_URL=https://...

# Sentry (Optional - Error tracking)
SENTRY_AUTH_TOKEN=sntrys_...
```

### 4. Generate Prisma client

```bash
pnpm prisma generate
```

### 5. Run database migrations

```bash
pnpm prisma migrate dev
```

### 6. Start the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm prisma studio` | Open Prisma database GUI |
| `pnpm prisma migrate dev` | Run database migrations |

## Project Structure

```
resonance/
├── prisma/              # Database schema and migrations
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js App Router pages
│   ├── components/      # Shared React components
│   ├── features/        # Feature-specific code (voices, billing, dashboard)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions and clients
│   └── generated/       # Auto-generated code (Prisma)
└── package.json
```

## License

MIT
