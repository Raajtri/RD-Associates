import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Complete Guide to GST Registration in India 2024",
    excerpt: "Learn everything about GST registration, documents required, and step-by-step process for getting your GSTIN.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop",
    author: "Tax Expert",
    date: "Jan 15, 2024",
    category: "GST",
    slug: "gst-registration-guide",
  },
  {
    title: "Private Limited vs LLP: Which is Right for You?",
    excerpt: "Compare Private Limited Company and LLP structures to make the best choice for your business.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop",
    author: "Business Advisor",
    date: "Jan 10, 2024",
    category: "Business",
    slug: "pvt-ltd-vs-llp",
  },
  {
    title: "Income Tax Filing: Common Mistakes to Avoid",
    excerpt: "Avoid these common mistakes while filing your income tax return and save yourself from penalties.",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&h=400&fit=crop",
    author: "Tax Consultant",
    date: "Jan 5, 2024",
    category: "Income Tax",
    slug: "itr-mistakes",
  },
  {
    title: "MSME Registration Benefits You Should Know",
    excerpt: "Discover the benefits of MSME registration and how it can help your small business grow.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    author: "MSME Expert",
    date: "Dec 28, 2023",
    category: "MSME",
    slug: "msme-benefits",
  },
  {
    title: "Trademark Registration: Protect Your Brand",
    excerpt: "A complete guide to trademark registration in India - protect your brand identity legally.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
    author: "IP Specialist",
    date: "Dec 20, 2023",
    category: "Trademark",
    slug: "trademark-guide",
  },
  {
    title: "Annual Compliance Checklist for Companies",
    excerpt: "Stay compliant with this comprehensive annual compliance checklist for private limited companies.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
    author: "Compliance Officer",
    date: "Dec 15, 2023",
    category: "Compliance",
    slug: "annual-compliance",
  },
];

const Blog = () => {
  return (
    <Layout>
      {/* Page Banner */}
      <section className="page-banner">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Our Blog
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/80">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Blog</span>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="section-badge">Latest News</span>
            <h2 className="section-title text-foreground">
              Tax Tips & Business Insights
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-heading group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors"
                  >
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
