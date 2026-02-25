import { Link } from "react-router-dom";

const TaxToolsSection = () => {
  const tools = [
    {
      title: "Income Tax Calculator",
      link: "/tax-tools/income-tax-calculator",
    },
    {
      title: "GST Calculator",
      link: "/tax-tools/gst-calculator",
    },
    {
      title: "HRA Calculator",
      link: "/tax-tools/hra-calculator",
    },
    {
      title: "Corporate Tax Calculator",
      link: "/tax-tools/corporate-tax-calculator",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Free Tax Tools
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {tools.map((tool) => (
            <Link
              key={tool.link}
              to={tool.link}
              className="bg-white p-6 rounded-xl shadow-card hover:shadow-hover transition-all"
            >
              <h3 className="text-lg font-semibold">
                {tool.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TaxToolsSection;