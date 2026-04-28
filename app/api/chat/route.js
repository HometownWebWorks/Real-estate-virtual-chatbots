export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const question = body.question || "";
  const leadType = body.leadType || "buyer";

  if (process.env.OPENAI_API_KEY) {
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: process.env.OPENAI_MODEL || "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content:
                "You are a concise, professional real estate assistant. Answer buyer and seller FAQ questions in a helpful way, avoid legal or financial guarantees, and recommend agent follow-up when appropriate."
            },
            {
              role: "user",
              content: `Lead type: ${leadType}. Question: ${question}`
            }
          ]
        })
      });

      if (response.ok) {
        const data = await response.json();
        const answer = data.choices?.[0]?.message?.content;
        if (answer) {
          return Response.json({ answer });
        }
      }
    } catch {
      // Fall through to local FAQ response.
    }
  }

  const lower = question.toLowerCase();
  let answer =
    "Thanks for asking. I can collect the important details here and have a real estate professional follow up with the best next step.";

  if (lower.includes("pre-approval")) {
    answer =
      "Pre-approval helps show what price range may fit before you tour homes. If you need help, the agent can connect you with a lender or explain the next step.";
  } else if (lower.includes("valuation") || lower.includes("worth")) {
    answer =
      "A home valuation estimates what your property may sell for based on details like condition, location, recent comparable sales, and market demand.";
  } else if (lower.includes("tour") || lower.includes("viewing")) {
    answer =
      "Before touring, it helps to know your preferred area, budget, timeline, and financing status so the agent can focus on homes that fit.";
  } else if (lower.includes("follow")) {
    answer =
      "After you submit your details, the agent can review your answers and follow up by phone, text, or email.";
  } else if (lower.includes("selling") || lower.includes("listing")) {
    answer =
      "For selling, the agent will usually want the property address, home type, estimated value if known, timeline, reason for selling, and whether you want a valuation.";
  }

  return Response.json({ answer });
}
