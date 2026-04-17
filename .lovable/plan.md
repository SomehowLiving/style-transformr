
## Plan: Build the "Try Free" Studio Page

### Routing
- Update `Header.tsx` "Try Free" button → navigate to `/studio` using `react-router-dom`
- Add `/studio` route in `App.tsx` pointing to new `pages/Studio.tsx`

### New Page: `src/pages/Studio.tsx`
Three-column "buttery flow" layout (collapses to tabs on mobile):

**Left rail — Library & Components**
- Library selector (chips): shadcn/ui, Material UI, Chakra UI, Ant Design, Radix, HeadlessUI, Mantine
- Component picker grouped: Buttons, Forms, Cards, Navbars, Modals, Tables, Inputs, Alerts
- Each item shows a tiny preview thumbnail; click loads its starter code into the editor
- Search box at top to filter components

**Middle pane — Editor & Style Controls**
- Tabs: "Code" | "Style Brief"
  - **Code tab**: Textarea with the chosen component's source (JSX/TSX)
  - **Style Brief tab**: 
    - Style preset chips (Calm, Glass, Neo-brutalist, Minimal, Playful, Corporate, Dark, Pastel)
    - Free-text "Describe your style" textarea (e.g., "Apple-like, soft shadows, navy accent")
    - Color picker (primary/accent), radius slider, density toggle
- Big "✨ Transform with AI" CTA button (gradient, soft glow, "buttery" hover)
- Loading state: subtle shimmer + status messages ("Reading component…", "Applying style…")

**Right pane — Result**
- Toggle at top: **Live Preview** | **Code**
  - **Live Preview**: renders the transformed component inside a sandboxed iframe (`srcDoc` with React + Tailwind via CDN) so arbitrary AI output can render safely
  - **Code**: syntax-highlighted output with Copy + Download buttons
- "Try another style" button to re-run with the same component

### AI Integration (Lovable AI Gateway, not Groq)
The user said "Groq", but Lovable's policy is to default to **Lovable AI** (Gemini/GPT) since it's pre-wired and free of setup. I'll use Lovable AI via an edge function. (If you specifically need Groq, we can swap in a `GROQ_API_KEY` instead — just say the word.)

- Enable Lovable Cloud
- Create edge function `supabase/functions/transform-component/index.ts`:
  - Input: `{ sourceCode, library, styleBrief, preset, tokens }`
  - Calls Lovable AI Gateway (`google/gemini-3-flash-preview`) with a system prompt instructing it to return ONLY transformed JSX using Tailwind classes that match the brief
  - Returns `{ code }`
- Frontend calls via `supabase.functions.invoke('transform-component', ...)`
- Handle 429/402 with friendly toasts

### Live Preview Sandbox
- Build an HTML `srcDoc` that loads React 18 + Babel standalone + Tailwind CDN, injects the transformed component, and renders it. This safely isolates AI-generated code from the parent app.

### Components to Add
- `src/pages/Studio.tsx` — main page
- `src/components/studio/LibraryPicker.tsx`
- `src/components/studio/ComponentList.tsx` (with starter snippets data file)
- `src/components/studio/StyleBrief.tsx`
- `src/components/studio/ResultPane.tsx` (with iframe live preview)
- `src/data/componentLibrary.ts` — starter snippets per library/component
- `supabase/functions/transform-component/index.ts`

### UX Polish ("Buttery, Flowy")
- Page-level fade-in, soft Calm Tech palette already in place
- Panels use `card-elegant` with gentle hover-lift
- Smooth tab transitions, shimmer skeletons during AI call
- Sticky header with back-to-home, project title, and "Save / Share" placeholders

### Notes / Trade-offs
- Live preview uses iframe + CDN Tailwind so any class works without rebuild
- Default AI = Lovable AI (Gemini). Switching to Groq requires a user-provided `GROQ_API_KEY`
- "Save/Share" left as placeholder unless you want auth + persistence (would need Lovable Cloud DB)

<lov-actions>
<lov-suggestion message="Looks good — go ahead and build it with Lovable AI as the default.">Build with Lovable AI</lov-suggestion>
<lov-suggestion message="Use Groq instead of Lovable AI. I'll provide a GROQ_API_KEY.">Use Groq instead</lov-suggestion>
<lov-suggestion message="Also add Save & Share with user accounts (enable Lovable Cloud auth + DB).">Add Save & Share with auth</lov-suggestion>
<lov-suggestion message="Skip the multi-library picker for now — just shadcn/ui starter components.">Simplify to shadcn-only</lov-suggestion>
</lov-actions>
