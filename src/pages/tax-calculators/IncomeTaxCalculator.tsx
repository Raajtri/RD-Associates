import Layout from "@/components/layout/Layout";
import { useState } from "react";

const IncomeTaxCalculator = () => {
  const [income, setIncome] = useState<number>(0);
  const [regime, setRegime] = useState<"old" | "new">("new");
  const [tax, setTax] = useState<number>(0);
  const [calculated, setCalculated] = useState<boolean>(false);

  const calculateTax = () => {
    let calculatedTax = 0;

    if (regime === "new") {
      if (income <= 300000) calculatedTax = 0;
      else if (income <= 600000)
        calculatedTax = (income - 300000) * 0.05;
      else if (income <= 900000)
        calculatedTax = 15000 + (income - 600000) * 0.1;
      else if (income <= 1200000)
        calculatedTax = 45000 + (income - 900000) * 0.15;
      else if (income <= 1500000)
        calculatedTax = 90000 + (income - 1200000) * 0.2;
      else
        calculatedTax = 150000 + (income - 1500000) * 0.3;
    } else {
      if (income <= 250000) calculatedTax = 0;
      else if (income <= 500000)
        calculatedTax = (income - 250000) * 0.05;
      else if (income <= 1000000)
        calculatedTax = 12500 + (income - 500000) * 0.2;
      else
        calculatedTax = 112500 + (income - 1000000) * 0.3;
    }

    setTax(calculatedTax);
    setCalculated(true);
  };

  return (
    <Layout>
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-xl">

          <h1 className="text-3xl font-bold mb-6 text-center">
            Income Tax Calculator
          </h1>

          <div className="bg-card p-8 rounded-xl shadow-card space-y-4">

            <input
              type="number"
              placeholder="Enter Annual Income"
              className="w-full border p-3 rounded-md"
              onChange={(e) => setIncome(Number(e.target.value))}
            />

            <select
              className="w-full border p-3 rounded-md"
              value={regime}
              onChange={(e) => setRegime(e.target.value as "old" | "new")}
            >
              <option value="new">New Regime</option>
              <option value="old">Old Regime</option>
            </select>

            <button
              onClick={calculateTax}
              className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary-dark transition"
            >
              Calculate Tax
            </button>

            {calculated && (
              <div className="mt-6 text-center text-xl font-semibold text-primary">
                Estimated Tax: ₹ {tax.toLocaleString()}
              </div>
            )}

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IncomeTaxCalculator;