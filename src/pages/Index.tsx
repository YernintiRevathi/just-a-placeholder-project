import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SchoolCategories from "@/components/SchoolCategories";
import AdditionalServices from "@/components/AdditionalServices";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SchoolCategories />
      <AdditionalServices />
      <Footer />
    </div>
  );
};

export default Index;
