import { LIBRARIES } from "@/data/componentLibrary";
import { cn } from "@/lib/utils";

interface Props {
  value: string;
  onChange: (id: string) => void;
}

export const LibraryPicker = ({ value, onChange }: Props) => {
  return (
    <div className="flex flex-wrap gap-2">
      {LIBRARIES.map((lib) => (
        <button
          key={lib.id}
          onClick={() => onChange(lib.id)}
          className={cn(
            "px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200",
            value === lib.id
              ? "bg-primary text-primary-foreground border-primary shadow-sm"
              : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:-translate-y-0.5"
          )}
        >
          {lib.name}
        </button>
      ))}
    </div>
  );
};
