import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { submitToFormspree } from "@/utils/formspree";

export default function LiaisonOfficeRegistration() {
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
              Liaison Office Registration in India
            </h1>

            <p className="text-muted-foreground mb-6">
              Establish a Liaison Office in India to represent your foreign 
              company without engaging in commercial activities.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li>✔ RBI Approval Required</li>
              <li>✔ No Commercial Income Allowed</li>
              <li>✔ Parent Company Representation</li>
              <li>✔ FEMA Compliant Structure</li>
            </ul>
          </div>

          {/* FORM */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Set Up Liaison Office
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

      {/* PRICING SECTION */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Liaison Office Setup Cost
            </h2>

            <ul className="space-y-3">
              <li>✔ RBI Application Filing</li>
              <li>✔ ROC Registration (Form FC-1)</li>
              <li>✔ PAN & Bank Account Setup</li>
              <li>✔ Annual Activity Certificate Filing</li>
            </ul>
          </div>

          <div className="bg-background text-foreground p-8 rounded-xl text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Starting From</h3>
            <p className="text-4xl font-bold text-primary mb-4">
              ₹28,000 + Govt Charges
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
            <div className="bg-background p-6 rounded-xl shadow">
              <h3 className="font-bold mb-4">Liaison Office Guide</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Overview</li>
                <li>Permitted Activities</li>
                <li>Restrictions</li>
                <li>Eligibility</li>
                <li>Documents</li>
                <li>Process</li>
                <li>Compliance</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>

          {/* CONTENT */}
          <div className="md:col-span-3 space-y-16">

            {/* OVERVIEW */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                What is a Liaison Office?
              </h2>
              <p className="text-muted-foreground leading-7">
                A Liaison Office acts as a communication channel between 
                the foreign parent company and Indian entities.
              </p>
              <p className="text-muted-foreground mt-4 leading-7">
                It is not allowed to undertake any commercial or income-generating 
                activities in India.
              </p>
            </div>

            {/* PERMITTED ACTIVITIES */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Permitted Activities
              </h2>

              <ul className="space-y-3 text-muted-foreground">
                <li>✔ Represent Parent Company</li>
                <li>✔ Promote Export/Import</li>
                <li>✔ Facilitate Technical Collaboration</li>
                <li>✔ Communication & Coordination</li>
              </ul>
            </div>

            {/* RESTRICTIONS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Restrictions
              </h2>

              <ul className="space-y-3 text-muted-foreground">
                <li>✘ Cannot Earn Income in India</li>
                <li>✘ Cannot Enter into Commercial Contracts</li>
                <li>✘ Cannot Issue Invoices</li>
              </ul>
            </div>

            {/* ELIGIBILITY */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Eligibility Criteria
              </h2>

              <ul className="space-y-3 text-muted-foreground">
                <li>✔ Profitable Track Record of 3 Years</li>
                <li>✔ Net Worth of USD 50,000+</li>
                <li>✔ RBI Approval Mandatory</li>
              </ul>
            </div>

            {/* PROCESS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Registration Process
              </h2>

              <div className="space-y-4">
                {[
                  "Apply to RBI through AD Bank",
                  "Obtain Approval Letter",
                  "Register with ROC (Form FC-1)",
                  "Open Bank Account",
                  "Commence Operations"
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
                <li>✔ Annual Activity Certificate (AAC)</li>
                <li>✔ ROC Annual Filing</li>
                <li>✔ FEMA Reporting</li>
                <li>✔ Income Tax Filing (if applicable)</li>
              </ul>
            </div>

            {/* FAQ */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Frequently Asked Questions
              </h2>

              {[
                "Can Liaison Office generate revenue?",
                "Is GST registration required?",
                "How long does RBI approval take?"
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
                      Liaison Office cannot earn revenue and operates under strict FEMA regulations.
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