import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Package, Microscope, Eye, Database, Layers, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: string;
}

interface ProjectsData {
  header: {
    title: string;
    subtitle: string;
  };
  projects: Project[];
}

const ProjectsSection = () => {
  const [data, setData] = useState<ProjectsData | null>(null);
  const [displayCount, setDisplayCount] = useState(12);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  useEffect(() => {
    fetch('/data/projects.json')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "microscope":
        return <Microscope className="h-6 w-6 text-primary" />;
      case "eye":
        return <Eye className="h-6 w-6 text-education" />;
      case "database":
        return <Database className="h-6 w-6 text-research" />;
      case "layers":
        return <Layers className="h-6 w-6 text-development" />;
      default:
        return <Package className="h-6 w-6 text-primary" />;
    }
  };


  if (!data) return null;

  // Filter projects based on search query
  const filteredProjects = data.projects.filter(project => 
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get projects to display
  const displayedProjects = filteredProjects.slice(0, displayCount);
  const hasMore = filteredProjects.length > displayCount;

  if (!data) return null;

  return (
    <section id="projects" className="py-section bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Package className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading">
              {data.header.title}
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {data.header.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-card border border-card-border rounded-lg p-6 shadow-card hover:shadow-md transition-all group"
            >
              <div className="flex items-center space-x-3 mb-4">
                {getIcon(project.icon)}
                <h3 className="text-lg font-semibold text-foreground font-heading group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                {project.description}
              </p>

              <Button 
                asChild
                variant="outline" 
                size="sm" 
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
              >
                <Link to={`/projects/${project.id}`}>
                  <span>Learn More</span>
                  <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No projects found matching "{searchQuery}"
            </p>
          </div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-12">
            <Button 
              onClick={() => setDisplayCount(prev => prev + 12)}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
