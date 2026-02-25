const steps = [
  {
    number: "01",
    title: "Choose Your Service",
    description: "The first step in working with Taxcurv is to select the tax service that best fits your needs.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
  },
  {
    number: "02",
    title: "Consult Expert Staff",
    description: "Our tax professionals will take the time to understand your unique situation and provide personalized advice.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop",
  },
  {
    number: "03",
    title: "Strategic Work Planning",
    description: "After consulting with our expert staff, we create a strategic plan tailored to your specific tax needs.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  },
  {
    number: "04",
    title: "Completed Work",
    description: "Once the planning is done, we implement the strategy and handle all the necessary steps to complete the work.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-badge">Working Process</span>
          <h2 className="section-title text-foreground">
            How Our RD & Associates Works
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent z-0" />
              )}

              <div className="relative z-10">
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden mb-6 shadow-lg">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-accent text-white text-2xl font-bold px-4 py-2 rounded-lg shadow-lg font-heading">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 font-heading group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
