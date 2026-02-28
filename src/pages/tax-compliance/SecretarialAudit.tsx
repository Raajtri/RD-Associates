import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function SecretarialAudit() {
  return (
    <>
      <Header />

      <section className="bg-muted py-20 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-primary mb-6">
          Secretarial Audit Services
        </h1>
        <p className="text-muted-foreground">
          Secretarial audit ensures compliance with Companies Act, FEMA,
          SEBI and other corporate laws.
        </p>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6 space-y-12">
        <div className="bg-background p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">Scope of Audit</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>✔ ROC Filings Review</li>
            <li>✔ Board & AGM Compliance</li>
            <li>✔ Share Capital & Allotments</li>
            <li>✔ FEMA Compliance</li>
          </ul>
        </div>

        <div className="bg-background p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">Benefits</h2>
          <p className="text-muted-foreground">
            Reduces litigation risk and improves investor confidence.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}