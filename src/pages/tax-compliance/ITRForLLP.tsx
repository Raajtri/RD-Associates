import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ITRForLLP() {
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
              ITR Filing for LLP
            </h1>

            <p className="text-muted-foreground mb-6">
              Ensure timely filing of Income Tax Return for your Limited Liability 
              Partnership (LLP) and stay compliant with tax regulations.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li>✔ LLP ITR-5 Filing</li>
              <li>✔ Tax Computation & Advisory</li>
              <li>✔ Advance Tax Planning</li>
              <li>✔ Compliance Support</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              File LLP ITR Now
            </h3>

            <form
              action="https://formspree.io/f/yourformid"
              method="POST"
              className="space-y-4"
            >
              <input type="text" name="llpname" placeholder="LLP Name" required className="w-full p-3 rounded-lg text-black" />
              <input type="email" name="email" placeholder="Email Address" required className="w-full p-3 rounded-lg text-black" />
              <input type="tel" name="phone" placeholder="Contact Number" required className="w-full p-3 rounded-lg text-black" />
              <button type="submit" className="w-full bg-background text-primary py-3 rounded-lg font-semibold">
                Start Filing
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 space-y-16">

          {/* OVERVIEW */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Is ITR Filing Mandatory for LLP?
            </h2>
            <p className="text-muted-foreground leading-7">
              Yes, every LLP must file Income Tax Return (ITR-5) irrespective 
              of profit or loss during the financial year.
            </p>
          </div>

          {/* DUE DATE */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              LLP ITR Due Dates
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ 31st July – Non-Audit LLP</li>
              <li>✔ 31st October – Audit Applicable LLP</li>
              <li>✔ Extended dates as notified by government</li>
            </ul>
          </div>

          {/* TAX RATES */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              LLP Tax Rate
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Flat 30% Income Tax</li>
              <li>✔ 12% Surcharge (if applicable)</li>
              <li>✔ 4% Health & Education Cess</li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Our LLP ITR Services
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Tax Computation</li>
              <li>✔ Profit & Loss Analysis</li>
              <li>✔ Filing ITR-5 Online</li>
              <li>✔ Notice Handling Support</li>
            </ul>
          </div>

          {/* PENALTIES */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Penalty for Late Filing
            </h2>
            <p className="text-muted-foreground leading-7">
              Late filing may attract penalty under Section 234F and interest 
              under Section 234A, 234B & 234C.
            </p>
          </div>

          {/* FAQ */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>

            {[
              "Is audit mandatory for LLP?",
              "What form is used for LLP ITR?",
              "Can LLP file nil return?"
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
                    Audit applicability depends on turnover and contribution.
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