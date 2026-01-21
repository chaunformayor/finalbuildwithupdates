# Midwest Investor Services (Next.js)

## Quick start
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run start
```

## Formspree
1. Create a Formspree form.
2. Copy the **Form ID** (looks like `abcdwxyz`).
3. Create `.env.local` in the project root:
```bash
NEXT_PUBLIC_FORMSPREE_FORM_ID=YOUR_FORM_ID
NEXT_PUBLIC_FORMSPREE_DEAL_FORM_ID=YOUR_DEAL_FORM_ID
```

## Calendly
Replace the iframe `src` in `src/app/contact/page.tsx` with your Calendly event link.

## Deploy (Vercel recommended)
- Push this repo to GitHub
- Import in Vercel
- Set env var `NEXT_PUBLIC_FORMSPREE_FORM_ID`
- Add your domain `midwestinvestorservices.com`


## Included Formspree endpoints (already wired)
- Investor List: https://formspree.io/f/maqqyknq
- Deal Submissions: https://formspree.io/f/xeeekayk

You can still override these via Vercel env vars if desired:
- NEXT_PUBLIC_FORMSPREE_FORM_ID (or NEXT_PUBLIC_FORMSPREE_INVESTOR_ENDPOINT)
- NEXT_PUBLIC_FORMSPREE_DEAL_FORM_ID (or NEXT_PUBLIC_FORMSPREE_DEAL_ENDPOINT)


## Build note (Vercel)
This project is intended for Vercel/Next.js server builds. If you previously set `output: "export"` in `next.config.mjs`, remove it for Vercel deploys. The sitemap route is marked `force-static` for compatibility.


## Node.js version
This project is locked to **Node.js 20** via `.nvmrc` and `package.json` engines. Ensure Vercel Node version is set to 20.x.

## Deal Criteria PDF auto-reply (Formspree)
Configure autoresponders in Formspree (dashboard):

1) Open your form → Settings → Autoresponse.
2) Add link to: https://midwestinvestorservices.com/deal-criteria.pdf
3) Suggested subject: "MIS Deal Criteria + Next Steps"
4) Suggested body: "Thanks for reaching out. Here is our Deal Criteria PDF. If your deal fits, reply with photos/inspection notes and timeline to close."

The PDF is included at `public/deal-criteria.pdf`.

## Private Investor Portal (password-gated)
Routes:
- `/portal/login` (enter access code)
- `/portal` (resources)

Set this env var in Vercel:
- `PORTAL_PASSWORD` (access code)

The middleware enforces the gate for `/portal/*` by checking a secure httpOnly cookie.

## Formspree → Zoho CRM (webhook)
API routes included:
- POST `/api/formspree/investor`
- POST `/api/formspree/deal`

### Vercel env vars required
- `ZOHO_CLIENT_ID`
- `ZOHO_CLIENT_SECRET`
- `ZOHO_REFRESH_TOKEN`

### Formspree webhook setup
In each Formspree form:
1) Integrations/Webhooks → Add webhook URL
2) Investor list form → `https://midwestinvestorservices.com/api/formspree/investor`
3) Deal submissions form → `https://midwestinvestorservices.com/api/formspree/deal`


## Zoho domain
This project is configured for Zoho **.com** endpoints.


## Portal add-ons
- Investor-only uploads: /portal/uploads (Formspree multipart upload; may require paid plan)
- Deal room per investor: /portal/investors/[investorId]
- PDF gating: /api/portal/file serves PDFs stored in /private only for logged-in users
- Capital intake workflow: /portal/capital-intake posts to Formspree investor endpoint with form_type=capital_intake
