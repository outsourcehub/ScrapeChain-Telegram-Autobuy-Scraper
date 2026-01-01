import Hero from "@/components/landing/Hero";
import WhatThisIs from "@/components/landing/WhatThisIs";
import Features from "@/components/landing/Features";
import GetAccess from "@/components/landing/GetAccess";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <WhatThisIs />
      <Features />
      <GetAccess />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
