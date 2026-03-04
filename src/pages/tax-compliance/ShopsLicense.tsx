import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { submitToFormspree } from "@/utils/formspree";

export default function ShopsLicense() {
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
            <h1 className="text-4xl font-bold text-primary mb-6">
              Shops & Establishment License Registration
            </h1>

            <p className="text-muted-foreground mb-6">
              Obtain mandatory Shops & Establishment registration under the 
              respective State Act to legally operate your business.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Mandatory State Registration</li>
              <li>✔ Covers Retail & Commercial Establishments</li>
              <li>✔ Employee Compliance Support</li>
              <li>✔ End-to-End Application Filing</li>
            </ul>
          </div>

          {/* CTA FORM */}
          <div className="bg-primary text-primary-foreground p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              Apply for Shops License
            </h3>

            <form
              onSubmit={submitToFormspree}
              className="space-y-4"
            >
              <input
                type="text"
                name="business"
                placeholder="Business Name"
                required
                className="w-full p-3 rounded text-black"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full p-3 rounded text-black"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full p-3 rounded text-black"
              />

              <button className="w-full bg-background text-primary py-3 rounded font-semibold">
                Get Registration
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 space-y-16">

          {/* WHAT IS */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">
              What is Shops & Establishment License?
            </h2>
            <p className="text-muted-foreground leading-7">
              Shops & Establishment Act regulates working conditions,
              wages, leave policies, working hours and employee benefits
              in commercial establishments.
            </p>
          </div>

          {/* WHO NEEDS */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">
              Who Needs Shops License?
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>✔ Retail Shops</li>
              <li>✔ Offices & IT Companies</li>
              <li>✔ Restaurants & Cafes</li>
              <li>✔ E-commerce & Online Businesses</li>
              <li>✔ Service Providers</li>
            </ul>
          </div>

          {/* DOCUMENTS */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">
              Documents Required
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>✔ PAN Card</li>
              <li>✔ Aadhaar Card</li>
              <li>✔ Address Proof of Business</li>
              <li>✔ Rent Agreement (if rented)</li>
              <li>✔ Employee Details</li>
            </ul>
          </div>

          {/* PENALTY */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">
              Penalty for Non-Registration
            </h2>
            <p className="text-muted-foreground">
              Failure to obtain registration may result in fines,
              penalties, and possible business closure by authorities.
            </p>
          </div>

          {/* FAQ */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-6">
              Frequently Asked Questions
            </h2>

            {[
              "Is Shops License mandatory for small businesses?",
              "How long does registration take?",
              "Is renewal required every year?"
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
                    Registration rules depend on respective state laws.
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