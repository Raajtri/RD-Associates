import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { submitToFormspree } from "@/utils/formspree";

export default function OnePersonCompany() {
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
              One Person Company (OPC) Registration
            </h1>

            <ul className="space-y-4 text-muted-foreground">
              <li>✔ Ideal for solo entrepreneurs</li>
              <li>✔ Limited liability protection</li>
              <li>✔ Separate legal identity</li>
              <li>✔ Full MCA compliance support</li>
            </ul>
          </div>

          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Get Expert Consultation
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
              OPC Registration Cost
            </h2>
            <ul className="space-y-3">
              <li>✔ Name Approval</li>
              <li>✔ DSC & DIN</li>
              <li>✔ MOA & AOA Drafting</li>
              <li>✔ Certificate of Incorporation</li>
            </ul>
          </div>

          <div className="bg-background text-foreground p-8 rounded-xl text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Starting From</h3>
            <p className="text-3xl font-bold text-primary mb-4">
              ₹2999 + Govt Fee
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
              <h3 className="font-bold mb-4">About OPC</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Overview</li>
                <li>Eligibility</li>
                <li>Benefits</li>
                <li>Documents</li>
                <li>Process</li>
                <li>Timeline</li>
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
                A One Person Company (OPC) allows a single entrepreneur to
                operate a corporate entity with limited liability protection.
                It combines the benefits of sole proprietorship and private
                limited company.
              </p>
            </div>

            {/* BENEFITS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Benefits of OPC
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Limited Liability",
                  "Single Ownership Control",
                  "Separate Legal Entity",
                  "Easy Funding Access",
                  "Business Credibility",
                  "Perpetual Succession"
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
                <li>✔ Only Indian citizen allowed</li>
                <li>✔ Only one shareholder</li>
                <li>✔ Nominee required</li>
                <li>✔ Minimum one director</li>
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
                <li>✔ NOC (if rented)</li>
              </ul>
            </div>

            {/* PROCESS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Registration Process
              </h2>

              <div className="space-y-4">
                {[
                  "Obtain DSC & DIN",
                  "Name Approval",
                  "Draft MOA & AOA",
                  "File Incorporation Form",
                  "Receive Certificate"
                ].map((step, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    Step {index + 1}: {step}
                  </div>
                ))}
              </div>
            </div>

            {/* TIMELINE */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Timeline
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted p-4 rounded-lg">
                  2-3 Days: Documentation
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  3-5 Days: Name Approval
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  5-7 Days: Incorporation Certificate
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Frequently Asked Questions
              </h2>

              {[
                "Can OPC have more than one director?",
                "Is OPC mandatory to convert?",
                "Can OPC be converted into Pvt Ltd?",
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
                      Yes, subject to Companies Act provisions.
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