import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { submitToFormspree } from "@/utils/formspree";

export default function TrademarkRegistration() {
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
              Trademark Registration Services
            </h1>
            <p className="text-muted-foreground mb-6">
              Protect your brand name, logo, slogan, and business identity
              through official trademark registration.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Brand Name Protection</li>
              <li>✔ Logo & Tagline Registration</li>
              <li>✔ Trademark Class Selection</li>
              <li>✔ Government Filing Support</li>
            </ul>
          </div>

          <div className="bg-primary text-primary-foreground p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">
              Apply for Trademark
            </h3>
            <form className="space-y-4" onSubmit={submitToFormspree}>
              <input type="text" name="brand" placeholder="Brand Name" required className="w-full p-3 rounded text-black" />
              <input type="email" name="email" placeholder="Email" required className="w-full p-3 rounded text-black" />
              <button className="w-full bg-background text-primary py-3 rounded font-semibold">
                Register Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 max-w-7xl mx-auto px-6 space-y-12">

        <div className="bg-background p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">Trademark Registration Process</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>✔ Trademark Search</li>
            <li>✔ Application Filing</li>
            <li>✔ Government Examination</li>
            <li>✔ Publication in Journal</li>
            <li>✔ Registration Certificate</li>
          </ul>
        </div>

        <div className="bg-background p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">Documents Required</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>✔ PAN Card</li>
            <li>✔ Aadhaar</li>
            <li>✔ Logo (if applicable)</li>
            <li>✔ Business Registration Proof</li>
          </ul>
        </div>

      </section>

      <Footer />
    </>
  );
}