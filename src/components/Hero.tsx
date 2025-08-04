import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code, Sparkles, Zap } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const DEMO_COMPONENT = `const Button = ({ children }) => {
  return <button>{children}</button>;
};`;

const STYLED_VARIANTS = [
  {
    name: "Clean",
    code: `const Button = ({ children }) => {
  return (
    <button className="px-6 py-3 bg-blue-500 text-white 
      rounded-lg font-medium hover:bg-blue-600 
      transition-colors shadow-sm">
      {children}
    </button>
  );
};`,
    preview: "bg-blue-500 hover:bg-blue-600 text-white"
  },
  {
    name: "Soft", 
    code: `const Button = ({ children }) => {
  return (
    <button className="px-6 py-3 bg-purple-100 text-purple-700
      rounded-xl font-medium hover:bg-purple-200
      transition-all shadow-lg">
      {children}
    </button>
  );
};`,
    preview: "bg-purple-100 hover:bg-purple-200 text-purple-700"
  },
  {
    name: "Dark",
    code: `const Button = ({ children }) => {
  return (
    <button className="px-6 py-3 bg-gray-900 text-white
      rounded-lg font-semibold hover:bg-gray-800
      transition-all border border-gray-700">
      {children}
    </button>
  );
};`,
    preview: "bg-gray-900 hover:bg-gray-800 text-white border border-gray-700"
  }
];

export const Hero = () => {
  const [selectedVariant, setSelectedVariant] = useState(0);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      {/* Background image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroImage} 
          alt="Component transformation illustration" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm animate-scale-in">
              <Sparkles className="w-4 h-4" />
              Transform Components Instantly
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Turn <span className="text-gradient">Ugly Components</span>
              <br />
              <span className="text-gradient">Beautiful</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From boring React code to stunning UIs in seconds. 
              No CSS knowledge required, just paste and style.
            </p>
          </div>

          {/* Demo Section */}
          <div className="max-w-6xl mx-auto animate-slide-up">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Before */}
              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground font-medium">
                  <Code className="w-5 h-5" />
                  Before
                </div>
                <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm text-left">
                  <pre className="text-gray-600">{DEMO_COMPONENT}</pre>
                </div>
                <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg">
                  <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded">
                    Click me
                  </button>
                </div>
              </Card>

              {/* Arrow */}
              <div className="hidden md:flex justify-center">
                <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
              </div>

              {/* After */}
              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-primary font-medium">
                  <Sparkles className="w-5 h-5" />
                  After
                </div>
                
                {/* Style selector */}
                <div className="flex gap-2">
                  {STYLED_VARIANTS.map((variant, index) => (
                    <button
                      key={variant.name}
                      onClick={() => setSelectedVariant(index)}
                      className={`px-3 py-1 text-sm rounded-full transition-all ${
                        selectedVariant === index
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground hover:bg-muted'
                      }`}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>

                <div className="p-4 bg-gradient-to-br from-card to-secondary/30 rounded-lg">
                  <button className={`px-6 py-3 rounded-lg font-medium transition-all ${STYLED_VARIANTS[selectedVariant].preview}`}>
                    Click me
                  </button>
                </div>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-6 animate-fade-in">
            <Button 
              className="btn-hero text-lg px-8 py-4"
              onClick={() => document.getElementById('app')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Styling Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                Free to use
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-accent" />
                No signup required
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent" />
                Instant results
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};