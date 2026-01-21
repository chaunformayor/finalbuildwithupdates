type ZohoToken = { access_token: string; expires_in: number; api_domain?: string; token_type?: string };

async function getZohoAccessToken() {
  const refreshToken = process.env.ZOHO_REFRESH_TOKEN;
  const clientId = process.env.ZOHO_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CLIENT_SECRET;

  if (!refreshToken || !clientId || !clientSecret) {
    throw new Error("Missing Zoho OAuth env vars (ZOHO_REFRESH_TOKEN, ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET).");
  }

  const params = new URLSearchParams({
    refresh_token: refreshToken,
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: "refresh_token"
  });

  const res = await fetch(`https://accounts.zoho.com/oauth/v2/token?${params.toString()}`, {
    method: "POST"
  });

  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    throw new Error(`Zoho token refresh failed: ${res.status} ${txt}`);
  }

  const data = (await res.json()) as ZohoToken;
  return data.access_token;
}

export async function createZohoLead(payload: Record<string, any>) {
  const accessToken = await getZohoAccessToken();
  const res = await fetch("https://www.zohoapis.com/crm/v2/Leads", {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ data: [payload] })
  });

  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    throw new Error(`Zoho CRM lead create failed: ${res.status} ${txt}`);
  }

  return res.json();
}
