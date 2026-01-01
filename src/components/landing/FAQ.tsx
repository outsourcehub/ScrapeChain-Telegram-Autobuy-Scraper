import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is this a scam?",
      answer: "It's open source. Verify the code yourself. Access is gated to filter for serious users, not to hide anything. We're not asking for your wallet keys, your funds, or any custody. You run everything yourself.",
    },
    {
      question: "Why is there a referral link?",
      answer: "Using the referral supports development and infrastructure — it's the project's funding model. No central hosting = no recurring costs to me. You deploy on your own cloud. The referral is how the project stays alive and improves.",
    },
    {
      question: "Why is the repo private?",
      answer: "Access is curated, not hidden. We filter for people who care, contribute, and understand infra. This keeps the community serious and avoids low-effort cloning. The core is open-source for transparency — distribution is just intentional.",
    },
    {
      question: "Will it work with bots other than Blazing?",
      answer: "This is execution-agnostic infrastructure. Blazing is just one execution endpoint today because it's currently the cleanest, fastest pipe with fewer failed transactions. If the community decides to support other bots, we change together. Features are decided by the community, not a company roadmap.",
    },
    {
      question: "How reliable is it?",
      answer: "It connects fast, parses fast, forwards fast, and doesn't break under load. Approximately 100ms detection time with no shared bottlenecks. If it's boring and fast — you're winning. Free cloud tier may disconnect occasionally; upgrade for 99.9% uptime at ~$19/year.",
    },
    {
      question: "What if I miss something while setting up?",
      answer: "Watch the YouTube tutorial — it covers everything step by step. Use /admin in @ScrapeChainBot to message the admin directly without Telegram restrictions. The community is active and helps each other.",
    },
    {
      question: "Why Blazing specifically?",
      answer: "We evaluated every sniper — Maestro, Photon, Banana, BonkBot. Blazing won because: it accepts clean contract inputs (no forced UI), it doesn't lock us into their scraping, and it lets our scraper stay in control. If that changes? We change with it. This repo isn't tied to a brand — it's tied to us.",
    },
    {
      question: "Is this faster than Maestro's scraper?",
      answer: "Different problem. Maestro's scraper requires your computer running 24/7 with stable internet. One disconnect = missed calls. This runs in the cloud — deploy once, runs forever. Always on, always fast, never miss calls to laptop sleep or WiFi drops.",
    },
    {
      question: "What chains are supported?",
      answer: "10 chains including newer ones others don't cover: SOL, BSC, ETH, BASE, ARB, STORY, MONAD, SONIC, AVAX, BERA. Chain-agnostic because narratives move faster than code. Community votes on what gets added next.",
    },
    {
      question: "Do I need to be technical to use this?",
      answer: "You need a GitHub account and ability to follow a YouTube tutorial. The setup video walks you through everything: getting Telegram credentials, deploying to cloud hosting, configuring your sources. If you can follow instructions, you can run this.",
    },
  ];

  return (
    <section id="faq" className="py-24 px-4 bg-secondary/20">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-gradient-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real concerns. Honest answers.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="glass-card px-6 border-border/50 hover:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-foreground font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
