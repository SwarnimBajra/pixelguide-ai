export const Team = () => {
  const team = [
    { name: "Swarnim Bajracharya", roll: "11" },
    { name: "Arjit Chand", roll: "17" },
    { name: "Sauhardha Kafle", roll: "29" },
    { name: "Kritan Rijal", roll: "53" },
  ];

  return (
    <section id="team" className="py-12 px-4 border-t">
      <div className="max-w-lg mx-auto">
        <h2 className="text-xl font-bold mb-4">Team</h2>
        
        <div className="space-y-2">
          {team.map((member, i) => (
            <div key={i} className="flex justify-between py-2 border-b text-sm">
              <span>{member.name}</span>
              <span className="text-muted-foreground">#{member.roll}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm">
          <p className="font-medium">Kathmandu University</p>
          <p className="text-muted-foreground">Dept. of Computer Science</p>
          <p className="text-muted-foreground mt-2">Advisor: Mr. Suman Shrestha</p>
        </div>
      </div>
    </section>
  );
};
