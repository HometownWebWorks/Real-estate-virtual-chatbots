# Chatbot Requirements

Last updated: April 27, 2026 9:38 PM -04:00

## Purpose

Create a virtual chatbot experience for real estate agents that helps qualify potential buyers and sellers, capture useful lead details, and reduce missed opportunities.

## Chatbot Versions

The project should include two separate chatbot versions:

- Buyer chatbot: focused on learning what kind of home the buyer wants, how soon they want to buy, and whether they need financing help.
- Seller chatbot: focused on collecting seller contact information, property details, sale timing, motivation, and valuation interest.

## Core Features

- Lead capture through chat instead of a traditional static form.
- Buyer and seller qualification based on the answers provided.
- Showing request collection so buyers or sellers can tell the agent what they want help with.
- FAQ answers for common real estate questions.
- Agent-facing lead summary at the end of the flow.

## Chatbot Access Options

The same buyer and seller chatbot flows should be available through multiple launch methods:

- Website chat widget embedded on a real estate agent's website.
- Text/SMS chat link that can be sent directly to prospects.
- Direct chat link that opens the chatbot in a standalone page.
- QR codes that open the buyer or seller chatbot from flyers, signs, business cards, or presentation materials.

## Realtor Demo Customization

- The live demo URL should feel like a real client-facing chatbot, not a product feature showcase.
- Public demos should avoid internal sections like launch options, backend notes, or agent-only implementation details.
- The chatbot should be easy to tailor to each realtor's brand, preferred wording, market, colors, and buyer/seller intake preferences.
- Technical and launch-option details should stay in project documentation or sales materials, not inside the typical user chatbot experience.
- Buyer and seller flows should be splittable into separate URLs, QR codes, text links, or embed codes so a prospect only sees the flow they were sent.
- The general demo may keep a buyer/seller selector for internal review, but realtor-shared buyer-only and seller-only links should hide that selector.

## Technical Stack

- Next.js for the chatbot interface.
- Next.js API routes for backend endpoints.
- OpenAI API for chat responses and conversational FAQ behavior.

## Shared Introductory Questions

Both the buyer and seller chatbot should begin by collecting:

1. Name
2. Phone number
3. Email address

## Buyer Chatbot Flow

After the shared introductory questions, the buyer chatbot should ask:

1. Desired area or city
2. Budget
3. Desired number of bedrooms
4. Desired number of bathrooms
5. Timeline to buy
6. Whether the buyer needs help getting pre-approved

## Seller Chatbot Flow

After the shared introductory questions, the seller chatbot should ask:

1. Property address
2. Home type
3. Estimated home value, if known
4. Timeline to sell
5. Reason for selling, kept open-ended
6. Whether the seller wants a home valuation

## Question Input Style

- Quantity and numeric questions should use range-style controls where appropriate, allowing the user to drag their cursor instead of only typing.
- Buyer budget should use a draggable price range or slider-style control.
- Buyer bedroom and bathroom preferences should use a simple draggable or step-style range control.
- Seller estimated value should use a draggable value range or slider-style control, with an option for "I don't know."
- Timeline questions can use selectable ranges such as "ASAP", "1-3 months", "3-6 months", "6-12 months", and "Just browsing" or similar.
- The layout and visual style should follow the typical clean real estate search/intake style referenced by `www.willow.com`, with a simple, polished, mobile-friendly interface.
- Colors, font sizes, panels, and backgrounds should feel polished and readable without being boring or overly busy.
- The chatbot interface should support both regular/light mode and dark mode using accessible contrast.
- Introductory copy should read professionally for actual buyers and sellers, not like an internal demo or product description.
- The initial user-facing preview should be able to show a fresh unanswered state with blank fields and no preselected answers.
- Contact fields for name, phone number, and email should wrap or otherwise handle unusually long values without clipping important text.
- The phone number prompt should ask for the user's full 10 digit phone number and automatically format the area code with parentheses.
- Question boxes and answer/input boxes should use slightly different but coordinated colors so users can quickly tell prompts apart from their own answers.
- FAQ response boxes should use their own distinct color so answers do not blend into the FAQ prompt or quick-question buttons.

## Information To Capture

- Lead type: buyer or seller
- Name
- Phone number
- Email address
- Buyer desired area or city
- Buyer budget
- Buyer bedroom preference
- Buyer bathroom preference
- Buyer timeline to buy
- Whether the buyer needs pre-approval help
- Seller property address
- Seller home type
- Seller estimated home value, if known
- Seller timeline to sell
- Seller reason for selling
- Whether the seller wants a home valuation

## Agent Handoff Rules

- Flag buyers who need help getting pre-approved for agent follow-up.
- Flag buyers with a short buying timeline as higher-priority leads.
- Flag sellers who want a home valuation for agent follow-up.
- Flag sellers with a short selling timeline as higher-priority leads.
- Keep each lead summary easy for the agent to scan quickly.

## FAQ Answer Topics

The chatbot should be able to answer common buyer and seller questions. Initial FAQ topics can include:

- How the buying process works
- How pre-approval works
- What buyers should know before viewing homes
- How home valuation works
- What sellers should do before listing
- How quickly an agent can follow up

## Optional Future Features

These ideas are side notes for later and are not required for the first version:

- Optional Google Sheets lead storage
- Optional EmailJS email alerts to agents
- Optional calendar booking link

## Future Notes

- Keep the buyer experience simple and conversational.
- Make the agent-facing output easy to scan quickly.
- Prioritize questions that help identify budget, timeline, location, financing readiness, and seriousness of intent.
- Confirm whether the intended visual reference is `www.willow.com` or Zillow-style real estate UI before final visual implementation.
