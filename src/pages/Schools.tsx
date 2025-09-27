// src/pages/Schools.tsx

import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Star, Plus, X, ArrowRight } from "lucide-react";

// Define the School type for TypeScript
interface School {
  id: number;
  name: string;
  location: string;
  board: string;
  type: string;
  region: string;
  rating: number;
  annualFee: number;
  image: string;
}

// --- UPDATED MOCK SCHOOL DATA ---
const allSchools: School[] = [
    { id: 1, name: "Delhi Public School", location: "Sector 45, Gurgaon", board: "CBSE", type: "Day School", region: "North India", rating: 4.5, annualFee: 180000, image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 2, name: "Ryan International School", location: "Vasant Kunj, Delhi", board: "CBSE", type: "Day School", region: "North India", rating: 4.2, annualFee: 220000, image: "https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 3, name: "Dhirubhai Ambani International", location: "Mumbai", board: "IB", type: "Day School", region: "West India", rating: 4.9, annualFee: 700000, image: "https://images.pexels.com/photos/159844/pexels-photo-159844.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 4, name: "The Doon School", location: "Dehradun", board: "ICSE/ISC", type: "Boarding School", region: "North India", rating: 4.8, annualFee: 1100000, image: "https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 5, name: "EuroKids Preschool", location: "Koramangala, Bangalore", board: "State Board", type: "Pre School", region: "South India", rating: 4.6, annualFee: 85000, image: "https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 6, name: "La Martiniere for Boys", location: "Kolkata", board: "ICSE/ISC", type: "Day School", region: "East India", rating: 4.7, annualFee: 250000, image: "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 7, name: "Indus International School", location: "Pune", board: "IB", type: "Boarding School", region: "West India", rating: 4.6, annualFee: 900000, image: "https://images.pexels.com/photos/1184579/pexels-photo-1184579.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 8, "name": "Kangaroo Kids", "location": "Chennai", "board": "IGCSE", "type": "Pre School", "region": "South India", "rating": 4.5, "annualFee": 45000, "image": "https://images.pexels.com/photos/3662843/pexels-photo-3662843.jpeg?auto=compress&cs=tinysrgb&w=400" }
];

// --- FILTER OPTIONS FROM SCREENSHOT ---
const schoolTypes = ["Day School", "Pre School", "Boarding School", "PU Junior College"];
const feeRanges = ["< ₹30K", "₹30K - ₹50K", "₹50K - ₹70K", "₹70K - ₹1L", "₹1L - ₹2L", "₹2L - ₹3L", "₹3L - ₹5L", "> ₹5L"];
const boardTypes = ["CBSE", "ICSE/ISC", "IB", "IGCSE", "State Board"];
const regions = ["North India", "South India", "East India", "West India", "Central India"];

const SchoolsPage = () => {
  const [schoolType, setSchoolType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [compareList, setCompareList] = useState<School[]>([]);

  // --- FULLY FUNCTIONAL FILTERING LOGIC ---
  const filteredSchools = useMemo(() => {
    // Separate active filters by their category
    const activeFeeRanges = activeFilters.filter(f => feeRanges.includes(f));
    const activeBoardTypes = activeFilters.filter(f => boardTypes.includes(f));
    const activeRegions = activeFilters.filter(f => regions.includes(f));

    return allSchools.filter(school => {
      // Text search filter (must match)
      if (searchTerm && !(school.name.toLowerCase().includes(searchTerm.toLowerCase()) || school.location.toLowerCase().includes(searchTerm.toLowerCase()))) {
        return false;
      }
      // Dropdown school type filter (must match)
      if (schoolType && schoolType !== "all" && school.type !== schoolType) {
        return false;
      }
      // Board Type filter (matches ANY selected board)
      if (activeBoardTypes.length > 0 && !activeBoardTypes.includes(school.board)) {
        return false;
      }
      // Region filter (matches ANY selected region)
      if (activeRegions.length > 0 && !activeRegions.includes(school.region)) {
        return false;
      }
      // Fee Range filter (matches ANY selected range)
      if (activeFeeRanges.length > 0) {
        const feeMatch = activeFeeRanges.some(range => {
          const fee = school.annualFee;
          if (range === "< ₹30K") return fee < 30000;
          if (range === "₹30K - ₹50K") return fee >= 30000 && fee < 50000;
          if (range === "₹50K - ₹70K") return fee >= 50000 && fee < 70000;
          if (range === "₹70K - ₹1L") return fee >= 70000 && fee < 100000;
          if (range === "₹1L - ₹2L") return fee >= 100000 && fee < 200000;
          if (range === "₹2L - ₹3L") return fee >= 200000 && fee < 300000;
          if (range === "₹3L - ₹5L") return fee >= 300000 && fee < 500000;
          if (range === "> ₹5L") return fee >= 500000;
          return false;
        });
        if (!feeMatch) return false;
      }
      // If all checks pass, include the school
      return true;
    });
  }, [searchTerm, schoolType, activeFilters]);

  const handleFilterClick = (filter: string) => {
    setActiveFilters(prev => prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]);
  };
  
  const handleAddToCompare = (school: School) => {
    if (compareList.length < 3 && !compareList.find(s => s.id === school.id)) {
      setCompareList([...compareList, school]);
    }
  };

  const handleRemoveFromCompare = (schoolId: number) => {
    setCompareList(compareList.filter(s => s.id !== schoolId));
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pb-24">
        {/* --- UI UPDATED TO MATCH SCREENSHOT --- */}
        <section className="p-4 sm:p-6 md:p-8 bg-blue-50 dark:bg-gray-900/50">
          <div className="w-full max-w-4xl mx-auto bg-white dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-lg space-y-8">
            <div className="grid md:grid-cols-3 gap-4">
              <Select value={schoolType} onValueChange={setSchoolType}>
                <SelectTrigger className="h-12"><SelectValue placeholder="Select School Type" /></SelectTrigger>
                <SelectContent><SelectItem value="all">All School Types</SelectItem>{schoolTypes.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}</SelectContent>
              </Select>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Please type school name or location" className="h-12 pl-10"/>
              </div>
              <Button className="h-12 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg"><Search className="w-5 h-5 mr-2" />Search Schools</Button>
            </div>
            <div className="space-y-6">
              <h3 className="text-center font-semibold text-lg">Search by Filters</h3>
              <div><p className="text-center font-medium text-muted-foreground mb-3">Fee Range (Annual)</p><div className="flex flex-wrap gap-3 justify-center">{feeRanges.map(fee => <Button key={fee} onClick={() => handleFilterClick(fee)} variant={activeFilters.includes(fee) ? 'default' : 'outline'} size="sm">{fee}</Button>)}</div></div>
              <div><p className="text-center font-medium text-muted-foreground mb-3">Board Type</p><div className="flex flex-wrap gap-3 justify-center">{boardTypes.map(board => <Button key={board} onClick={() => handleFilterClick(board)} variant={activeFilters.includes(board) ? 'default' : 'outline'} size="sm">{board}</Button>)}</div></div>
              <div><p className="text-center font-medium text-muted-foreground mb-3">Region</p><div className="flex flex-wrap gap-3 justify-center">{regions.map(region => <Button key={region} onClick={() => handleFilterClick(region)} variant={activeFilters.includes(region) ? 'default' : 'outline'} size="sm">{region}</Button>)}</div></div>
            </div>
          </div>
        </section>

        {/* School Listing Grid */}
        <section className="container mx-auto px-4 py-12">
          {filteredSchools.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSchools.map((school) => {
                const isSelected = compareList.some(s => s.id === school.id);
                const isFull = compareList.length >= 3;
                return (
                  <Card key={school.id} className="hover:shadow-card transition-shadow overflow-hidden">
                    <div className="relative"><img src={school.image} alt={school.name} className="w-full h-48 object-cover"/><Badge className="absolute top-2 right-2 bg-white text-foreground">{school.board}</Badge></div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg">{school.name}</h3>
                      <div className="flex items-center text-muted-foreground my-3"><MapPin className="w-4 h-4 mr-1"/><span className="text-sm">{school.location}</span></div>
                      <div className="flex items-center justify-between mb-4"><div className="flex items-center"><Star className="w-4 h-4 text-yellow-500 fill-current"/><span className="text-sm ml-1">{school.rating}</span></div><span className="font-semibold">₹{school.annualFee.toLocaleString()}/year</span></div>
                      <Button onClick={() => handleAddToCompare(school)} disabled={isFull && !isSelected} className="w-full" variant={isSelected ? "secondary" : "default"}><Plus className="w-4 h-4 mr-2"/>{isSelected ? 'Added to Compare' : 'Add to Compare'}</Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16"><h2 className="text-2xl font-bold">No Schools Found</h2><p className="text-muted-foreground mt-2">Try adjusting your search filters to find what you're looking for.</p></div>
          )}
        </section>
      </main>

      {/* Comparison Bar */}
      {compareList.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-40 animate-slide-up"><div className="container mx-auto px-4 pb-4"><div className="bg-primary text-primary-foreground rounded-lg shadow-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4"><div className="flex-1"><h3 className="font-bold text-lg mb-2">Compare Schools ({compareList.length}/3)</h3><div className="flex items-center gap-2 flex-wrap">{compareList.map(school => <Badge key={school.id} variant="secondary" className="flex items-center gap-1">{school.name}<button onClick={() => handleRemoveFromCompare(school.id)} className="opacity-75 hover:opacity-100"><X className="w-3 h-3"/></button></Badge>)}</div></div><Link to={`/compare?ids=${compareList.map(s => s.id).join(',')}`}><Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary-hover w-full sm:w-auto">Compare Now <ArrowRight className="w-4 h-4 ml-2"/></Button></Link></div></div></div>
      )}

      <Footer />
    </div>
  );
};

export default SchoolsPage;