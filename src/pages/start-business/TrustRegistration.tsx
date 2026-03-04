import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { submitToFormspree } from "@/utils/formspree";

export default function TrustRegistration() {
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
              Trust Registration
            </h1>

            <ul className="space-y-4 text-muted-foreground">
              <li>✔ Suitable for Charitable & Religious Activities</li>
              <li>✔ Simple Registration Process</li>
              <li>✔ Legal Recognition</li>
              <li>✔ Tax Exemption Eligibility</li>
            </ul>
          </div>

          {/* FORM */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Register Your Trust Today
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
              Trust Registration Cost
            </h2>
            <ul className="space-y-3">
              <li>✔ Drafting Trust Deed</li>
              <li>✔ Stamp Duty Assistance</li>
              <li>✔ Registration with Sub-Registrar</li>
              <li>✔ PAN Application</li>
            </ul>
          </div>

          <div className="bg-background text-foreground p-8 rounded-xl text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Starting From</h3>
            <p className="text-3xl font-bold text-primary mb-4">
              ₹3999 + Govt Charges
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
              <h3 className="font-bold mb-4">About Trust</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Overview</li>
                <li>Types of Trust</li>
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
                A Trust is formed when a property is transferred by one person
                (Settlor) to another (Trustee) for the benefit of beneficiaries.
                Trusts are commonly used for charitable, religious, and social
                welfare purposes.
              </p>
            </div>

            {/* TYPES */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Types of Trust
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Private Trust",
                  "Public Charitable Trust",
                  "Religious Trust",
                  "Irrevocable Trust"
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
                  "Tax Exemption Benefits",
                  "Credibility",
                  "Asset Protection",
                  "Structured Governance",
                  "Eligibility for Donations"
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
                <li>✔ Minimum 2 Trustees</li>
                <li>✔ Trust Deed Draft</li>
                <li>✔ Registered Office Address</li>
                <li>✔ Lawful Objective</li>
              </ul>
            </div>

            {/* DOCUMENTS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Documents Required
              </h2>
              <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <li>✔ PAN & Aadhaar of Trustees</li>
                <li>✔ Address Proof</li>
                <li>✔ Passport Size Photos</li>
                <li>✔ Trust Deed</li>
                <li>✔ Registered Office Proof</li>
                <li>✔ Stamp Duty Payment Receipt</li>
              </ul>
            </div>

            {/* PROCESS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Registration Process
              </h2>
              <div className="space-y-4">
                {[
                  "Draft Trust Deed",
                  "Pay Stamp Duty",
                  "Register with Sub-Registrar",
                  "Apply for PAN",
                  "Apply for 12A & 80G (Optional)"
                ].map((step, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    Step {index + 1}: {step}
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Frequently Asked Questions
              </h2>

              {[
                "Is trust registration mandatory?",
                "Can trust earn income?",
                "Is 12A & 80G compulsory?"
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
                      It depends on the type of trust and its objectives.
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