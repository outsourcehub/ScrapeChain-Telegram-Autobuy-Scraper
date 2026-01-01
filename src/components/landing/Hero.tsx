import { ArrowRight, Play, Zap, Cloud, Users, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Pain point callout */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/30 text-destructive mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
          <span className="text-sm font-medium">Missed a 100x because your laptop went to sleep?</span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
          <span className="text-foreground">The message hits → </span>
          <span className="text-gradient-primary glow-text">the buy happens.</span>
        </h1>

        {/* Subheadline - the revelation */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
          People aren't clicking faster — <span className="text-foreground font-medium">they're not clicking at all.</span>
        </p>

        {/* The reframe */}
        <p className="text-lg text-primary font-medium mb-12 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
          You were never supposed to be copying contracts manually.
        </p>

        {/* Pipeline comparison */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {/* Old Way */}
          <div className="glass-card p-6 animate-fade-in opacity-0" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-destructive text-xl">❌</span>
              <span className="text-muted-foreground font-medium">The Old Way</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
              <span className="px-3 py-1.5 bg-secondary rounded-md">Call Channel</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
              <span className="px-3 py-1.5 bg-secondary rounded-md">Human Eyes</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
              <span className="px-3 py-1.5 bg-secondary rounded-md">Copy-Paste</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
              <span className="px-3 py-1.5 bg-secondary rounded-md">Bot</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
              <span className="px-3 py-1.5 bg-destructive/20 text-destructive rounded-md font-medium">Too Late</span>
            </div>
          </div>

          {/* New Way */}
          <div className="glass-card p-6 neon-border animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary text-xl">✓</span>
              <span className="text-primary font-medium">The New Way</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
              <span className="px-3 py-1.5 bg-secondary rounded-md">Call Channel</span>
              <ArrowRight className="w-4 h-4 text-primary" />
              <span className="px-3 py-1.5 bg-primary/20 text-primary rounded-md font-medium">Scraper</span>
              <ArrowRight className="w-4 h-4 text-primary" />
              <span className="px-3 py-1.5 bg-secondary rounded-md">Blazing</span>
              <ArrowRight className="w-4 h-4 text-primary" />
              <span className="px-3 py-1.5 bg-primary/20 text-primary rounded-md font-medium">You Win</span>
            </div>
          </div>
        </div>

        {/* Promise badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in opacity-0" style={{ animationDelay: "0.7s" }}>
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
            <Cloud className="w-4 h-4 text-primary" />
            <span className="text-sm">We run while you sleep</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
            <Zap className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm">Your internet doesn't decide your PnL</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
            <Code className="w-4 h-4 text-neon-purple" />
            <span className="text-sm">Open Source</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm">Community-Driven</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
          <Button 
            size="lg" 
            className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-6 text-lg shadow-glow-green hover:shadow-glow-cyan transition-shadow"
            asChild
          >
            <a href="https://t.me/scrapechainbot" target="_blank" rel="noopener noreferrer">
              Get Access
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-border hover:border-primary hover:bg-primary/5 px-8 py-6 text-lg"
            asChild
          >
            <a href="https://www.youtube.com/watch?v=WEh3kBNFgbk" target="_blank" rel="noopener noreferrer">
              <Play className="w-5 h-5 mr-2" />
              Watch Setup Tutorial
            </a>
          </Button>
        </div>

        {/* One-liner */}
        <p className="text-muted-foreground text-sm mt-8 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "0.9s" }}>
          An open-source Telegram contract scraper you can self-host, so you're not relying on shared bot infrastructure for scraping speed.
        </p>
      </div>
    </section>
  );
};

export default Hero;
