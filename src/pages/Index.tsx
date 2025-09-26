import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SchoolCategories from "@/components/SchoolCategories";
import AdditionalServices from "@/components/AdditionalServices";
import LoanApplication from "@/components/LoanApplication";
import SchoolComparison from "@/components/SchoolComparison";
import AlumniNetwork from "@/components/AlumniNetwork";
import ScholarshipFinder from "@/components/ScholarshipFinder";
import AIChat from "@/components/AIChat";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SchoolCategories />
      <LoanApplication />
      <SchoolComparison />
      <ScholarshipFinder />
      <AlumniNetwork />
      <AdditionalServices />
      <Footer />
      <AIChat />
    </div>
  );
};

export default Index;
