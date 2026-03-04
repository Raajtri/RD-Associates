import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { submitToFormspree } from "@/utils/formspree";

export default function AccountingBookKeeping() {
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
              Accounting & Bookkeeping Services
            </h1>

            <p className="text-muted-foreground mb-6">
              Maintain accurate financial records, track expenses, and ensure 
              full compliance with tax and regulatory requirements.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Monthly Bookkeeping</li>
              <li>✔ GST Reconciliation</li>
              <li>✔ Financial Statement Preparation</li>
              <li>✔ Compliance Reporting</li>
            </ul>
          </div>

          {/* FORM */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Get Accounting Support
            </h3>

            <form className="space-y-4" onSubmit={submitToFormspree}>
              <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded-lg text-black" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded-lg text-black" />
              <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-3 rounded-lg text-black" />
              <button type="submit" className="w-full bg-background text-primary py-3 rounded-lg font-semibold">
                Start Now
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
              What is Bookkeeping?
            </h2>
            <p className="text-muted-foreground leading-7">
              Bookkeeping is the systematic recording of financial transactions 
              including sales, purchases, receipts, and payments.
            </p>
          </div>

          {/* WHO NEEDS */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Who Needs Accounting Services?
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Startups & Private Limited Companies</li>
              <li>✔ LLPs & Partnership Firms</li>
              <li>✔ E-commerce Businesses</li>
              <li>✔ Freelancers & Professionals</li>
            </ul>
          </div>

          {/* SERVICES INCLUDED */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Services Included
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Ledger Maintenance</li>
              <li>✔ Bank Reconciliation</li>
              <li>✔ GST Reconciliation</li>
              <li>✔ Profit & Loss Statement</li>
              <li>✔ Balance Sheet Preparation</li>
            </ul>
          </div>

          {/* BENEFITS */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Benefits of Professional Bookkeeping
            </h2>
            <p className="text-muted-foreground leading-7">
              Accurate books help in better decision-making, smoother tax filing, 
              investor confidence, and reduced compliance risk.
            </p>
          </div>

          {/* FAQ */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>

            {[
              "Is bookkeeping mandatory for small businesses?",
              "How often should books be updated?",
              "Can accounting be outsourced?"
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
                    Regular bookkeeping ensures compliance and financial clarity.
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