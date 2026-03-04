import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { submitToFormspree } from "@/utils/formspree";

export default function PrivateLimited() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl font-bold mb-6 text-primary">
              Private Limited Company Registration
            </h1>

            <ul className="space-y-4 text-muted-foreground">
              <li>✔ Registration starting at competitive pricing</li>
              <li>✔ SPICe+ Incorporation Filing</li>
              <li>✔ MOA & AOA Drafting</li>
              <li>✔ End-to-End MCA Support</li>
            </ul>

            <div className="mt-6 font-semibold">
              ⭐ 4.8 Google Rating
            </div>
          </div>

          {/* FORM */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Consult with an Expert
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
                className="w-full bg-background text-primary py-3 rounded-lg font-semibold hover:opacity-90"
              >
                Submit Now
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="bg-primary text-primary-foreground py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Cost of Company Registration
            </h2>
            <ul className="space-y-3">
              <li>✔ Free Consultation</li>
              <li>✔ Name Search Assistance</li>
              <li>✔ Drafting of MOA & AOA</li>
              <li>✔ PAN, TAN & Incorporation Certificate</li>
            </ul>
          </div>

          <div className="bg-background text-foreground p-8 rounded-xl text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Pricing Starts
            </h3>
            <p className="text-3xl font-bold text-primary mb-4">
              ₹3499 + Govt Fee
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
              <h3 className="font-bold mb-4">About this</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Overview</li>
                <li>Eligibility</li>
                <li>Documents Required</li>
                <li>Process</li>
                <li>Cost</li>
                <li>Timeline</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:col-span-3 space-y-12">

            {/* OVERVIEW */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Overview
              </h2>
              <p className="text-muted-foreground">
                A Private Limited Company is the most preferred business
                structure for startups and growing companies. It offers
                limited liability protection and a separate legal identity.
              </p>
            </div>

            {/* BENEFITS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold mb-6 text-primary">
                Benefits
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Limited Liability",
                  "Separate Legal Entity",
                  "Easy Fund Raising",
                  "Higher Credibility",
                  "Perpetual Succession",
                  "Ownership Transferability"
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-muted p-4 rounded-lg"
                  >
                    ✔ {item}
                  </div>
                ))}
              </div>
            </div>

            {/* DOCUMENTS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold mb-6 text-primary">
                Documents Required
              </h2>

              <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                <div>✔ PAN Card of Directors</div>
                <div>✔ Aadhaar / Passport</div>
                <div>✔ Address Proof</div>
                <div>✔ Passport Size Photo</div>
                <div>✔ Office Address Proof</div>
                <div>✔ NOC (if rented)</div>
              </div>
            </div>

            {/* PROCESS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold mb-6 text-primary">
                Registration Process
              </h2>

              <div className="space-y-4">
                {[
                  "Obtain DSC & DIN",
                  "Name Approval",
                  "Draft MOA & AOA",
                  "File SPICe+ Form",
                  "Get Incorporation Certificate"
                ].map((step, index) => (
                  <div
                    key={index}
                    className="bg-muted p-4 rounded-lg"
                  >
                    Step {index + 1}: {step}
                  </div>
                ))}
              </div>
            </div>

            {/* TIMELINE */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold mb-6 text-primary">
                Timeline
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted p-4 rounded-lg">
                  Day 1-2: Documentation & DSC
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  Day 3-4: Name Approval
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  Day 5-6: Filing Incorporation
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  Day 7+: Certificate Issued
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold mb-6 text-primary">
                Frequently Asked Questions
              </h2>

              {[
                "How many directors are required?",
                "How long does registration take?",
                "Can foreign nationals register?",
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
                      Yes, as per Companies Act compliance requirements.
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* COMPARISON TABLE */}
            <div className="bg-background p-8 rounded-xl shadow overflow-x-auto">
              <h2 className="text-2xl font-bold mb-6 text-primary">
                Comparison
              </h2>

              <table className="w-full text-sm border">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="p-3">Feature</th>
                    <th className="p-3">Private Ltd</th>
                    <th className="p-3">LLP</th>
                    <th className="p-3">Partnership</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border">
                    <td className="p-3">Liability</td>
                    <td className="p-3">Limited</td>
                    <td className="p-3">Limited</td>
                    <td className="p-3">Unlimited</td>
                  </tr>
                  <tr className="border">
                    <td className="p-3">Legal Entity</td>
                    <td className="p-3">Yes</td>
                    <td className="p-3">Yes</td>
                    <td className="p-3">No</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}