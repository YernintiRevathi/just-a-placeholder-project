import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SchoolCategories from "@/components/SchoolCategories";
import AdditionalServices from "@/components/AdditionalServices";
import AIChat from "@/components/AIChat";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SchoolCategories />
      <AdditionalServices />
      <Footer />
      <AIChat />
    </div>
  );
};

export default HomePage;
