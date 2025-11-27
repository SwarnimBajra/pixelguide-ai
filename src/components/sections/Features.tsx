import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export const Features = () => {
  const features = [
    {
      title: "Lightweight Architecture",
      description: "Optimized for deployment on modest hardware without compromising quality",
    },
    {
      title: "Fast Training",
      description: "Significantly reduced training time compared to baseline NeRF methods",
    },
    {
      title: "High-Quality Synthesis",
      description: "Photorealistic novel view generation with excellent PSNR, SSIM, and LPIPS scores",
    },
    {
      title: "Efficient Memory Usage",
      description: "Reduced memory footprint enabling larger scenes and higher resolutions",
    },
    {
      title: "Pose-Free Capability",
      description: "Joint optimization of camera poses and scene representation using FA-BARF techniques",
    },
    {
      title: "Anti-Aliasing",
      description: "Analytic-Splatting integration for crisp, artifact-free rendering at any scale",
    },
  ];

  return (
    <section id="features" className="py-24 px-4 border-t bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Key Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with practical deployment and real-world applications in mind
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 border-2"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-12 p-10 border-2">
          <h3 className="text-3xl font-bold mb-6">Expected Outcomes</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Working pipeline for novel view generation from limited input images</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Improved training and rendering efficiency vs baseline methods</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Deployment capability on systems without high-end GPUs</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Comprehensive evaluation on standard datasets with quality metrics</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};