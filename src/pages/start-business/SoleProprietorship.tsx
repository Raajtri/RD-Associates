import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function SoleProprietorship() {
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
              Sole Proprietorship Registration
            </h1>

            <ul className="space-y-4 text-muted-foreground">
              <li>✔ Simplest Business Structure</li>
              <li>✔ 100% Ownership & Control</li>
              <li>✔ Minimal Compliance</li>
              <li>✔ Ideal for Small Businesses & Freelancers</li>
            </ul>
          </div>

          {/* FORM */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Start Your Business Today
            </h3>

            <form
              action="https://formspree.io/f/yourformid"
              method="POST"
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
              Sole Proprietorship Setup Cost
            </h2>
            <ul className="space-y-3">
              <li>✔ GST Registration (if required)</li>
              <li>✔ MSME Registration</li>
              <li>✔ Shop & Establishment License</li>
              <li>✔ Business Compliance Guidance</li>
            </ul>
          </div>

          <div className="bg-background text-foreground p-8 rounded-xl text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Starting From</h3>
            <p className="text-3xl font-bold text-primary mb-4">
              ₹1499 + Govt Fee
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
              <h3 className="font-bold mb-4">About Proprietorship</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Overview</li>
                <li>Benefits</li>
                <li>Eligibility</li>
                <li>Documents</li>
                <li>Process</li>
                <li>Compliance</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:col-span-3 space-y-12">

            {/* OVERVIEW */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Overview
              </h2>
              <p className="text-muted-foreground">
                A Sole Proprietorship is owned and managed by a single
                individual. It is the simplest and most common form of
                business structure in India, especially for small traders
                and freelancers.
              </p>
            </div>

            {/* BENEFITS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Benefits
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Complete Business Control",
                  "Minimal Compliance",
                  "Easy Tax Filing",
                  "Low Cost Setup",
                  "Quick Decision Making",
                  "Full Profit Retention"
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
                <li>✔ Single Owner</li>
                <li>✔ Valid PAN & Aadhaar</li>
                <li>✔ Registered Business Address</li>
                <li>✔ Legal Business Activity</li>
              </ul>
            </div>

            {/* DOCUMENTS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Documents Required
              </h2>
              <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <li>✔ PAN Card</li>
                <li>✔ Aadhaar Card</li>
                <li>✔ Address Proof</li>
                <li>✔ Passport Size Photo</li>
                <li>✔ Office Address Proof</li>
                <li>✔ Bank Account Details</li>
              </ul>
            </div>

            {/* PROCESS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Registration Process
              </h2>
              <div className="space-y-4">
                {[
                  "Apply for GST (if required)",
                  "Register under MSME",
                  "Obtain Shop & Establishment License",
                  "Open Current Bank Account"
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
                <li>✔ Income Tax Filing</li>
                <li>✔ GST Filing (if registered)</li>
                <li>✔ Renewal of Local Licenses</li>
              </ul>
            </div>

            {/* FAQ */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Frequently Asked Questions
              </h2>

              {[
                "Is sole proprietorship registered under MCA?",
                "Can I convert it into Pvt Ltd later?",
                "Is GST mandatory?"
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
                      It depends on your turnover and compliance requirements.
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