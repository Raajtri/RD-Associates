import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function LLPAnnualFiling() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <Header />

      <section className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-primary mb-6">
            LLP Annual Filing Services
          </h1>
          <p className="text-muted-foreground max-w-3xl">
            Every LLP must file annual returns and financial statements
            with MCA irrespective of turnover or profit.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6 space-y-12">
        <div className="bg-background p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">Mandatory Forms</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>✔ Form 11 – Annual Return</li>
            <li>✔ Form 8 – Statement of Accounts</li>
            <li>✔ ITR Filing (ITR-5)</li>
          </ul>
        </div>

        <div className="bg-background p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">Due Dates</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>✔ Form 11 – 30th May</li>
            <li>✔ Form 8 – 30th October</li>
          </ul>
        </div>

        <div className="bg-background p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">Penalty</h2>
          <p className="text-muted-foreground">
            ₹100 per day per form without maximum limit for late filing.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}