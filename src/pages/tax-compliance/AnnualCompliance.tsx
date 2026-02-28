import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function AnnualCompliance() {
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
              Annual Compliance Services
            </h1>
            <p className="text-muted-foreground mb-6">
              Stay compliant with ROC, Income Tax, and regulatory requirements 
              with our complete annual compliance support.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ ROC Annual Filing</li>
              <li>✔ Director KYC (DIR-3 KYC)</li>
              <li>✔ Annual Returns (MGT-7)</li>
              <li>✔ Financial Statement Filing (AOC-4)</li>
            </ul>
          </div>

          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Get Annual Compliance Support
            </h3>
            <form
              action="https://formspree.io/f/yourformid"
              method="POST"
              className="space-y-4"
            >
              <input type="text" name="companyname" placeholder="Company Name" required className="w-full p-3 rounded-lg text-black" />
              <input type="email" name="email" placeholder="Email Address" required className="w-full p-3 rounded-lg text-black" />
              <input type="tel" name="phone" placeholder="Contact Number" required className="w-full p-3 rounded-lg text-black" />
              <button type="submit" className="w-full bg-background text-primary py-3 rounded-lg font-semibold">
                Start Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 space-y-16">

          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              What is Annual Compliance?
            </h2>
            <p className="text-muted-foreground leading-7">
              Every company and LLP registered in India must file annual
              returns and financial statements with MCA and Income Tax Department,
              irrespective of business activity.
            </p>
          </div>

          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Mandatory ROC Filings
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ AOC-4 – Financial Statement Filing</li>
              <li>✔ MGT-7 – Annual Return</li>
              <li>✔ DIR-3 KYC – Director KYC Filing</li>
              <li>✔ ADT-1 – Auditor Appointment</li>
            </ul>
          </div>

          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Penalty for Non-Compliance
            </h2>
            <p className="text-muted-foreground">
              Delay in ROC filing attracts heavy additional fees and 
              may lead to director disqualification.
            </p>
          </div>

          {/* FAQ */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>

            {[
              "Is annual filing mandatory for inactive company?",
              "What happens if ROC filing is delayed?",
              "Can compliance be outsourced?"
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
                    Annual filing is mandatory regardless of turnover.
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}