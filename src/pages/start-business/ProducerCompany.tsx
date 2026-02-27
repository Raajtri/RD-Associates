import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ProducerCompany() {
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
              Producer Company Registration
            </h1>

            <p className="text-muted-foreground mb-6">
              Form a legally recognized Producer Company under the Companies Act, 2013 
              and empower farmers, agriculturists, dairy producers, and rural entrepreneurs 
              through collective growth and structured governance.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Minimum 10 Individual Producers</li>
              <li>✔ Separate Legal Entity Status</li>
              <li>✔ Limited Liability Protection</li>
              <li>✔ Access to Government Schemes & Subsidies</li>
              <li>✔ Professional Business Structure</li>
            </ul>
          </div>

          {/* CONSULTATION FORM */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Start Your Producer Company
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
                Get Free Consultation
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Producer Company Registration Cost
            </h2>

            <ul className="space-y-3">
              <li>✔ Name Reservation with MCA</li>
              <li>✔ DSC & DIN for Directors</li>
              <li>✔ MOA & AOA Drafting</li>
              <li>✔ ROC Incorporation Filing</li>
              <li>✔ PAN & TAN Application</li>
            </ul>
          </div>

          <div className="bg-background text-foreground p-8 rounded-xl text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Starting From</h3>
            <p className="text-4xl font-bold text-primary mb-4">
              ₹5999 + Govt Fee
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg">
              Schedule Consultation
            </button>
          </div>

        </div>
      </section>

      {/* MAIN CONTENT WITH SIDEBAR */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

          {/* SIDEBAR */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-background p-6 rounded-xl shadow">
              <h3 className="font-bold mb-4">About Producer Company</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Overview</li>
                <li>Objectives</li>
                <li>Benefits</li>
                <li>Eligibility</li>
                <li>Documents</li>
                <li>Process</li>
                <li>Compliance</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>

          {/* CONTENT */}
          <div className="md:col-span-3 space-y-16">

            {/* OVERVIEW */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                What is a Producer Company?
              </h2>
              <p className="text-muted-foreground leading-7">
                A Producer Company is a corporate body formed by primary producers 
                such as farmers, milk producers, fishermen, artisans, and rural 
                entrepreneurs for improving production, harvesting, procurement, 
                grading, marketing, and selling of primary produce.
              </p>
              <p className="text-muted-foreground mt-4 leading-7">
                It is registered under Chapter XXI-A of the Companies Act, 2013 
                and combines the benefits of cooperative societies and private limited companies.
              </p>
            </div>

            {/* OBJECTIVES */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Objectives of Producer Company
              </h2>

              <ul className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                <li>✔ Production, harvesting & processing of produce</li>
                <li>✔ Marketing & selling agricultural produce</li>
                <li>✔ Export of farm products</li>
                <li>✔ Supply of machinery & equipment to members</li>
                <li>✔ Providing technical & financial assistance</li>
                <li>✔ Welfare measures for members</li>
              </ul>
            </div>

            {/* BENEFITS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Benefits of Producer Company
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Separate Legal Entity",
                  "Limited Liability Protection",
                  "Better Credit Access",
                  "Government Grants & Subsidies",
                  "Collective Bargaining Power",
                  "Professional Governance Structure"
                ].map((item, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    ✔ {item}
                  </div>
                ))}
              </div>
            </div>

            {/* ELIGIBILITY */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Eligibility Criteria
              </h2>

              <ul className="space-y-3 text-muted-foreground">
                <li>✔ Minimum 10 Individual Producers OR 2 Producer Institutions</li>
                <li>✔ Minimum 5 Directors</li>
                <li>✔ Producer-related activity</li>
                <li>✔ Registered Office in India</li>
              </ul>
            </div>

            {/* PROCESS */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Registration Process
              </h2>

              <div className="space-y-4">
                {[
                  "Obtain DSC & DIN for Directors",
                  "Name Approval from MCA",
                  "Draft MOA & AOA",
                  "File SPICe+ Incorporation Form",
                  "Certificate of Incorporation Issued"
                ].map((step, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    Step {index + 1}: {step}
                  </div>
                ))}
              </div>
            </div>

            {/* COMPLIANCE */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Compliance Requirements
              </h2>

              <ul className="space-y-3 text-muted-foreground">
                <li>✔ Annual ROC Filing</li>
                <li>✔ Board Meetings</li>
                <li>✔ Maintenance of Books of Accounts</li>
                <li>✔ Annual Audit</li>
              </ul>
            </div>

            {/* FAQ */}
            <div className="bg-background p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Frequently Asked Questions
              </h2>

              {[
                "Can Producer Company distribute profit?",
                "Is audit mandatory?",
                "Can Producer Company export products?"
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
                      Yes, profits can be distributed among members in the form of patronage bonus.
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