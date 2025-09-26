import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [schoolType, setSchoolType] = useState("");

  const schoolTypes = [
    "Day School",
    "Pre School",
    "Boarding School",
    "PU Junior College",
    "International School",
    "Montessori School"
  ];

  const popularFilters = [
    "< ₹30K", "₹30K - ₹50K", "₹50K - ₹70K", "₹70K - ₹1L", 
    "₹1L - ₹2L", "₹2L - ₹3L", "₹3L - ₹5L", "> ₹5L"
  ];

  const boardTypes = ["CBSE", "ICSE/ISC", "IB", "IGCSE", "State Board"];
  const regions = ["North India", "South India", "East India", "West India", "Central India"];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/60"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Hero Content */}
          <div className="animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <GraduationCap className="w-16 h-16 mr-4 animate-float" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              FIND THE{" "}
              <span className="relative">
                <span className="text-secondary">BEST SCHOOL</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-secondary/60 rounded-full"></div>
              </span>{" "}
              NEAR YOU
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Search the best schools from a list of 25,000+ schools located across India. 
              SchoolDekho offers personalized counseling support to help you find exactly what you're looking for.
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-hero animate-slide-up">
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">CATEGORY</label>
                <Select value={schoolType} onValueChange={setSchoolType}>
                  <SelectTrigger className="h-12 bg-background border-border">
                    <SelectValue placeholder="Select School Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {schoolTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">LOCATION OR SCHOOL NAME</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    placeholder="Please type school name or location"
                    className="h-12 pl-10 bg-background border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">ACTION</label>
                <Button className="h-12 w-full bg-gradient-secondary text-secondary-foreground hover:bg-secondary-hover font-semibold text-lg">
                  <Search className="w-5 h-5 mr-2" />
                  Search Schools
                </Button>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Search by Filters</h3>
              
              {/* Fee Range Filters */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Fee Range (Annual)</p>
                <div className="flex flex-wrap gap-2">
                  {popularFilters.map((filter) => (
                    <Button
                      key={filter}
                      variant="outline"
                      size="sm"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {filter}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Additional Filters */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Board Type</p>
                  <div className="flex flex-wrap gap-2">
                    {boardTypes.map((board) => (
                      <Button
                        key={board}
                        variant="outline"
                        size="sm"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {board}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Region</p>
                  <div className="flex flex-wrap gap-2">
                    {regions.map((region) => (
                      <Button
                        key={region}
                        variant="outline"
                        size="sm"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {region}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;