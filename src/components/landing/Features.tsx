import { Cloud, Wifi, Filter, Copy, Link2, Code, Users, Eye, Hand } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Cloud,
      promise: "We run while you sleep",
      meaning: "24/7 cloud operation — your laptop can crash, you won't miss the call",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Wifi,
      promise: "Your internet doesn't decide your PnL",
      meaning: "Cloud-based means no local dependency on your connection",
      color: "text-neon-cyan",
      bgColor: "bg-neon-cyan/10",
    },
    {
      icon: Filter,
      promise: "You choose who to trust",
      meaning: "Filter by specific users (not just admins/pinned like competitors)",
      color: "text-neon-purple",
      bgColor: "bg-neon-purple/10",
    },
    {
      icon: Copy,
      promise: "Never pay for the same call twice",
      meaning: "Duplicate prevention with time controls",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Link2,
      promise: "Chain-agnostic because narratives move faster than code",
      meaning: "10 Chains: SOL, BSC, ETH, BASE, ARB, STORY, MONAD, SONIC, AVAX, BERA",
      color: "text-neon-cyan",
      bgColor: "bg-neon-cyan/10",
    },
    {
      icon: Code,
      promise: "Verify everything",
      meaning: "Open source — read the code yourself",
      color: "text-neon-purple",
      bgColor: "bg-neon-purple/10",
    },
    {
      icon: Users,
      promise: "Your seat at the table",
      meaning: "Community votes on what gets built next",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  const chains = ["SOL", "BSC", "ETH", "BASE", "ARB", "STORY", "MONAD", "SONIC", "AVAX", "BERA"];

  return (
    <section id="features" className="py-24 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Real <span className="text-gradient-primary">Edge</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Not a spec sheet. These are promises.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="glass-card p-6 hover:border-primary/30 transition-colors group">
                <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.promise}</h3>
                <p className="text-muted-foreground text-sm">{feature.meaning}</p>
              </div>
            );
          })}
        </div>


        {/* Blazing Integration */}
        <div className="glass-card p-8 neon-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">The Blazing Integration</h3>
            <p className="text-muted-foreground">How the pieces fit together</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            {/* Scraper = Eyes */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4 shadow-glow-green">
                <Eye className="w-10 h-10 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-primary">Scraper</h4>
              <p className="text-muted-foreground text-sm">The Eyes</p>
              <p className="text-xs text-muted-foreground mt-2 max-w-[200px]">
                Decides what to buy before everyone else
              </p>
            </div>

            {/* Arrow */}
            <div className="text-4xl text-primary animate-pulse">→</div>

            {/* Blazing = Hands */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-neon-cyan/20 flex items-center justify-center mb-4 shadow-glow-cyan">
                <Hand className="w-10 h-10 text-neon-cyan" />
              </div>
              <h4 className="text-lg font-semibold text-neon-cyan">Blazing</h4>
              <p className="text-muted-foreground text-sm">The Hands</p>
              <p className="text-xs text-muted-foreground mt-2 max-w-[200px]">
                Buys fast with fewer failed transactions
              </p>
            </div>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <span className="text-primary">•</span>
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">"Blazing buys fast</span> — this decides what it buys before everyone else."
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary">•</span>
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">"This plugs into Blazing</span> so you don't have to learn anything new."
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary">•</span>
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">"If Blazing ever stops serving the community,</span> it gets replaced. Together."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
