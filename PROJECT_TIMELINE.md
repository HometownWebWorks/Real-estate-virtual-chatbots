# Real Estate Virtual Chatbots - Project Timeline

This document tracks major updates for the Real Estate Virtual Chatbots project in `C:\Users\kobst\OneDrive\Documents\Playground\Real Estate Virtual Chatbots`.

How this will be used:
- New project steps, chatbot flow decisions, design changes, implementation work, publishing steps, and presentation assets get logged here.
- Each entry should include a clear time/date stamp so the project history stays easy to follow.
- This file should be used as the main reference document when a future context window needs to understand the project history.
- I can keep updating this file as we continue working in this thread and workspace.

## April 27, 2026

### 8:19 PM - Project Created
- Created the `Real Estate Virtual Chatbots` project folder.
- Defined the core project idea: virtual chatbots that help real estate agents reach more buyers and miss fewer potential buyer leads.
- Added starter documentation for the project timeline and chatbot requirements.
- Set the next step as defining the exact chatbot questions and buyer intake flow.

### 8:24 PM - Buyer and Seller Chatbot Versions Defined
- Updated the chatbot requirements to include two separate versions: one for buyers and one for sellers.
- Added shared introductory questions for both versions: name, phone number, and email address.
- Added the first buyer chatbot question flow covering desired area or city, budget, bedroom and bathroom preferences, buying timeline, and pre-approval help.
- Left the seller chatbot's property-specific questions open for a future update.

### 8:30 PM - Seller Chatbot Flow and Input Style Added
- Added seller chatbot questions after the introductory contact questions: property address, home type, estimated value if known, timeline to sell, reason for selling, and home valuation interest.
- Kept the seller reason for selling question open-ended.
- Added a UI requirement for quantity and numeric questions to use draggable range-style controls where appropriate.
- Added a visual direction note to use the typical clean real estate intake/search layout style referenced by `www.willow.com`.
- Marked this timeline as the main reference document for future context windows.

### 8:34 PM - Core Chatbot Features Added
- Added lead capture through chat as a core feature so the chatbot guides the user through the form conversationally.
- Added buyer and seller qualification as a core requirement.
- Added showing request collection so buyers and sellers can tell the agent what help they want.
- Added FAQ answers as a chatbot feature for common real estate questions.
- Added automatic email notification to the agent after a lead completes the chatbot.
- Added optional future side notes for a Google Sheet lead log and calendar booking link.

### 8:38 PM - Technical Stack Direction Added
- Added Next.js as the required framework for the chatbot interface.
- Added Next.js API routes as the backend approach.
- Added the OpenAI API for chat responses and FAQ-style conversational behavior.
- Reclassified Google Sheets lead storage and EmailJS email alerts as optional later ideas, alongside the calendar booking link.
- Updated the requirements so the first build does not depend on lead storage or email alerts unless those are added later.

### 8:39 PM - Static Chatbot Preview Added
- Created `preview.html` as a self-contained browser preview of the user-facing chatbot experience.
- Preview includes a buyer/seller version selector, conversational lead capture, range-style controls, timeline chips, pre-approval qualification, showing request collection, FAQ prompts, and an agent summary panel.
- Kept the preview as a visual mockup only; it is not the final Next.js implementation.

### 8:43 PM - Chatbot Launch Options Added
- Added multiple chatbot access options to the requirements: website chat widget, text/SMS chat link, direct chat link, and QR codes.
- Updated the preview to show these launch options as part of the user-facing product concept.
- Noted that the same buyer and seller flows should work across every launch method.

### 8:46 PM - Preview Visual Polish and Dark Mode Added
- Updated the static preview with richer but restrained colors, improved text sizing, and better coordinated panel/background styling.
- Added light and dark mode support using `prefers-color-scheme` so the preview remains readable when the browser or system is in dark mode.
- Cleaned up non-ASCII launch option symbols in the preview for more reliable display.

### 8:55 PM - Client-Facing Intro Refined
- Updated the preview headline and introductory copy so it reads like a professional buyer or seller experience instead of an internal product description.
- Revised the chatbot's opening message to sound more natural for an actual prospect using an agent's chatbot.

### 8:56 PM - Preview Reset to Unanswered State
- Updated the static preview to show what the chatbot looks like before a user answers any questions.
- Removed pre-filled buyer details, selected chips, completed request text, and populated agent summary values.
- Kept the question sequence visible so the user can still understand the intended flow.

### 8:59 PM - Contact Field Wrapping Added
- Updated the preview contact fields for name, phone number, and email address to use compact wrapping text boxes.
- Added styling so unusually long contact values can wrap instead of being clipped in a single-line input.
- Added the wrapping requirement to the chatbot requirements document.

### 9:02 PM - Question and Answer Box Contrast Added
- Updated the preview so chatbot question boxes and user answer/input boxes use slightly different coordinated colors.
- Added the visual distinction requirement to the chatbot requirements document.

### 9:02 PM - Working Next.js Chatbot Prototype Started
- Added a working Next.js app with an interactive buyer/seller chatbot interface.
- Added Next.js API route `/api/chat` for FAQ responses, with OpenAI API support when `OPENAI_API_KEY` is available and local fallback answers when it is not.
- Added live agent preview summaries, buyer and seller qualification states, range controls, wrapping contact fields, request collection, FAQ buttons, and launch option display.
- Verified the production build with `npm run build`.
- Started the local dev server at `http://127.0.0.1:3000`.

### 9:19 PM - Realtor-Facing Demo Cleaned Up
- Updated the live Next.js app so `http://127.0.0.1:3000` feels like a real client-facing chatbot demo for potential realtor partnerships.
- Removed product/demo-only sections from the live app, including launch options, internal agent preview framing, optional integration notes, and the OpenAI API-ready badge.
- Added a cleaner user-facing "What happens next" panel.
- Added a small customization config in the app so the demo can later be tailored to each realtor's brand, market, wording, colors, and preferences.
- Kept technical and launch-option details in documentation instead of the typical chatbot UI.

### 9:31 PM - FAQ Response Color Added
- Updated the live app so FAQ answer responses use their own distinct color from question prompts and quick-question buttons.
- Added separate light and dark mode colors for FAQ answer boxes.
- Added the FAQ response color requirement to the requirements document.

### 9:34 PM - Phone Number Formatting Added
- Updated the shared intro prompt to ask for the user's full 10 digit phone number.
- Added automatic U.S. phone formatting so the phone field displays area code parentheses and standard spacing while the user types.
- Added the phone formatting requirement to the requirements document.

### 9:36 PM - Phone Field Label Simplified
- Changed the phone field title from "10 digit phone number" to "Phone number" while keeping the prompt guidance and automatic formatting behavior.

### 9:38 PM - Separate Buyer and Seller URLs Added
- Added `/buyer` and `/seller` routes for locked buyer-only and seller-only chatbot demos.
- Kept `/` as the internal switchable demo with the buyer/seller selector.
- Hid the buyer/seller selector on the locked routes so prospects only see the flow they were sent.
- Documented the requirement that buyer and seller flows should be splittable into separate URLs, QR codes, text links, or embed codes.

### 9:46 PM - Pricing Options Document Added
- Created `PRICING_OPTIONS.md` with Starter, Pro, and Premium monthly plans.
- Added a $50 setup fee across all plans.
- Included plan features, recommended customer types, sales talking points, optional add-ons, and value positioning.
- Added market reference notes explaining why the pricing can be valuable compared with generic templates and larger real estate platforms.

## Next Planned Step

### Chatbot Prototype Build
- Continue refining the working Next.js chatbot prototype for client-facing realtor demos.
- Add real OpenAI API configuration through environment variables when ready.
- Later, optionally add Google Sheets lead storage, EmailJS alerts, calendar booking links, and QR generation.
