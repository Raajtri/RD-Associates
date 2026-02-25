import Layout from "@/components/layout/Layout";
import { useState } from "react";

const CorporateTaxCalculator = () => {
  const [profit, setProfit] = useState(0);
  const [tax, setTax] = useState<number | null>(null);

  const calculate = () => {
    const corporateTaxRate = 0.25; // 25%
    setTax(profit * corporateTaxRate);
  };

  return (
    <Layout>
      <div className="container mx-auto py-20">
        <h1 className="text-3xl font-bold mb-6">Corporate Tax Calculator</h1>

        <input
          type="number"
          placeholder="Enter Annual Profit"
          className="border p-3 rounded w-full mb-4"
          onChange={(e) => setProfit(Number(e.target.value))}
        />

        <button
          onClick={calculate}
          className="bg-primary text-white px-6 py-3 rounded"
        >
          Calculate Corporate Tax
        </button>

        {tax !== null && (
          <div className="mt-6 text-xl font-semibold">
            Estimated Corporate Tax: ₹{tax.toFixed(2)}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CorporateTaxCalculator;