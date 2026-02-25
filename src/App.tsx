import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CompanyRegistration from "./pages/CompanyRegistration";
import GSTRegistration from "./pages/GSTRegistration";
import Blog from "./pages/Blog";
import Payroll from "./pages/Payroll";
import NotFound from "./pages/NotFound";
import IncomeTaxCalculator from "./pages/tax-calculators/IncomeTaxCalculator";
import GSTCalculator from "./pages/tax-calculators/GSTCalculator";
import HRACalculator from "./pages/tax-calculators/HRACalculator";
import CorporateTaxCalculator from "./pages/tax-calculators/CorporateTaxCalculator";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company-registration" element={<CompanyRegistration />} />
          <Route path="/gst-registration" element={<GSTRegistration />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/payroll" element={<Payroll />} />
          
          {/* Placeholder routes - redirect to main services */}
          <Route path="/llp-registration" element={<CompanyRegistration />} />
          <Route path="/sole-proprietorship" element={<CompanyRegistration />} />
          <Route path="/opc-registration" element={<CompanyRegistration />} />
          <Route path="/section-8-company" element={<CompanyRegistration />} />
          <Route path="/society-registration" element={<CompanyRegistration />} />
          <Route path="/gst-filing" element={<GSTRegistration />} />
          <Route path="/income-tax-filing" element={<GSTRegistration />} />
          <Route path="/tax-audit" element={<GSTRegistration />} />
          <Route path="/annual-compliance" element={<GSTRegistration />} />
          <Route path="/trademark-registration" element={<CompanyRegistration />} />
          <Route path="/copyright-registration" element={<CompanyRegistration />} />
          <Route path="/patent-filing" element={<CompanyRegistration />} />
          <Route path="/tax-planning" element={<GSTRegistration />} />
          <Route path="/corporate-tax" element={<GSTRegistration />} />
          <Route path="/tax-advisory" element={<GSTRegistration />} />
          <Route path="/tax-tools/income-tax-calculator" element={<IncomeTaxCalculator />} />
          <Route path="/tax-tools/gst-calculator" element={<GSTCalculator />} />
          <Route path="/tax-tools/hra-calculator" element={<HRACalculator />} />
          <Route path="/tax-tools/corporate-tax-calculator" element={<CorporateTaxCalculator />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
