import { Button } from "@/components/ui/button";
import { Code, Github, Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">StyleTransformr</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="btn-ghost">Features</a>
            <a href="#how-it-works" className="btn-ghost">How it Works</a>
            <a href="#examples" className="btn-ghost">Examples</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            
            <Button className="btn-hero text-sm px-4 py-2">
              Try Free
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="btn-ghost text-left">Features</a>
              <a href="#how-it-works" className="btn-ghost text-left">How it Works</a>
              <a href="#examples" className="btn-ghost text-left">Examples</a>
              <Button variant="ghost" size="sm" className="justify-start">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};