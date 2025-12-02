export const Features = () => {
  const features = [
    "Lightweight architecture",
    "Fast training",
    "High-quality synthesis",
    "Efficient memory usage",
    "Pose-free capability",
    "Anti-aliasing",
  ];

  return (
    <section id="features" className="py-12 px-4 border-t">
      <div className="max-w-lg mx-auto">
        <h2 className="text-xl font-bold mb-4">Features</h2>
        
        <ul className="space-y-2 text-sm">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center py-2 border-b">
              <span className="w-5 h-5 flex items-center justify-center text-xs mr-3 border">
                {i + 1}
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
