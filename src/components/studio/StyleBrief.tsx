import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

const PRESETS = ["Calm", "Glass", "Neo-brutalist", "Minimal", "Playful", "Corporate", "Dark", "Pastel"];

export interface StyleTokens {
  primary: string;
  accent: string;
  radius: number;
  density: "compact" | "comfortable" | "airy";
}

interface Props {
  preset: string;
  brief: string;
  tokens: StyleTokens;
  onPresetChange: (p: string) => void;
  onBriefChange: (b: string) => void;
  onTokensChange: (t: StyleTokens) => void;
}

export const StyleBrief = ({ preset, brief, tokens, onPresetChange, onBriefChange, onTokensChange }: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Style preset</p>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              key={p}
              onClick={() => onPresetChange(p)}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200",
                preset === p
                  ? "bg-foreground text-background border-foreground"
                  : "bg-card text-muted-foreground border-border hover:border-foreground/40 hover:-translate-y-0.5"
              )}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Describe your style</p>
        <Textarea
          value={brief}
          onChange={(e) => onBriefChange(e.target.value)}
          placeholder="e.g. Apple-like, soft shadows, navy accent, generous spacing"
          className="min-h-[88px] rounded-lg resize-none"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-muted-foreground">Primary</span>
          <input
            type="color"
            value={tokens.primary}
            onChange={(e) => onTokensChange({ ...tokens, primary: e.target.value })}
            className="h-10 w-full rounded-lg border border-border cursor-pointer bg-card"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-muted-foreground">Accent</span>
          <input
            type="color"
            value={tokens.accent}
            onChange={(e) => onTokensChange({ ...tokens, accent: e.target.value })}
            className="h-10 w-full rounded-lg border border-border cursor-pointer bg-card"
          />
        </label>
      </div>

      <div>
        <div className="flex justify-between mb-2">
          <span className="text-xs font-medium text-muted-foreground">Roundness</span>
          <span className="text-xs text-muted-foreground">{tokens.radius}px</span>
        </div>
        <Slider
          value={[tokens.radius]}
          min={0}
          max={32}
          step={2}
          onValueChange={(v) => onTokensChange({ ...tokens, radius: v[0] })}
        />
      </div>

      <div>
        <p className="text-xs font-medium text-muted-foreground mb-2">Density</p>
        <div className="flex gap-2">
          {(["compact", "comfortable", "airy"] as const).map((d) => (
            <button
              key={d}
              onClick={() => onTokensChange({ ...tokens, density: d })}
              className={cn(
                "flex-1 px-3 py-1.5 rounded-lg text-xs font-medium border capitalize transition-all duration-200",
                tokens.density === d
                  ? "bg-primary/15 border-primary/40 text-foreground"
                  : "bg-card border-border text-muted-foreground hover:border-primary/30"
              )}
            >
              {d}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
