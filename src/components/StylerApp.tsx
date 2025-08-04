import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Download, RefreshCw, Code, Palette, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EXAMPLE_COMPONENTS = [
  {
    name: "Simple Button",
    code: `const Button = ({ children }) => {
  return <button>{children}</button>;
};`
  },
  {
    name: "Login Form",
    code: `const LoginForm = () => {
  return (
    <form>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};`
  },
  {
    name: "Card Component", 
    code: `const Card = ({ title, content }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};`
  }
];

const STYLE_PRESETS = [
  {
    id: "clean",
    name: "Clean",
    description: "Google-inspired minimalism",
    preview: "bg-blue-500 hover:bg-blue-600 text-white shadow-sm",
    popular: true
  },
  {
    id: "soft",
    name: "Soft",
    description: "Gentle curves and pastel colors",
    preview: "bg-purple-100 hover:bg-purple-200 text-purple-700 shadow-lg"
  },
  {
    id: "dark",
    name: "Dark",
    description: "Modern dark theme",
    preview: "bg-gray-900 hover:bg-gray-800 text-white border border-gray-700"
  },
  {
    id: "custom",
    name: "Custom",
    description: "Customize your own style",
    preview: "bg-gradient-to-r from-orange-400 to-pink-400 text-white"
  }
];

export const StylerApp = () => {
  const [inputCode, setInputCode] = useState('');
  const [selectedPreset, setSelectedPreset] = useState('clean');
  const [transformedCode, setTransformedCode] = useState('');
  const [isTransforming, setIsTransforming] = useState(false);
  const { toast } = useToast();

  const handleExampleSelect = (example: typeof EXAMPLE_COMPONENTS[0]) => {
    setInputCode(example.code);
  };

  const handleTransform = async () => {
    if (!inputCode.trim()) {
      toast({
        title: "No code to transform",
        description: "Please paste your React component code first.",
        variant: "destructive"
      });
      return;
    }

    setIsTransforming(true);
    
    // Simulate transformation (replace with actual logic)
    setTimeout(() => {
      const preset = STYLE_PRESETS.find(p => p.id === selectedPreset);
      let styled = inputCode;
      
      if (selectedPreset === 'clean') {
        styled = inputCode.replace(/<button([^>]*)>/g, '<button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-sm"$1>');
        styled = styled.replace(/<input([^>]*)>/g, '<input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"$1>');
        styled = styled.replace(/<form([^>]*)>/g, '<form className="space-y-4 p-6 bg-white rounded-xl shadow-lg max-w-md"$1>');
        styled = styled.replace(/<div([^>]*)>/g, '<div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200"$1>');
        styled = styled.replace(/<h3([^>]*)>/g, '<h3 className="text-xl font-semibold text-gray-900 mb-2"$1>');
        styled = styled.replace(/<p([^>]*)>/g, '<p className="text-gray-600 leading-relaxed"$1>');
      }
      
      setTransformedCode(styled);
      setIsTransforming(false);
      
      toast({
        title: "Component transformed!",
        description: `Applied ${preset?.name} style successfully.`
      });
    }, 1500);
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(transformedCode);
      toast({
        title: "Copied to clipboard!",
        description: "Your styled component is ready to use."
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please copy the code manually.",
        variant: "destructive"
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Transform Your <span className="text-gradient">Components</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Paste your React component and watch it become beautiful
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Input Section */}
          <Card className="p-6 space-y-6">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Your Component</h3>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {EXAMPLE_COMPONENTS.map((example) => (
                  <Button
                    key={example.name}
                    variant="outline"
                    size="sm"
                    onClick={() => handleExampleSelect(example)}
                    className="text-xs"
                  >
                    {example.name}
                  </Button>
                ))}
              </div>

              <Textarea
                placeholder="Paste your React component here..."
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                className="min-h-[300px] font-mono text-sm"
              />
            </div>
          </Card>

          {/* Style Selection */}
          <Card className="p-6 space-y-6">
            <div className="flex items-center gap-2">
              <Palette className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Choose Style</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {STYLE_PRESETS.map((preset) => (
                <div
                  key={preset.id}
                  onClick={() => setSelectedPreset(preset.id)}
                  className={`relative p-4 border-2 rounded-xl cursor-pointer transition-all hover:shadow-lg ${
                    selectedPreset === preset.id
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  {preset.popular && (
                    <Badge className="absolute -top-2 -right-2 bg-accent">
                      Popular
                    </Badge>
                  )}
                  
                  <div className="space-y-3">
                    <div className="text-sm font-medium">{preset.name}</div>
                    <div className="text-xs text-muted-foreground">{preset.description}</div>
                    <div className={`h-8 rounded ${preset.preview} flex items-center justify-center text-xs`}>
                      Preview
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              onClick={handleTransform}
              disabled={isTransforming}
              className="w-full btn-hero"
            >
              {isTransforming ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Transforming...
                </>
              ) : (
                <>
                  <Palette className="w-4 h-4 mr-2" />
                  Transform Component
                </>
              )}
            </Button>
          </Card>

          {/* Output Section */}
          <Card className="p-6 space-y-6">
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Styled Result</h3>
            </div>

            {transformedCode ? (
              <div className="space-y-4">
                <Textarea
                  value={transformedCode}
                  readOnly
                  className="min-h-[300px] font-mono text-sm bg-secondary/50"
                />
                
                <div className="flex gap-2">
                  <Button onClick={handleCopyCode} variant="outline" className="flex-1">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Code
                  </Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="min-h-[300px] flex items-center justify-center text-muted-foreground text-center">
                <div className="space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-secondary/50 flex items-center justify-center">
                    <Code className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="font-medium">Ready to transform</div>
                    <div className="text-sm">Your styled component will appear here</div>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};