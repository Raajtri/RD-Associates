import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, FileText, Shield, Clock, IndianRupee } from "lucide-react";

const CompanyRegistration = () => {
  const benefits = [
    "Limited Liability Protection",
    "Separate Legal Entity",
    "Easy Transfer of Ownership",
    "Access to Funding",
    "Tax Benefits",
    "Perpetual Existence",
  ];

  const documents = [
    "PAN Card of all Directors",
    "Aadhaar Card of all Directors",
    "Passport Size Photographs",
    "Address Proof (Electricity Bill/Bank Statement)",
    "Rent Agreement (if rented premises)",
    "NOC from Owner",
  ];

  const packages = [
    {
      name: "Basic",
      price: "999",
      features: [
        "Company Name Approval",
        "Digital Signature Certificate (1)",
        "Director Identification Number",
        "MOA & AOA Drafting",
        "Certificate of Incorporation",
      ],
      highlighted: false,
    },
    {
      name: "Standard",
      price: "4,999",
      features: [
        "Everything in Basic",
        "PAN & TAN Registration",
        "GST Registration",
        "Current Account Opening Support",
        "Compliance Calendar",
      ],
      highlighted: true,
    },
    {
      name: "Premium",
      price: "9,999",
      features: [
        "Everything in Standard",
        "Trademark Registration",
        "MSME Registration",
        "Legal Agreement Templates",
        "1 Year Compliance Support",
      ],
      highlighted: false,
    },
  ];

  return (
    <Layout>
      {/* Page Banner */}
      <section className="page-banner">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Private Limited Company Registration
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/80">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Company Registration</span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-badge">Start Your Business</span>
              <h2 className="section-title text-foreground">
                Register Your Private Limited Company
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                A Private Limited Company is the most popular business structure in India. It provides limited liability protection to shareholders while offering flexibility in operations.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="bg-accent hover:bg-accent-light">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="text-2xl font-bold mb-6 font-heading">Quick Enquiry</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary-dark">
                  Submit Enquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="section-badge">Our Process</span>
            <h2 className="section-title text-foreground">
              Simple 4-Step Registration Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: FileText, title: "Submit Documents", desc: "Share required documents online" },
              { icon: Shield, title: "Name Approval", desc: "Get company name approved by MCA" },
              { icon: Clock, title: "Documentation", desc: "We prepare all legal documents" },
              { icon: CheckCircle2, title: "Get Incorporated", desc: "Receive Certificate of Incorporation" },
            ].map((step, index) => (
              <div key={step.title} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold mb-2 font-heading">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="section-badge">Pricing</span>
            <h2 className="section-title text-foreground">
              Choose Your Package
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-8 ${
                  pkg.highlighted
                    ? "bg-primary text-white shadow-xl scale-105"
                    : "bg-card shadow-card"
                }`}
              >
                <h3 className="text-xl font-semibold mb-2 font-heading">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <IndianRupee className="w-5 h-5" />
                  <span className="text-4xl font-bold font-heading">{pkg.price}</span>
                  <span className={pkg.highlighted ? "text-white/70" : "text-muted-foreground"}>+ Govt Fee</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className={`w-5 h-5 ${pkg.highlighted ? "text-white" : "text-primary"}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full ${
                    pkg.highlighted
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-primary hover:bg-primary-dark"
                  }`}
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="section-badge">Documents</span>
            <h2 className="section-title text-foreground">
              Documents Required
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {documents.map((doc, index) => (
              <div key={doc} className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-sm">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                  {index + 1}
                </span>
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CompanyRegistration;
