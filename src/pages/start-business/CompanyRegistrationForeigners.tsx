import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function CompanyRegistrationForeigners() {
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
              Company Registration in India for Foreigners
            </h1>

            <p className="text-muted-foreground mb-6">
              Foreign nationals can legally register and operate a company 
              in India under FEMA and Companies Act, 2013 provisions.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li>✔ 100% Foreign Ownership Allowed (Most Sectors)</li>
              <li>✔ Resident Director Requirement</li>
              <li>✔ FEMA & RBI Compliance</li>
              <li>✔ Complete Incorporation Support</li>
            </ul>
          </div>

          {/* FORM */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Start Your Indian Company
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
              Registration Cost
            </h2>

            <ul className="space-y-3">
              <li>✔ Private Limited Incorporation</li>
              <li>✔ FEMA Advisory</li>
              <li>✔ RBI Reporting Assistance</li>
              <li>✔ PAN, TAN & Bank Setup</li>
            </ul>
          </div>

          <div className="bg-background text-foreground p-8 rounded-xl text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Starting From</h3>
            <p className="text-4xl font-bold text-primary mb-4">
              ₹40,000 + Govt Fees
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg">
              Schedule Consultation
            </button>
          </div>

        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

          {/* SIDEBAR */}
          <div className="md:col-span-1">
            <div className="bg-background p-6 rounded-xl shadow">
              <h3 className="font-bold mb-4">Foreign Company Guide</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Overview</li>
                <li>Who Can Register</li>
                <li>Requirements</li>
                <li>Documents</li>
                <li>Process</li>
                <li>FDI Compliance</li>
                <li>Taxation</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>

          {/* CONTENT */}
          <div className="md:col-span-3 space-y-16">

            {/* OVERVIEW */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Overview
              </h2>
              <p className="text-muted-foreground leading-7">
                Foreign nationals and entities are permitted to register 
                companies in India under the Companies Act, 2013.
              </p>
              <p className="text-muted-foreground mt-4 leading-7">
                The most common structure chosen is a Private Limited Company 
                due to flexibility and limited liability protection.
              </p>
            </div>

            {/* WHO CAN REGISTER */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Who Can Register?
              </h2>

              <ul className="space-y-3 text-muted-foreground">
                <li>✔ Foreign Individuals</li>
                <li>✔ Foreign Companies</li>
                <li>✔ Non-Resident Indians (NRIs)</li>
                <li>✔ Foreign Investors</li>
              </ul>
            </div>

            {/* REQUIREMENTS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Key Requirements
              </h2>

              <ul className="space-y-3 text-muted-foreground">
                <li>✔ Minimum 2 Directors</li>
                <li>✔ At least 1 Resident Director in India</li>
                <li>✔ Registered Office Address</li>
                <li>✔ Valid Passport (Notarized & Apostilled)</li>
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
                  "Name Reservation",
                  "File Incorporation Forms",
                  "Receive Certificate of Incorporation",
                  "Open Bank Account",
                  "File FEMA Reporting (FC-GPR)"
                ].map((step, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    Step {index + 1}: {step}
                  </div>
                ))}
              </div>
            </div>

            {/* FDI */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                FDI & FEMA Compliance
              </h2>

              <p className="text-muted-foreground leading-7">
                Foreign investment must comply with sector-specific FDI caps 
                and FEMA regulations. RBI reporting through Form FC-GPR is mandatory.
              </p>
            </div>

            {/* TAXATION */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Taxation
              </h2>

              <p className="text-muted-foreground leading-7">
                Indian companies with foreign shareholders are taxed at standard 
                corporate tax rates applicable under Indian Income Tax laws.
              </p>
            </div>

            {/* FAQ */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Frequently Asked Questions
              </h2>

              {[
                "Can a foreigner be 100% owner?",
                "Is Indian resident director mandatory?",
                "Is RBI approval required in all cases?"
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
                      It depends on the sector and FDI guidelines.
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