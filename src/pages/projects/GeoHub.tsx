import { Database, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GeoHub = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHeader 
        title="GeoHub"
        subtitle="Comprehensive data catalog and lifecycle management toolkit for geoscience research and collaborative data sharing"
        icon={<Database className="h-8 w-8 text-primary" />}
      >
        <div className="flex flex-wrap gap-4 mt-6">
          <Button asChild variant="default">
            <a 
              href="https://geo.lab/geohub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Access Platform</span>
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
                GeoHub serves as a centralized platform for managing the complete lifecycle of 
                geoscience data, from acquisition and processing to sharing and archival. 
                Built on FAIR data principles, GeoHub enables researchers to discover, access, 
                and collaborate on geological datasets with unprecedented ease and efficiency.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Management Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">Metadata Standards</h4>
                    <p className="text-sm text-muted-foreground">
                      Automated metadata generation following international geoscience standards
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">Version Control</h4>
                    <p className="text-sm text-muted-foreground">
                      Git-like versioning system for tracking data evolution and provenance
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">Quality Assurance</h4>
                    <p className="text-sm text-muted-foreground">
                      Automated validation and quality checks for data integrity
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">Access Control</h4>
                    <p className="text-sm text-muted-foreground">
                      Flexible permissions system for secure data sharing and collaboration
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">API Integration</h4>
                    <p className="text-sm text-muted-foreground">
                      RESTful APIs for seamless integration with analysis workflows
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">Cloud Storage</h4>
                    <p className="text-sm text-muted-foreground">
                      Scalable cloud infrastructure with global accessibility
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Supported Data Types</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <ul className="space-y-2">
                <li>Field measurements and observations</li>
                <li>Laboratory analytical results</li>
                <li>Geophysical and geochemical surveys</li>
                <li>Remote sensing and satellite data</li>
                <li>3D geological models and visualizations</li>
                <li>Publication and research outputs</li>
              </ul>
            </CardContent>
          </Card>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GeoHub;