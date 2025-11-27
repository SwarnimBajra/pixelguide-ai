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
    <section id="team" className="py-24 px-4 border-t">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Meet the Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Computer Engineering students at Kathmandu University
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {team.map((member, index) => (
            <Card 
              key={index}
              className="p-6 border-2 hover:shadow-lg transition-shadow"
            >
              <div className="text-center">
                <div className="w-20 h-20 rounded-sm border-2 border-primary mx-auto mb-4 flex items-center justify-center text-2xl font-bold bg-muted">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">Roll No: {member.roll}</p>
                <div className="flex justify-center space-x-2">
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-10 border-2 text-center">
          <h3 className="text-3xl font-bold mb-3">Academic Affiliation</h3>
          <p className="text-xl text-muted-foreground mb-2">
            <span className="font-semibold text-foreground">Kathmandu University</span>
          </p>
          <p className="text-muted-foreground mb-1">Department of Computer Science and Engineering</p>
          <p className="text-muted-foreground mb-6">Dhulikhel, Kavre, Nepal</p>
          <div className="inline-block px-6 py-3 rounded-sm border-2 border-primary bg-muted">
            <p className="text-sm font-medium">
              <span className="font-bold">Project Advisor:</span> Mr. Suman Shrestha
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};