import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { submitToFormspree } from "@/utils/formspree";

export default function IncomeTaxAssessment() {
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
              Income Tax Assessment & Notice Handling
            </h1>

            <p className="text-muted-foreground mb-6">
              Professional assistance in handling income tax scrutiny, 
              departmental notices, and assessment proceedings.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Section 143(1) & 143(2) Notices</li>
              <li>✔ Income Tax Scrutiny Support</li>
              <li>✔ Drafting & Filing Replies</li>
              <li>✔ Appeal & Representation Services</li>
            </ul>
          </div>

          {/* CTA FORM */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Respond to Tax Notice
            </h3>

            <form
             onSubmit={submitToFormspree} className="space-y-4"
            >
              <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded-lg text-black" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded-lg text-black" />
              <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-3 rounded-lg text-black" />
              <button type="submit" className="w-full bg-background text-primary py-3 rounded-lg font-semibold">
                Get Assistance
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
              What is Income Tax Assessment?
            </h2>
            <p className="text-muted-foreground leading-7">
              Income Tax Assessment is the process by which the Income Tax 
              Department verifies the income declared by a taxpayer.
            </p>
          </div>

          {/* TYPES */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Types of Assessment Notices
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Section 143(1) – Intimation</li>
              <li>✔ Section 143(2) – Scrutiny Notice</li>
              <li>✔ Section 148 – Reassessment</li>
              <li>✔ Demand Notice under Section 156</li>
            </ul>
          </div>

          {/* OUR SERVICES */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Our Services
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Notice Review & Analysis</li>
              <li>✔ Drafting Professional Replies</li>
              <li>✔ Online Submission on Portal</li>
              <li>✔ Personal Hearing Representation</li>
              <li>✔ Appeal Filing Support</li>
            </ul>
          </div>

          {/* WHY IMPORTANT */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Why Professional Assistance is Important?
            </h2>
            <p className="text-muted-foreground leading-7">
              Improper or delayed response to notices may result in penalties, 
              additional tax demand, or prosecution.
            </p>
          </div>

          {/* FAQ */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>

            {[
              "How long do I have to respond to a notice?",
              "Can assessment orders be appealed?",
              "Is professional help mandatory?"
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
                    Time limits depend on the specific section mentioned in notice.
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