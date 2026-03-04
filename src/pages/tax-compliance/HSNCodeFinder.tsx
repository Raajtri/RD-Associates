import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { submitToFormspree } from "@/utils/formspree";

export default function HSNCodeFinder() {
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
              HSN Code Finder & GST Rate Guide
            </h1>

            <p className="text-muted-foreground mb-6">
              Identify the correct HSN (Harmonized System of Nomenclature) code 
              for your products and ensure accurate GST compliance.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Correct Product Classification</li>
              <li>✔ GST Rate Identification</li>
              <li>✔ Avoid Compliance Errors</li>
              <li>✔ Expert Assistance Available</li>
            </ul>
          </div>

          {/* CTA FORM */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Find Your HSN Code
            </h3>

            <form
             onSubmit={submitToFormspree}
             className="space-y-4"
            >
              <input type="text" name="product" placeholder="Product Name" required className="w-full p-3 rounded-lg text-black" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded-lg text-black" />
              <button type="submit" className="w-full bg-background text-primary py-3 rounded-lg font-semibold">
                Get HSN Code
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 space-y-16">

          {/* WHAT IS HSN */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              What is HSN Code?
            </h2>
            <p className="text-muted-foreground leading-7">
              HSN (Harmonized System of Nomenclature) is an internationally 
              accepted system for classifying goods for taxation purposes.
              It ensures uniform product classification under GST.
            </p>
          </div>

          {/* STRUCTURE */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Structure of HSN Code
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ 2 Digit – Chapter</li>
              <li>✔ 4 Digit – Heading</li>
              <li>✔ 6 Digit – Sub-Heading</li>
              <li>✔ 8 Digit – Detailed Classification</li>
            </ul>
          </div>

          {/* WHY IMPORTANT */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Why is HSN Important?
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Determines GST Rate</li>
              <li>✔ Required on GST Invoices</li>
              <li>✔ Avoids Legal Disputes</li>
              <li>✔ Ensures Accurate Tax Payment</li>
            </ul>
          </div>

          {/* PENALTIES */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Penalties for Wrong Classification
            </h2>
            <p className="text-muted-foreground leading-7">
              Incorrect HSN classification may result in penalties, interest 
              on short-paid tax, and departmental scrutiny.
            </p>
          </div>

          {/* FAQ */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>

            {[
              "Is HSN mandatory for all businesses?",
              "How many digits of HSN are required?",
              "Can GST rate change based on HSN?"
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
                    HSN requirement depends on turnover and GST rules.
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