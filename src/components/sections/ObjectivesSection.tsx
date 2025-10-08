import { Target, FlaskConical, GraduationCap, Briefcase } from "lucide-react";

interface ObjectivePoint {
  text: string;
}

interface Objective {
  id: string;
  label: string;
  theme: "research" | "education" | "development";
  points: string[];
}

interface ObjectivesSectionProps {
  title: string;
  subtitle: string;
  objectives: Objective[];
}

const ObjectivesSection = ({ title, subtitle, objectives }: ObjectivesSectionProps) => {
  const getThemeClasses = (theme: string) => {
    switch (theme) {
      case "research":
        return "bg-research-bg border-research/20 text-research-foreground";
      case "education":
        return "bg-education-bg border-education/20 text-education-foreground";
      case "development":
        return "bg-development-bg border-development/20 text-development-foreground";
      default:
        return "bg-muted border-muted-dark text-foreground";
    }
  };

  const getIcon = (id: string) => {
    switch (id) {
      case "research":
        return <FlaskConical className="h-6 w-6" />;
      case "education":
        return <GraduationCap className="h-6 w-6" />;
      case "consultations":
        return <Briefcase className="h-6 w-6" />;
      default:
        return null;
    }
  };

  return (
    <section id="objectives" className="py-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Target className="h-6 w-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading">
              {title}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {objectives.map((objective) => (
            <div
              key={objective.id}
              className={`rounded-lg border p-8 shadow-card transition-all hover:shadow-md ${getThemeClasses(objective.theme)}`}
            >
              <div className="flex items-center space-x-3 mb-6">
                {getIcon(objective.id)}
                <h3 className="text-xl font-semibold font-heading">
                  {objective.label}
                </h3>
              </div>
              <ul className="space-y-4">
                {objective.points.map((point, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-current opacity-60 mt-2 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;