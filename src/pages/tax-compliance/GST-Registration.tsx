import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function GSTRegistrationPage() {
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
              GST Registration Services
            </h1>
            <p className="text-muted-foreground mb-6">
              Obtain GST registration quickly and start legally collecting GST
              for your business operations.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ PAN-Based GSTIN</li>
              <li>✔ Fast Application Processing</li>
              <li>✔ End-to-End Documentation Support</li>
              <li>✔ Compliance Advisory</li>
            </ul>
          </div>

          <div className="bg-primary text-primary-foreground p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              Apply for GST Registration
            </h3>
            <form
              action="https://formspree.io/f/yourformid"
              method="POST"
              className="space-y-4"
            >
              <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded text-black" />
              <input type="email" name="email" placeholder="Email Address" required className="w-full p-3 rounded text-black" />
              <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-3 rounded text-black" />
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
            <h2 className="text-2xl font-bold mb-4">Who Needs GST Registration?</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>✔ Businesses with turnover above threshold limit</li>
              <li>✔ E-commerce sellers</li>
              <li>✔ Inter-state suppliers</li>
              <li>✔ Casual taxable persons</li>
            </ul>
          </div>

          <div className="bg-background p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">Documents Required</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>✔ PAN Card</li>
              <li>✔ Aadhaar Card</li>
              <li>✔ Business Address Proof</li>
              <li>✔ Bank Details</li>
            </ul>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}