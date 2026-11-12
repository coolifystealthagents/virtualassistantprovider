"use client";

import { useEffect, useState, type FormEvent } from "react";
import { trackOrQueueAcrLead } from "../acr-lead-queue";

type Props = { endpoint?: string; encoding?: "json" | "form" };

const companySizes = ["1-5", "5-10", "11-50", "51-250", "251-1k", "1k+"];
const positions = ["Just 1 Position", "2-5 Positions", "6-10 Positions", "11-50 Positions", "51-100 Positions", "101-500 Positions", "501-1,000 Positions", "Over 1,000 Positions"];
const referrals = ["Google", "Email", "LinkedIn", "Reddit", "X / Twitter", "Referral", "ChatGPT / AI", "Outbound Outreach", "Other"];
const personalDomains = new Set(["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com", "aol.com", "proton.me", "protonmail.com"]);
const countryCodes = [
  ["🇺🇸", "+1"], ["🇨🇦", "+1"], ["🇮🇩", "+62"], ["🇵🇭", "+63"], ["🇬🇧", "+44"],
  ["🇦🇺", "+61"], ["🇳🇿", "+64"], ["🇸🇬", "+65"], ["🇮🇳", "+91"], ["🇦🇪", "+971"],
  ["🇲🇽", "+52"], ["🇧🇷", "+55"], ["🇿🇦", "+27"], ["🇩🇪", "+49"], ["🇫🇷", "+33"],
];

export default function StandardContactForm({ endpoint = "/api/submit-lead", encoding = "json" }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [referral, setReferral] = useState("");

  useEffect(() => {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const zones: Record<string, string> = {
      "Asia/Jakarta": "+62", "Asia/Makassar": "+62", "Asia/Jayapura": "+62", "Asia/Manila": "+63",
      "Europe/London": "+44", "Australia/Sydney": "+61", "Australia/Melbourne": "+61",
      "Pacific/Auckland": "+64", "Asia/Singapore": "+65", "Asia/Kolkata": "+91", "Asia/Dubai": "+971",
    };
    if (zones[zone]) setCountryCode(zones[zone]);
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("website_url") || "").trim()) return;
    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    const email = String(data.get("email") || "").trim().toLowerCase();
    if (personalDomains.has(email.split("@")[1] || "")) {
      setError("Please use a business or organization email address.");
      return;
    }
    const phone = `${countryCode} ${String(data.get("phoneLocal") || "").trim()}`.trim();
    const payload: Record<string, string> = {
      firstName, lastName, name: `${firstName} ${lastName}`.trim(), fullName: `${firstName} ${lastName}`.trim(),
      email, businessEmail: email, phone: phone,
      companyName: String(data.get("companyName") || ""), company: String(data.get("companyName") || ""),
      website: String(data.get("website") || ""), companySize: String(data.get("companySize") || ""),
      positions: String(data.get("positions") || ""), positionsToFill: String(data.get("positions") || ""),
      tier: String(data.get("tier") || ""),
      referral: String(data.get("referral") || ""), referral_source: String(data.get("referral") || ""), howTheyHeard: String(data.get("referral") || ""),
      referralSpecify: String(data.get("referralSpecify") || ""), needs: String(data.get("message") || ""), message: String(data.get("message") || ""),
      privacy: String(data.get("privacy") || ""), source: "contact-form", formId: "contactPageForm",
    };
    setSubmitting(true);
    setError("");
    try {
      const request = encoding === "form"
        ? { method: "POST", body: new URLSearchParams(payload) }
        : { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) };
      const response = await fetch(endpoint, request);
      if (!response.ok) throw new Error("Lead endpoint rejected the request");
      trackOrQueueAcrLead(payload);
      window.location.assign("/thank-you");
    } catch {
      setError("We could not submit your request. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <div className="sa-form-card">
      <h2>Tell us about your support needs</h2>
      <form onSubmit={submit} id="contact-form" action={endpoint} method="post" aria-describedby={error ? "contact-form-error" : undefined}>
        <input className="sa-hp" name="website_url" tabIndex={-1} autoComplete="off" aria-hidden="true" aria-label="Leave this field empty" />
        <label>First Name *<input name="firstName" required autoComplete="given-name" /></label>
        <label>Last Name *<input name="lastName" required autoComplete="family-name" /></label>
        <label>Business Email *<input name="email" type="email" required autoComplete="email" /><small>Business or organization email</small></label>
        <label>Phone Number *<span className="sa-phone"><select name="countryCode" aria-label="Country code" value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>{countryCodes.map(([flag, code], i) => <option value={code} key={`${code}-${i}`}>{flag} {code}</option>)}</select><input name="phoneLocal" type="tel" required autoComplete="tel-national" placeholder="Phone number" /></span></label>
        <label>Company Name *<input name="companyName" required autoComplete="organization" /></label>
        <label>Website / URL<input name="website" placeholder="example.com" autoComplete="url" /></label>
        <label>Company Size *<select name="companySize" required defaultValue=""><option value="" disabled>Select...</option>{companySizes.map((x) => <option key={x}>{x}</option>)}</select></label>
        <label>Positions to Fill *<select name="positions" required defaultValue=""><option value="" disabled>Select...</option>{positions.map((x) => <option key={x}>{x}</option>)}</select></label>
        <label>Preferred Support Tier *<select name="tier" required defaultValue=""><option value="" disabled>Select...</option><option>Executive Assistants</option><option>Senior Assistants</option><option>Not sure yet</option></select></label>
        <label>How Did You Hear About Us? *<select name="referral" required value={referral} onChange={(e) => setReferral(e.target.value)}><option value="" disabled>Select...</option>{referrals.map((x) => <option key={x}>{x}</option>)}</select></label>
        <input type="hidden" name="source" value="contact-form" />
        {referral === "Other" ? <label className="sa-full">Please Specify *<input name="referralSpecify" required /></label> : null}
        <label className="sa-full">What Does Your Team Need? *<textarea name="message" rows={2} required placeholder="Describe recurring tasks, tools, hours, approvals, and desired outcomes." /></label>
        <label className="sa-consent sa-full"><input type="checkbox" name="privacy" required /><span>I agree to the <a href="/privacy">Privacy Policy</a> and consent to being contacted about this request.</span></label>
        {error ? <p id="contact-form-error" className="sa-error sa-full" role="alert" aria-live="assertive">{error}</p> : null}
        <button className="sa-full" type="submit" disabled={submitting}>{submitting ? "Submitting..." : "Submit and Choose a Meeting Time"}</button>
      </form>
      <style jsx>{`
        .sa-form-card{width:100%;max-width:876px;margin:0 auto;background:#fff;border:1px solid #cfd8e2;border-radius:6px;padding:20px 22px 22px;box-shadow:0 18px 48px rgba(15,34,58,.14);color:#34415a;text-align:left}
        h2{margin:0 0 12px;color:#111827;font-size:22px;line-height:1.2;font-weight:800;letter-spacing:-.02em;max-width:700px}
        form{display:grid;grid-template-columns:1fr 1fr;gap:9px 12px}.sa-full{grid-column:1/-1}
        label{display:flex;min-width:0;flex-direction:column;gap:3px;font-size:12px;line-height:1.2;font-weight:750;color:#34415a}
        input,select,textarea{box-sizing:border-box;width:100%;border:1px solid #aebdca;border-radius:4px;background:#fff;color:#1f2937;font:inherit;font-size:14px;padding:8px 10px;outline:none;min-height:38px}
        input:focus-visible,select:focus-visible,textarea:focus-visible{border-color:#087fbe;box-shadow:0 0 0 3px rgba(8,127,190,.24)}
        input:user-invalid,select:user-invalid,textarea:user-invalid{border-color:#b42318}
        small{margin-top:-1px;color:#526174;font-size:11px;font-weight:500}.sa-phone{display:grid;grid-template-columns:102px 1fr;border:1px solid #aebdca;border-radius:4px;overflow:hidden}.sa-phone:focus-within{border-color:#087fbe;box-shadow:0 0 0 3px rgba(8,127,190,.24)}
        .sa-phone select,.sa-phone input{border:0;border-radius:0;box-shadow:none!important}.sa-phone select{border-right:1px solid #dbe1ea;padding-right:4px}.sa-phone input{min-width:0}
        textarea{resize:vertical;min-height:56px;max-height:120px}.sa-consent{flex-direction:row;align-items:flex-start;gap:8px;line-height:1.35}.sa-consent input{width:18px;height:18px;min-height:18px;flex:0 0 18px;margin:1px 0 0}.sa-consent a{color:#08709a;text-decoration:underline}button{width:100%;border:1px solid #087fbe;border-radius:4px;background:#0a6f9a;color:#fff;padding:10px 16px;min-height:42px;font-size:15px;font-weight:850;cursor:pointer;box-shadow:none}
        button:hover{background:#075c80}button:focus-visible{outline:3px solid rgba(8,127,190,.3);outline-offset:3px}button:active{transform:translateY(1px)}button:disabled{cursor:wait;opacity:.65}.sa-error{margin:0;color:#9d1c14;font-size:13px;font-weight:700}.sa-hp{position:absolute!important;left:-9999px!important;width:1px!important;height:1px!important;opacity:0!important}
        @media(max-width:700px){.sa-form-card{padding:20px 16px 22px;border-radius:4px}h2{font-size:21px}form{grid-template-columns:1fr;gap:11px}.sa-full{grid-column:auto}label{font-size:13px}.sa-phone{grid-template-columns:108px 1fr}textarea{min-height:72px;max-height:140px}button{font-size:15px}}
      `}</style>
    </div>
  );
}
