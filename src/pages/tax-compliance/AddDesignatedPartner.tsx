import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { submitToFormspree } from "@/utils/formspree";

export default function AddDesignatedPartner() {
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
              Add Designated Partner in LLP
            </h1>

            <p className="text-muted-foreground mb-6">
              Appoint a new designated partner in your LLP and complete 
              MCA filing compliances smoothly and efficiently.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Appointment of New Partner</li>
              <li>✔ Designated Partner Registration</li>
              <li>✔ Form 4 & Form 3 Filing</li>
              <li>✔ Complete MCA Compliance</li>
            </ul>
          </div>

          {/* CTA FORM */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Add LLP Partner Now
            </h3>

            <form className="space-y-4" onSubmit={submitToFormspree}>
              <input type="text" name="llpname" placeholder="LLP Name" required className="w-full p-3 rounded-lg text-black" />
              <input type="email" name="email" placeholder="Email Address" required className="w-full p-3 rounded-lg text-black" />
              <input type="tel" name="phone" placeholder="Contact Number" required className="w-full p-3 rounded-lg text-black" />
              <button type="submit" className="w-full bg-background text-primary py-3 rounded-lg font-semibold">
                Get Started
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
              Who is a Designated Partner?
            </h2>
            <p className="text-muted-foreground leading-7">
              A designated partner is responsible for regulatory and legal 
              compliance of the LLP under the LLP Act.
            </p>
          </div>

          {/* REQUIREMENTS */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Requirements to Add Designated Partner
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ DIN (Director Identification Number)</li>
              <li>✔ Digital Signature Certificate (DSC)</li>
              <li>✔ Consent of Incoming Partner</li>
              <li>✔ LLP Resolution Approval</li>
            </ul>
          </div>

          {/* PROCESS */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Procedure for Appointment
            </h2>
            <div className="space-y-4">
              {[
                "Obtain Consent from Partner",
                "Pass LLP Resolution",
                "File Form 4 with MCA",
                "Modify LLP Agreement (if required)",
                "File Form 3 with MCA"
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
              Penalty for Delay
            </h2>
            <p className="text-muted-foreground leading-7">
              Delay in filing Form 4 may result in additional government fees 
              and penalties under LLP Act.
            </p>
          </div>

          {/* FAQ */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>

            {[
              "Is DIN mandatory for designated partner?",
              "Can a foreign national become designated partner?",
              "How many designated partners are required?"
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
                    LLP must have minimum two designated partners.
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