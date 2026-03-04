import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { submitToFormspree } from "@/utils/formspree";

export default function Section8Company() {
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
              Section 8 Company Registration
            </h1>

            <ul className="space-y-4 text-muted-foreground">
              <li>✔ Ideal for NGOs & Charitable Organizations</li>
              <li>✔ Limited Liability Structure</li>
              <li>✔ Tax Exemption Eligibility</li>
              <li>✔ High Credibility & Transparency</li>
            </ul>
          </div>

          {/* FORM */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Start Your NGO Registration
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
              Section 8 Registration Cost
            </h2>
            <ul className="space-y-3">
              <li>✔ Name Approval</li>
              <li>✔ MOA & AOA Drafting</li>
              <li>✔ License under Section 8</li>
              <li>✔ ROC Incorporation Filing</li>
            </ul>
          </div>

          <div className="bg-background text-foreground p-8 rounded-xl text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Starting From</h3>
            <p className="text-3xl font-bold text-primary mb-4">
              ₹4999 + Govt Fee
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
              <h3 className="font-bold mb-4">About Section 8</h3>
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
                A Section 8 Company is formed for promoting charitable
                objectives such as education, social welfare, research,
                religion, environment protection and other non-profit
                activities.
              </p>
            </div>

            {/* BENEFITS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Benefits
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Separate Legal Entity",
                  "Limited Liability Protection",
                  "Tax Exemption Benefits",
                  "Better Credibility than Trust/Society",
                  "No Minimum Capital Requirement",
                  "Eligible for Government Grants"
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
                <li>✔ Minimum 2 Directors</li>
                <li>✔ Minimum 2 Members</li>
                <li>✔ Non-profit Objective</li>
                <li>✔ No Dividend Distribution</li>
              </ul>
            </div>

            {/* DOCUMENTS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Documents Required
              </h2>
              <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <li>✔ PAN & Aadhaar of Directors</li>
                <li>✔ Address Proof</li>
                <li>✔ Passport Size Photos</li>
                <li>✔ MOA & AOA</li>
                <li>✔ Registered Office Address Proof</li>
                <li>✔ NGO Objective Details</li>
              </ul>
            </div>

            {/* PROCESS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Registration Process
              </h2>
              <div className="space-y-4">
                {[
                  "Apply for DSC & DIN",
                  "Name Reservation",
                  "Draft MOA & AOA",
                  "Apply for Section 8 License",
                  "File Incorporation Forms",
                  "Certificate Issued"
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
                <li>✔ Annual ROC Filing</li>
                <li>✔ Income Tax Return Filing</li>
                <li>✔ Annual General Meeting</li>
                <li>✔ Maintenance of Books of Accounts</li>
              </ul>
            </div>

            {/* FAQ */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Frequently Asked Questions
              </h2>

              {[
                "Can Section 8 Company earn profit?",
                "Is Section 8 better than Trust?",
                "Is audit mandatory?"
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
                      Profit can be earned but cannot be distributed to members.
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