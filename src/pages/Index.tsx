import Hero from "@/components/landing/Hero";
import SupportedChains from "@/components/landing/SupportedChains";
import GetAccess from "@/components/landing/GetAccess";
import WhatThisIs from "@/components/landing/WhatThisIs";
import Features from "@/components/landing/Features";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <SupportedChains />
      <GetAccess />
      <WhatThisIs />
      <Features />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
