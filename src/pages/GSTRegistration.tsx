import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, IndianRupee } from "lucide-react";
import { submitToFormspree } from "@/utils/formspree";

const GSTRegistration = () => {
  const benefits = [
    "Legal Recognition",
    "Input Tax Credit",
    "Interstate Sales",
    "E-commerce Selling",
    "Business Growth",
    "Government Tenders",
  ];

  const whoNeeds = [
    "Businesses with turnover exceeding ₹40 lakhs (₹20 lakhs for services)",
    "Interstate suppliers of goods or services",
    "E-commerce operators and sellers",
    "Casual taxable persons",
    "Non-resident taxable persons",
    "Agents and input service distributors",
  ];

  return (
    <Layout>
      {/* Page Banner */}
      <section className="page-banner">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            GST Registration
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/80">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>GST Registration</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">

          <h2 className="section-title text-center mb-16">
                Other Tax & Compliance Services
          </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* GST Filing */}
      <div className="service-card">
        <h3 className="text-xl font-bold mb-3">GST Filing</h3>
        <p className="text-muted-foreground">
          Accurate and timely GST return filing to avoid penalties.
        </p>
      </div>

      {/* GST Cancellation */}
      <div className="service-card">
        <h3 className="text-xl font-bold mb-3">
          GST Cancellation & Revocation
        </h3>
        <p className="text-muted-foreground">
          Hassle-free cancellation and revocation support.
        </p>
      </div>

      {/* HSN Code Finder */}
      <div className="service-card">
        <h3 className="text-xl font-bold mb-3">HSN Code Finder</h3>
        <p className="text-muted-foreground">
          Identify correct HSN codes for your products.
        </p>
      </div>

      {/* Annual Compliance */}
      <div className="service-card">
        <h3 className="text-xl font-bold mb-3">
          Annual Compliance Services
        </h3>
        <p className="text-muted-foreground">
          Complete yearly compliance for companies and LLPs.
        </p>
      </div>

      {/* PF Registration */}
      <div className="service-card">
        <h3 className="text-xl font-bold mb-3">
          Provident Fund Registration
        </h3>
        <p className="text-muted-foreground">
          PF registration and compliance management.
        </p>
      </div>

      {/* Corporate Tax */}
      <div className="service-card">
        <h3 className="text-xl font-bold mb-3">
          Corporate Tax
        </h3>
        <p className="text-muted-foreground">
          Corporate tax planning and return filing services.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-badge">Tax Compliance</span>
              <h2 className="section-title text-foreground">
                Get Your GST Number Today
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                GST (Goods and Services Tax) registration is mandatory for businesses exceeding specified turnover limits or involved in interstate trade. Get your GSTIN and start conducting business legally.
              </p>

              <h3 className="text-xl font-semibold mb-4 font-heading">Benefits of GST Registration</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4 font-heading">Who Needs GST Registration?</h3>
              <ul className="space-y-3 mb-8">
                {whoNeeds.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-secondary rounded-xl p-6 mb-8">
                <div className="flex items-center gap-4">
                  <IndianRupee className="w-10 h-10 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Starting from</p>
                    <p className="text-3xl font-bold font-heading">₹999</p>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="bg-accent hover:bg-accent-light">
                <Link to="/contact">
                  Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h3 className="text-2xl font-bold mb-6 font-heading">Documents Required</h3>
                <ul className="space-y-3">
                  {[
                    "PAN Card of Business",
                    "Aadhaar Card of Proprietor/Partners/Directors",
                    "Business Address Proof",
                    "Bank Account Statement/Cancelled Cheque",
                    "Photograph of Authorized Signatory",
                    "Business Registration Certificate",
                  ].map((doc) => (
                    <li key={doc} className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 font-heading">Quick Consultation</h3>
                <p className="mb-6 opacity-90">
                  Speak with our GST experts to understand your registration requirements.
                </p>
                <form onSubmit={submitToFormspree} className="space-y-4">
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder:text-white/60 focus:ring-2 focus:ring-white focus:border-transparent"
                  />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder:text-white/60 focus:ring-2 focus:ring-white focus:border-transparent"
                  />
                  <Button type="submit" className="w-full bg-accent hover:bg-accent-light">
                    Get Callback
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};


export default GSTRegistration;
