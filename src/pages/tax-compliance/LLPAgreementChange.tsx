import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { submitToFormspree } from "@/utils/formspree";

export default function LLPAgreementChange() {
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
              LLP Agreement Modification
            </h1>

            <p className="text-muted-foreground mb-6">
              Legally update and file changes in your LLP Agreement 
              with the Ministry of Corporate Affairs (MCA).
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Change in Profit Sharing Ratio</li>
              <li>✔ Change in Capital Contribution</li>
              <li>✔ Modification in Partner Roles</li>
              <li>✔ Business Activity Change</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Update LLP Agreement
            </h3>

            <form
             onSubmit={submitToFormspree} className="space-y-4"
            >
              <input type="text" name="llpname" placeholder="LLP Name" required className="w-full p-3 rounded-lg text-black" />
              <input type="email" name="email" placeholder="Email Address" required className="w-full p-3 rounded-lg text-black" />
              <input type="tel" name="phone" placeholder="Contact Number" required className="w-full p-3 rounded-lg text-black" />
              <button type="submit" className="w-full bg-background text-primary py-3 rounded-lg font-semibold">
                Get Assistance
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
              What is LLP Agreement Change?
            </h2>
            <p className="text-muted-foreground leading-7">
              LLP Agreement governs rights and responsibilities of partners.
              Any change must be filed with MCA in Form 3 within 30 days.
            </p>
          </div>

          {/* WHEN REQUIRED */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              When is Agreement Modification Required?
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Addition/Removal of Partner</li>
              <li>✔ Change in Profit Ratio</li>
              <li>✔ Capital Contribution Update</li>
              <li>✔ Change in Business Object</li>
            </ul>
          </div>

          {/* PROCESS */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Filing Process
            </h2>
            <div className="space-y-4">
              {[
                "Draft Supplementary Agreement",
                "Obtain Partner Approval",
                "File Form 3 with MCA",
                "Pay Government Fees",
                "Receive Approval"
              ].map((step, index) => (
                <div key={index} className="bg-muted p-4 rounded-lg">
                  Step {index + 1}: {step}
                </div>
              ))}
            </div>
          </div>

          {/* PENALTY */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Penalty for Non-Filing
            </h2>
            <p className="text-muted-foreground leading-7">
              Delay in filing Form 3 may attract additional government fees 
              and penalties under LLP Act.
            </p>
          </div>

          {/* FAQ */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>

            {[
              "Is MCA filing mandatory?",
              "How long does approval take?",
              "Can profit ratio be changed anytime?"
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
                    Filing must be done within 30 days of agreement modification.
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