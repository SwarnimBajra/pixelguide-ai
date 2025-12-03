export const About = () => {
  return (
    <section id="about" className="py-10 px-4 border-t">
      <div className="max-w-lg mx-auto">
        <h2 className="text-xl font-bold mb-4">About</h2>
        
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            Horizon develops a lightweight pipeline for novel view synthesis, making photorealistic 
            3D scene generation accessible on modest hardware.
          </p>
          <p>
            Our approach combines Neural Radiance Fields with 3D Gaussian Splatting for efficient 
            training and real-time rendering.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          <div className="flex justify-between py-3 border-b text-sm">
            <span>Objectives</span>
            <span className="text-muted-foreground">Efficient NVS pipeline</span>
          </div>
          <div className="flex justify-between py-3 border-b text-sm">
            <span>Target</span>
            <span className="text-muted-foreground">Modest hardware</span>
          </div>
          <div className="flex justify-between py-3 border-b text-sm">
            <span>Applications</span>
            <span className="text-muted-foreground">VR, AR, Gaming</span>
          </div>
        </div>
      </div>
    </section>
  );
};
