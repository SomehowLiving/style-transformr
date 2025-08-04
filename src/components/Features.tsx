import { Card } from "@/components/ui/card";
import { Code, Palette, Zap, Copy, Smartphone, RefreshCw } from "lucide-react";

const FEATURES = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Transform your components in seconds, not hours. No more struggling with CSS syntax or design decisions."
  },
  {
    icon: Palette,
    title: "Beautiful Presets",
    description: "Choose from carefully crafted design presets inspired by modern UI trends and design systems."
  },
  {
    icon: Code,
    title: "Preserves Logic",
    description: "Your component functionality stays intact. We only add styling, never modify your business logic."
  },
  {
    icon: Copy,
    title: "Copy & Paste",
    description: "Get clean, production-ready code that you can immediately use in your project."
  },
  {
    icon: Smartphone,
    title: "Responsive Ready",
    description: "All generated styles include responsive classes for mobile, tablet, and desktop breakpoints."
  },
  {
    icon: RefreshCw,
    title: "Iterate Quickly",
    description: "Try different styles instantly. Switch between presets and see real-time previews."
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose <span className="text-gradient">Component Styler</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for developers who want beautiful UIs without the CSS complexity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <Card key={feature.title} className="card-feature group" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};