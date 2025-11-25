import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Team = () => {
  const team = [
    { name: "Swarnim Bajracharya", roll: "11" },
    { name: "Arjit Chand", roll: "17" },
    { name: "Sauhardha Kafle", roll: "29" },
    { name: "Kritan Rijal", roll: "53" },
  ];

  return (
    <section id="team" className="py-24 px-4 relative bg-gradient-to-b from-blue-deep/20 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Computer Engineering students at Kathmandu University
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {team.map((member, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-to-br from-card to-card/50 border-cyan-glow/20 hover:border-purple-deep/40 transition-all duration-300 group hover:scale-105"
            >
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-glow to-purple-deep mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">Roll No: {member.roll}</p>
                <div className="flex justify-center space-x-2">
                  <Button size="icon" variant="ghost" className="h-8 w-8 hover:text-cyan-glow">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8 hover:text-cyan-glow">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8 hover:text-cyan-glow">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-cyan-glow/20 text-center">
          <h3 className="text-2xl font-bold mb-2">Academic Affiliation</h3>
          <p className="text-lg text-muted-foreground mb-2">
            <span className="font-semibold text-foreground">Kathmandu University</span>
          </p>
          <p className="text-muted-foreground mb-1">Department of Computer Science and Engineering</p>
          <p className="text-muted-foreground mb-4">Dhulikhel, Kavre, Nepal</p>
          <div className="inline-block px-4 py-2 rounded-lg bg-cyan-glow/10 border border-cyan-glow/30">
            <p className="text-sm">
              <span className="font-semibold">Project Advisor:</span> Mr. Suman Shrestha
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
