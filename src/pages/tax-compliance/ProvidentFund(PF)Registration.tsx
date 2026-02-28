import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PFRegistration() {
  return (
    <>
      <Header />

      <section className="bg-muted py-20 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-primary mb-6">
          Provident Fund (EPF) Registration
        </h1>
        <p className="text-muted-foreground">
          Mandatory registration for establishments employing 20 or more employees.
        </p>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6 space-y-12">
        <div className="bg-background p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">Contribution Rate</h2>
          <p className="text-muted-foreground">
            12% of employee basic salary contributed by employer and employee.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}