import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const OnePersonCompany = () => {
  return (
    <Layout>
      {/* Page Banner */}
      <section className="page-banner">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            One Person Company (OPC) Registration
          </h1>

          <div className="flex items-center justify-center gap-2 text-white/80">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span>OPC Registration</span>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div>
              <span className="section-badge">Start Business</span>

              <h2 className="section-title">
                OPC Registration – Start Your Business with Full Control
              </h2>

              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                One Person Company (OPC) allows a single entrepreneur to
                start and operate a company with limited liability and
                full ownership control.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <span>Single owner with full decision-making power</span>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <span>Limited liability protection</span>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <span>Separate legal entity status</span>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <span>Better credibility & funding opportunities</span>
                </div>
              </div>

              <Button asChild className="bg-primary hover:bg-primary-dark">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Right Form Card */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="text-2xl font-bold mb-6">
                Get Free Consultation
              </h3>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg border"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border"
                />

                <Button className="w-full bg-accent hover:bg-accent-light">
                  Submit Now
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OnePersonCompany;