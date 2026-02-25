import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-foreground text-background py-2 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:info@rdassociates.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              info@rdassociates.com
            </a>
            <a href="tel:+919869966163" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +91 9869966163
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">

            {/* Logo */}
            <Link to="/">
              <img src="/favicon.png" alt="RD & Associates" className="h-14" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex">
              <NavigationMenu>
                <NavigationMenuList>

                                {/* START BUSINESS */}
                                {/* START BUSINESS */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-medium">
                  Start Business
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[950px] p-8">
                    <div className="grid grid-cols-3 gap-12">

                      {/* Most Popular */}
                      <div>
                        <h4 className="text-primary font-semibold mb-4">
                          Most Popular Services
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li><Link to="/start-business/private-limited-company" className="hover:text-primary">Private Limited Company</Link></li>
                          <li><Link to="/start-business/opc-registration" className="hover:text-primary">One Person Company</Link></li>
                          <li><Link to="/start-business/llp-registration" className="hover:text-primary">LLP Registration</Link></li>
                          <li><Link to="/start-business/partnership-firm" className="hover:text-primary">Partnership Firm</Link></li>
                          <li><Link to="/start-business/sole-proprietorship" className="hover:text-primary">Sole Proprietorship</Link></li>
                        </ul>
                      </div>

                      {/* Special Purpose */}
                      <div>
                        <h4 className="text-primary font-semibold mb-4">
                          Special Purpose Entity
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li><Link to="/start-business/public-limited-company" className="hover:text-primary">Public Limited Company</Link></li>
                          <li><Link to="/start-business/producer-company" className="hover:text-primary">Producer Company</Link></li>
                        </ul>
                      </div>

                      {/* For Foreign Companies */}
                      <div>
                        <h4 className="text-primary font-semibold mb-4">
                          For Foreign Companies
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li><Link to="/start-business/india-subsidiary" className="hover:text-primary">India Subsidiary</Link></li>
                          <li><Link to="/start-business/company-registration-foreigners" className="hover:text-primary">Company Registration Foreigners</Link></li>
                          <li><Link to="/start-business/project-office-registration" className="hover:text-primary">Project Office Registration</Link></li>
                          <li><Link to="/start-business/branch-office-registration" className="hover:text-primary">Branch Office Registration</Link></li>
                          <li><Link to="/start-business/liaison-office-registration" className="hover:text-primary">Liaison Office Registration</Link></li>
                        </ul>
                      </div>

                      {/* NGO */}
                      <div>
                        <h4 className="text-primary font-semibold mb-4">
                          NGO
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li><Link to="/start-business/section-8-company" className="hover:text-primary">Section 8 Company</Link></li>
                          <li><Link to="/start-business/society-registration" className="hover:text-primary">Society Registration</Link></li>
                          <li><Link to="/start-business/trust-registration" className="hover:text-primary">Trust Registration</Link></li>
                          <li><Link to="/start-business/mlm-registration" className="hover:text-primary">MLM Registration</Link></li>
                        </ul>
                      </div>

                      {/* Important Registration */}
                      <div>
                        <h4 className="text-primary font-semibold mb-4">
                          Important Registration
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li><Link to="/start-business/msme-registration" className="hover:text-primary">MSME Registration</Link></li>
                          <li><Link to="/start-business/msme-renewal" className="hover:text-primary">MSME Renewal</Link></li>
                          <li><Link to="/start-business/pasara-registration" className="hover:text-primary">PASARA Registration</Link></li>
                          <li><Link to="/start-business/iec-renewal" className="hover:text-primary">IEC Renewal</Link></li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

                  {/* TAX & COMPLIANCE */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-medium">
                      Tax & Compliance
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[600px] p-6 grid grid-cols-2 gap-6 text-sm">
                        <Link to="/tax/gst-registration" className="hover:text-primary">GST Registration</Link>
                        <Link to="/tax/gst-filing" className="hover:text-primary">GST Filing</Link>
                        <Link to="/tax/income-tax-filing" className="hover:text-primary">Income Tax Filing</Link>
                        <Link to="/tax/tax-audit" className="hover:text-primary">Tax Audit</Link>
                        <Link to="/tax/annual-compliance" className="hover:text-primary">Annual Compliance</Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* NORMAL LINKS */}
                  <NavigationMenuItem>
                    <Link to="/payroll" className="px-4 py-2 font-medium hover:text-primary">
                      Payroll
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link to="/blog" className="px-4 py-2 font-medium hover:text-primary">
                      Blog
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link to="/contact" className="px-4 py-2 font-medium hover:text-primary">
                      Contact
                    </Link>
                  </NavigationMenuItem>

                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+919869966163" className="flex items-center gap-2 font-medium">
                <Phone className="w-5 h-5 text-primary" />
                +91 9869966163
              </a>
              <Button asChild className="bg-primary hover:bg-primary-dark">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden border-t pt-4 pb-4 space-y-2">

              <p className="font-semibold px-4">Start Business</p>
              <Link to="/start-business/private-limited-company" className="block px-4 py-1 text-sm">Private Limited</Link>
              <Link to="/start-business/opc-registration" className="block px-4 py-1 text-sm">OPC</Link>
              <Link to="/start-business/llp-registration" className="block px-4 py-1 text-sm">LLP</Link>
              <p className="font-semibold px-4 mt-4">Tax & Compliance</p>
              <Link to="/tax/gst-registration" className="block px-4 py-1 text-sm">GST Registration</Link>
              <Link to="/tax/gst-filing" className="block px-4 py-1 text-sm">GST Filing</Link>

              <Link to="/contact" className="block px-4 py-2 mt-4 font-medium">
                Contact
              </Link>
            </div>
          )}

        </div>
      </header>
    </>
  );
};

export default Header;