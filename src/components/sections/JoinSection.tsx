import { useEffect, useState } from "react";
import { UserPlus, CheckCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface FormField {
  id: string;
  label: string;
  type: string;
  required: boolean;
  placeholder: string;
  rows?: number;
}

interface JoinData {
  header: {
    title: string;
    subtitle: string;
  };
  eligibility: {
    title: string;
    description: string;
    requirements: string[];
  };
  form: {
    title: string;
    note: string;
    fields: FormField[];
    submitButton: {
      label: string;
      action: string;
    };
  };
}

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxJU_xy7FoJINMVX8pwJYuTan7LH5Cv3Z8qrHNyteGNtPETtJo9C7bthgpjyYUXRt2U2g/exec'; // <-- paste your URL

const JoinSection = () => {
  const [data, setData] = useState<JoinData | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [submitEmail, setSubmitEmail] = useState<string>('');

  useEffect(() => {
    fetch('/data/join.json')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  const handleInputChange = (id: string, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  // === UPDATED handleSubmit ===
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.title) {
      toast({
        title: "Missing info",
        description: "Please fill in Name, Email, and Project title.",
        variant: "destructive",
      });
      return;
    }

    try {
      const res = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          title: formData.title,
          description: formData.description || ""
        }),
      });

      const data = await res.json();

      if (data.ok) {
        toast({
          title: "Proposal submitted!",
          description: "Your details were saved to our Google Sheet.",
        });
        setSubmitEmail(formData.email || '');
        setSubmitted(true);
        setFormData({});
      } else {
        throw new Error(data.error || "Unknown error");
      }
    } catch (err: any) {
      toast({
        title: "Submission failed",
        description: err?.message || "Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!data) return null;

  return (
    <section id="join" className="py-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <UserPlus className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading">
              {data.header.title}
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {data.header.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">
              {data.eligibility.title}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {data.eligibility.description}
            </p>
            <ul className="space-y-3">
              {data.eligibility.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-education mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground leading-relaxed">
                    {requirement}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-card-border rounded-lg p-8 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-2 font-heading">
              {data.form.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              {data.form.note}
            </p>

            {submitted ? (
              <div className="rounded-lg border border-card-border p-6 bg-muted/30 text-foreground">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-600" />
                  <div>
                    <h4 className="font-semibold mb-1">Thanks! We’ve received your submission.</h4>
                    <p className="text-sm text-muted-foreground">
                      A confirmation email has been sent{submitEmail ? ` to ${submitEmail}` : ''}. You can close this page or submit another proposal below.
                    </p>
                    <Button className="mt-4" onClick={() => setSubmitted(false)}>Submit another proposal</Button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {data.form.fields.map((field) => (
                  <div key={field.id}>
                    <Label htmlFor={field.id} className="text-foreground font-medium">
                      {field.label}
                      {field.required && <span className="text-destructive ml-1">*</span>}
                    </Label>
                    {field.type === "textarea" ? (
                      <Textarea
                        id={field.id}
                        placeholder={field.placeholder}
                        required={field.required}
                        rows={field.rows || 4}
                        value={formData[field.id] || ''}
                        onChange={(e) => handleInputChange(field.id, e.target.value)}
                        className="mt-2 bg-input border-input-border"
                      />
                    ) : (
                      <Input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        value={formData[field.id] || ''}
                        onChange={(e) => handleInputChange(field.id, e.target.value)}
                        className="mt-2 bg-input border-input-border"
                      />
                    )}
                  </div>
                ))}

                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  size="lg"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  {data.form.submitButton.label}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
