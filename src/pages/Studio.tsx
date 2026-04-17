import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { LibraryPicker } from "@/components/studio/LibraryPicker";
import { ComponentList } from "@/components/studio/ComponentList";
import { StyleBrief, StyleTokens } from "@/components/studio/StyleBrief";
import { ResultPane } from "@/components/studio/ResultPane";
import { COMPONENTS, ComponentSnippet } from "@/data/componentLibrary";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const Studio = () => {
  const [library, setLibrary] = useState("shadcn");
  const initial = COMPONENTS.shadcn[1];
  const [selected, setSelected] = useState<ComponentSnippet>(initial);
  const [code, setCode] = useState(initial.code);
  const [tab, setTab] = useState<"code" | "brief">("code");

  const [preset, setPreset] = useState("Calm");
  const [brief, setBrief] = useState("Soft shadows, rounded corners, calm tech vibe with breathable spacing.");
  const [tokens, setTokens] = useState<StyleTokens>({
    primary: "#A3BFFA",
    accent: "#FAD4D4",
    radius: 12,
    density: "comfortable",
  });

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSelect = (snip: ComponentSnippet) => {
    setSelected(snip);
    setCode(snip.code);
    setResult("");
  };

  const transform = async () => {
    if (!code.trim()) {
      toast.error("Add some component code first");
      return;
    }
    setLoading(true);
    setResult("");
    try {
      const { data, error } = await supabase.functions.invoke("transform-component", {
        body: { sourceCode: code, library, styleBrief: brief, preset, tokens },
      });
      if (error) {
        const msg = (error as any)?.context?.status === 429
          ? "Rate limited — try again in a moment."
          : (error as any)?.context?.status === 402
          ? "AI credits exhausted. Add credits in Settings → Workspace → Usage."
          : error.message || "Failed to transform";
        toast.error(msg);
        return;
      }
      if (data?.error) {
        toast.error(data.error);
        return;
      }
      setResult(data?.code ?? "");
      toast.success("Styled with AI ✨");
    } catch (e: any) {
      toast.error(e?.message ?? "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
        <div className="max-w-[1400px] mx-auto px-5 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" /> Home
            </Link>
            <span className="text-border">/</span>
            <span className="text-sm font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-primary" /> Studio
            </span>
          </div>
          <Button size="sm" variant="outline" disabled className="opacity-50">
            Save
          </Button>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-5 py-6 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_1fr] gap-5 h-[calc(100vh-110px)]">
          {/* Left rail */}
          <aside className="rounded-2xl border border-border bg-card p-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex flex-col gap-4 overflow-hidden">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Library</p>
              <LibraryPicker value={library} onChange={setLibrary} />
            </div>
            <div className="flex-1 min-h-0">
              <ComponentList library={library} selectedId={selected.id} onSelect={onSelect} />
            </div>
          </aside>

          {/* Middle pane */}
          <section className="rounded-2xl border border-border bg-card p-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex flex-col gap-4 overflow-hidden">
            <div className="inline-flex p-1 rounded-lg bg-muted self-start">
              {(["code", "brief"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={cn(
                    "px-3 py-1.5 rounded-md text-xs font-medium transition-all capitalize",
                    tab === t ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"
                  )}
                >
                  {t === "code" ? "Code" : "Style brief"}
                </button>
              ))}
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto pr-1">
              {tab === "code" ? (
                <div className="h-full flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Code className="w-3.5 h-3.5" />
                    <span>{selected.name}.jsx</span>
                  </div>
                  <Textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    spellCheck={false}
                    className="flex-1 font-mono text-xs resize-none rounded-lg leading-relaxed"
                  />
                </div>
              ) : (
                <StyleBrief
                  preset={preset}
                  brief={brief}
                  tokens={tokens}
                  onPresetChange={setPreset}
                  onBriefChange={setBrief}
                  onTokensChange={setTokens}
                />
              )}
            </div>

            <button
              onClick={transform}
              disabled={loading}
              className={cn(
                "w-full h-12 rounded-xl font-medium text-sm text-primary-foreground",
                "bg-gradient-to-r from-primary to-accent",
                "shadow-[0_4px_14px_rgba(163,191,250,0.45)]",
                "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(163,191,250,0.55)]",
                "disabled:opacity-60 disabled:translate-y-0",
                "flex items-center justify-center gap-2"
              )}
            >
              <Sparkles className="w-4 h-4" />
              {loading ? "Transforming…" : "Transform with AI"}
            </button>
          </section>

          {/* Right pane */}
          <section className="rounded-2xl border border-border bg-card p-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex flex-col overflow-hidden">
            <ResultPane code={result} loading={loading} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Studio;
