import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Award, Target, Heart, Lightbulb } from "lucide-react";

const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop",
  },
  {
    name: "Priya Sharma",
    role: "Tax Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
  },
  {
    name: "Amit Patel",
    role: "Compliance Head",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
  },
  {
    name: "Sneha Gupta",
    role: "Senior Tax Consultant",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
  },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every service we provide to our clients.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We maintain the highest standards of integrity and transparency.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Our clients are at the center of everything we do.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace innovative solutions to complex tax challenges.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Page Banner */}
      <section className="page-banner">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            About Us
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/80">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-badge">Who We Are</span>
              <h2 className="section-title text-foreground">
                Your Trusted Partner for Tax & Compliance
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                TaxCurv Fintech Private Limited is a leading tax advisory and compliance service provider in India. With over 4 years of experience, we have helped thousands of businesses navigate the complex world of taxation.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our team of experienced professionals is dedicated to providing personalized solutions that help our clients maximize their tax savings while ensuring complete compliance with all regulations.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Expert Tax Advisors",
                  "24/7 Support",
                  "Affordable Pricing",
                  "Quick Turnaround",
                  "100% Compliance",
                  "Trusted by 300+ Companies",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="bg-primary hover:bg-primary-dark">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=500&fit=crop"
                alt="Our team at work"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-accent text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <Award className="w-12 h-12" />
                  <div>
                    <div className="text-3xl font-bold font-heading">50+</div>
                    <div className="text-sm">Awards Won</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="section-badge">Our Values</span>
            <h2 className="section-title text-foreground">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-heading">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="section-badge">Our Team</span>
            <h2 className="section-title text-foreground">
              Meet Our Experts
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="group">
                <div className="relative rounded-2xl overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-semibold text-center font-heading">{member.name}</h3>
                <p className="text-muted-foreground text-center">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
