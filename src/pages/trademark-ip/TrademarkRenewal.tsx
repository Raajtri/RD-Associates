import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function TrademarkRenewal() {
  return (
    <>
      <Header />

      <section className="bg-muted py-20 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-primary mb-6">
          Trademark Renewal Services
        </h1>
        <p className="text-muted-foreground mb-6">
          Renew your trademark every 10 years to maintain legal protection.
        </p>

        <div className="bg-background p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">Renewal Process</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>✔ Application Filing (Form TM-R)</li>
            <li>✔ Payment of Government Fees</li>
            <li>✔ Certificate of Renewal</li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}