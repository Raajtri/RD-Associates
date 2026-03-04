import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { submitToFormspree } from "@/utils/formspree";

export default function PFRegistration() {
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
            <h1 className="text-4xl font-bold text-primary mb-6">
              Provident Fund (EPF) Registration
            </h1>
            <p className="text-muted-foreground mb-6">
              Mandatory EPF registration for establishments employing 
              20 or more employees under EPF Act, 1952.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Online EPFO Registration</li>
              <li>✔ UAN Activation</li>
              <li>✔ Monthly Return Compliance</li>
              <li>✔ Full EPF Advisory Support</li>
            </ul>
          </div>

          <div className="bg-primary text-primary-foreground p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Apply for PF Registration</h3>
            <form onSubmit={submitToFormspree} className="space-y-4">
              <input type="text" name="company" placeholder="Company Name" required className="w-full p-3 rounded text-black" />
              <input type="email" name="email" placeholder="Email" required className="w-full p-3 rounded text-black" />
              <button className="w-full bg-background text-primary py-3 rounded font-semibold">
                Get Started
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 space-y-12">

          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">EPF Contribution Structure</h2>
            <p className="text-muted-foreground">
              12% of basic salary contributed by employer and employee each.
            </p>
          </div>

          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">Documents Required</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>✔ PAN of Company</li>
              <li>✔ Incorporation Certificate</li>
              <li>✔ Address Proof</li>
              <li>✔ Employee Details</li>
            </ul>
          </div>

          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">Penalty for Non-Registration</h2>
            <p className="text-muted-foreground">
              Heavy penalties and interest on delayed PF contributions.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}