import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function LLPRegistration() {
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
            <h1 className="text-4xl font-bold text-primary mb-6">
              LLP Registration
            </h1>

            <ul className="space-y-4 text-muted-foreground">
              <li>✔ Limited Liability Protection</li>
              <li>✔ Flexible Partnership Structure</li>
              <li>✔ Lower Compliance than Pvt Ltd</li>
              <li>✔ Suitable for Professionals & SMEs</li>
            </ul>
          </div>

          {/* FORM */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Get Expert Consultation
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
              LLP Registration Cost
            </h2>
            <ul className="space-y-3">
              <li>✔ Name Reservation</li>
              <li>✔ LLP Agreement Drafting</li>
              <li>✔ Incorporation Filing</li>
              <li>✔ PAN & TAN Application</li>
            </ul>
          </div>

          <div className="bg-background text-foreground p-8 rounded-xl text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Starting From</h3>
            <p className="text-3xl font-bold text-primary mb-4">
              ₹2499 + Govt Fee
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
              <h3 className="font-bold mb-4">About LLP</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Overview</li>
                <li>Eligibility</li>
                <li>Benefits</li>
                <li>Documents</li>
                <li>Process</li>
                <li>Compliance</li>
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
                A Limited Liability Partnership (LLP) is a hybrid business structure
                combining the benefits of partnership and company. It provides limited
                liability to partners while allowing operational flexibility.
              </p>
            </div>

            {/* BENEFITS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Benefits of LLP
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Limited Liability",
                  "Separate Legal Entity",
                  "Lower Compliance Cost",
                  "No Minimum Capital Requirement",
                  "Flexible Management",
                  "No Dividend Distribution Tax"
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
                <li>✔ Minimum 2 Partners</li>
                <li>✔ At least 1 Resident Indian Partner</li>
                <li>✔ No Maximum Partner Limit</li>
                <li>✔ Unique Business Name</li>
              </ul>
            </div>

            {/* DOCUMENTS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Documents Required
              </h2>
              <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <li>✔ PAN Card of Partners</li>
                <li>✔ Aadhaar / Passport</li>
                <li>✔ Address Proof</li>
                <li>✔ Passport Size Photos</li>
                <li>✔ Registered Office Address Proof</li>
                <li>✔ LLP Agreement</li>
              </ul>
            </div>

            {/* PROCESS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Registration Process
              </h2>

              <div className="space-y-4">
                {[
                  "Obtain DSC",
                  "Apply for Name Reservation",
                  "File Incorporation Form (FiLLiP)",
                  "Draft LLP Agreement",
                  "Receive Certificate of Incorporation"
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
                <li>✔ Annual Return Filing</li>
                <li>✔ Statement of Accounts</li>
                <li>✔ Income Tax Return Filing</li>
              </ul>
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
                  7-10 Days: Incorporation Complete
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Frequently Asked Questions
              </h2>

              {[
                "Is LLP better than Pvt Ltd?",
                "Is audit mandatory for LLP?",
                "Can LLP be converted to Pvt Ltd?",
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
                      It depends on your business goals and compliance needs.
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