import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { submitToFormspree } from "@/utils/formspree";

export default function IndirectTax() {
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
              Indirect Tax Advisory Services
            </h1>

            <p className="text-muted-foreground mb-6">
              Comprehensive advisory and compliance support for GST, Customs, 
              and other indirect tax regulations in India.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li>✔ GST Advisory & Compliance</li>
              <li>✔ Customs & Import-Export Advisory</li>
              <li>✔ Tax Structuring Support</li>
              <li>✔ Litigation & Notice Handling</li>
            </ul>
          </div>

          {/* CTA FORM */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Consult Indirect Tax Expert
            </h3>

            <form
             onSubmit={submitToFormspree} className="space-y-4"
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

      {/* MAIN CONTENT */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 space-y-16">

          {/* OVERVIEW */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              What is Indirect Tax?
            </h2>
            <p className="text-muted-foreground leading-7">
              Indirect tax is a tax collected by an intermediary (such as a business) 
              from the end consumer and paid to the government.
              Examples include GST, Customs Duty, and Excise Duty.
            </p>
          </div>

          {/* TYPES */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Types of Indirect Taxes in India
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Goods & Services Tax (GST)</li>
              <li>✔ Customs Duty</li>
              <li>✔ Excise Duty</li>
              <li>✔ Anti-Dumping Duty</li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Our Indirect Tax Services
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ GST Compliance & Filing</li>
              <li>✔ GST Refund & Refund Advisory</li>
              <li>✔ Notice & Litigation Support</li>
              <li>✔ ITC Reconciliation</li>
              <li>✔ Customs Advisory for Importers/Exporters</li>
            </ul>
          </div>

          {/* BENEFITS */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Why Choose Professional Advisory?
            </h2>
            <p className="text-muted-foreground leading-7">
              Proper tax structuring and compliance reduces litigation risk, 
              avoids penalties, and ensures smooth business operations.
            </p>
          </div>

          {/* FAQ */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>

            {[
              "Is GST part of indirect tax?",
              "Can indirect tax disputes be appealed?",
              "Do importers need GST registration?"
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
                    Indirect taxes vary based on nature of business and transaction.
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