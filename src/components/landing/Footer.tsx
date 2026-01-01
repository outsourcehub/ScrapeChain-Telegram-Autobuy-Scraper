import { ArrowRight, MessageSquare, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-24 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto">
        {/* Final truth */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-lg mb-4">
            "People kept rebuilding this privately. We just made it communal."
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to stop <span className="text-destructive">missing</span> calls?
          </h2>
          
          {/* Final CTA */}
          <Button 
            size="lg" 
            className="bg-gradient-primary text-primary-foreground font-semibold px-10 py-6 text-lg shadow-glow-green hover:shadow-glow-cyan transition-shadow"
            asChild
          >
            <a href="https://t.me/scrapechainbot" target="_blank" rel="noopener noreferrer">
              Join the Community
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>

          <p className="text-primary font-medium mt-6">DM @ScrapeChainBot to get started</p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <a 
            href="https://t.me/scrapechainbot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Telegram</span>
          </a>
          <a 
            href="https://www.youtube.com/watch?v=WEh3kBNFgbk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Youtube className="w-5 h-5" />
            <span>Setup Tutorial</span>
          </a>
          <a 
            href="https://www.youtube.com/watch?v=WLJ5uzwNRW4" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Youtube className="w-5 h-5" />
            <span>Cloud Tutorial</span>
          </a>
          <a 
            href="mailto:theweb3scout@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
        </div>

        {/* Community tagline */}
        <div className="text-center">
          <p className="text-muted-foreground text-sm mb-2">
            By traders, for traders. Vote the roadmap.
          </p>
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Scrape Chain. Open source. Community-driven.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
