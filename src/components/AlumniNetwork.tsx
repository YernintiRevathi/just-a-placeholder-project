import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  Search, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  MessageCircle,
  Star,
  Calendar,
  Award,
  Building,
  Phone,
  Mail,
  Linkedin,
  Filter
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AlumniNetwork = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedProfession, setSelectedProfession] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  // Mock alumni data
  const alumni = [
    {
      id: 1,
      name: "Priya Sharma",
      school: "Delhi Public School",
      graduationYear: 2015,
      currentRole: "Software Engineer",
      company: "Google",
      location: "Bangalore",
      experience: "8 years",
      expertise: ["Technology", "Startups", "Career Guidance"],
      rating: 4.9,
      sessions: 45,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      bio: "Passionate about helping students transition into tech careers. Mentor at various coding bootcamps.",
      achievements: ["Google Developer Expert", "TEDx Speaker"]
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      school: "Ryan International School",
      graduationYear: 2012,
      currentRole: "Investment Banker",
      company: "Goldman Sachs",
      location: "Mumbai",
      experience: "11 years",
      expertise: ["Finance", "Investment", "MBA Guidance"],
      rating: 4.8,
      sessions: 32,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      bio: "Helping students understand finance careers and MBA preparation strategies.",
      achievements: ["CFA Charter", "Top Performer 2023"]
    },
    {
      id: 3,
      name: "Dr. Anita Verma",
      school: "Modern School",
      graduationYear: 2008,
      currentRole: "Pediatrician",
      company: "AIIMS Delhi",
      location: "Delhi",
      experience: "15 years",
      expertise: ["Medicine", "NEET Preparation", "Healthcare"],
      rating: 4.9,
      sessions: 67,
      avatar: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=150",
      bio: "Dedicated to guiding aspiring medical students through their journey to become doctors.",
      achievements: ["Best Doctor Award 2022", "Research Publications: 25+"]
    },
    {
      id: 4,
      name: "Arjun Patel",
      school: "Delhi Public School",
      graduationYear: 2018,
      currentRole: "Entrepreneur",
      company: "TechStart Solutions",
      location: "Pune",
      experience: "5 years",
      expertise: ["Entrepreneurship", "Business Strategy", "Startups"],
      rating: 4.7,
      sessions: 28,
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      bio: "Founded 2 successful startups. Passionate about helping young entrepreneurs.",
      achievements: ["Forbes 30 Under 30", "Startup of the Year 2023"]
    }
  ];

  const schools = ["Delhi Public School", "Ryan International School", "Modern School", "St. Xavier's School"];
  const professions = ["Software Engineer", "Investment Banker", "Doctor", "Entrepreneur", "Teacher", "Lawyer"];
  const years = ["2008-2012", "2013-2017", "2018-2022", "2023-2025"];

  const filteredAlumni = alumni.filter(person => {
    const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         person.currentRole.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         person.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSchool = !selectedSchool || person.school === selectedSchool;
    const matchesProfession = !selectedProfession || person.currentRole === selectedProfession;
    const matchesYear = !selectedYear || (
      selectedYear === "2008-2012" && person.graduationYear >= 2008 && person.graduationYear <= 2012 ||
      selectedYear === "2013-2017" && person.graduationYear >= 2013 && person.graduationYear <= 2017 ||
      selectedYear === "2018-2022" && person.graduationYear >= 2018 && person.graduationYear <= 2022 ||
      selectedYear === "2023-2025" && person.graduationYear >= 2023 && person.graduationYear <= 2025
    );

    return matchesSearch && matchesSchool && matchesProfession && matchesYear;
  });

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Users className="w-12 h-12 text-primary mr-3" />
            <GraduationCap className="w-12 h-12 text-secondary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Alumni Network
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Connect with successful alumni from top schools. Get career guidance, mentorship, 
            and insights from professionals who've walked the same path.
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-5 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    placeholder="Search by name, role, or company..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <Select value={selectedSchool} onValueChange={setSelectedSchool}>
                <SelectTrigger>
                  <SelectValue placeholder="School" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Schools</SelectItem>
                  {schools.map((school) => (
                    <SelectItem key={school} value={school}>{school}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedProfession} onValueChange={setSelectedProfession}>
                <SelectTrigger>
                  <SelectValue placeholder="Profession" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Professions</SelectItem>
                  {professions.map((profession) => (
                    <SelectItem key={profession} value={profession}>{profession}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger>
                  <SelectValue placeholder="Graduation Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Years</SelectItem>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Alumni Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredAlumni.map((person) => (
            <Card key={person.id} className="hover:shadow-card transition-shadow">
              <CardContent className="p-6">
                {/* Profile Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={person.avatar} alt={person.name} />
                    <AvatarFallback>{person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{person.name}</h3>
                    <p className="text-primary font-semibold">{person.currentRole}</p>
                    <p className="text-muted-foreground text-sm">{person.company}</p>
                    <div className="flex items-center mt-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm ml-1">{person.rating}</span>
                      <span className="text-muted-foreground text-sm ml-2">({person.sessions} sessions)</span>
                    </div>
                  </div>
                </div>

                {/* School and Graduation */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <GraduationCap className="w-4 h-4 text-secondary mr-2" />
                    <span>{person.school}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground mr-2" />
                    <span>Class of {person.graduationYear}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground mr-2" />
                    <span>{person.location}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Briefcase className="w-4 h-4 text-muted-foreground mr-2" />
                    <span>{person.experience} experience</span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {person.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {person.expertise.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-1 text-secondary" />
                    Achievements
                  </h4>
                  <div className="space-y-1">
                    {person.achievements.map((achievement, index) => (
                      <p key={index} className="text-xs text-muted-foreground">• {achievement}</p>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button className="flex-1" size="sm">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                  <Button variant="outline" size="sm">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mail className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Users, label: "Active Alumni", value: "2,500+" },
            { icon: Building, label: "Companies", value: "500+" },
            { icon: MessageCircle, label: "Mentoring Sessions", value: "10,000+" },
            { icon: Award, label: "Success Stories", value: "1,200+" }
          ].map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-foreground">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-hero text-white text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Join Our Alumni Network</h3>
            <p className="text-lg mb-6 text-white/90">
              Are you an alumnus? Join our network and help guide the next generation of students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary-hover"
              >
                Register as Alumni
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Become a Mentor
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AlumniNetwork;