import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function MSMERegistration() {
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
              MSME (Udyam) Registration
            </h1>

            <ul className="space-y-4 text-muted-foreground">
              <li>✔ Government Recognition for Businesses</li>
              <li>✔ Access to Subsidies & Benefits</li>
              <li>✔ Easier Loan Approvals</li>
              <li>✔ Protection Against Delayed Payments</li>
            </ul>
          </div>

          {/* FORM */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Apply for MSME Registration
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
              MSME Registration Cost
            </h2>
            <ul className="space-y-3">
              <li>✔ Udyam Registration Filing</li>
              <li>✔ Consultation Support</li>
              <li>✔ Certificate Download Assistance</li>
              <li>✔ PAN & GST Linking Support</li>
            </ul>
          </div>

          <div className="bg-background text-foreground p-8 rounded-xl text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Starting From</h3>
            <p className="text-3xl font-bold text-primary mb-4">
              ₹999 Only
            </p>
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg">
              Apply Now
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
              <h3 className="font-bold mb-4">About MSME</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Overview</li>
                <li>Classification</li>
                <li>Benefits</li>
                <li>Eligibility</li>
                <li>Documents</li>
                <li>Process</li>
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
                MSME (Micro, Small & Medium Enterprises) registration,
                also known as Udyam Registration, provides official
                recognition to small and medium businesses under the
                Ministry of MSME.
              </p>
            </div>

            {/* CLASSIFICATION */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                MSME Classification
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>✔ Micro Enterprise – Investment up to ₹1 Cr</li>
                <li>✔ Small Enterprise – Investment up to ₹10 Cr</li>
                <li>✔ Medium Enterprise – Investment up to ₹50 Cr</li>
              </ul>
            </div>

            {/* BENEFITS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Benefits of MSME Registration
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Collateral-Free Bank Loans",
                  "Lower Interest Rates",
                  "Government Subsidies",
                  "Protection from Delayed Payments",
                  "Preference in Government Tenders",
                  "Tax Benefits"
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
                <li>✔ Business with valid PAN</li>
                <li>✔ Aadhaar linked to PAN</li>
                <li>✔ Applicable to Proprietorship, LLP, Pvt Ltd, etc.</li>
              </ul>
            </div>

            {/* DOCUMENTS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Documents Required
              </h2>
              <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <li>✔ Aadhaar Card</li>
                <li>✔ PAN Card</li>
                <li>✔ GST Details (if applicable)</li>
                <li>✔ Business Address</li>
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
                  "Fill Udyam Registration Form",
                  "Verify Aadhaar & PAN",
                  "Submit Application",
                  "Receive MSME Certificate"
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
                "Is MSME registration mandatory?",
                "Is MSME registration free?",
                "Can I update MSME details later?"
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
                      MSME registration is optional but highly beneficial.
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