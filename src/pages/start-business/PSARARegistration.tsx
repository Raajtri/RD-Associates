import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PSARARegistration() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              PSARA License Registration
            </h1>

            <p className="text-muted-foreground mb-6">
              Obtain PSARA License to legally operate a private security agency 
              in India under the Private Security Agencies Regulation Act, 2005.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Mandatory License for Security Agencies</li>
              <li>✔ State-Specific Approval</li>
              <li>✔ Police Verification Required</li>
              <li>✔ Complete Compliance Assistance</li>
            </ul>
          </div>

          {/* CONSULTATION FORM */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Apply for PSARA License
            </h3>

            <form
              action="https://formspree.io/f/yourformid"
              method="POST"
              className="space-y-4"
            >
              <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded-lg text-black" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded-lg text-black" />
              <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-3 rounded-lg text-black" />
              <button type="submit" className="w-full bg-background text-primary py-3 rounded-lg font-semibold">
                Get Free Consultation
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              PSARA License Cost
            </h2>

            <ul className="space-y-3">
              <li>✔ Application Filing</li>
              <li>✔ Police Verification Coordination</li>
              <li>✔ Training Affidavit Assistance</li>
              <li>✔ State Authority Follow-Up</li>
            </ul>
          </div>

          <div className="bg-background text-foreground p-8 rounded-xl text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Starting From</h3>
            <p className="text-4xl font-bold text-primary mb-4">
              ₹35,000 + Govt Fees
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg">
              Schedule Consultation
            </button>
          </div>

        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

          {/* SIDEBAR */}
          <div className="md:col-span-1">
            <div className="bg-background p-6 rounded-xl shadow">
              <h3 className="font-bold mb-4">PSARA Guide</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Overview</li>
                <li>Eligibility</li>
                <li>Documents</li>
                <li>Process</li>
                <li>Validity & Renewal</li>
                <li>Penalties</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>

          {/* CONTENT */}
          <div className="md:col-span-3 space-y-16">

            {/* OVERVIEW */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                What is PSARA License?
              </h2>
              <p className="text-muted-foreground leading-7">
                PSARA License is mandatory for operating a private security 
                agency in India under the Private Security Agencies Regulation Act, 2005.
              </p>
              <p className="text-muted-foreground mt-4 leading-7">
                The license is issued by the Controlling Authority of the respective 
                state and is required before deploying any security personnel.
              </p>
            </div>

            {/* ELIGIBILITY */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Eligibility Criteria
              </h2>

              <ul className="space-y-3 text-muted-foreground">
                <li>✔ Registered Business Entity (Pvt Ltd / LLP / Proprietorship)</li>
                <li>✔ Indian Citizen Director/Owner</li>
                <li>✔ Clean Criminal Record</li>
                <li>✔ Training Tie-up with Approved Institute</li>
                <li>✔ Registered Office within State</li>
              </ul>
            </div>

            {/* DOCUMENTS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Documents Required
              </h2>

              <ul className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                <li>✔ Certificate of Incorporation / Business Registration</li>
                <li>✔ PAN Card & Aadhaar</li>
                <li>✔ Address Proof of Office</li>
                <li>✔ Affidavit as per PSARA Rules</li>
                <li>✔ Police Verification Certificate</li>
                <li>✔ Training Agreement Copy</li>
              </ul>
            </div>

            {/* PROCESS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Registration Process
              </h2>

              <div className="space-y-4">
                {[
                  "Business Registration",
                  "Police Verification of Directors",
                  "Training Institute Tie-Up",
                  "Prepare & File PSARA Application",
                  "Inspection by Authority",
                  "License Approval & Issuance"
                ].map((step, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    Step {index + 1}: {step}
                  </div>
                ))}
              </div>
            </div>

            {/* VALIDITY */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Validity & Renewal
              </h2>

              <p className="text-muted-foreground leading-7">
                PSARA license is generally valid for 5 years (varies by state).
                Renewal must be applied before expiry to avoid penalties.
              </p>
            </div>

            {/* PENALTIES */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Penalties for Non-Compliance
              </h2>

              <ul className="space-y-3 text-muted-foreground">
                <li>✔ Heavy Monetary Penalties</li>
                <li>✔ Imprisonment in Severe Cases</li>
                <li>✔ Sealing of Security Operations</li>
              </ul>
            </div>

            {/* FAQ */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Frequently Asked Questions
              </h2>

              {[
                "Is PSARA license mandatory in all states?",
                "How long does PSARA approval take?",
                "Can I operate in multiple states?",
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
                      Separate license is required for each state.
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