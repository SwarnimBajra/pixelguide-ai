import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center px-4 py-12">
      <div className="w-full max-w-lg mx-auto">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
          NeRF • 3DGS
        </p>

        <h1 className="text-3xl font-bold mb-3">
          Horizon
        </h1>

        <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
          Photorealistic 3D scene reconstruction from RGB images using Neural Radiance Fields and Gaussian Splatting
        </p>

        <div className="flex flex-col gap-2">
          <Link to="/demo">
            <Button size="sm" className="w-full">
              Demo
              <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </Link>
          
          <Button size="sm" variant="outline" className="w-full">
            GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};
