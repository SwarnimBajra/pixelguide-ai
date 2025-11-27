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
    <section id="research" className="py-16 px-4 border-t">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Related Research
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl">
            Building upon state-of-the-art methods in neural rendering and novel view synthesis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {relatedWorks.map((work, index) => (
            <Card 
              key={index}
              className="p-6 border"
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-0.5">
                  <BookOpen className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold mb-1.5">{work.title}</h3>
                  <p className="text-muted-foreground text-xs mb-2 leading-relaxed">{work.description}</p>
                  <div className="text-xs">
                    <span className="font-medium mr-1">Relevance:</span>
                    <span className="text-muted-foreground">{work.relevance}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 border">
          <div className="flex flex-col md:flex-row items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-1.5">Read the Full Proposal</h3>
              <p className="text-muted-foreground text-sm">
                Detailed methodology, system specifications, and project timeline
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button 
                size="default" 
                variant="default"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Download Proposal
              </Button>
              <Button 
                size="default" 
                variant="outline"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
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