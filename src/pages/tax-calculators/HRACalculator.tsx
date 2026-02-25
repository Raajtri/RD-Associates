import Layout from "@/components/layout/Layout";
import { useState } from "react";

const HRACalculator = () => {
  const [basic, setBasic] = useState(0);
  const [hra, setHra] = useState(0);
  const [rent, setRent] = useState(0);
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const rentMinus10 = rent - basic * 0.1;
    const eligible = Math.min(hra, rentMinus10, basic * 0.5);
    setResult(eligible);
  };

  return (
    <Layout>
      <div className="container mx-auto py-20">
        <h1 className="text-3xl font-bold mb-6">HRA Calculator</h1>

        <input type="number" placeholder="Basic Salary" className="border p-3 rounded w-full mb-4"
          onChange={(e) => setBasic(Number(e.target.value))} />

        <input type="number" placeholder="HRA Received" className="border p-3 rounded w-full mb-4"
          onChange={(e) => setHra(Number(e.target.value))} />

        <input type="number" placeholder="Rent Paid" className="border p-3 rounded w-full mb-4"
          onChange={(e) => setRent(Number(e.target.value))} />

        <button onClick={calculate}
          className="bg-primary text-white px-6 py-3 rounded">
          Calculate
        </button>

        {result !== null && (
          <div className="mt-6 text-xl font-semibold">
            HRA Exemption: ₹{result.toFixed(2)}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default HRACalculator;