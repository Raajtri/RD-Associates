import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { submitToFormspree } from "@/utils/formspree";

export default function TDSReturnFiling() {
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
              TDS Return Filing Services
            </h1>

            <p className="text-muted-foreground mb-6">
              Ensure timely and accurate TDS return filing under the Income Tax Act 
              to avoid penalties and interest charges.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Quarterly TDS Return Filing</li>
              <li>✔ Form 24Q, 26Q, 27Q & 27EQ</li>
              <li>✔ Error-Free Submission</li>
              <li>✔ Complete Compliance Support</li>
            </ul>
          </div>

          {/* FORM */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              File Your TDS Return
            </h3>

            <form
              onSubmit={submitToFormspree}
              className="space-y-4"
            >
              <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded-lg text-black" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded-lg text-black" />
              <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-3 rounded-lg text-black" />
              <button type="submit" className="w-full bg-background text-primary py-3 rounded-lg font-semibold">
                Get Started
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 space-y-16">

          {/* OVERVIEW */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              What is TDS Return Filing?
            </h2>
            <p className="text-muted-foreground leading-7">
              Tax Deducted at Source (TDS) is a mechanism where tax is deducted 
              at the time of payment and deposited with the government.
              Businesses must file quarterly TDS returns to report deductions.
            </p>
          </div>

          {/* WHO MUST FILE */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Who Must File TDS Returns?
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Companies & LLPs</li>
              <li>✔ Partnership Firms</li>
              <li>✔ Individuals liable for audit</li>
              <li>✔ Employers deducting salary TDS</li>
            </ul>
          </div>

          {/* FORMS */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Types of TDS Forms
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Form 24Q – Salary</li>
              <li>✔ Form 26Q – Non-Salary Payments</li>
              <li>✔ Form 27Q – Non-Resident Payments</li>
              <li>✔ Form 27EQ – TCS Return</li>
            </ul>
          </div>

          {/* PENALTIES */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Penalty for Late Filing
            </h2>
            <p className="text-muted-foreground leading-7">
              Late filing may attract a penalty of ₹200 per day under Section 234E 
              and additional penalties under Section 271H.
            </p>
          </div>

          {/* FAQ */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>

            {[
              "How often must TDS returns be filed?",
              "Can TDS returns be revised?",
              "What is the due date for TDS filing?"
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
                    TDS returns are filed quarterly as per Income Tax rules.
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