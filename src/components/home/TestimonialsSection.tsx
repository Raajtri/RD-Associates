import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";

const testimonials = [
  {
    content: "I have been working with RD & Associates for years, and I couldn't be more satisfied with their service. Their team is highly knowledgeable, and they always take the time to explain my options in a way that is easy to understand.",
    author: "Aman Tripathi",
    role: "CEO",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    content: "As a small business owner, taxes always seemed like a headache. But since I started working with RD & Associates, they have taken the stress out of the process. Highly recommended for entrepreneurs!",
    author: "Sushant Tiwari",
    role: "Business Owner",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    content: "I've used RD & Associates for both personal and business tax services, and their support is top-notch. They are always available to answer questions and provide expert guidance.",
    author: "Ashwin Paswan",
    role: "Customer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-white/10 text-white">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white font-heading">
            What Our Clients Say About Us
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Whether you're looking for expert tax advice, personalized planning, or strategic tax management, we are here to help you navigate the complexities of tax laws and maximize your savings.
          </p>
          <Button asChild variant="outline" className="mt-6 border-white text-black hover:bg-white hover:text-primary">
            <Link to="/contact">Know More</Link>
          </Button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="bg-white rounded-2xl p-8 shadow-xl relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
              <p className="text-foreground mb-6 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <h4 className="font-semibold text-foreground font-heading">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
