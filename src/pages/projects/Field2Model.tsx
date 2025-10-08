import { Layers, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Field2Model = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHeader 
        title="Field2Model"
        subtitle="End-to-end reproducible workflow from field data acquisition to 3D geological modeling in an integrated technology stack"
        icon={<Layers className="h-8 w-8 text-primary" />}
      >
        <div className="flex flex-wrap gap-4 mt-6">
          <Button asChild variant="default">
            <a 
              href="https://geo.lab/field2model" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Access Workflow</span>
            </a>
          </Button>
          <Button asChild variant="outline">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </Button>
        </div>
      </PageHeader>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                Field2Model revolutionizes geological workflow by providing a seamless, 
                reproducible pipeline that transforms raw field observations into sophisticated 
                3D geological models. This integrated approach ensures data integrity, 
                traceability, and scientific reproducibility throughout the entire modeling process.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Workflow Components</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-muted/30 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-2">1</div>
                    <h4 className="font-semibold text-foreground mb-2">Data Acquisition</h4>
                    <p className="text-sm text-muted-foreground">
                      Standardized field data collection with mobile apps and digital tools
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-2">2</div>
                    <h4 className="font-semibold text-foreground mb-2">Processing Pipeline</h4>
                    <p className="text-sm text-muted-foreground">
                      Automated data validation, cleaning, and geometric processing
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-2">3</div>
                    <h4 className="font-semibold text-foreground mb-2">3D Modeling</h4>
                    <p className="text-sm text-muted-foreground">
                      Implicit surface modeling with uncertainty quantification
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">Reproducible Workflows</h4>
                    <p className="text-sm text-muted-foreground">
                      Container-based processing ensuring consistent results across platforms
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">Real-time Validation</h4>
                    <p className="text-sm text-muted-foreground">
                      Immediate feedback on data quality and model constraints
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">Version Control</h4>
                    <p className="text-sm text-muted-foreground">
                      Complete provenance tracking from field notes to final models
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">Collaborative Platform</h4>
                    <p className="text-sm text-muted-foreground">
                      Multi-user environment for team-based geological projects
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">Export Flexibility</h4>
                    <p className="text-sm text-muted-foreground">
                      Multiple output formats compatible with industry software
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">Cloud Deployment</h4>
                    <p className="text-sm text-muted-foreground">
                      Scalable computing resources for complex modeling tasks
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Applications</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <ul className="space-y-2">
                <li>Regional geological mapping and structural analysis</li>
                <li>Mineral exploration and resource modeling</li>
                <li>Environmental and geotechnical site characterization</li>
                <li>Academic research and teaching applications</li>
                <li>Geohazard assessment and risk evaluation</li>
                <li>Carbon sequestration and geothermal projects</li>
              </ul>
            </CardContent>
          </Card>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Field2Model;