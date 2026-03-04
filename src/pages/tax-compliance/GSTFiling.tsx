import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { submitToFormspree } from "@/utils/formspree";

export default function GSTFiling() {
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
              GST Return Filing Services
            </h1>

            <p className="text-muted-foreground mb-6">
              Ensure timely and accurate GST return filing to avoid penalties 
              and maintain full compliance under GST laws.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Monthly & Quarterly GST Filing</li>
              <li>✔ GSTR-1, GSTR-3B & Annual Return</li>
              <li>✔ Reconciliation & ITC Matching</li>
              <li>✔ Late Fee & Penalty Advisory</li>
            </ul>
          </div>

          {/* FORM */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              File Your GST Return
            </h3>

            <form
              onSubmit={submitToFormspree}
              className="space-y-4"
            >
              <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded-lg text-black" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded-lg text-black" />
              <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-3 rounded-lg text-black" />
              <button type="submit" className="w-full bg-background text-primary py-3 rounded-lg font-semibold">
                Start Filing
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
              What is GST Return Filing?
            </h2>
            <p className="text-muted-foreground leading-7">
              GST return filing is the process of reporting sales, purchases, 
              output GST and input tax credit (ITC) to the GST department.
            </p>
          </div>

          {/* TYPES OF RETURNS */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Types of GST Returns
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ GSTR-1 – Sales Return</li>
              <li>✔ GSTR-3B – Monthly Summary Return</li>
              <li>✔ GSTR-9 – Annual Return</li>
              <li>✔ GSTR-4 – Composition Scheme</li>
            </ul>
          </div>

          {/* WHO MUST FILE */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Who Must File GST Returns?
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ All registered GST taxpayers</li>
              <li>✔ Composition dealers</li>
              <li>✔ E-commerce operators</li>
              <li>✔ Input Service Distributors</li>
            </ul>
          </div>

          {/* LATE FEES */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Late Filing Penalty
            </h2>
            <p className="text-muted-foreground leading-7">
              Late filing attracts ₹50 per day (₹20 for nil return) 
              plus interest at 18% per annum on tax liability.
            </p>
          </div>

          {/* PROCESS */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              GST Filing Process
            </h2>
            <div className="space-y-4">
              {[
                "Collect Sales & Purchase Data",
                "Reconcile Input Tax Credit",
                "Prepare GST Return",
                "File Return on Portal",
                "Generate Acknowledgment"
              ].map((step, index) => (
                <div key={index} className="bg-muted p-4 rounded-lg">
                  Step {index + 1}: {step}
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>

            {[
              "Is GST filing mandatory every month?",
              "Can GST return be revised?",
              "What if I miss GST filing deadline?"
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
                    GST return filing is mandatory as per registration type.
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