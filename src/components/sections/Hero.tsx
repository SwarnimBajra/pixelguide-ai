import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[70vh] flex items-center px-4 py-8">
      <div className="w-full max-w-md mx-auto">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
          NeRF • 3DGS
        </p>

        <h1 className="text-2xl font-bold mb-2">Horizon</h1>

        <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
          3D scene reconstruction from images using Neural Radiance Fields
        </p>

        <div className="flex gap-2">
          <Link to="/demo" className="flex-1">
            <Button size="sm" className="w-full text-xs">
              Demo
              <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </Link>
          <Button size="sm" variant="outline" className="flex-1 text-xs">
            GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};
