import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ProfessionalTaxRegistration() {
  return (
    <>
      <Header />

      <section className="bg-muted py-20 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-primary mb-6">
          Professional Tax Registration
        </h1>
        <p className="text-muted-foreground mb-6">
          Professional Tax is a state-level tax applicable to salaried employees 
          and professionals.
        </p>

        <div className="bg-background p-8 rounded-xl shadow space-y-6">
          <h2 className="text-2xl font-bold">Who Must Register?</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>✔ Employers deducting PT from employees</li>
            <li>✔ Professionals & Businesses</li>
            <li>✔ Self-employed individuals</li>
          </ul>
        </div>

        <div className="bg-background p-8 rounded-xl shadow mt-8">
          <h2 className="text-2xl font-bold mb-4">Compliance Requirement</h2>
          <p className="text-muted-foreground">
            Monthly or annual return filing depending on state rules.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}