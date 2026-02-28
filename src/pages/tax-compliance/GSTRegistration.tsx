import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function GSTRegistration() {
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
              GST Registration in India
            </h1>

            <p className="text-muted-foreground mb-6">
              Register your business under the Goods and Services Tax (GST) Act 
              and legally collect tax on goods and services across India.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Government Authorized GST Registration</li>
              <li>✔ Fast Application Processing</li>
              <li>✔ PAN-Based GSTIN Issuance</li>
              <li>✔ Complete Compliance Assistance</li>
            </ul>
          </div>

          {/* CONSULTATION FORM */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Apply for GST Registration
            </h3>

            <form
              action="https://formspree.io/f/yourformid"
              method="POST"
              className="space-y-4"
            >
              <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded-lg text-black" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded-lg text-black" />
              <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-3 rounded-lg text-black" />
              <button type="submit" className="w-full bg-background text-primary py-3 rounded-lg font-semibold">
                Get Started
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
              GST Registration Cost
            </h2>
            <ul className="space-y-3">
              <li>✔ Application Filing</li>
              <li>✔ ARN Generation</li>
              <li>✔ GSTIN Issuance</li>
              <li>✔ Basic Advisory</li>
            </ul>
          </div>

          <div className="bg-background text-foreground p-8 rounded-xl text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Starting From</h3>
            <p className="text-4xl font-bold text-primary mb-4">
              ₹1,499 + Govt Fees
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg">
              Apply Now
            </button>
          </div>

        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

          {/* SIDEBAR */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-background p-6 rounded-xl shadow sticky top-24">
              <h3 className="font-bold mb-4 text-primary">GST Guide</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Overview</li>
                <li>Eligibility</li>
                <li>Documents Required</li>
                <li>GST Threshold</li>
                <li>Process</li>
                <li>Penalties</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>

          {/* CONTENT */}
          <div className="md:col-span-3 space-y-16">

            {/* OVERVIEW */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                What is GST Registration?
              </h2>
              <p className="text-muted-foreground leading-7">
                GST Registration is mandatory for businesses whose turnover exceeds 
                prescribed limits under the GST Act.
              </p>
            </div>

            {/* ELIGIBILITY */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Who Must Register for GST?
              </h2>

              <ul className="space-y-3 text-muted-foreground">
                <li>✔ Businesses exceeding ₹40 Lakhs turnover (₹20 Lakhs for services)</li>
                <li>✔ E-commerce sellers</li>
                <li>✔ Inter-state suppliers</li>
                <li>✔ Casual taxable persons</li>
              </ul>
            </div>

            {/* DOCUMENTS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Documents Required
              </h2>

              <ul className="space-y-3 text-muted-foreground">
                <li>✔ PAN Card of Business</li>
                <li>✔ Aadhaar of Promoter</li>
                <li>✔ Business Address Proof</li>
                <li>✔ Bank Account Details</li>
                <li>✔ Photograph</li>
              </ul>
            </div>

            {/* PROCESS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                GST Registration Process
              </h2>

              <div className="space-y-4">
                {[
                  "Prepare Documents",
                  "Submit Online Application",
                  "Generate ARN",
                  "Verification by GST Officer",
                  "GSTIN Allotment"
                ].map((step, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    Step {index + 1}: {step}
                  </div>
                ))}
              </div>
            </div>

            {/* PENALTIES */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Penalty for Non-Registration
              </h2>
              <p className="text-muted-foreground leading-7">
                Failure to obtain GST registration may result in penalties 
                up to 10% of tax due or ₹10,000, whichever is higher.
              </p>
            </div>

            {/* FAQ */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Frequently Asked Questions
              </h2>

              {[
                "Is GST mandatory for small businesses?",
                "How long does GST registration take?",
                "Can I cancel GST registration later?"
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
                      GST requirements depend on turnover and business type.
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