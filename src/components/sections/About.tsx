import { Card } from "@/components/ui/card";
import { Target, Lightbulb, TrendingUp } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 border-t">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Redefining 3D Reconstruction
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Horizon bridges the gap between cutting-edge research and practical deployment, 
            making photorealistic 3D scene generation accessible on modest hardware
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 border-2">
            <div className="w-14 h-14 rounded-sm border-2 border-primary flex items-center justify-center mb-6">
              <Target className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Objectives</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Develop working NVS pipeline</li>
              <li>• Optimize for modest hardware</li>
              <li>• Achieve high quality & efficiency</li>
              <li>• Evaluate across datasets</li>
            </ul>
          </Card>

          <Card className="p-8 border-2">
            <div className="w-14 h-14 rounded-sm border-2 border-primary flex items-center justify-center mb-6">
              <Lightbulb className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Motivation</h3>
            <p className="text-muted-foreground leading-relaxed">
              Making NVS practical for VR, AR, gaming, and immersive media by addressing 
              computational limitations and accessibility barriers
            </p>
          </Card>

          <Card className="p-8 border-2">
            <div className="w-14 h-14 rounded-sm border-2 border-primary flex items-center justify-center mb-6">
              <TrendingUp className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Impact</h3>
            <p className="text-muted-foreground leading-relaxed">
              Bridging research and real-world applications through efficiency, 
              adaptability, and performance on standard hardware
            </p>
          </Card>
        </div>

        <Card className="p-10 border-2">
          <h3 className="text-3xl font-bold mb-6">Background</h3>
          <div className="text-muted-foreground space-y-4 leading-relaxed">
            <p>
              Neural Radiance Fields (NeRF) revolutionized 3D scene reconstruction by demonstrating 
              photorealistic novel view synthesis from sparse input images. However, traditional NeRF 
              approaches suffer from long training times, high computational requirements, and the need 
              for accurate camera poses.
            </p>
            <p>
              Recent advances in 3D Gaussian Splatting have enabled real-time rendering while maintaining 
              quality, but at the cost of high memory usage and geometric inconsistencies. Horizon addresses 
              these challenges by developing a lightweight pipeline that maintains quality while being 
              deployable on modest hardware systems.
            </p>
            <p>
              Our approach combines insights from state-of-the-art methods including Instant-NGP, Plenoxels, 
              FA-BARF, and Analytic-Splatting to create an efficient, practical solution for novel view synthesis.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};