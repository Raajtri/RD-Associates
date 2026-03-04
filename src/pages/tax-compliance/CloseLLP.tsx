import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { submitToFormspree } from "@/utils/formspree";

export default function CloseLLP() {
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
              Close LLP / LLP Strike Off
            </h1>

            <p className="text-muted-foreground mb-6">
              Legally close your Limited Liability Partnership (LLP) 
              and complete strike-off process under LLP Act.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Voluntary LLP Closure</li>
              <li>✔ Filing Form 24 with MCA</li>
              <li>✔ Compliance Clearance</li>
              <li>✔ End-to-End Support</li>
            </ul>
          </div>

          {/* CTA FORM */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Close Your LLP
            </h3>

            <form className="space-y-4" onSubmit={submitToFormspree}>
              <input type="text" name="llpname" placeholder="LLP Name" required className="w-full p-3 rounded-lg text-black" />
              <input type="email" name="email" placeholder="Email Address" required className="w-full p-3 rounded-lg text-black" />
              <input type="tel" name="phone" placeholder="Contact Number" required className="w-full p-3 rounded-lg text-black" />
              <button type="submit" className="w-full bg-background text-primary py-3 rounded-lg font-semibold">
                Start Closure Process
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
              What is LLP Closure?
            </h2>
            <p className="text-muted-foreground leading-7">
              LLP closure or strike off is the legal process of removing 
              the LLP name from MCA records when business operations have ceased.
            </p>
          </div>

          {/* ELIGIBILITY */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Eligibility for LLP Strike Off
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ No Business Activity</li>
              <li>✔ No Outstanding Liabilities</li>
              <li>✔ Up-to-date ROC Compliance</li>
              <li>✔ Bank Account Closed</li>
            </ul>
          </div>

          {/* PROCESS */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              LLP Closure Process
            </h2>
            <div className="space-y-4">
              {[
                "Close Bank Account",
                "Clear Pending Returns",
                "Obtain Partner Consent",
                "File Form 24 with MCA",
                "MCA Review & Approval"
              ].map((step, index) => (
                <div key={index} className="bg-muted p-4 rounded-lg">
                  Step {index + 1}: {step}
                </div>
              ))}
            </div>
          </div>

          {/* DOCUMENTS */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Documents Required
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Statement of Accounts</li>
              <li>✔ Affidavit & Indemnity Bond</li>
              <li>✔ Partner Consent</li>
              <li>✔ Copy of Latest ITR (if applicable)</li>
            </ul>
          </div>

          {/* PENALTY */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Important Considerations
            </h2>
            <p className="text-muted-foreground leading-7">
              LLP must clear all statutory compliances before applying for strike-off 
              to avoid future penalties or legal issues.
            </p>
          </div>

          {/* FAQ */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>

            {[
              "Can inactive LLP be closed?",
              "How long does LLP strike off take?",
              "Is audit required before closure?"
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
                    Closure timeline depends on compliance status and MCA processing.
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