import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Download, Eye, Code2, Check } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface Props {
  code: string;
  loading: boolean;
}

const buildSrcDoc = (code: string) => `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<script src="https://cdn.tailwindcss.com"></script>
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<style>
  body { font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; padding: 24px; background: #FAFAFA; }
  #root { display: flex; align-items: center; justify-content: center; min-height: calc(100vh - 48px); }
</style>
</head>
<body>
<div id="root"></div>
<script type="text/babel" data-presets="react">
try {
  ${code}
  // Find the last declared component (const Foo = ... or function Foo)
  const __names = Object.keys({}).concat(
    (\`${code.replace(/`/g, "\\`")}\`.match(/(?:const|function)\\s+([A-Z][A-Za-z0-9_]*)/g) || [])
      .map(s => s.replace(/^(?:const|function)\\s+/, ""))
  );
  const __Comp = __names.length ? eval(__names[__names.length - 1]) : null;
  if (__Comp) {
    ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(__Comp));
  } else {
    document.getElementById("root").innerHTML = "<p style='color:#7C7C7C'>No component found in output.</p>";
  }
} catch (e) {
  document.getElementById("root").innerHTML = "<pre style='color:#b91c1c;white-space:pre-wrap'>" + (e && e.message ? e.message : e) + "</pre>";
}
</script>
</body>
</html>`;

export const ResultPane = ({ code, loading }: Props) => {
  const [view, setView] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const srcDoc = useMemo(() => (code ? buildSrcDoc(code) : ""), [code]);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 1500);
  };

  const download = () => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "StyledComponent.jsx";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-3">
        <div className="inline-flex p-1 rounded-lg bg-muted">
          <button
            onClick={() => setView("preview")}
            className={cn(
              "px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-all",
              view === "preview" ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"
            )}
          >
            <Eye className="w-3.5 h-3.5" /> Live Preview
          </button>
          <button
            onClick={() => setView("code")}
            className={cn(
              "px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-all",
              view === "code" ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"
            )}
          >
            <Code2 className="w-3.5 h-3.5" /> Code
          </button>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={copy} disabled={!code}>
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          </Button>
          <Button size="sm" variant="outline" onClick={download} disabled={!code}>
            <Download className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>

      <div className="flex-1 rounded-xl border border-border bg-card overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
        {loading ? (
          <div className="h-full w-full flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
              <p className="text-sm text-muted-foreground animate-pulse">Crafting your styled component…</p>
            </div>
          </div>
        ) : !code ? (
          <div className="h-full w-full flex items-center justify-center text-center p-8">
            <div>
              <p className="text-sm text-muted-foreground">
                Pick a component, describe your style, and hit ✨ Transform.
              </p>
            </div>
          </div>
        ) : view === "preview" ? (
          <iframe
            title="preview"
            srcDoc={srcDoc}
            sandbox="allow-scripts"
            className="w-full h-full border-0 bg-background"
          />
        ) : (
          <pre className="h-full w-full overflow-auto p-4 text-xs font-mono leading-relaxed text-foreground">
            {code}
          </pre>
        )}
      </div>
    </div>
  );
};
