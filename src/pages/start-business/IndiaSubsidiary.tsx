import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function IndiaSubsidiary() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              India Subsidiary Company Registration
            </h1>

            <p className="text-muted-foreground mb-6">
              Establish a wholly-owned subsidiary in India and expand your 
              global operations under FEMA & FDI regulations.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li>✔ 100% Foreign Ownership Allowed (Most Sectors)</li>
              <li>✔ FEMA & RBI Compliant Setup</li>
              <li>✔ Private Limited Structure</li>
              <li>✔ Complete Incorporation Support</li>
            </ul>
          </div>

          {/* CONSULTATION FORM */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Set Up Your India Subsidiary
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
                Get Consultation
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* PRICING */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              India Subsidiary Setup Cost
            </h2>

            <ul className="space-y-3">
              <li>✔ Company Incorporation</li>
              <li>✔ FEMA Reporting (FC-GPR)</li>
              <li>✔ RBI Compliance Filing</li>
              <li>✔ PAN, TAN & GST Registration</li>
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
              <h3 className="font-bold mb-4">India Subsidiary Guide</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Overview</li>
                <li>FDI Routes</li>
                <li>Eligibility</li>
                <li>Documents</li>
                <li>Process</li>
                <li>Taxation</li>
                <li>Compliance</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>

          {/* CONTENT */}
          <div className="md:col-span-3 space-y-16">

            {/* OVERVIEW */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                What is an India Subsidiary?
              </h2>
              <p className="text-muted-foreground leading-7">
                An India Subsidiary is a company incorporated in India where 
                a foreign entity holds majority or 100% ownership.
              </p>
              <p className="text-muted-foreground mt-4 leading-7">
                It is typically registered as a Private Limited Company under 
                the Companies Act, 2013 and governed by FEMA regulations.
              </p>
            </div>

            {/* FDI ROUTES */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                FDI Routes in India
              </h2>

              <ul className="space-y-3 text-muted-foreground">
                <li>✔ Automatic Route – No prior government approval</li>
                <li>✔ Approval Route – Government approval required</li>
              </ul>
            </div>

            {/* ELIGIBILITY */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Eligibility Criteria
              </h2>

              <ul className="space-y-3 text-muted-foreground">
                <li>✔ At least 1 Resident Director in India</li>
                <li>✔ Minimum 2 Directors</li>
                <li>✔ Valid Foreign Company Documents</li>
              </ul>
            </div>

            {/* PROCESS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Registration Process
              </h2>

              <div className="space-y-4">
                {[
                  "Obtain DSC & DIN",
                  "Name Reservation with MCA",
                  "File SPICe+ Incorporation Form",
                  "Receive Certificate of Incorporation",
                  "Open Bank Account & Receive FDI",
                  "File FC-GPR with RBI"
                ].map((step, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    Step {index + 1}: {step}
                  </div>
                ))}
              </div>
            </div>

            {/* TAXATION */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Taxation
              </h2>
              <p className="text-muted-foreground leading-7">
                India subsidiary companies are taxed at applicable corporate tax rates.
                Transfer pricing provisions may apply for transactions with parent company.
              </p>
            </div>

            {/* COMPLIANCE */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Compliance Requirements
              </h2>

              <ul className="space-y-3 text-muted-foreground">
                <li>✔ Annual ROC Filing</li>
                <li>✔ Statutory Audit</li>
                <li>✔ FEMA Reporting</li>
                <li>✔ Income Tax Filing</li>
              </ul>
            </div>

            {/* FAQ */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Frequently Asked Questions
              </h2>

              {[
                "Can a foreigner be director in Indian company?",
                "Is 100% FDI allowed?",
                "Is RBI approval mandatory?"
              ].map((question, index) => (
                <div key={index} className="border-b py-4">
                  <button onClick={() => toggleFAQ(index)} className="w-full text-left font-medium">
                    {question}
                  </button>
                  {openFAQ === index && (
                    <p className="text-muted-foreground mt-2 text-sm">
                      It depends on sector-specific FDI guidelines.
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