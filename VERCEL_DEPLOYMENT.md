# Vercel Deployment Guide - SocialMark SaaS

## ⚠️ Important: Database Setup

SQLite **does NOT work on Vercel** because the filesystem is ephemeral (temporary). Your data will not persist between deployments.

### Choose a Database Provider

**Option 1: PostgreSQL on Vercel (Recommended)**
1. Go to [Vercel Postgres](https://vercel.com/docs/postgres)
2. Click "Create Database" in your Vercel dashboard
3. Follow setup instructions
4. Copy the connection string

**Option 2: Other Cloud Databases**
- **Supabase** (PostgreSQL) - https://supabase.com
- **PlanetScale** (MySQL) - https://planetscale.com
- **MongoDB Atlas** - https://www.mongodb.com/cloud/atlas
- **AWS RDS** - https://aws.amazon.com/rds/

### Update Prisma for Production Database

**Step 1: Install PostgreSQL adapter**
```bash
npm install @prisma/adapter-pg
```

**Step 2: Update `prisma/schema.prisma`**
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
```

**Step 3: Generate and push schema**
```bash
npx prisma migrate deploy
```

---

## 🔧 Environment Variables Setup on Vercel

### 1. Go to Vercel Project Settings
1. Open your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**

### 2. Add Required Variables

Add these environment variables for **Production**, **Preview**, and **Development**:

| Variable | Value | Example |
|----------|-------|---------|
| `DATABASE_URL` | Your database connection string | `postgresql://...` |
| `DIRECT_URL` | Direct connection URL (if using connection pooling) | `postgresql://...` |
| `NEXTAUTH_SECRET` | Generate with `openssl rand -base64 32` | `abc123xyz...` |
| `NEXTAUTH_URL` | Your production URL | `https://socialmark-qka6bskkh-forge-lab-s-projects.vercel.app` |
| `ENCRYPTION_KEY` | Generate random key | `xyz789abc...` |

### 3. Generate NEXTAUTH_SECRET

Run this in your terminal:
```bash
openssl rand -base64 32
```

Copy the output and paste it in Vercel as `NEXTAUTH_SECRET`.

### 4. Set NEXTAUTH_URL

Your production URL should be:
```
https://socialmark-qka6bskkh-forge-lab-s-projects.vercel.app
```

**Set this as `NEXTAUTH_URL` on Vercel.**

---

## 🚀 Step-by-Step Deployment

### 1. Prepare Your Repository
```bash
# Commit all changes
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. Connect to Vercel
```bash
npm i -g vercel
vercel
```

Follow the prompts to connect your GitHub/GitLab/Bitbucket account.

### 3. Add Environment Variables
- Go to Vercel Dashboard → Your Project → Settings → Environment Variables
- Add all variables from the table above
- Click "Save"

### 4. Trigger a Deployment
```bash
vercel --prod
```

Or push to your connected repository:
```bash
git push origin main
```

Vercel will automatically deploy.

### 5. Seed Your Production Database
After your app is deployed:

```bash
vercel env pull
npx prisma db seed
```

Or use the Vercel CLI to run a command:
```bash
vercel exec "npx prisma db seed"
```

---

## ✅ Testing After Deployment

1. **Open your production URL**: https://socialmark-qka6bskkh-forge-lab-s-projects.vercel.app
2. **Sign up** with a new account or **sign in** with demo credentials
3. **Check the database** with Prisma Studio:
   ```bash
   DATABASE_URL=your_production_url npx prisma studio
   ```

---

## 🔍 Troubleshooting

### "Credentials accepted but stays on login page"

**Solution:**
1. Check that `NEXTAUTH_URL` is set correctly in Vercel
2. Check that `NEXTAUTH_SECRET` is set and matches locally
3. Verify database connection with:
   ```bash
   vercel env pull
   npx prisma db execute --stdin < check_connection.sql
   ```

### "Database connection failed"

**Solution:**
1. Verify `DATABASE_URL` is set in Vercel Environment Variables
2. Test connection locally:
   ```bash
   DATABASE_URL=your_url npx prisma studio
   ```
3. Check that your IP is whitelisted (for cloud databases like PlanetScale)

### "Session not persisting after sign in"

**Solution:**
1. Ensure `NEXTAUTH_SECRET` is set
2. Check that `NEXTAUTH_URL` matches your deployed domain exactly
3. Clear browser cookies and try again
4. Check Vercel logs:
   ```bash
   vercel logs
   ```

---

## 📋 Checklist Before Going Live

- [ ] Database provider chosen and configured
- [ ] `prisma/schema.prisma` updated for production database
- [ ] All environment variables set on Vercel
- [ ] `NEXTAUTH_SECRET` generated and set
- [ ] `NEXTAUTH_URL` set to production domain
- [ ] Database schema migrated to production
- [ ] Demo user seeded in production database
- [ ] Test sign in works
- [ ] Test social account connection works
- [ ] Test dashboard loads after sign in

---

## 🔐 Security Best Practices

1. **Never commit `.env` files** - Already in `.gitignore`
2. **Use strong secrets** - Generate with `openssl rand -base64 32`
3. **Keep secrets out of logs** - Vercel automatically masks them
4. **Enable OAuth properly** - Update callback URLs in OAuth app settings:
   - Callback URL: `https://your-domain.vercel.app/api/auth/callback/oauth-provider`
5. **Use HTTPS only** - Vercel automatically handles this

---

## 📚 Additional Resources

- [Vercel Deployment Docs](https://vercel.com/docs/deployments/overview)
- [NextAuth.js Deployment](https://next-auth.js.org/deployment)
- [Prisma Vercel Deployment](https://www.prisma.io/docs/orm/prisma-client/deployment/deployment)
- [Environment Variables](https://vercel.com/docs/projects/environment-variables)

---

## Support

If you're still having issues:

1. **Check Vercel logs**: `vercel logs --tail`
2. **Read error messages carefully** - they usually point to the solution
3. **Verify all environment variables** are set in Vercel Settings
4. **Test database connection** with Prisma Studio locally using production URL

Good luck! 🚀
