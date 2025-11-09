import { Eye, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GeoPrompts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHeader 
        title="GeoGallery"
        subtitle="Under development — an experimental GeoGallery"
        icon={<Eye className="h-8 w-8 text-primary" />}
      >
        <div className="flex flex-wrap gap-4 mt-6">
          <Button asChild variant="default">
            <a 
              href="https://digitalgeosciences.com/#" 
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
                GeoGallery is currently under development. 
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Development Goals</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <ul className="space-y-2">
                <li>Coming soon!</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Status</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                GeoGallery is in its early development stage. Check back soon for updates, demos, and documentation.
              </p>
            </CardContent>
          </Card>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GeoPrompts;
