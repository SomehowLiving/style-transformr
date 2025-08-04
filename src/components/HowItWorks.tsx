import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Download } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Code2,
    title: "Paste Your Code",
    description: "Simply paste your React component or choose from our examples. We support JSX and TSX files.",
    preview: (
      <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
        <span className="text-blue-600">const</span> <span className="text-purple-600">Button</span> = () {"{"}
        <br />
        <span className="ml-4">return</span> <span className="text-green-600">&lt;button&gt;</span>Click<span className="text-green-600">&lt;/button&gt;</span>;
        <br />
        {"}"};
      </div>
    )
  },
  {
    number: "02", 
    icon: Palette,
    title: "Choose Style",
    description: "Pick from beautiful presets or customize colors to match your brand. See live previews instantly.",
    preview: (
      <div className="grid grid-cols-3 gap-2">
        <div className="h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs">Clean</div>
        <div className="h-8 bg-purple-100 border border-purple-300 rounded flex items-center justify-center text-purple-700 text-xs">Soft</div>
        <div className="h-8 bg-gray-900 rounded flex items-center justify-center text-white text-xs">Dark</div>
      </div>
    )
  },
  {
    number: "03",
    icon: Download,
    title: "Copy & Use",
    description: "Get your styled component code instantly. Copy to clipboard or download as a file.",
    preview: (
      <div className="space-y-2">
        <div className="h-6 bg-green-100 rounded flex items-center px-2">
          <Badge variant="secondary" className="text-xs">✓ Styled</Badge>
        </div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>
    )
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform your components
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {STEPS.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connection line */}
              {index < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
              )}
              
              <Card className="relative z-10 p-8 text-center space-y-6 hover-lift">
                {/* Step number */}
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {/* Preview */}
                <div className="p-4 bg-secondary/50 rounded-lg">
                  {step.preview}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};