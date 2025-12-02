export const Technology = () => {
  const stats = [
    { value: "2-10x", label: "Faster" },
    { value: "50%", label: "Less Memory" },
    { value: "RT", label: "Rendering" },
  ];

  return (
    <section id="technology" className="py-8 px-4 border-t">
      <div className="max-w-md mx-auto">
        <h2 className="text-lg font-bold mb-3">Technology</h2>
        
        <div className="space-y-4 text-sm">
          <div className="py-3 border-b">
            <p className="font-medium mb-1">Neural Radiance Fields</p>
            <p className="text-muted-foreground">5D mapping of coordinates to color and density</p>
          </div>
          <div className="py-3 border-b">
            <p className="font-medium mb-1">3D Gaussian Splatting</p>
            <p className="text-muted-foreground">Explicit representation for real-time rendering</p>
          </div>
          <div className="py-3 border-b">
            <p className="font-medium mb-1">Optimized Pipeline</p>
            <p className="text-muted-foreground">Lightweight architecture for modest hardware</p>
          </div>
        </div>

        <div className="mt-8 flex justify-between text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-lg font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
