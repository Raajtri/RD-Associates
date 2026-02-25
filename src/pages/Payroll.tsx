import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Users, Calculator, Clock, Shield } from "lucide-react";

const Payroll = () => {
  const features = [
    {
      icon: Calculator,
      title: "Salary Processing",
      description: "Automated salary calculations with all statutory deductions accurately computed.",
    },
    {
      icon: Shield,
      title: "Statutory Compliance",
      description: "PF, ESI, PT, and TDS compliance handled seamlessly every month.",
    },
    {
      icon: Clock,
      title: "On-Time Payouts",
      description: "Ensure timely salary disbursement to all your employees.",
    },
    {
      icon: Users,
      title: "Employee Self-Service",
      description: "Employees can access payslips and tax declarations online.",
    },
  ];

  const services = [
    "Monthly Salary Processing",
    "PF Registration & Returns",
    "ESI Registration & Returns",
    "Professional Tax Compliance",
    "TDS on Salary",
    "Form 16 Generation",
    "Payslip Generation",
    "Full & Final Settlement",
    "Leave Management",
    "Attendance Management",
  ];

  return (
    <Layout>
      {/* Page Banner */}
      <section className="page-banner">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Payroll Services
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/80">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Payroll</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="section-badge">Our Expertise</span>
            <h2 className="section-title text-foreground">
              Complete Payroll Management
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Focus on growing your business while we handle your entire payroll process with 100% accuracy and compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-heading">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-badge">What We Offer</span>
              <h2 className="section-title text-foreground">
                Comprehensive Payroll Services
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                Our payroll services are designed to take the burden of salary processing and compliance off your shoulders, allowing you to focus on what matters most – your business.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {services.map((service) => (
                  <div key={service} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent-light">
                <Link to="/contact">
                  Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="text-2xl font-bold mb-6 font-heading">Request a Quote</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                />
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
                <input
                  type="number"
                  placeholder="Number of Employees"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary-dark">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Payroll;
