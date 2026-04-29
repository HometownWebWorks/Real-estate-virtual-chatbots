# Real Estate Virtual Chatbots

Project goal: help real estate agents connect with more potential buyers and sellers, qualify lead interest earlier, and miss fewer sales opportunities by using virtual chatbots.

## Current Focus

The first build step is to define two chatbot flows: one for buyers and one for sellers. The buyer flow now has its first required questions, and the seller flow now has its first property and valuation questions.

## Project Files

- `PROJECT_TIMELINE.md` tracks timestamped updates as the project develops and should be used as the main reference file for future context windows.
- `CHATBOT_REQUIREMENTS.md` will hold the chatbot question flow, lead details, handoff logic, and future feature notes.
- `preview.html` is a static visual preview of the user-facing chatbot experience.
- `app/` contains the working Next.js chatbot prototype.
- `PRICING_OPTIONS.md` contains the current service pricing tiers and value positioning.
- `.github/workflows/deploy.yml` publishes the static demo to GitHub Pages when changes are pushed to `main`.
- `OUTREACH_PITCHES.txt` contains copy/paste outreach messages for Facebook and Instagram.
- `qr-codes/` contains scannable PNG QR codes for the public demo links.

## Local Prototype

The working chatbot prototype runs at:

`http://127.0.0.1:3000`

Separate client-facing demo links:

- Buyer-only: `http://127.0.0.1:3000/buyer`
- Seller-only: `http://127.0.0.1:3000/seller`
- Internal switchable demo: `http://127.0.0.1:3000`

The live URL is intended to feel like a real buyer/seller chatbot demo for potential realtor partnerships. Product details such as launch options, Google Sheets, EmailJS, QR codes, and other implementation notes are documented separately so the public demo stays clean and client-facing.

## Free Static Deployment

This demo is configured for free static hosting on GitHub Pages.

Static demo behavior:

- Buyer and seller forms work in the browser.
- FAQ answers use built-in frontend responses.
- No OpenAI API key or backend hosting is required.

GitHub Pages links after deployment should look like:

- `https://hometownwebworks.github.io/Real-estate-virtual-chatbots/`
- `https://hometownwebworks.github.io/Real-estate-virtual-chatbots/buyer/`
- `https://hometownwebworks.github.io/Real-estate-virtual-chatbots/seller/`

QR code files:

- `qr-codes/main-demo-qr.png`
- `qr-codes/buyer-demo-qr.png`
- `qr-codes/seller-demo-qr.png`

In the GitHub repository, set Pages to deploy from **GitHub Actions**.

OpenAI responses, email alerts, Google Sheets lead tracking, SMS alerts, CRM integrations, and calendar booking are paid-plan upgrades, not part of the free static demo.

Useful commands:

- `npm run dev` starts the local prototype.
- `npm run build` verifies the production build.
- `npm run build:github` creates a GitHub Pages static export locally on Windows.

## Next Build Step

Create the first prototype with:

- Next.js chatbot interface
- Next.js API routes for backend behavior
- OpenAI API-ready chat responses
- Buyer and seller chatbot selection
- Shared introductory contact questions
- Buyer-specific intake questions
- Seller-specific intake questions
- Draggable range controls for quantity and numeric questions where appropriate
- Buyer and seller qualification
- Request collection
- FAQ answers
- Website chat widget, SMS/text link, direct chat link, and QR code launch options
- Agent-facing lead summaries

Optional later features:

- Google Sheets lead storage
- EmailJS email alerts to agents
- Calendar booking link
