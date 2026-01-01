import { Check, X, Shield } from "lucide-react";

const WhatThisIs = () => {
  const isItems = [
    "A Telegram listener that extracts contract addresses",
    "Forwards instantly to your execution bot (Blazing today, community decides tomorrow)",
    "Self-hosted — you control latency",
    "Honeypot/safety checks included",
    "Community-driven development",
  ];

  const isNotItems = [
    "Not a trading strategy",
    "Not a signal provider",
    "Not a sniper with \"guaranteed wins\"",
    "Not custodial",
    "Not a closed SaaS",
  ];

  return (
    <section id="what-this-is" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What This <span className="text-gradient-primary">Actually</span> Is
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Clear, honest positioning. No hidden agendas. Verify the code yourself.
          </p>
        </div>

        {/* Is / Is Not Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* What It Is */}
          <div className="glass-card p-8 neon-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary">What It Is</h3>
            </div>
            <ul className="space-y-4">
              {isItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What It Is NOT */}
          <div className="glass-card p-8 border-destructive/30 hover:border-destructive/50 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-destructive">What It Is NOT</h3>
            </div>
            <ul className="space-y-4">
              {isNotItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Anti-scam trust callout */}
        <div className="glass-card p-8 border-primary/30 max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-primary" />
            <span className="text-lg font-semibold text-primary">The Honest Truth</span>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            "This does not make you profitable by itself. Speed helps, but execution still matters. 
            <span className="text-foreground font-medium"> This is infrastructure, not alpha.</span>"
          </p>
        </div>

        {/* One-liner */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm mb-2">The one sentence that explains everything:</p>
          <p className="text-xl md:text-2xl font-medium text-foreground max-w-3xl mx-auto">
            "It's an open-source Telegram contract scraper you can self-host, so you're not relying on shared bot infrastructure for scraping speed."
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatThisIs;
