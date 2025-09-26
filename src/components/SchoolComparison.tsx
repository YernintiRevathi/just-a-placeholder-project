import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Plus, 
  X, 
  Star, 
  MapPin, 
  IndianRupee, 
  Users, 
  BookOpen,
  Award,
  Bus,
  Utensils,
  Shield,
  Wifi,
  Activity
} from "lucide-react";

const SchoolComparison = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSchools, setSelectedSchools] = useState<any[]>([]);

  // Mock school data
  const schools = [
    {
      id: 1,
      name: "Delhi Public School",
      location: "Sector 45, Gurgaon",
      board: "CBSE",
      rating: 4.5,
      fees: {
        admission: 25000,
        annual: 180000,
        transport: 36000
      },
      facilities: ["Swimming Pool", "Library", "Computer Lab", "Sports Complex", "Cafeteria", "Medical Room"],
      strength: 1200,
      teacherRatio: "1:15",
      established: 1995,
      image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      name: "Ryan International School",
      location: "Vasant Kunj, Delhi",
      board: "CBSE",
      rating: 4.2,
      fees: {
        admission: 30000,
        annual: 220000,
        transport: 42000
      },
      facilities: ["Smart Classes", "Library", "Science Lab", "Playground", "Music Room", "Art Studio"],
      strength: 800,
      teacherRatio: "1:12",
      established: 2001,
      image: "https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      name: "Modern School",
      location: "Barakhamba Road, Delhi",
      board: "CBSE",
      rating: 4.7,
      fees: {
        admission: 35000,
        annual: 250000,
        transport: 38000
      },
      facilities: ["Observatory", "Library", "Labs", "Auditorium", "Sports Ground", "Hostel"],
      strength: 1500,
      teacherRatio: "1:18",
      established: 1920,
      image: "https://images.pexels.com/photos/159844/pexels-photo-159844.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const filteredSchools = schools.filter(school =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToComparison = (school: any) => {
    if (selectedSchools.length < 3 && !selectedSchools.find(s => s.id === school.id)) {
      setSelectedSchools([...selectedSchools, school]);
    }
  };

  const removeFromComparison = (schoolId: number) => {
    setSelectedSchools(selectedSchools.filter(s => s.id !== schoolId));
  };

  const getFacilityIcon = (facility: string) => {
    const iconMap: { [key: string]: any } = {
      "Swimming Pool": Activity,
      "Library": BookOpen,
      "Computer Lab": Wifi,
      "Sports Complex": Activity,
      "Cafeteria": Utensils,
      "Medical Room": Shield,
      "Smart Classes": BookOpen,
      "Science Lab": Award,
      "Playground": Activity,
      "Music Room": Award,
      "Art Studio": Award,
      "Observatory": Award,
      "Labs": Award,
      "Auditorium": Award,
      "Sports Ground": Activity,
      "Hostel": Users
    };
    return iconMap[facility] || Award;
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Compare Schools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare schools side by side based on fees, facilities, ratings, and more to make the best choice for your child
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search schools by name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </div>

        {/* School Selection */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredSchools.map((school) => (
            <Card key={school.id} className="hover:shadow-card transition-shadow">
              <div className="relative">
                <img 
                  src={school.image} 
                  alt={school.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-2 right-2 bg-white text-foreground">
                  {school.board}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg">{school.name}</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm ml-1">{school.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{school.location}</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <IndianRupee className="w-4 h-4 text-primary" />
                    <span className="font-semibold">₹{school.fees.annual.toLocaleString()}/year</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-1" />
                    {school.strength} students
                  </div>
                </div>

                <Button
                  onClick={() => addToComparison(school)}
                  disabled={selectedSchools.length >= 3 || selectedSchools.find(s => s.id === school.id)}
                  className="w-full"
                  variant={selectedSchools.find(s => s.id === school.id) ? "secondary" : "default"}
                >
                  {selectedSchools.find(s => s.id === school.id) ? (
                    "Added to Compare"
                  ) : (
                    <>
                      <Plus className="w-4 h-4 mr-2" />
                      Add to Compare
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        {selectedSchools.length > 0 && (
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>School Comparison ({selectedSchools.length}/3)</span>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setSelectedSchools([])}
                >
                  Clear All
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-semibold">Criteria</th>
                      {selectedSchools.map((school) => (
                        <th key={school.id} className="text-center p-4 min-w-[250px]">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold">{school.name}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFromComparison(school.id)}
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Basic Info */}
                    <tr className="border-b">
                      <td className="p-4 font-medium">Location</td>
                      {selectedSchools.map((school) => (
                        <td key={school.id} className="p-4 text-center">{school.location}</td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Board</td>
                      {selectedSchools.map((school) => (
                        <td key={school.id} className="p-4 text-center">
                          <Badge variant="outline">{school.board}</Badge>
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Rating</td>
                      {selectedSchools.map((school) => (
                        <td key={school.id} className="p-4 text-center">
                          <div className="flex items-center justify-center">
                            <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                            {school.rating}
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Established</td>
                      {selectedSchools.map((school) => (
                        <td key={school.id} className="p-4 text-center">{school.established}</td>
                      ))}
                    </tr>

                    {/* Fees */}
                    <tr className="border-b bg-muted/30">
                      <td className="p-4 font-medium">Admission Fee</td>
                      {selectedSchools.map((school) => (
                        <td key={school.id} className="p-4 text-center font-semibold text-primary">
                          ₹{school.fees.admission.toLocaleString()}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b bg-muted/30">
                      <td className="p-4 font-medium">Annual Fee</td>
                      {selectedSchools.map((school) => (
                        <td key={school.id} className="p-4 text-center font-semibold text-primary">
                          ₹{school.fees.annual.toLocaleString()}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b bg-muted/30">
                      <td className="p-4 font-medium">Transport Fee</td>
                      {selectedSchools.map((school) => (
                        <td key={school.id} className="p-4 text-center font-semibold text-primary">
                          ₹{school.fees.transport.toLocaleString()}
                        </td>
                      ))}
                    </tr>

                    {/* Other Details */}
                    <tr className="border-b">
                      <td className="p-4 font-medium">Student Strength</td>
                      {selectedSchools.map((school) => (
                        <td key={school.id} className="p-4 text-center">{school.strength}</td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Teacher-Student Ratio</td>
                      {selectedSchools.map((school) => (
                        <td key={school.id} className="p-4 text-center">{school.teacherRatio}</td>
                      ))}
                    </tr>

                    {/* Facilities */}
                    <tr className="border-b">
                      <td className="p-4 font-medium">Facilities</td>
                      {selectedSchools.map((school) => (
                        <td key={school.id} className="p-4">
                          <div className="flex flex-wrap gap-1 justify-center">
                            {school.facilities.map((facility: string, index: number) => {
                              const Icon = getFacilityIcon(facility);
                              return (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  <Icon className="w-3 h-3 mr-1" />
                                  {facility}
                                </Badge>
                              );
                            })}
                          </div>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex justify-center">
                <Button className="bg-gradient-primary text-primary-foreground">
                  Get Detailed Comparison Report
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default SchoolComparison;