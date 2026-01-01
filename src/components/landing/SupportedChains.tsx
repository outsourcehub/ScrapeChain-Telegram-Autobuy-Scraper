const SupportedChains = () => {
  const chains = ["SOL", "BSC", "ETH", "BASE", "ARB", "STORY", "MONAD", "SONIC", "AVAX", "BERA"];

  return (
    <section className="py-16 px-4 bg-secondary/10">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-8">
          <h3 className="text-xl font-semibold mb-6 text-center">Supported Chains</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {chains.map((chain) => (
              <span 
                key={chain} 
                className="px-4 py-2 bg-secondary rounded-lg text-sm font-mono font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
              >
                {chain}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedChains;
