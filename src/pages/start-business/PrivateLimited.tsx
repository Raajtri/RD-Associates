import Layout from "@/components/layout/Layout";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PrivateLimited = () => {
  return (
    <Layout>
      <section className="page-banner">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl font-bold">
            Private Limited Company Registration
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Start Your Private Limited Company
            </h2>

            <p className="mb-6 text-muted-foreground">
              Private Limited Company is the most popular business structure
              in India. It offers limited liability and high credibility.
            </p>

            <div className="space-y-3">
              <div className="flex gap-2">
                <CheckCircle2 className="text-primary w-5 h-5" />
                <span>Limited Liability Protection</span>
              </div>
              <div className="flex gap-2">
                <CheckCircle2 className="text-primary w-5 h-5" />
                <span>Separate Legal Entity</span>
              </div>
              <div className="flex gap-2">
                <CheckCircle2 className="text-primary w-5 h-5" />
                <span>Easy Fund Raising</span>
              </div>
              <div className="flex gap-2">
                <CheckCircle2 className="text-primary w-5 h-5" />
                <span>Perpetual Succession</span>
              </div>
            </div>

            <Button asChild className="mt-6 bg-primary">
              <Link to="/contact">Register Now</Link>
            </Button>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-card">
            <h3 className="text-xl font-semibold mb-4">
              Documents Required
            </h3>
            <ul className="space-y-2 text-sm">
              <li>PAN Card of Directors</li>
              <li>Aadhaar Card</li>
              <li>Passport Size Photo</li>
              <li>Address Proof</li>
              <li>Registered Office Proof</li>
            </ul>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default PrivateLimited;