import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { submitToFormspree } from "@/utils/formspree";

export default function MSMERenewal() {
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
              MSME Certificate Renewal / Update
            </h1>

            <ul className="space-y-4 text-muted-foreground">
              <li>✔ Update Turnover & Investment Details</li>
              <li>✔ Correction in Udyam Certificate</li>
              <li>✔ Migration from Udyog Aadhaar</li>
              <li>✔ Re-issue Lost Certificate</li>
            </ul>
          </div>

          {/* FORM */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Update Your MSME Details
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
              MSME Update / Renewal Cost
            </h2>
            <ul className="space-y-3">
              <li>✔ Profile Modification</li>
              <li>✔ Business Activity Update</li>
              <li>✔ Investment & Turnover Update</li>
              <li>✔ Certificate Re-issue</li>
            </ul>
          </div>

          <div className="bg-background text-foreground p-8 rounded-xl text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Starting From</h3>
            <p className="text-3xl font-bold text-primary mb-4">
              ₹799 Only
            </p>
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg">
              Update Now
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
              <h3 className="font-bold mb-4">MSME Update</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Overview</li>
                <li>When Required</li>
                <li>Benefits</li>
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
                MSME (Udyam) registration is valid for lifetime. However,
                businesses must update their details in case of changes
                in turnover, investment, address, or business activities.
              </p>
            </div>

            {/* WHEN REQUIRED */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                When Is MSME Update Required?
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>✔ Change in Business Address</li>
                <li>✔ Change in Investment or Turnover</li>
                <li>✔ Addition of New Business Activity</li>
                <li>✔ Migration from Udyog Aadhaar</li>
                <li>✔ Lost Certificate Reprint</li>
              </ul>
            </div>

            {/* BENEFITS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Benefits of Updating MSME
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Continued Government Benefits",
                  "Avoid Penalties",
                  "Accurate Business Records",
                  "Eligibility for Subsidies",
                  "Better Loan Approvals",
                  "Compliance with Regulations"
                ].map((item, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    ✔ {item}
                  </div>
                ))}
              </div>
            </div>

            {/* DOCUMENTS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Documents Required
              </h2>
              <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <li>✔ Udyam Registration Number</li>
                <li>✔ Aadhaar & PAN</li>
                <li>✔ Updated Business Details</li>
                <li>✔ GST Details (if applicable)</li>
              </ul>
            </div>

            {/* PROCESS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Update Process
              </h2>
              <div className="space-y-4">
                {[
                  "Verify Udyam Details",
                  "Update Required Fields",
                  "Submit Modification Request",
                  "Receive Updated Certificate"
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
                "Is MSME renewal mandatory every year?",
                "Is MSME certificate lifetime valid?",
                "Can I update turnover details?"
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
                      MSME registration is lifetime valid but updates are required in case of changes.
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