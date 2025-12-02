export const Research = () => {
  const refs = [
    "NeRF: Neural Radiance Fields",
    "3D Gaussian Splatting",
    "Instant-NGP",
    "FA-BARF",
  ];

  return (
    <section id="research" className="py-12 px-4 border-t">
      <div className="max-w-lg mx-auto">
        <h2 className="text-xl font-bold mb-4">Research</h2>
        
        <p className="text-sm text-muted-foreground mb-6">
          Key references and foundational work
        </p>

        <ul className="space-y-2 text-sm">
          {refs.map((ref, i) => (
            <li key={i} className="py-2 border-b text-muted-foreground">
              {ref}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
