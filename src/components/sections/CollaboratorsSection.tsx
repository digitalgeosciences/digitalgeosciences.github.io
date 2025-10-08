import { useEffect, useState } from "react";
import { Users, Clock, Github, Globe, Linkedin, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Collaborator {
  name: string;
  role: string;
  photo?: string;
  participation: {
    start: string;
    end: string;
    status: "active" | "completed";
  };
  links?: {
    github?: string;
    website?: string;
    linkedin?: string;
    twitter?: string;
  };
}

interface CollaboratorsData {
  header: {
    title: string;
    subtitle: string;
    note: string;
  };
  collaborators: Collaborator[];
}

const CollaboratorsSection = () => {
  const [data, setData] = useState<CollaboratorsData | null>(null);

  useEffect(() => {
    fetch('/data/collaborators.json')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  const formatDate = (dateStr: string) => {
    if (dateStr === "Present") return "Present";
    
    const [year, month] = dateStr.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString("en-US", { 
      year: "numeric", 
      month: "short" 
    });
  };

  if (!data) return null;

  return (
    <section id="collaborators" className="py-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading">
              {data.header.title}
            </h2>
          </div>
          {data.header.subtitle && (
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {data.header.subtitle}
            </p>
          )}
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-card border border-card-border rounded-lg shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50 border-b border-card-border">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Name</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Role / Focus</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Participation</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Links</th>
                  </tr>
                </thead>
                <tbody>
                  {data.collaborators.map((collaborator, index) => (
                    <tr 
                      key={index}
                      className="border-b border-card-border last:border-b-0 hover:bg-muted/20 transition-colors"
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            {collaborator.photo ? (
                              <img
                                src={collaborator.photo}
                                alt={`${collaborator.name} profile`}
                                className="h-10 w-10 rounded-full object-cover border-2 border-card-border"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                              />
                            ) : null}
                            <div className={`h-10 w-10 rounded-full bg-muted border-2 border-card-border flex items-center justify-center ${collaborator.photo ? 'hidden' : ''}`}>
                              <User className="h-5 w-5 text-muted-foreground" />
                            </div>
                          </div>
                          <div className="font-medium text-foreground">
                            {collaborator.name}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="text-muted-foreground">
                          {collaborator.role}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>
                              {formatDate(collaborator.participation.start)} → {formatDate(collaborator.participation.end)}
                            </span>
                          </div>
                          <Badge 
                            variant={collaborator.participation.status === "active" ? "default" : "secondary"}
                            className={collaborator.participation.status === "active" ? "bg-education text-education-foreground" : ""}
                          >
                            {collaborator.participation.status}
                          </Badge>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        {collaborator.links && (
                          <div className="flex items-center space-x-2">
                            {collaborator.links.github && (
                              <a
                                href={collaborator.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                title="GitHub Profile"
                              >
                                <Github className="h-4 w-4" />
                              </a>
                            )}
                            {collaborator.links.website && (
                              <a
                                href={collaborator.links.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                title="Personal Website"
                              >
                                <Globe className="h-4 w-4" />
                              </a>
                            )}
                            {collaborator.links.linkedin && (
                              <a
                                href={collaborator.links.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                title="LinkedIn Profile"
                              >
                                <Linkedin className="h-4 w-4" />
                              </a>
                            )}
                            {collaborator.links.twitter && (
                              <a
                                href={collaborator.links.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                title="X Profile"
                              >
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                              </a>
                            )}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaboratorsSection;