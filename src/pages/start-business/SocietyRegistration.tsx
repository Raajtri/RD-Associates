import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { submitToFormspree } from "@/utils/formspree";

export default function SocietyRegistration() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl font-bold text-primary mb-6">
              Society Registration
            </h1>

            <ul className="space-y-4 text-muted-foreground">
              <li>✔ Ideal for Charitable & Welfare Activities</li>
              <li>✔ Registered under Societies Registration Act</li>
              <li>✔ Minimum 7 Members Required</li>
              <li>✔ Eligible for Government Grants</li>
            </ul>
          </div>

          {/* FORM */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Register Your Society
            </h3>

            <form
                           onSubmit={submitToFormspree}

              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg text-black"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg text-black"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full p-3 rounded-lg text-black"
              />
              <button
                type="submit"
                className="w-full bg-background text-primary py-3 rounded-lg font-semibold"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* PRICING */}
      <section className="bg-primary text-primary-foreground py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Society Registration Cost
            </h2>
            <ul className="space-y-3">
              <li>✔ MOA Drafting</li>
              <li>✔ Rules & Regulations Preparation</li>
              <li>✔ Filing with Registrar of Societies</li>
              <li>✔ PAN Application</li>
            </ul>
          </div>

          <div className="bg-background text-foreground p-8 rounded-xl text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Starting From</h3>
            <p className="text-3xl font-bold text-primary mb-4">
              ₹3499 + Govt Charges
            </p>
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg">
              Schedule Callback
            </button>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

          {/* SIDEBAR */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-background p-6 rounded-xl shadow">
              <h3 className="font-bold mb-4">About Society</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Overview</li>
                <li>Objectives</li>
                <li>Benefits</li>
                <li>Eligibility</li>
                <li>Documents</li>
                <li>Process</li>
                <li>Compliance</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>

          {/* CONTENT */}
          <div className="md:col-span-3 space-y-12">

            {/* OVERVIEW */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Overview
              </h2>
              <p className="text-muted-foreground">
                A Society is a group of individuals united for a common
                charitable, literary, scientific or educational purpose.
                It is registered under the Societies Registration Act, 1860.
              </p>
            </div>

            {/* OBJECTIVES */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Common Objectives
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Educational Activities",
                  "Charitable Welfare",
                  "Cultural Promotion",
                  "Environmental Protection",
                  "Religious Activities",
                  "Social Development"
                ].map((item, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    ✔ {item}
                  </div>
                ))}
              </div>
            </div>

            {/* BENEFITS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Benefits
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Legal Recognition",
                  "Separate Legal Status",
                  "Access to Government Grants",
                  "Tax Exemption Eligibility",
                  "Structured Governance",
                  "Transparency"
                ].map((item, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    ✔ {item}
                  </div>
                ))}
              </div>
            </div>

            {/* ELIGIBILITY */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Eligibility Criteria
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>✔ Minimum 7 Members</li>
                <li>✔ Governing Body Members</li>
                <li>✔ Lawful Objective</li>
                <li>✔ Registered Office Address</li>
              </ul>
            </div>

            {/* DOCUMENTS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Documents Required
              </h2>
              <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <li>✔ PAN & Aadhaar of Members</li>
                <li>✔ Address Proof</li>
                <li>✔ Passport Size Photos</li>
                <li>✔ Memorandum of Association</li>
                <li>✔ Rules & Regulations</li>
                <li>✔ Office Address Proof</li>
              </ul>
            </div>

            {/* PROCESS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Registration Process
              </h2>
              <div className="space-y-4">
                {[
                  "Prepare MOA & Rules",
                  "Collect Required Documents",
                  "File Application with Registrar",
                  "Verification & Approval",
                  "Receive Registration Certificate"
                ].map((step, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    Step {index + 1}: {step}
                  </div>
                ))}
              </div>
            </div>

            {/* COMPLIANCE */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Compliance Requirements
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>✔ Annual Filing with Registrar</li>
                <li>✔ Maintenance of Accounts</li>
                <li>✔ Income Tax Return Filing</li>
                <li>✔ Renewal (if applicable)</li>
              </ul>
            </div>

            {/* FAQ */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Frequently Asked Questions
              </h2>

              {[
                "Can society earn income?",
                "Is audit mandatory?",
                "Can society receive foreign funds?"
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
                      It depends on applicable regulations and compliance.
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