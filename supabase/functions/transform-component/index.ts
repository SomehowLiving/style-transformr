// Transform a React component using Lovable AI Gateway
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { sourceCode, library, styleBrief, preset, tokens } = await req.json();

    if (!sourceCode || typeof sourceCode !== "string") {
      return new Response(JSON.stringify({ error: "sourceCode is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(JSON.stringify({ error: "LOVABLE_API_KEY missing" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const systemPrompt = `You are an expert UI engineer. You restyle React/JSX components using Tailwind CSS utility classes.

STRICT RULES:
- Return ONLY valid JSX/TSX code. No markdown fences, no explanations, no prose.
- Preserve component name, props, structure, and logic. Only change className strings and minimal markup needed for styling.
- Use Tailwind utility classes (works with the Tailwind CDN — any standard utility is fine).
- Make the output beautiful, accessible, responsive, with hover/focus states.
- Ensure the component is a single self-contained function component that can be rendered standalone.
- Do NOT include import statements or export statements. Just the component declaration.`;

    const userPrompt = `Restyle this ${library || "React"} component.

STYLE PRESET: ${preset || "Calm"}
STYLE BRIEF: ${styleBrief || "Clean, modern, calm tech aesthetic with soft shadows and rounded corners."}
DESIGN TOKENS: ${tokens ? JSON.stringify(tokens) : "primary blue, soft radius, comfortable density"}

SOURCE COMPONENT:
\`\`\`jsx
${sourceCode}
\`\`\`

Return only the restyled JSX component code.`;

    const aiResp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
      }),
    });

    if (aiResp.status === 429) {
      return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again shortly." }), {
        status: 429,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (aiResp.status === 402) {
      return new Response(JSON.stringify({ error: "AI credits exhausted. Add credits in Settings → Workspace → Usage." }), {
        status: 402,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!aiResp.ok) {
      const t = await aiResp.text();
      console.error("AI gateway error", aiResp.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await aiResp.json();
    let code: string = data?.choices?.[0]?.message?.content ?? "";

    // Strip markdown code fences if AI included them
    code = code.trim().replace(/^```(?:jsx|tsx|javascript|js|ts)?\n?/i, "").replace(/```$/i, "").trim();

    return new Response(JSON.stringify({ code }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("transform-component error", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
