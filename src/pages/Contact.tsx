import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xjgenraw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Formspree error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <Layout>
      {/* Page Banner */}
      <section className="page-banner">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Contact Us
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/80">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span>Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6 font-heading">
                Get In Touch
              </h2>
              <p className="text-muted-foreground mb-8">
                Have questions about our services? We're here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 font-heading">Phone</h4>
                    <a
                      href="tel:+919869966163"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 9869966163
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 font-heading">Email</h4>
                    <a
                      href="mailto:info@rdassociates.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@rdassociates.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 font-heading">Address</h4>
                    <p className="text-muted-foreground">
                      Smith Tower, Akash Nagar, Nilemore, Nalasopara
                      <br />
                      Nalasopara West
                      <br />
                      401203
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 font-heading">
                      Business Hours
                    </h4>
                    <p className="text-muted-foreground">
                      Mon - Sat: 9:00 AM - 6:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="text-2xl font-bold mb-6 font-heading">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Contact Request - RD & Associates"
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />

                    <select
                      name="service"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      <option>Company Registration</option>
                      <option>GST Registration</option>
                      <option>Income Tax Filing</option>
                      <option>Trademark Registration</option>
                      <option>Tax Audit</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your requirements..."
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="bg-primary hover:bg-primary-dark"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* Map Section */}
<section className="py-10 bg-secondary">
  <div className="container mx-auto px-4">
    <div className="rounded-2xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.709878849916!2d72.81402427596387!3d19.42493734092404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9680f7cc0a7%3A0x4ac9df12207282aa!2sSmit%20Tower!5e0!3m2!1sen!2sin!4v1770795065022!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="RD & Associates Office Location"
      />

    </div>
  </div>
</section>

    </Layout>
  );
};

export default Contact;
