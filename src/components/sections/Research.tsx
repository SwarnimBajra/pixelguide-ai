import { Card } from "@/components/ui/card";
import { BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Research = () => {
  const relatedWorks = [
    {
      title: "DreamGaussian4D",
      description: "Efficient 4D generation framework combining explicit spatial transformations with Gaussian Splatting",
      relevance: "Texture optimization and user-centric evaluation methodology",
    },
    {
      title: "FA-BARF",
      description: "Frequency-adapted Bundle-Adjusting Neural Radiance Fields for improved pose optimization",
      relevance: "50% faster training with frequency-adapted spatial filtering",
    },
    {
      title: "Analytic-Splatting",
      description: "Anti-aliasing method extending 3DGS with analytical approximation over pixel areas",
      relevance: "High-frequency detail preservation and multi-scale rendering",
    },
    {
      title: "Plenoxels",
      description: "Sparse 3D grid of spherical harmonics optimized without neural networks",
      relevance: "Orders of magnitude faster optimization through explicit representation",
    },
  ];

  return (
    <section id="research" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Related <span className="gradient-text">Research</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building upon state-of-the-art methods in neural rendering and novel view synthesis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {relatedWorks.map((work, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-to-br from-card to-card/50 border-cyan-glow/20 hover:border-purple-deep/40 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-cyan-glow/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BookOpen className="h-6 w-6 text-cyan-glow" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{work.description}</p>
                  <div className="flex items-center text-xs text-purple-deep font-medium">
                    <span className="mr-1">Relevance:</span>
                    <span className="text-muted-foreground">{work.relevance}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-purple-deep/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Read the Full Proposal</h3>
              <p className="text-muted-foreground">
                Detailed methodology, system specifications, and project timeline
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="hero"
                className="glow-cyan"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Download Proposal
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-cyan-glow/30 hover:bg-cyan-glow/10 hover:border-cyan-glow/50"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View References
              </Button>
            </div>
          </div>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            <span className="font-semibold text-foreground">Keywords:</span>{" "}
            NeRF • Gaussian Splatting • AI • Photorealistic Rendering • Neural Rendering • 
            Computer Graphics • Deep Learning • Novel View Synthesis
          </p>
        </div>
      </div>
    </section>
  );
};
