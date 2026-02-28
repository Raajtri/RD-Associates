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
import PartnershipFirm from "./pages/start-business/PartnershipFirm";
import PrivateLimited from "./pages/start-business/PrivateLimited";
import ProducerCompany from "./pages/start-business/ProducerCompany";
import ProjectOfficeRegistration from "./pages/start-business/ProjectOfficeRegistration";
import PSARARegistration from "./pages/start-business/PSARARegistration";
import PublicLimitedCompany from "./pages/start-business/PublicLimitedCompany";
import Section8Company from "./pages/start-business/Section8Company";
import SocietyRegistration from "./pages/start-business/SocietyRegistration";
import SoleProprietorship from "./pages/start-business/SoleProprietorship";
import TrustRegistration from "./pages/start-business/TrustRegistration";

// Tax Calculators
import IncomeTaxCalculator from "./pages/tax-calculators/IncomeTaxCalculator";
import GSTCalculator from "./pages/tax-calculators/GSTCalculator";
import HRACalculator from "./pages/tax-calculators/HRACalculator";
import CorporateTaxCalculator from "./pages/tax-calculators/CorporateTaxCalculator";
// 2nd Header
import TDSReturnFiling from "./pages/tax-compliance/TDSReturnFiling";
import GSTFiling from "./pages/tax-compliance/GSTFiling";
import GSTCancellation from "./pages/tax-compliance/GSTCancellation";
import HSNCodeFinder from "./pages/tax-compliance/HSNCodeFinder";
import IndirectTax from "./pages/tax-compliance/IndirectTax";
import AccountingBookKeeping from "./pages/tax-compliance/AccountingBookKeeping";
import IncomeTaxAssessment from "./pages/tax-compliance/IncomeTaxAssessment";
import VirtualCFO from "./pages/tax-compliance/VirtualCFO";
import CorporateTax from "./pages/tax-compliance/CorporateTax";
import ITRForLLP from "./pages/tax-compliance/ITRForLLP";
import LLPAgreementChange from "./pages/tax-compliance/LLPAgreementChange";
import AddDesignatedPartner from "./pages/tax-compliance/AddDesignatedPartner";
import CloseLLP from "./pages/tax-compliance/CloseLLP";
import LLPAnnualFiling from "./pages/tax-compliance/LLPAnnualFiling";
// ===== Remaining Tax & Compliance Imports =====
import SecretarialAudit from "./pages/tax-compliance/SecretarialAudit";
import AnnualCompliance from "./pages/tax-compliance/AnnualCompliance";
import PFRegistration from "./pages/tax-compliance/PFRegistration";
import ESICRegistration from "./pages/tax-compliance/ESICRegistration";
import ProfessionalTaxRegistration from "./pages/tax-compliance/ProfessionalTaxRegistration";
// ===== Specific Pages =====
import ProfessionalTax from "./pages/tax-compliance/ProfessionalTax";
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
          <Route path="/start-business/company-registration-foreigners" element={<CompanyRegistrationForeigners />} />
          <Route path="/start-business/branch-office-registration" element={<BranchOfficeRegistration />} />
          <Route path="/start-business/iec-renewal" element={<IECRenewal />} />
          <Route path="/start-business/india-subsidiary" element={<IndiaSubsidiary />} />
          <Route path="/start-business/liaison-office-registration" element={<LiaisonOfficeRegistration />} />
          <Route path="/start-business/llp-registration" element={<LLPRegistration />} />
          <Route path="/start-business/mlm-registration" element={<MLMRegistration />} />
          <Route path="/start-business/msme-registration" element={<MSMERegistration />} />
          <Route path="/start-business/msme-renewal" element={<MSMERenewal />} />
          <Route path="/start-business/opc-registration" element={<OnePersonCompany />} />
          <Route path="/start-business/partnership-firm" element={<PartnershipFirm />} />
          <Route path="/start-business/private-limited-company" element={<PrivateLimited />} />
          <Route path="/start-business/producer-company" element={<ProducerCompany />} />
          <Route path="/start-business/project-office-registration" element={<ProjectOfficeRegistration />} />
         <Route path="/start-business/pasara-registration" element={<PSARARegistration />} />
         <Route path="/start-business/public-limited-company" element={<PublicLimitedCompany />} />
         <Route path="/start-business/section-8-company" element={<Section8Company />} />
         <Route path="/start-business/society-registration" element={<SocietyRegistration />} />
         <Route path="/start-business/sole-proprietorship" element={<SoleProprietorship />} />
         <Route path="/start-business/trust-registration" element={<TrustRegistration />} />
          {/* Tax Calculators */}
          <Route path="/tax-tools/income-tax-calculator" element={<IncomeTaxCalculator />} />
          <Route path="/tax-tools/gst-calculator" element={<GSTCalculator />} />
          <Route path="/tax-tools/hra-calculator" element={<HRACalculator />} />
          <Route path="/tax-tools/corporate-tax-calculator" element={<CorporateTaxCalculator />} />
          {/* tax-compliance */}
          <Route path="/tax-compliance/tds-return-filing" element={<TDSReturnFiling />} />
          <Route path="/tax-compliance/gst-filing" element={<GSTFiling />} />
          <Route path="/tax-compliance/gst-cancellation" element={<GSTCancellation />} />
          <Route path="/tax-compliance/hsn-code-finder" element={<HSNCodeFinder />} />
          <Route path="/tax-compliance/indirect-tax" element={<IndirectTax />} />
          <Route path="/tax-compliance/accounting-book-keeping" element={<AccountingBookKeeping />} />
          <Route path="/tax-compliance/income-tax-assessment" element={<IncomeTaxAssessment />} />
          <Route path="/tax-compliance/virtual-cfo" element={<VirtualCFO />} />
          <Route path="/tax-compliance/corporate-tax" element={<CorporateTax />} />
          <Route path="/tax-compliance/itr-for-llp" element={<ITRForLLP />} />
          <Route path="/tax-compliance/llp-agreement-change" element={<LLPAgreementChange />} />
          <Route path="/tax-compliance/add-designated-partner" element={<AddDesignatedPartner />} />
          <Route path="/tax-compliance/close-llp" element={<CloseLLP />} />
          <Route path="/tax-compliance/llp-annual-filing" element={<LLPAnnualFiling />} />
           {/* ===== Remaining Tax & Compliance Routes ===== */}

          <Route path="/tax-compliance/llp-annual-filing" element={<LLPAnnualFiling />} />
          <Route path="/tax-compliance/secretarial-audit" element={<SecretarialAudit />} />
          <Route path="/tax-compliance/annual-compliance" element={<AnnualCompliance />} />

          <Route path="/tax-compliance/pf-registration" element={<PFRegistration />} />
          <Route path="/tax-compliance/esic-registration" element={<ESICRegistration />} />
          <Route path="/tax-compliance/professional-tax-registration" element={<ProfessionalTaxRegistration />} />

          <Route path="/tax-compliance/llp-agreement-change" element={<LLPAgreementChange />} />
          <Route path="/tax-compliance/add-designated-partner" element={<AddDesignatedPartner />} />
          {/* ===== Specific Routes ===== */}

          <Route path="/tax-compliance/professional-tax" element={<ProfessionalTax />} />


          {/* ============================= */}
        
          {/* ============================= */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;