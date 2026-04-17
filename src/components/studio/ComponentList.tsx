import { useMemo, useState } from "react";
import { COMPONENTS, CATEGORIES, ComponentSnippet } from "@/data/componentLibrary";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  library: string;
  selectedId?: string;
  onSelect: (snippet: ComponentSnippet) => void;
}

export const ComponentList = ({ library, selectedId, onSelect }: Props) => {
  const [query, setQuery] = useState("");
  const items = COMPONENTS[library] ?? [];

  const grouped = useMemo(() => {
    const filtered = items.filter((i) =>
      i.name.toLowerCase().includes(query.toLowerCase())
    );
    return CATEGORIES.map((cat) => ({
      cat,
      items: filtered.filter((i) => i.category === cat),
    })).filter((g) => g.items.length > 0);
  }, [items, query]);

  return (
    <div className="flex flex-col gap-3">
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search components"
          className="pl-9 h-9 rounded-lg"
        />
      </div>

      <div className="flex flex-col gap-4 overflow-y-auto pr-1">
        {grouped.map((group) => (
          <div key={group.cat}>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              {group.cat}
            </p>
            <div className="flex flex-col gap-1.5">
              {group.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSelect(item)}
                  className={cn(
                    "text-left px-3 py-2 rounded-lg text-sm border transition-all duration-200",
                    selectedId === item.id
                      ? "bg-primary/10 border-primary/40 text-foreground"
                      : "bg-card border-transparent hover:border-border hover:-translate-y-0.5"
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        ))}
        {grouped.length === 0 && (
          <p className="text-sm text-muted-foreground text-center py-8">No matches</p>
        )}
      </div>
    </div>
  );
};
