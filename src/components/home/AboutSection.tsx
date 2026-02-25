import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, ThumbsUp } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop"
                    alt="Tax consultation"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=200&fit=crop"
                    alt="Business documents"
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
                    alt="Professional team"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-white rounded-2xl p-6 shadow-xl">
              <div className="text-5xl font-bold font-heading">4+</div>
              <div className="text-sm">Years Of<br />Experience</div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="section-badge">About Us</span>
            <h2 className="section-title text-foreground">
              Maximize your tax and savings with us
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              Our experts work closely with you to create personalized tax strategies, ensuring you claim all eligible deductions and credits. Whether you're filing income tax, planning for retirement, or managing wealth, we've got you covered.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ThumbsUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 font-heading">Client Satisfaction</h4>
                  <p className="text-muted-foreground">
                    Take a look at our round up of the best shows with our successful track record.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 font-heading">Professional Team</h4>
                  <p className="text-muted-foreground">
                    It has survived words which not only five centuries of expert knowledge.
                  </p>
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
              <Link to="/about">Discover More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
