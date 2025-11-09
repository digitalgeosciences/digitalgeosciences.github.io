import { useEffect, useState } from "react";
import { Mail, MapPin, Github, Globe, ExternalLink } from "lucide-react";

interface SiteConfig {
  site: {
    title: string;
    contact: string;
    url: string;
    address: {
      city: string;
      postalCode: string;
      country: string;
    };
    github: string;
  };
}

const Footer = () => {
  const [config, setConfig] = useState<SiteConfig | null>(null);

  useEffect(() => {
    fetch('/data/site-config.json')
      .then(res => res.json())
      .then(setConfig)
      .catch(console.error);
  }, []);

  if (!config) return null;

  return (
    <footer className="border-t border-card-border bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground mb-6 flex items-center space-x-2">
              <Mail className="h-5 w-5 text-primary" />
              <span>Contact Us</span>
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${config.site.contact}`}
                  className="text-primary hover:text-primary/80 hover:underline transition-colors"
                >
                  {config.site.contact}
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <ExternalLink className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <a
                  href={`https://${config.site.url.replace('https://', '')}`}
                  className="text-primary hover:text-primary/80 hover:underline transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {config.site.url.replace('https://', '')}
                </a>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground mb-6 flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Address</span>
            </h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <div>{config.site.address.city}</div>
              <div>{config.site.address.postalCode}</div>
              <div>{config.site.address.country}</div>
            </div>
          </div>

          {/* Supporters */}

          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground mb-6">Supporters</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 group">
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <a
                  href="https://geoarabia.com/"
                  className="text-primary hover:text-primary/80 hover:underline transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GeoArabia Community
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground pt-8 border-t border-card-border">
          <p className="leading-relaxed">
            © 2025 {config.site.title}. Born with open science values.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;