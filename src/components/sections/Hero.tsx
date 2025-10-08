import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

interface HeroButton {
  label: string;
  variant: "primary" | "secondary";
  action: "scroll" | "link";
  target: string;
  icon?: string;
}

interface HeroProps {
  title: string;
  subtitle: string;
  buttons: HeroButton[];
}

const Hero = ({ title, subtitle, buttons }: HeroProps) => {
  const handleButtonClick = (button: HeroButton) => {
    if (button.action === "scroll") {
      const element = document.querySelector(button.target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (button.action === "link") {
      window.open(button.target, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="hero" className="py-section bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-heading">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons.map((button, index) => (
              <Button
                key={index}
                variant={button.variant === "primary" ? "default" : "outline"}
                size="lg"
                onClick={() => handleButtonClick(button)}
                className={`flex items-center space-x-2 ${
                  button.variant === "primary" 
                    ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {button.icon === "github" && <Github className="h-5 w-5" />}
                <span>{button.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;