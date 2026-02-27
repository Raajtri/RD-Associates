import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function BranchOfficeRegistration() {
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
              Branch Office Registration in India
            </h1>

            <p className="text-muted-foreground mb-6">
              Establish a Branch Office in India to expand your foreign company’s 
              operations under RBI and FEMA regulations without incorporating a subsidiary.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li>✔ RBI Approval Required</li>
              <li>✔ Direct Extension of Foreign Company</li>
              <li>✔ Permitted Business Activities</li>
              <li>✔ Complete Regulatory Support</li>
            </ul>
          </div>

          {/* FORM */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Set Up Your Branch Office
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
                Get Consultation
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* PRICING */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Branch Office Setup Cost
            </h2>

            <ul className="space-y-3">
              <li>✔ RBI Application Filing</li>
              <li>✔ ROC Registration (Form FC-1)</li>
              <li>✔ PAN, TAN & Bank Account Setup</li>
              <li>✔ FEMA Compliance Assistance</li>
            </ul>
          </div>

          <div className="bg-background text-foreground p-8 rounded-xl text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Starting From</h3>
            <p className="text-4xl font-bold text-primary mb-4">
              ₹30,000 + Govt Charges
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

          {/* SIDEBAR */}
          <div className="md:col-span-1 space-y-6">

  {/* ABOUT THIS */}
  <div className="bg-background p-6 rounded-xl shadow sticky top-24">
    <h3 className="font-bold mb-4 text-primary">About This Service</h3>
    <ul className="space-y-2 text-muted-foreground text-sm">
      <li>Overview</li>
      <li>Eligibility</li>
      <li>Documents</li>
      <li>Process</li>
      <li>Compliance</li>
      <li>Taxation</li>
      <li>FAQ</li>
    </ul>
  </div>

  {/* QUICK CTA */}
  <div className="bg-primary text-primary-foreground p-6 rounded-xl shadow">
    <h4 className="font-semibold mb-3">Need Expert Help?</h4>
    <p className="text-sm mb-4">
      Talk to our compliance experts for personalized guidance.
    </p>
    <button className="w-full bg-background text-primary py-2 rounded-lg font-semibold">
      Schedule Call
    </button>
  </div>

  {/* RELATED SERVICES */}
  <div className="bg-background p-6 rounded-xl shadow">
    <h4 className="font-semibold mb-3 text-primary">
      Related Services
    </h4>
    <ul className="space-y-2 text-muted-foreground text-sm">
      <li>India Subsidiary</li>
      <li>Branch Office</li>
      <li>Liaison Office</li>
      <li>Company Registration</li>
    </ul>
  </div>

</div>

          {/* CONTENT */}
          <div className="md:col-span-3 space-y-16">

            {/* OVERVIEW */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                What is a Branch Office?
              </h2>
              <p className="text-muted-foreground leading-7">
                A Branch Office is an extension of a foreign company 
                established in India to conduct permitted business activities.
              </p>
              <p className="text-muted-foreground mt-4 leading-7">
                Unlike a subsidiary, a branch office is not a separate legal entity 
                and operates under the parent company’s name.
              </p>
            </div>

            {/* PERMITTED ACTIVITIES */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Permitted Activities
              </h2>

              <ul className="space-y-3 text-muted-foreground">
                <li>✔ Export/Import of Goods</li>
                <li>✔ Rendering Professional Services</li>
                <li>✔ Research Activities</li>
                <li>✔ Promoting Technical Collaborations</li>
                <li>✔ Representing Parent Company in India</li>
              </ul>
            </div>

            {/* ELIGIBILITY */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Eligibility Criteria
              </h2>

              <ul className="space-y-3 text-muted-foreground">
                <li>✔ Profitable Track Record of 5 Years</li>
                <li>✔ Net Worth of USD 100,000 or more</li>
                <li>✔ RBI Approval (AD Bank Route)</li>
              </ul>
            </div>

            {/* PROCESS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Registration Process
              </h2>

              <div className="space-y-4">
                {[
                  "Apply to RBI via AD Bank",
                  "Obtain RBI Approval",
                  "File Form FC-1 with ROC",
                  "Obtain PAN & TAN",
                  "Open Indian Bank Account"
                ].map((step, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    Step {index + 1}: {step}
                  </div>
                ))}
              </div>
            </div>

            {/* TAXATION */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Taxation
              </h2>

              <p className="text-muted-foreground leading-7">
                Branch Office income is taxable in India at foreign company 
                tax rates applicable under Income Tax Act.
              </p>
            </div>

            {/* COMPLIANCE */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Compliance Requirements
              </h2>

              <ul className="space-y-3 text-muted-foreground">
                <li>✔ Annual ROC Filing</li>
                <li>✔ Annual Activity Certificate (AAC)</li>
                <li>✔ Income Tax Return Filing</li>
                <li>✔ FEMA Reporting</li>
              </ul>
            </div>

            {/* FAQ */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Frequently Asked Questions
              </h2>

              {[
                "Is RBI approval mandatory?",
                "Can Branch Office earn income?",
                "Is Branch Office separate legal entity?"
              ].map((question, index) => (
                <div key={index} className="border-b py-4">
                  <button onClick={() => toggleFAQ(index)} className="w-full text-left font-medium">
                    {question}
                  </button>
                  {openFAQ === index && (
                    <p className="text-muted-foreground mt-2 text-sm">
                      Branch Office is extension of parent company and regulated under FEMA.
                    </p>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}