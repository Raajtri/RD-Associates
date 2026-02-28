import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function VirtualCFO() {
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
              Virtual CFO Services
            </h1>

            <p className="text-muted-foreground mb-6">
              Strategic financial management and expert advisory without hiring 
              a full-time Chief Financial Officer.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Financial Planning & Budgeting</li>
              <li>✔ Cash Flow Management</li>
              <li>✔ Investor Reporting</li>
              <li>✔ Strategic Business Advisory</li>
            </ul>
          </div>

          {/* CTA FORM */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Get CFO-Level Support
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
                Schedule Consultation
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
              What is a Virtual CFO?
            </h2>
            <p className="text-muted-foreground leading-7">
              A Virtual CFO provides high-level financial expertise on a part-time 
              or contractual basis to help businesses manage finances strategically.
            </p>
          </div>

          {/* WHO NEEDS */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Who Needs Virtual CFO Services?
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Startups & Growing Companies</li>
              <li>✔ Businesses Seeking Investment</li>
              <li>✔ Companies Lacking Financial Oversight</li>
              <li>✔ Businesses Scaling Operations</li>
            </ul>
          </div>

          {/* SERVICES INCLUDED */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Services Included
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Budgeting & Forecasting</li>
              <li>✔ MIS Reporting</li>
              <li>✔ Financial Risk Analysis</li>
              <li>✔ Compliance Supervision</li>
              <li>✔ Fundraising Support</li>
            </ul>
          </div>

          {/* BENEFITS */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Benefits of Virtual CFO
            </h2>
            <p className="text-muted-foreground leading-7">
              Get strategic insights and professional financial control 
              without incurring the cost of a full-time CFO.
            </p>
          </div>

          {/* FAQ */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>

            {[
              "Is Virtual CFO suitable for small businesses?",
              "How often will CFO reports be shared?",
              "Can Virtual CFO assist in fundraising?"
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
                    Virtual CFO services are customizable based on business needs.
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