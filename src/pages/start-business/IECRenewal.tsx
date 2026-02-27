import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function IECRenewal() {
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
              IEC Renewal / Update (Import Export Code)
            </h1>

            <ul className="space-y-4 text-muted-foreground">
              <li>✔ Annual IEC Update as per DGFT Rules</li>
              <li>✔ Profile Modification Support</li>
              <li>✔ KYC Verification</li>
              <li>✔ Reactivation of Suspended IEC</li>
            </ul>
          </div>

          {/* FORM */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Update Your IEC Today
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
              IEC Update Cost
            </h2>
            <ul className="space-y-3">
              <li>✔ Annual Confirmation Filing</li>
              <li>✔ Modification of Details</li>
              <li>✔ KYC Update</li>
              <li>✔ DGFT Portal Assistance</li>
            </ul>
          </div>

          <div className="bg-background text-foreground p-8 rounded-xl text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Starting From</h3>
            <p className="text-3xl font-bold text-primary mb-4">
              ₹999 Only
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
              <h3 className="font-bold mb-4">About IEC</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Overview</li>
                <li>Who Needs IEC</li>
                <li>Annual Update Rule</li>
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
                IEC (Import Export Code) is a 10-digit code issued by DGFT,
                mandatory for businesses involved in import or export of goods
                and services from India.
              </p>
            </div>

            {/* WHO NEEDS IEC */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Who Needs IEC?
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>✔ Importers of Goods</li>
                <li>✔ Exporters of Goods</li>
                <li>✔ Online Sellers Exporting via Amazon/Flipkart</li>
                <li>✔ Service Exporters</li>
              </ul>
            </div>

            {/* ANNUAL UPDATE RULE */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Annual IEC Update Rule
              </h2>
              <p className="text-muted-foreground">
                As per DGFT notification, IEC holders must confirm or update
                their IEC details annually between April to June to keep the
                code active.
              </p>
            </div>

            {/* DOCUMENTS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Documents Required
              </h2>
              <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <li>✔ IEC Number</li>
                <li>✔ PAN Card</li>
                <li>✔ Aadhaar Card</li>
                <li>✔ Business Address Proof</li>
                <li>✔ Bank Account Details</li>
              </ul>
            </div>

            {/* PROCESS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Update Process
              </h2>
              <div className="space-y-4">
                {[
                  "Login to DGFT Portal",
                  "Verify IEC Details",
                  "Update Required Fields",
                  "Submit Confirmation",
                  "Receive Updated Status"
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
                "Is IEC renewal mandatory every year?",
                "What happens if IEC is not updated?",
                "Can suspended IEC be reactivated?"
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
                      Yes, IEC must be confirmed annually to remain active.
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