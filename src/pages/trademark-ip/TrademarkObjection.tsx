import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function TrademarkObjection() {
  return (
    <>
      <Header />

      <section className="bg-muted py-20 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-primary mb-6">
          Trademark Objection Reply Services
        </h1>
        <p className="text-muted-foreground mb-6">
          Professional drafting and filing of objection reply under Section 9 or 11.
        </p>

        <div className="bg-background p-8 rounded-xl shadow space-y-6">
          <h2 className="text-2xl font-bold">Why Objection Happens?</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>✔ Similar Existing Trademark</li>
            <li>✔ Descriptive Brand Name</li>
            <li>✔ Incorrect Classification</li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}