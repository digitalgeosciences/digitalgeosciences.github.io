import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  icon?: ReactNode;
}

const PageHeader = ({ title, subtitle, children, icon }: PageHeaderProps) => {
  return (
    <div className="border-b border-card-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-3 mb-4">
            {icon}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading">
              {title}
            </h1>
          </div>
          {subtitle && (
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;