import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Settings, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Principle {
  id: string;
  title: string;
  description: string;
  action?: {
    label: string;
    href: string;
  };
  features?: string[];
}

interface HowWeWorkData {
  header: {
    title: string;
    subtitle: string;
  };
  principles: Principle[];
}

const HowWeWorkSection = () => {
  const [data, setData] = useState<HowWeWorkData | null>(null);

  useEffect(() => {
    fetch('/data/how-we-work.json')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  const getIcon = (id: string) => {
    switch (id) {
      case "open":
        return <Users className="h-6 w-6 text-primary" />;
      case "project-based":
        return <Settings className="h-6 w-6 text-education" />;
      case "credit":
        return <Award className="h-6 w-6 text-development" />;
      default:
        return null;
    }
  };

  if (!data) return null;

  return (
    <section id="how-we-work" className="py-section bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Settings className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading">
              {data.header.title}
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {data.header.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {data.principles.map((principle) => (
            <div
              key={principle.id}
              className="bg-card border border-card-border rounded-lg p-8 shadow-card hover:shadow-md transition-all"
            >
              <div className="flex items-center space-x-3 mb-4">
                {getIcon(principle.id)}
                <h3 className="text-xl font-semibold text-foreground font-heading">
                  {principle.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {principle.description}
              </p>

              {principle.features && (
                <ul className="space-y-2 mb-6">
                  {principle.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              {principle.action && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  asChild
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a href={principle.action.href.startsWith('#') ? principle.action.href : principle.action.href}>
                    {principle.action.label}
                  </a>
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;