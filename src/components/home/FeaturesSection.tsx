import { FileCheck, ShieldCheck, Users, Headphones } from "lucide-react";

const features = [
  {
    number: "01",
    icon: FileCheck,
    title: "Best Taxation Service",
    description: "Our team of experts ensures that your taxes are handled with the utmost precision and care.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Ensure Security",
    description: "At Taxcurv, we ensure the highest level of security for your personal and business data.",
  },
  {
    number: "03",
    icon: Users,
    title: "Experts Team",
    description: "From tax consultants to audit experts, each team member brings a wealth of knowledge and expertise to the table.",
  },
  {
    number: "04",
    icon: Headphones,
    title: "24/7 Support",
    description: "We offer 24/7 support to assist you with any questions or concerns you might have regarding your taxes.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-badge">Our Features</span>
          <h2 className="section-title text-foreground">
            Our Awesome Features
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="relative bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow group"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full accent-gradient flex items-center justify-center text-white font-bold font-heading shadow-lg">
                {feature.number}
              </div>
              <div className="mt-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
