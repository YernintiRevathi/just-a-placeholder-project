import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FundraisingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Fundraising Initiatives Coming Soon
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are currently developing our fundraising platform to help support educational initiatives and provide opportunities for underprivileged students. This section will be available soon with comprehensive fundraising tools and community support features.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FundraisingPage;
