import { Eye, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RockVision = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHeader 
        title="RockVision"
        subtitle="Advanced thin section classifier powered by deep learning for automated mineral identification and petrographic analysis"
        icon={<Eye className="h-8 w-8 text-primary" />}
      >
        <div className="flex flex-wrap gap-4 mt-6">
          <Button asChild variant="default">
            <a 
              href="https://geo.lab/rockvision" 
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
                RockVision revolutionizes petrographic analysis through state-of-the-art deep learning 
                algorithms specifically designed for thin section classification. By combining advanced 
                computer vision techniques with geological expertise, RockVision enables rapid and 
                accurate identification of minerals and rock textures.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Deep Learning Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">Convolutional Neural Networks</h4>
                    <p className="text-sm text-muted-foreground">
                      Custom CNN architecture optimized for geological textures and mineral patterns
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">Transfer Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Pre-trained models fine-tuned on extensive geological datasets
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">Multi-scale Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      Analysis at multiple magnifications for comprehensive characterization
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">Uncertainty Quantification</h4>
                    <p className="text-sm text-muted-foreground">
                      Confidence scores and uncertainty estimates for reliable predictions
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technical Capabilities</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <ul className="space-y-2">
                <li>Automatic mineral identification across 100+ mineral species</li>
                <li>Texture analysis and fabric recognition</li>
                <li>Real-time processing with GPU acceleration</li>
                <li>Batch processing for large datasets</li>
                <li>Integration with standard petrographic software</li>
                <li>Customizable training for specific mineral assemblages</li>
              </ul>
            </CardContent>
          </Card>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RockVision;