import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ShopsAndEstablishmentsLicense() {
  return (
    <>
      <Header />

      <section className="bg-muted py-20 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-primary mb-6">
          Shops & Establishments License
        </h1>
        <p className="text-muted-foreground mb-6">
          Mandatory registration for businesses operating commercial 
          establishments under State Shops & Establishment Act.
        </p>

        <div className="bg-background p-8 rounded-xl shadow space-y-6">
          <h2 className="text-2xl font-bold">Who Requires License?</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>✔ Retail Shops</li>
            <li>✔ Offices</li>
            <li>✔ E-commerce Businesses</li>
            <li>✔ Restaurants & Service Providers</li>
          </ul>
        </div>

        <div className="bg-background p-8 rounded-xl shadow mt-8">
          <h2 className="text-2xl font-bold mb-4">Documents Required</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>✔ PAN Card</li>
            <li>✔ Address Proof</li>
            <li>✔ Rent Agreement</li>
            <li>✔ Employee Details</li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}