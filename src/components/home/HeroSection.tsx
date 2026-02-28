import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const HeroSection = () => {
  const trustedLogos = [
    "Google",
    "Microsoft", 
    "Amazon",
    "Razorpay",
  ];

  return (
    <section className="hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium">Award Winning Tax Advisor and Compliance</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-heading">
              We Help You To Avoid Tax Blunders and{" "}
              <span className="text-accent">Compliance Service.</span>
            </h1>

            <p className="text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
              Launch your private limited company effortlessly with our end-to-end registration services. Expert guidance at every step.

            </p>

            <div className="flex flex-wrap gap-4 mb-10">
            <Button
                    asChild size="lg"
                    className="btn-hero group bg-orange-500 hover:bg-orange-600 text-white">
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
              </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="btn-outline-hero text-gray-900 hover:text-gray-900"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>

            {/* Trust Badges */}
            <div>
              <p className="text-sm text-white/60 mb-4">Trusted by more than 300+ companies worldwide</p>
              <div className="flex flex-wrap gap-6 items-center">
                {trustedLogos.map((logo) => (
                  <div 
                    key={logo} 
                    className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-white/80 font-medium text-sm"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Consultation Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-2 text-foreground font-heading">Consult with an Expert</h3>
            <p className="text-muted-foreground mb-6">
              Get personalized guidance from seasoned tax professionals. Whether it's GST, income tax, or corporate filings, we've got you covered!
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Contact Method</label>
                <select className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                  <option>Phone call</option>
                  <option>WhatsApp call</option>
                  <option>Email</option>
                  <option>Google Meet</option>
                </select>
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent-light text-accent-foreground py-6 text-lg font-semibold">
                Submit Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>

            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>100% Free consultation • No hidden charges</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
