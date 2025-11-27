import { Card } from "@/components/ui/card";
import { Layers, Zap, Cpu, Eye } from "lucide-react";

export const Technology = () => {
  const technologies = [
    {
      icon: Layers,
      title: "Neural Radiance Fields",
      description: "Continuous 5D function mapping 3D coordinates and viewing direction to color and density",
    },
    {
      icon: Zap,
      title: "3D Gaussian Splatting",
      description: "Explicit scene representation using 3D Gaussian ellipsoids for real-time rendering",
    },
    {
      icon: Cpu,
      title: "Optimized Pipeline",
      description: "Lightweight architecture designed for efficient training and rendering on modest hardware",
    },
    {
      icon: Eye,
      title: "Novel View Synthesis",
      description: "Generate photorealistic views from arbitrary viewpoints using learned scene representations",
    },
  ];

  return (
    <section id="technology" className="py-24 px-4 border-t bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Core Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combining state-of-the-art neural rendering techniques with practical optimizations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <Card 
              key={index}
              className="p-10 border-2 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 rounded-sm border-2 border-primary flex items-center justify-center mb-6">
                <tech.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-12 text-center">
          <div className="space-y-3">
            <div className="text-5xl font-bold">2-10x</div>
            <p className="text-muted-foreground text-lg">Faster Training</p>
          </div>
          <div className="space-y-3">
            <div className="text-5xl font-bold">50%</div>
            <p className="text-muted-foreground text-lg">Less Memory</p>
          </div>
          <div className="space-y-3">
            <div className="text-5xl font-bold">Real-time</div>
            <p className="text-muted-foreground text-lg">Rendering Speed</p>
          </div>
        </div>
      </div>
    </section>
  );
};