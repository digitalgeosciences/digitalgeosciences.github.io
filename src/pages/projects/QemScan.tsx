import { Microscope, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const QemScan = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHeader 
        title="QEMSCAN Pipeline"
        subtitle="Advanced automated mineralogical analysis workflow for comprehensive mineral characterization and quantitative analysis"
        icon={<Microscope className="h-8 w-8 text-primary" />}
      >
        <div className="flex flex-wrap gap-4 mt-6">
          <Button asChild variant="default">
            <a 
              href="https://geo.lab/qemscan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Access Tool</span>
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
                The QEMSCAN Pipeline represents a cutting-edge approach to automated mineralogical analysis, 
                leveraging advanced scanning electron microscopy and energy-dispersive X-ray spectroscopy 
                techniques. This comprehensive workflow enables researchers to perform detailed mineral 
                characterization with unprecedented accuracy and efficiency.
              </p>
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
                    <h4 className="font-semibold text-foreground">Automated Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      Streamlined workflow for processing large datasets with minimal manual intervention
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">High-Resolution Imaging</h4>
                    <p className="text-sm text-muted-foreground">
                      Advanced SEM capabilities for detailed mineral texture analysis
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">Quantitative Results</h4>
                    <p className="text-sm text-muted-foreground">
                      Precise mineral abundance and distribution measurements
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">Open Standards</h4>
                    <p className="text-sm text-muted-foreground">
                      Compatible with industry-standard formats and protocols
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
                <li>Mining exploration and resource evaluation</li>
                <li>Ore deposit characterization and grade control</li>
                <li>Environmental impact assessment</li>
                <li>Academic research in mineralogy and petrology</li>
                <li>Quality control in mineral processing</li>
              </ul>
            </CardContent>
          </Card>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default QemScan;