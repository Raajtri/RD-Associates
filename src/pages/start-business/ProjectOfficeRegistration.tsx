import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { submitToFormspree } from "@/utils/formspree";

export default function ProjectOfficeRegistration() {
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
              Project Office Registration in India
            </h1>

            <p className="text-muted-foreground mb-6">
              Set up a legally compliant Project Office in India for executing 
              specific contracts awarded to foreign companies under RBI and FEMA regulations.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li>✔ RBI & FEMA Compliant Structure</li>
              <li>✔ Limited to Specific Project Execution</li>
              <li>✔ Full Regulatory Filing Support</li>
              <li>✔ End-to-End Incorporation Assistance</li>
            </ul>
          </div>

          {/* FORM */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Set Up Your Project Office
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
              Project Office Setup Cost
            </h2>

            <ul className="space-y-3">
              <li>✔ RBI Approval Assistance</li>
              <li>✔ ROC Registration Filing</li>
              <li>✔ PAN, TAN & Bank Account Setup</li>
              <li>✔ FEMA Compliance Advisory</li>
            </ul>
          </div>

          <div className="bg-background text-foreground p-8 rounded-xl text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Starting From</h3>
            <p className="text-4xl font-bold text-primary mb-4">
              ₹25,000 + Govt Charges
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg">
              Schedule Consultation
            </button>
          </div>

        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

          {/* SIDEBAR */}
          <div className="md:col-span-1">
            <div className="bg-background p-6 rounded-xl shadow">
              <h3 className="font-bold mb-4">Project Office Guide</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Overview</li>
                <li>Eligibility</li>
                <li>Documents</li>
                <li>Approval Process</li>
                <li>Compliance</li>
                <li>Taxation</li>
                <li>Timeline</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>

          {/* CONTENT */}
          <div className="md:col-span-3 space-y-16">

            {/* OVERVIEW */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                What is a Project Office?
              </h2>
              <p className="text-muted-foreground leading-7">
                A Project Office is a temporary place of business established 
                by a foreign company in India for executing a specific project 
                awarded by an Indian company.
              </p>
              <p className="text-muted-foreground mt-4 leading-7">
                It is governed under FEMA (Foreign Exchange Management Act) 
                and requires prior approval from the Reserve Bank of India (RBI).
              </p>
            </div>

            {/* ELIGIBILITY */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Eligibility Criteria
              </h2>

              <ul className="space-y-3 text-muted-foreground">
                <li>✔ Secured Project Contract from Indian Company</li>
                <li>✔ Project Funded by Inward Remittance</li>
                <li>✔ Approval from RBI (if required)</li>
                <li>✔ Valid Constitutional Documents of Foreign Company</li>
              </ul>
            </div>

            {/* DOCUMENTS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Documents Required
              </h2>

              <ul className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                <li>✔ Certificate of Incorporation of Foreign Company</li>
                <li>✔ Memorandum & Articles of Association</li>
                <li>✔ Board Resolution</li>
                <li>✔ Project Contract Copy</li>
                <li>✔ Audited Financial Statements</li>
                <li>✔ KYC of Authorized Representative</li>
              </ul>
            </div>

            {/* PROCESS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Registration Process
              </h2>

              <div className="space-y-4">
                {[
                  "Prepare Application for RBI",
                  "Obtain RBI Approval (if required)",
                  "File Form FC-1 with ROC",
                  "Obtain PAN & TAN",
                  "Open Bank Account in India"
                ].map((step, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    Step {index + 1}: {step}
                  </div>
                ))}
              </div>
            </div>

            {/* COMPLIANCE */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Compliance Requirements
              </h2>

              <ul className="space-y-3 text-muted-foreground">
                <li>✔ Annual Filing with ROC</li>
                <li>✔ Income Tax Return Filing</li>
                <li>✔ Maintenance of Books of Accounts</li>
                <li>✔ FEMA Compliance Reporting</li>
              </ul>
            </div>

            {/* TAXATION */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Taxation of Project Office
              </h2>

              <p className="text-muted-foreground leading-7">
                Project Office income is taxable in India at applicable 
                corporate tax rates. GST registration may be required 
                depending on the nature of the project.
              </p>
            </div>

            {/* FAQ */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Frequently Asked Questions
              </h2>

              {[
                "Is RBI approval mandatory?",
                "Can Project Office undertake multiple projects?",
                "Is GST registration required?"
              ].map((question, index) => (
                <div key={index} className="border-b py-4">
                  <button onClick={() => toggleFAQ(index)} className="w-full text-left font-medium">
                    {question}
                  </button>
                  {openFAQ === index && (
                    <p className="text-muted-foreground mt-2 text-sm">
                      It depends on project funding structure and regulatory requirements.
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