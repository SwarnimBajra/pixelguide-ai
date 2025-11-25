import { Card } from "@/components/ui/card";
import { Layers, Zap, Cpu, Eye } from "lucide-react";

export const Technology = () => {
  const technologies = [
    {
      icon: Layers,
      title: "Neural Radiance Fields",
      description: "Continuous 5D function mapping 3D coordinates and viewing direction to color and density",
      color: "cyan-glow",
    },
    {
      icon: Zap,
      title: "3D Gaussian Splatting",
      description: "Explicit scene representation using 3D Gaussian ellipsoids for real-time rendering",
      color: "purple-deep",
    },
    {
      icon: Cpu,
      title: "Optimized Pipeline",
      description: "Lightweight architecture designed for efficient training and rendering on modest hardware",
      color: "cyan-glow",
    },
    {
      icon: Eye,
      title: "Novel View Synthesis",
      description: "Generate photorealistic views from arbitrary viewpoints using learned scene representations",
      color: "purple-deep",
    },
  ];

  return (
    <section id="technology" className="py-24 px-4 relative bg-gradient-to-b from-transparent to-blue-deep/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Core <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combining state-of-the-art neural rendering techniques with practical optimizations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {technologies.map((tech, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-to-br from-card to-card/50 border-cyan-glow/20 hover:border-cyan-glow/40 transition-all duration-300 group hover:scale-105"
            >
              <div className={`w-16 h-16 rounded-xl bg-${tech.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform glow-cyan`}>
                <tech.icon className={`h-8 w-8 text-${tech.color}`} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{tech.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold gradient-text">2-10x</div>
            <p className="text-muted-foreground">Faster Training</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold gradient-text">50%</div>
            <p className="text-muted-foreground">Less Memory</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold gradient-text">Real-time</div>
            <p className="text-muted-foreground">Rendering Speed</p>
          </div>
        </div>
      </div>
    </section>
  );
};
