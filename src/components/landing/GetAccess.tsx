import { MessageSquare, Github, Play, Cloud, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const GetAccess = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "DM @ScrapeChainBot on Telegram",
      description: "Use /admin to contact the admin with your GitHub username. Use the referral link — this supports development, it's the project's funding model.",
      action: {
        label: "Open Telegram Bot",
        url: "https://t.me/scrapechainbot",
      },
    },
    {
      number: "02",
      icon: Play,
      title: "Watch the Setup Tutorial",
      description: "Covers everything: GitHub account, Telegram credentials (User ID, Bot Token, API ID, API Hash). 10 minutes and you're running.",
      action: {
        label: "Watch Tutorial",
        url: "https://www.youtube.com/watch?v=WEh3kBNFgbk",
      },
      videoEmbed: "WEh3kBNFgbk",
    },
    {
      number: "03",
      icon: Cloud,
      title: "24/7 Cloud Hosting (Optional)",
      description: "Deploy once to WispByte → runs forever. Never miss a call to laptop sleep again. Free tier available.",
      action: {
        label: "Watch Cloud Tutorial",
        url: "https://www.youtube.com/watch?v=WLJ5uzwNRW4",
      },
      videoEmbed: "WLJ5uzwNRW4",
      optional: true,
    },
  ];

  return (
    <section id="get-access" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get <span className="text-gradient-primary">Access</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Simple path to entry. No complicated setup. Deploy once, run forever.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className={`glass-card p-8 ${step.optional ? 'border-dashed' : 'neon-border'} relative overflow-hidden`}
              >
                {step.optional && (
                  <span className="absolute top-4 right-4 text-xs px-2 py-1 bg-secondary rounded-full text-muted-foreground">
                    Optional
                  </span>
                )}
                
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Step info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl font-bold text-primary/30 font-mono">{step.number}</span>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground mb-6">{step.description}</p>
                    
                    <Button 
                      className="bg-gradient-primary text-primary-foreground"
                      asChild
                    >
                      <a href={step.action.url} target="_blank" rel="noopener noreferrer">
                        {step.action.label}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>

                  {/* Video embed */}
                  {step.videoEmbed && (
                    <div className="lg:w-96">
                      <div className="aspect-video rounded-lg overflow-hidden bg-secondary">
                        <iframe
                          src={`https://www.youtube.com/embed/${step.videoEmbed}`}
                          title={step.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact info */}
        <div className="mt-12 glass-card p-6 text-center">
          <p className="text-muted-foreground mb-4">Need help? Reach out directly:</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://t.me/scrapechainbot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              @ScrapeChainBot
            </a>
            <a 
              href="https://t.me/Vtechwriter" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              Admin: @Vtechwriter
            </a>
            <a 
              href="mailto:theweb3scout@gmail.com"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              theweb3scout@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetAccess;
