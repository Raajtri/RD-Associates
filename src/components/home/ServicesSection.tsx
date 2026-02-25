import { Link } from "react-router-dom";
import { 
  Calculator, 
  FileText, 
  Shield, 
  Building2, 
  ClipboardCheck, 
  Lightbulb,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Tax Planning",
    description: "Simplify your taxes with personalized support from seasoned professionals. We ensure accuracy, compliance, and maximum savings.",
    href: "/tax-planning",
  },
  {
    icon: FileText,
    title: "Personal Tax",
    description: "Our experts are ready to guide you through complex tax regulations, ensuring you save time and money while staying compliant.",
    href: "/income-tax-filing",
  },
  {
    icon: Shield,
    title: "Insurance Tax",
    description: "Optimize your tax savings by making the most of insurance-related deductions. Let our experts help you file accurately and efficiently.",
    href: "/tax-planning",
  },
  {
    icon: Building2,
    title: "Corporate Tax",
    description: "Stay compliant, reduce liabilities, and maximize your savings with our expert corporate tax services.",
    href: "/corporate-tax",
  },
  {
    icon: ClipboardCheck,
    title: "Tax Audit Support",
    description: "We help businesses meet statutory requirements while identifying opportunities for tax optimization.",
    href: "/tax-audit",
  },
  {
    icon: Lightbulb,
    title: "Tax Advisory",
    description: "Plan smarter, save more, and ensure compliance with professional tax advisory solutions tailored to your needs.",
    href: "/tax-advisory",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-badge">Our Services</span>
          <h2 className="section-title text-foreground">
            What We Offer To Our Customers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tax and compliance solutions designed to help your business thrive while staying compliant with all regulations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="service-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
