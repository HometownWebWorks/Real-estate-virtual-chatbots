"use client";

import { useMemo, useState } from "react";

const demoProfile = {
  brandName: "Real Estate Assistant",
  headline: "Tell us what you are looking for.",
  intro:
    "Answer a few quick questions and a local real estate professional will use your preferences to follow up with helpful next steps."
};

const blankLead = {
  name: "",
  phone: "",
  email: "",
  area: "",
  budget: 300000,
  bedrooms: 3,
  bathrooms: 2,
  buyTimeline: "",
  preApproval: "",
  buyerRequest: "",
  address: "",
  homeType: "",
  estimatedValue: 350000,
  sellTimeline: "",
  reasonSelling: "",
  wantsValuation: "",
  sellerRequest: ""
};

const timelines = ["ASAP", "1-3 months", "3-6 months", "6-12 months", "Just browsing"];
const homeTypes = ["Single-family", "Townhome", "Condo", "Multi-family", "Land", "Other"];
const faqs = [
  "How does pre-approval work?",
  "What should I do before touring?",
  "How does home valuation work?",
  "How fast can an agent follow up?"
];

const staticFaqAnswers = {
  "How does pre-approval work?":
    "Pre-approval helps show what price range may fit before you tour homes. If you need help, an agent can point you toward a lender or explain what to prepare.",
  "What should I do before touring?":
    "Before touring, it helps to know your preferred area, budget, timeline, and must-have features so the agent can focus on homes that fit.",
  "How does home valuation work?":
    "A home valuation estimates what your property may sell for based on details like location, condition, recent comparable sales, and current buyer demand.",
  "How fast can an agent follow up?":
    "Once your details are submitted, a real estate professional can review your answers and follow up with the next best step."
};

function money(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function formatPhoneNumber(value) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  const area = digits.slice(0, 3);
  const prefix = digits.slice(3, 6);
  const line = digits.slice(6, 10);

  if (digits.length > 6) return `(${area}) ${prefix}-${line}`;
  if (digits.length > 3) return `(${area}) ${prefix}`;
  if (digits.length > 0) return `(${area}`;
  return "";
}

function TextBox({ label, value, onChange, placeholder, rows = 1 }) {
  return (
    <label className="field-label">
      <span>{label}</span>
      <textarea
        rows={rows}
        value={value}
        placeholder={placeholder || label}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function ChipGroup({ options, value, onChange }) {
  return (
    <div className="chip-row">
      {options.map((option) => (
        <button
          className={`chip ${value === option ? "active" : ""}`}
          key={option}
          type="button"
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export function ChatbotApp({ lockedMode = null }) {
  const [mode, setMode] = useState(lockedMode || "buyer");
  const [lead, setLead] = useState(blankLead);
  const [faqAnswer, setFaqAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const update = (key, value) => {
    setSubmitted(false);
    setLead((current) => ({ ...current, [key]: value }));
  };

  const progressLabel = useMemo(() => {
    if (mode === "buyer") {
      if (submitted) return "Your details are ready to send.";
      if (lead.preApproval || lead.buyTimeline || lead.area) return "A few details are filled in.";
      return "Start with your contact details.";
    }

    if (submitted) return "Your details are ready to send.";
    if (lead.wantsValuation || lead.sellTimeline || lead.address) return "A few details are filled in.";
    return "Start with your contact details.";
  }, [mode, lead, submitted]);

  function askFaq(question) {
    setFaqAnswer(staticFaqAnswers[question] || "I can help with that. An agent can follow up with more detail.");
  }

  return (
    <main className="app-shell">
      <aside className="lead-panel">
        <div>
          <div className="brand">
            <div className="brand-mark">R</div>
            <span>{demoProfile.brandName}</span>
          </div>

          <h1>{demoProfile.headline}</h1>
          <p className="intro">{demoProfile.intro}</p>

          {!lockedMode && (
            <div className="mode-toggle" aria-label="Choose chatbot type">
              <button className={mode === "buyer" ? "active" : ""} type="button" onClick={() => setMode("buyer")}>
                Buyer
              </button>
              <button className={mode === "seller" ? "active" : ""} type="button" onClick={() => setMode("seller")}>
                Seller
              </button>
            </div>
          )}

          <section className="next-card">
            <h2>What happens next</h2>
            <ul className="next-list">
              <li>Share the basics about your {mode === "buyer" ? "home search" : "property"}.</li>
              <li>Ask quick questions along the way if you need help.</li>
              <li>A real estate professional can follow up with the next best step.</li>
            </ul>
            <div className="status">{progressLabel}</div>
          </section>
        </div>
      </aside>

      <section className="chat-panel">
        <header className="chat-header">
          <div>
            <strong>{mode === "buyer" ? "Buyer Assistant" : "Seller Assistant"}</strong>
            <span>Online now - ready to help</span>
          </div>
        </header>

        <div className="messages">
          <div className="message bot">
            <div className="bubble question">
              Welcome. I can help gather your {mode === "buyer" ? "home search" : "selling"} details so an agent can
              follow up with options that fit. To get started, what is your name, full 10 digit phone number, and email?
            </div>
            <div className="fields">
              <TextBox label="Name" value={lead.name} onChange={(value) => update("name", value)} />
              <TextBox
                label="Phone number"
                value={lead.phone}
                placeholder="(252) 555-0148"
                onChange={(value) => update("phone", formatPhoneNumber(value))}
              />
              <TextBox label="Email address" value={lead.email} onChange={(value) => update("email", value)} />
            </div>
          </div>

          {mode === "buyer" ? (
            <>
              <div className="message bot">
                <div className="bubble question">What area or city are you interested in?</div>
                <TextBox label="Desired area or city" value={lead.area} onChange={(value) => update("area", value)} />
              </div>

              <div className="message bot">
                <div className="bubble question">What budget range feels comfortable?</div>
                <div className="range-card">
                  <div className="range-row"><span>Buyer budget</span><strong>{money(lead.budget)}</strong></div>
                  <input type="range" min="150000" max="900000" step="25000" value={lead.budget} onChange={(event) => update("budget", Number(event.target.value))} />
                </div>
              </div>

              <div className="message bot">
                <div className="bubble question">How many bedrooms and bathrooms would you like?</div>
                <div className="range-card">
                  <div className="range-row"><span>Bedrooms</span><strong>{lead.bedrooms}+</strong></div>
                  <input type="range" min="1" max="6" value={lead.bedrooms} onChange={(event) => update("bedrooms", Number(event.target.value))} />
                  <div className="range-row"><span>Bathrooms</span><strong>{lead.bathrooms}+</strong></div>
                  <input type="range" min="1" max="5" value={lead.bathrooms} onChange={(event) => update("bathrooms", Number(event.target.value))} />
                </div>
              </div>

              <div className="message bot">
                <div className="bubble question">When are you hoping to buy?</div>
                <ChipGroup options={timelines} value={lead.buyTimeline} onChange={(value) => update("buyTimeline", value)} />
              </div>

              <div className="message bot">
                <div className="bubble question">Do you need help getting pre-approved?</div>
                <ChipGroup options={["Yes, I need help", "Already pre-approved", "Not sure yet"]} value={lead.preApproval} onChange={(value) => update("preApproval", value)} />
              </div>

              <div className="message bot">
                <div className="bubble question">Anything specific you want the agent to know?</div>
                <TextBox rows={3} label="Showing request or notes" value={lead.buyerRequest} onChange={(value) => update("buyerRequest", value)} placeholder="Preferred neighborhoods, must-have features, showing availability, or questions." />
              </div>
            </>
          ) : (
            <>
              <div className="message bot">
                <div className="bubble question">What is the property address?</div>
                <TextBox label="Property address" value={lead.address} onChange={(value) => update("address", value)} />
              </div>

              <div className="message bot">
                <div className="bubble question">What type of home is it?</div>
                <ChipGroup options={homeTypes} value={lead.homeType} onChange={(value) => update("homeType", value)} />
              </div>

              <div className="message bot">
                <div className="bubble question">If you know it, what is the estimated value?</div>
                <div className="range-card">
                  <div className="range-row"><span>Estimated value</span><strong>{money(lead.estimatedValue)}</strong></div>
                  <input type="range" min="100000" max="1200000" step="25000" value={lead.estimatedValue} onChange={(event) => update("estimatedValue", Number(event.target.value))} />
                </div>
              </div>

              <div className="message bot">
                <div className="bubble question">When are you hoping to sell?</div>
                <ChipGroup options={timelines} value={lead.sellTimeline} onChange={(value) => update("sellTimeline", value)} />
              </div>

              <div className="message bot">
                <div className="bubble question">What is your reason for selling?</div>
                <TextBox rows={3} label="Reason for selling" value={lead.reasonSelling} onChange={(value) => update("reasonSelling", value)} placeholder="Share as much or as little as you want." />
              </div>

              <div className="message bot">
                <div className="bubble question">Would you like a home valuation?</div>
                <ChipGroup options={["Yes", "No", "Maybe later"]} value={lead.wantsValuation} onChange={(value) => update("wantsValuation", value)} />
              </div>
            </>
          )}

          <div className="message bot">
            <div className="bubble question">I can answer quick questions while your lead summary comes together.</div>
            <div className="faq-grid">
              {faqs.map((question) => (
                <button key={question} type="button" onClick={() => askFaq(question)}>
                  {question}
                </button>
              ))}
            </div>
            {faqAnswer && (
              <div className="bubble faq-answer">{faqAnswer}</div>
            )}
          </div>
        </div>

        <footer className="composer">
          <button type="button" onClick={() => setSubmitted(true)}>Finish lead summary</button>
        </footer>
      </section>
    </main>
  );
}

export default function Home() {
  return <ChatbotApp />;
}
