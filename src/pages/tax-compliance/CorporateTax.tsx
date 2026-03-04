import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { submitToFormspree } from "@/utils/formspree";

export default function CorporateTax() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Corporate Tax Advisory & Compliance
            </h1>

            <p className="text-muted-foreground mb-6">
              End-to-end corporate tax planning, compliance, and advisory 
              services for companies operating in India.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Corporate Income Tax Filing</li>
              <li>✔ Tax Planning & Optimization</li>
              <li>✔ MAT & AMT Advisory</li>
              <li>✔ Transfer Pricing Support</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Consult Corporate Tax Expert
            </h3>

            <form
            onSubmit={submitToFormspree} className="space-y-4"
            >
              <input type="text" name="name" placeholder="Company Name" required className="w-full p-3 rounded-lg text-black" />
              <input type="email" name="email" placeholder="Email Address" required className="w-full p-3 rounded-lg text-black" />
              <input type="tel" name="phone" placeholder="Contact Number" required className="w-full p-3 rounded-lg text-black" />
              <button type="submit" className="w-full bg-background text-primary py-3 rounded-lg font-semibold">
                Get Consultation
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 space-y-16">

          {/* OVERVIEW */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              What is Corporate Tax?
            </h2>
            <p className="text-muted-foreground leading-7">
              Corporate tax is levied on profits earned by companies under 
              the Income Tax Act. Companies must compute taxable income 
              and file annual returns accordingly.
            </p>
          </div>

          {/* TAX RATES */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Corporate Tax Rates
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ 22% for Domestic Companies (New Regime)</li>
              <li>✔ 25% for Eligible Companies</li>
              <li>✔ MAT Applicable in Certain Cases</li>
              <li>✔ Surcharge & Cess as Applicable</li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Our Corporate Tax Services
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Corporate ITR Filing</li>
              <li>✔ Advance Tax Planning</li>
              <li>✔ Transfer Pricing Documentation</li>
              <li>✔ Tax Audit Support</li>
              <li>✔ Notice & Assessment Handling</li>
            </ul>
          </div>

          {/* BENEFITS */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Why Professional Corporate Tax Planning?
            </h2>
            <p className="text-muted-foreground leading-7">
              Effective tax planning reduces liabilities, avoids litigation, 
              and ensures smooth compliance with evolving regulations.
            </p>
          </div>

          {/* FAQ */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>

            {[
              "Is corporate tax different from personal income tax?",
              "What is MAT?",
              "When is corporate ITR due?"
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
                    Corporate tax rules depend on company structure and turnover.
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}