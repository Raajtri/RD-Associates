import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { submitToFormspree } from "@/utils/formspree";

export default function MLMRegistration() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              MLM Company Registration in India
            </h1>

            <p className="text-muted-foreground mb-6">
              Start a legally compliant Multi-Level Marketing (MLM) or 
              Direct Selling Business in India with proper corporate and 
              regulatory structure.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Private Limited Company Structure</li>
              <li>✔ Direct Selling Guidelines Compliance</li>
              <li>✔ Legal Documentation & Policies</li>
              <li>✔ End-to-End Setup Assistance</li>
            </ul>
          </div>

          {/* CONSULTATION FORM */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Start Your MLM Business
            </h3>

            <form
             onSubmit={submitToFormspree}
              className="space-y-4"
            >
              <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded-lg text-black" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded-lg text-black" />
              <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-3 rounded-lg text-black" />
              <button type="submit" className="w-full bg-background text-primary py-3 rounded-lg font-semibold">
                Get Consultation
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* PRICING */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              MLM Registration Cost
            </h2>

            <ul className="space-y-3">
              <li>✔ Private Limited Company Incorporation</li>
              <li>✔ MLM Legal Policy Drafting</li>
              <li>✔ Compensation Plan Review</li>
              <li>✔ Compliance Advisory</li>
            </ul>
          </div>

          <div className="bg-background text-foreground p-8 rounded-xl text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Starting From</h3>
            <p className="text-4xl font-bold text-primary mb-4">
              ₹45,000 + Govt Fees
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

          {/* SIDEBAR */}
          <div className="md:col-span-1">
            <div className="bg-background p-6 rounded-xl shadow sticky top-24">
              <h3 className="font-bold mb-4">MLM Registration Guide</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Overview</li>
                <li>Legal Structure</li>
                <li>Compliance Requirements</li>
                <li>Documents</li>
                <li>Process</li>
                <li>Risks & Penalties</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>

          {/* CONTENT */}
          <div className="md:col-span-3 space-y-16">

            {/* OVERVIEW */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                What is an MLM Business?
              </h2>
              <p className="text-muted-foreground leading-7">
                Multi-Level Marketing (MLM), also known as Direct Selling, 
                is a distribution-based business model where income is earned 
                through product sales and network commissions.
              </p>
              <p className="text-muted-foreground mt-4 leading-7">
                In India, MLM businesses must comply with Consumer Protection 
                (Direct Selling) Rules and avoid pyramid or money circulation schemes.
              </p>
            </div>

            {/* LEGAL STRUCTURE */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Recommended Legal Structure
              </h2>

              <ul className="space-y-3 text-muted-foreground">
                <li>✔ Private Limited Company (Most Preferred)</li>
                <li>✔ LLP (Limited Liability Partnership)</li>
                <li>✔ Proper MOA Object Clause for Direct Selling</li>
              </ul>
            </div>

            {/* COMPLIANCE */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Compliance Requirements
              </h2>

              <ul className="space-y-3 text-muted-foreground">
                <li>✔ Direct Selling Guidelines Compliance</li>
                <li>✔ No Entry Fee-Based Scheme</li>
                <li>✔ Product-Based Compensation Plan</li>
                <li>✔ Transparent Refund Policy</li>
                <li>✔ GST Registration (if applicable)</li>
              </ul>
            </div>

            {/* PROCESS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Registration Process
              </h2>

              <div className="space-y-4">
                {[
                  "Incorporate Private Limited Company",
                  "Draft MLM Policies & Agreements",
                  "Design Legal Compensation Plan",
                  "GST & Bank Account Setup",
                  "Launch Operations"
                ].map((step, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    Step {index + 1}: {step}
                  </div>
                ))}
              </div>
            </div>

            {/* RISKS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Legal Risks & Penalties
              </h2>

              <ul className="space-y-3 text-muted-foreground">
                <li>✔ Ban under Prize Chits & Money Circulation Act</li>
                <li>✔ Criminal Liability for Pyramid Schemes</li>
                <li>✔ Consumer Protection Penalties</li>
              </ul>
            </div>

            {/* FAQ */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Frequently Asked Questions
              </h2>

              {[
                "Is MLM legal in India?",
                "Can I start MLM without company registration?",
                "Is GST mandatory for MLM business?"
              ].map((question, index) => (
                <div key={index} className="border-b py-4">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left font-medium"
                  >
                    {question}
                  </button>
                  {openFAQ === index && (
                    <p className="text-muted-foreground mt-2 text-sm">
                      MLM is legal if compliant with Direct Selling Rules and not structured as a pyramid scheme.
                    </p>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}