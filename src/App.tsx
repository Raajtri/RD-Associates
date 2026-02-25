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

// Start Business Pages
import BranchOfficeRegistration from "./pages/start-business/BranchOfficeRegistration";
import CompanyRegistrationForeigners from "./pages/start-business/CompanyRegistrationForeigners";
import IECRenewal from "./pages/start-business/IECRenewal";
import IndiaSubsidiary from "./pages/start-business/IndiaSubsidiary";
import LiaisonOfficeRegistration from "./pages/start-business/LiaisonOfficeRegistration";
import LLPRegistration from "./pages/start-business/LLPRegistration";
import MLMRegistration from "./pages/start-business/MLMRegistration";
import MSMERegistration from "./pages/start-business/MSMERegistration";
import MSMERenewal from "./pages/start-business/MSMERenewal";
import OnePersonCompany from "./pages/start-business/OnePersonCompany";
// import PartnershipFirm from "./pages/start-business/PartnershipFirm";
// import PrivateLimited from "./pages/start-business/PrivateLimited";
// import ProducerCompany from "./pages/start-business/ProducerCompany";
// import ProjectOfficeRegistration from "./pages/start-business/ProjectOfficeRegistration";
// import PSARARegistration from "./pages/start-business/PSARARegistration";
// import PublicLimitedCompany from "./pages/start-business/PublicLimitedCompany";
// import Section8Company from "./pages/start-business/Section8Company";
// import SocietyRegistration from "./pages/start-business/SocietyRegistration";
// import SoleProprietorship from "./pages/start-business/SoleProprietorship";
// import TrustRegistration from "./pages/start-business/TrustRegistration";

// Tax Calculators
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

          {/* Main Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company-registration" element={<CompanyRegistration />} />
          <Route path="/gst-registration" element={<GSTRegistration />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/payroll" element={<Payroll />} />

          {/* Start Business Routes */}
          <Route path="/start-business/company-registration-foriegners" element={<CompanyRegistrationForeigners />} />
          <Route path="/start-business/branch-office-registration" element={<BranchOfficeRegistration />} />
          <Route path="/start-business/iec-renewal" element={<IECRenewal />} />
          <Route path="/start-business/india-subsidiary" element={<IndiaSubsidiary />} />
          <Route path="/start-business/liaison-office-registration" element={<LiaisonOfficeRegistration />} />
          <Route path="/start-business/llp-registration" element={<LLPRegistration />} />
          <Route path="/start-business/mlm-registration" element={<MLMRegistration />} />
          <Route path="/start-business/msme-registration" element={<MSMERegistration />} />
          <Route path="/start-business/msme-renewal" element={<MSMERenewal />} />
          <Route path="/start-business/one-person-company" element={<OnePersonCompany />} />
          {/* <Route path="/start-business/partnership-firm" element={<PartnershipFirm />} />
          <Route path="/start-business/private-limited" element={<PrivateLimited />} />
          <Route path="/start-business/producer-company" element={<ProducerCompany />} />
          <Route path="/start-business/project-office-registration" element={<ProjectOfficeRegistration />} />
          <Route path="/start-business/psara-registration" element={<PSARARegistration />} />
          <Route path="/start-business/public-limited-company" element={<PublicLimitedCompany />} />
          <Route path="/start-business/section-8-company" element={<Section8Company />} />
          <Route path="/start-business/society-registration" element={<SocietyRegistration />} />
          <Route path="/start-business/sole-proprietorship" element={<SoleProprietorship />} />
          <Route path="/start-business/trust-registration" element={<TrustRegistration />} /> */}
          {/* Tax Calculators */}
          <Route path="/tax-tools/income-tax-calculator" element={<IncomeTaxCalculator />} />
          <Route path="/tax-tools/gst-calculator" element={<GSTCalculator />} />
          <Route path="/tax-tools/hra-calculator" element={<HRACalculator />} />
          <Route path="/tax-tools/corporate-tax-calculator" element={<CorporateTaxCalculator />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;