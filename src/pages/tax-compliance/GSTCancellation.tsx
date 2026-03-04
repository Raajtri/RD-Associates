import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { submitToFormspree } from "@/utils/formspree";

export default function GSTCancellation() {
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
              GST Cancellation & Revocation
            </h1>

            <p className="text-muted-foreground mb-6">
              Apply for GST cancellation or restore a cancelled GST registration 
              through proper legal procedure under GST Act.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Voluntary GST Cancellation</li>
              <li>✔ Compulsory Cancellation Handling</li>
              <li>✔ Revocation of Suspended GST</li>
              <li>✔ End-to-End Compliance Support</li>
            </ul>
          </div>

          {/* FORM */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Cancel or Restore GST
            </h3>

            <form
             onSubmit={submitToFormspree}
             className="space-y-4"
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
              What is GST Cancellation?
            </h2>
            <p className="text-muted-foreground leading-7">
              GST cancellation is the process of surrendering GST registration 
              when business operations are discontinued or no longer liable for GST.
            </p>
          </div>

          {/* TYPES */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Types of GST Cancellation
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Voluntary Cancellation by Taxpayer</li>
              <li>✔ Cancellation by GST Officer</li>
              <li>✔ Cancellation Due to Non-Filing of Returns</li>
            </ul>
          </div>

          {/* REVOCATION */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              GST Revocation Process
            </h2>
            <p className="text-muted-foreground leading-7">
              If GST registration is cancelled by the department, 
              revocation can be applied within 30 days from cancellation order.
            </p>
          </div>

          {/* DOCUMENTS */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Documents Required
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ GSTIN Details</li>
              <li>✔ Reason for Cancellation</li>
              <li>✔ Final Return Filing (GSTR-10)</li>
              <li>✔ Pending Return Compliance</li>
            </ul>
          </div>

          {/* PROCESS */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Cancellation Process
            </h2>
            <div className="space-y-4">
              {[
                "File Application on GST Portal",
                "Submit Required Documents",
                "Verification by Officer",
                "Issue of Cancellation Order"
              ].map((step, index) => (
                <div key={index} className="bg-muted p-4 rounded-lg">
                  Step {index + 1}: {step}
                </div>
              ))}
            </div>
          </div>

          {/* PENALTIES */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Important Points
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Final Return (GSTR-10) must be filed</li>
              <li>✔ All pending returns must be cleared</li>
              <li>✔ ITC reversal may be required</li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>

            {[
              "Can GST be cancelled anytime?",
              "How long does cancellation take?",
              "Can cancelled GST be restored?"
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
                    Revocation is possible within the prescribed time limit.
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