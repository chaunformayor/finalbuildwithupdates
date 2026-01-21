export const SITE = {
  name: "Midwest Investor Services",
  domain: "midwestinvestorservices.com",
  url: "https://midwestinvestorservices.com",
  phone: "6365907698",
  email: "info@midwestinvestorservices.com",
  city: "St. Louis",
  region: "Missouri",
  tagline: "Acquire and operate Midwest rental real estate with a local execution team."
};

export const FORMSPREE = {
  // You can override these in Vercel env vars if you want.
  // Accepts either a Formspree form ID (e.g., "maqqyknq") or a full endpoint URL (e.g., "https://formspree.io/f/maqqyknq").
  investorEndpoint: () => {
    const v = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || process.env.NEXT_PUBLIC_FORMSPREE_INVESTOR_ENDPOINT;
    const fallback = "https://formspree.io/f/maqqyknq";
    if (!v) return fallback;
    return v.startsWith("http") ? v : `https://formspree.io/f/${v}`;
  },
  dealEndpoint: () => {
    const v = process.env.NEXT_PUBLIC_FORMSPREE_DEAL_FORM_ID || process.env.NEXT_PUBLIC_FORMSPREE_DEAL_ENDPOINT;
    const fallback = "https://formspree.io/f/xeeekayk";
    if (!v) return fallback;
    return v.startsWith("http") ? v : `https://formspree.io/f/${v}`;
  }
};

export const FORMSPREE_DEAL = {
  // Put your Deal Submission Formspree form ID in .env.local as NEXT_PUBLIC_FORMSPREE_DEAL_FORM_ID
  endpoint: () => {
    const id = process.env.NEXT_PUBLIC_FORMSPREE_DEAL_FORM_ID;
    return id ? `https://formspree.io/f/${id}` : "";
  }
};
