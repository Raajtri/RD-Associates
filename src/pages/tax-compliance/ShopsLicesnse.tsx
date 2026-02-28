import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ShopsLicense() {
  return (
    <>
      <Header />
      <section className="bg-muted py-20 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-primary mb-6">
          Shops & Establishment License
        </h1>
        <p className="text-muted-foreground">
          Mandatory registration under respective State Shops & Establishment Act.
        </p>
      </section>
      <Footer />
    </>
  );
}