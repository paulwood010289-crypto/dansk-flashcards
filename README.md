# Dansk Flashcards

A progressive Danish language learning app with 20 levels, persistent progress, leaderboard, and Google login.

## Tech Stack
- React + Vite
- Supabase (auth + database)
- Vercel (hosting)
- GitHub Actions (auto-deploy)

## Local Development Setup

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/dansk-flashcards.git
cd dansk-flashcards
npm install
```

### 2. Create your environment file
```bash
cp .env.example .env.local
```
Then open `.env.local` and fill in your Supabase URL and anon key.
**Never commit `.env.local` — it's already in `.gitignore`.**

### 3. Run locally
```bash
npm run dev
```
Open http://localhost:5173

## Deploying to Vercel

### First-time setup (do once)
1. Push this repo to GitHub
2. Go to vercel.com → Import project → select your GitHub repo
3. Vercel will auto-detect Vite — just click Deploy
4. Go to your Vercel project → Settings → Environment Variables and add:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

### Auto-deploy via GitHub Actions
After the first manual deploy, every push to `main` auto-deploys. You need to add these secrets to GitHub:
- Go to your repo → Settings → Secrets and variables → Actions
- Add: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`

To get your Vercel IDs: `npx vercel link` in the project folder.
To get your Vercel token: vercel.com → Settings → Tokens.

## Supabase Setup

Run the SQL in `supabase/schema.sql` in your Supabase SQL editor.
Enable Google OAuth in Supabase → Authentication → Providers → Google.
