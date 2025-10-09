import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  Microscope,
  FlaskConical,
  Book,
  Database,
  Layers,
  Laptop,
  Podcast,
  FileText,
  Brain,
  Network,
  Globe,
  Package,
  Eye,
  Mountain,
  Map,
  Compass,
  Droplets,
  Ruler,
  Beaker,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  description: string;
  url?: string;
  icon: string;
  external?: boolean;
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
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName?.toLowerCase()) {
      // 🧪 Laboratory & Analytical
      case "microscope":
        return <Microscope className="h-6 w-6 text-blue-600" />;
      case "flask":
      case "beaker":
        return <FlaskConical className="h-6 w-6 text-sky-600" />;
      case "lab":
      case "experiment":
        return <Beaker className="h-6 w-6 text-indigo-600" />;
      case "database":
      case "data":
        return <Database className="h-6 w-6 text-emerald-600" />;

      // 📚 Research, Notes & Publications
      case "book":
        return <Book className="h-6 w-6 text-amber-600" />;
      case "article":
      case "publication":
      case "notes":
        return <FileText className="h-6 w-6 text-orange-600" />;

      // 🗺️ Mapping, GIS & Field Work
      case "map":
        return <Map className="h-6 w-6 text-green-700" />;
      case "globe":
      case "earth":
        return <Globe className="h-6 w-6 text-teal-600" />;
      case "compass":
      case "navigation":
        return <Compass className="h-6 w-6 text-lime-600" />;
      case "layers":
      case "stratigraphy":
        return <Layers className="h-6 w-6 text-yellow-600" />;
      case "mountain":
      case "terrain":
        return <Mountain className="h-6 w-6 text-gray-600" />;

      // 💧 Hydrology & Environment
      case "water":
      case "hydro":
        return <Droplets className="h-6 w-6 text-cyan-500" />;

      // 💻 Digital, AI & Platforms
      case "ai":
      case "ml":
      case "model":
        return <Brain className="h-6 w-6 text-fuchsia-600" />;
      case "network":
      case "cloud":
        return <Network className="h-6 w-6 text-indigo-500" />;
      case "laptop":
      case "platform":
        return <Laptop className="h-6 w-6 text-blue-500" />;

      // 🎙️ Outreach, Education & Visualization
      case "podcast":
        return <Podcast className="h-6 w-6 text-pink-600" />;
      case "eye":
      case "visualization":
        return <Eye className="h-6 w-6 text-purple-600" />;
      case "education":
      case "teaching":
        return <Book className="h-6 w-6 text-violet-600" />;

      // 📏 Measurement & Tools
      case "measurement":
      case "scale":
        return <Ruler className="h-6 w-6 text-gray-500" />;

      // 🌍 General / Default
      default:
        return <Package className="h-6 w-6 text-gray-500" />;
    }
  };

  if (!data) return null;

  const filteredProjects = data.projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedProjects = filteredProjects.slice(0, displayCount);
  const hasMore = filteredProjects.length > displayCount;

  return (
    <section id="projects" className="py-section bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
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

        {/* Project Cards */}
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

              {/* Learn More Button */}
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
              >
                {project.external && project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                ) : (
                  <Link to={`/projects/${project.id}`}>
                    <span>Learn More</span>
                    <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                )}
              </Button>
            </div>
          ))}
        </div>

        {/* No Results Message */}
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
              onClick={() => setDisplayCount((prev) => prev + 12)}
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
