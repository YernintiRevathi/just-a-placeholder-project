import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Award, Search, Calendar, IndianRupee, Users, BookOpen, Filter, ExternalLink, Clock, CircleCheck as CheckCircle, CircleAlert as AlertCircle, GraduationCap, Heart, Trophy } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ScholarshipFinder = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedClass, setSelectedClass] = useState("all");
  const [selectedAmount, setSelectedAmount] = useState("all");

  // Mock scholarship data
  const scholarships = [
    {
      id: 1,
      title: "Merit Scholarship for Class 10 Toppers",
      provider: "Delhi Education Board",
      category: "Merit-based",
      amount: "₹50,000",
      eligibility: "Class 10 students with 90%+ marks",
      deadline: "2024-03-15",
      applicants: 1250,
      selected: 100,
      status: "Open",
      description: "Scholarship for outstanding Class 10 students to support their Class 11-12 education.",
      requirements: ["Class 10 marksheet", "Income certificate", "Recommendation letter"],
      benefits: ["Full tuition fee coverage", "Book allowance", "Uniform allowance"],
      type: "Government",
      duration: "2 years",
      renewable: true
    },
    {
      id: 2,
      title: "Need-based Education Support",
      provider: "Helping Hands Foundation",
      category: "Need-based",
      amount: "₹25,000",
      eligibility: "Family income below ₹2 lakhs",
      deadline: "2024-04-30",
      applicants: 2100,
      selected: 500,
      status: "Open",
      description: "Financial assistance for economically disadvantaged students.",
      requirements: ["Income certificate", "Bank statements", "School fee receipt"],
      benefits: ["Partial fee support", "Study materials", "Mentorship"],
      type: "NGO",
      duration: "1 year",
      renewable: true
    },
    {
      id: 3,
      title: "Girl Child Education Scholarship",
      provider: "Women Empowerment Trust",
      category: "Gender-based",
      amount: "₹75,000",
      eligibility: "Female students in Classes 6-12",
      deadline: "2024-02-28",
      applicants: 850,
      selected: 200,
      status: "Closing Soon",
      description: "Empowering girl children through quality education support.",
      requirements: ["Birth certificate", "School enrollment proof", "Parent consent"],
      benefits: ["Full fee coverage", "Laptop/tablet", "Career counseling"],
      type: "Trust",
      duration: "Until Class 12",
      renewable: true
    },
    {
      id: 4,
      title: "Sports Excellence Scholarship",
      provider: "Sports Authority of India",
      category: "Sports",
      amount: "₹1,00,000",
      eligibility: "State/National level sports achievers",
      deadline: "2024-05-15",
      applicants: 450,
      selected: 50,
      status: "Open",
      description: "Supporting talented athletes in their academic journey.",
      requirements: ["Sports certificates", "Coach recommendation", "Medical fitness"],
      benefits: ["Full education support", "Sports equipment", "Training allowance"],
      type: "Government",
      duration: "4 years",
      renewable: true
    },
    {
      id: 5,
      title: "Minority Community Scholarship",
      provider: "Ministry of Minority Affairs",
      category: "Community-based",
      amount: "₹30,000",
      eligibility: "Students from minority communities",
      deadline: "2024-03-31",
      applicants: 1800,
      selected: 600,
      status: "Open",
      description: "Educational support for minority community students.",
      requirements: ["Community certificate", "Income proof", "Academic records"],
      benefits: ["Fee assistance", "Book allowance", "Maintenance allowance"],
      type: "Government",
      duration: "1 year",
      renewable: true
    },
    {
      id: 6,
      title: "STEM Excellence Award",
      provider: "Tech Giants Foundation",
      category: "Subject-specific",
      amount: "₹1,50,000",
      eligibility: "Class 11-12 Science students with 85%+",
      deadline: "2024-01-31",
      applicants: 650,
      selected: 25,
      status: "Closed",
      description: "Encouraging excellence in Science, Technology, Engineering, and Mathematics.",
      requirements: ["Science stream enrollment", "Project portfolio", "Teacher recommendation"],
      benefits: ["Full fee coverage", "Internship opportunities", "Mentorship program"],
      type: "Corporate",
      duration: "2 years",
      renewable: false
    }
  ];

  const categories = ["Merit-based", "Need-based", "Gender-based", "Sports", "Community-based", "Subject-specific"];
  const classes = ["Class 1-5", "Class 6-8", "Class 9-10", "Class 11-12", "Graduation", "Post-Graduation"];
  const amounts = ["Up to ₹25K", "₹25K - ₹50K", "₹50K - ₹1L", "Above ₹1L"];

  const filteredScholarships = scholarships.filter(scholarship => {
    const matchesSearch = scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scholarship.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scholarship.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ==="all" || scholarship.category === selectedCategory;
    const matchesClass = selectedClass==="all" || scholarship.eligibility.toLowerCase().includes(selectedClass.toLowerCase());
    
    let matchesAmount = true;
    if (selectedAmount) {
      const amount = parseInt(scholarship.amount.replace(/[₹,]/g, ''));
      switch (selectedAmount) {
        case "Up to ₹25K":
          matchesAmount = amount <= 25000;
          break;
        case "₹25K - ₹50K":
          matchesAmount = amount > 25000 && amount <= 50000;
          break;
        case "₹50K - ₹1L":
          matchesAmount = amount > 50000 && amount <= 100000;
          break;
        case "Above ₹1L":
          matchesAmount = amount > 100000;
          break;
      }
    }

    return matchesSearch && matchesCategory && matchesClass && matchesAmount;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open": return "bg-green-100 text-green-800";
      case "Closing Soon": return "bg-yellow-100 text-yellow-800";
      case "Closed": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Open": return CheckCircle;
      case "Closing Soon": return AlertCircle;
      case "Closed": return Clock;
      default: return Clock;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Merit-based": return Trophy;
      case "Need-based": return Heart;
      case "Gender-based": return Users;
      case "Sports": return Award;
      case "Community-based": return Users;
      case "Subject-specific": return BookOpen;
      default: return Award;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Award className="w-12 h-12 text-primary mr-3" />
            <GraduationCap className="w-12 h-12 text-secondary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Scholarship Finder
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover thousands of scholarships and financial aid opportunities. 
            From merit-based to need-based, find the perfect scholarship for your educational journey.
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
                    placeholder="Search scholarships..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger>
                  <SelectValue placeholder="Class/Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  {classes.map((cls) => (
                    <SelectItem key={cls} value={cls}>{cls}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedAmount} onValueChange={setSelectedAmount}>
                <SelectTrigger>
                  <SelectValue placeholder="Amount" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Amounts</SelectItem>
                  {amounts.map((amount) => (
                    <SelectItem key={amount} value={amount}>{amount}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Scholarship Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {filteredScholarships.map((scholarship) => {
            const StatusIcon = getStatusIcon(scholarship.status);
            const CategoryIcon = getCategoryIcon(scholarship.category);
            
            return (
              <Card key={scholarship.id} className="hover:shadow-card transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{scholarship.title}</CardTitle>
                      <p className="text-muted-foreground">{scholarship.provider}</p>
                    </div>
                    <Badge className={`${getStatusColor(scholarship.status)} ml-4`}>
                      <StatusIcon className="w-3 h-3 mr-1" />
                      {scholarship.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Key Info */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <IndianRupee className="w-5 h-5 text-primary mr-2" />
                        <div>
                          <p className="font-semibold text-lg text-primary">{scholarship.amount}</p>
                          <p className="text-xs text-muted-foreground">{scholarship.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 text-secondary mr-2" />
                        <div>
                          <p className="font-semibold">Deadline</p>
                          <p className="text-sm text-muted-foreground">{scholarship.deadline}</p>
                        </div>
                      </div>
                    </div>

                    {/* Category and Type */}
                    <div className="flex items-center space-x-4">
                      <Badge variant="secondary" className="flex items-center">
                        <CategoryIcon className="w-3 h-3 mr-1" />
                        {scholarship.category}
                      </Badge>
                      <Badge variant="outline">{scholarship.type}</Badge>
                      {scholarship.renewable && <Badge variant="outline">Renewable</Badge>}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground">{scholarship.description}</p>

                    {/* Eligibility */}
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Eligibility</h4>
                      <p className="text-sm text-muted-foreground">{scholarship.eligibility}</p>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Benefits</h4>
                      <div className="flex flex-wrap gap-1">
                        {scholarship.benefits.map((benefit, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Requirements */}
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Required Documents</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {scholarship.requirements.map((req, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{scholarship.applicants} applicants</span>
                      </div>
                      <div className="flex items-center">
                        <Trophy className="w-4 h-4 mr-1" />
                        <span>{scholarship.selected} selected</span>
                      </div>
                      <div className="text-primary font-semibold">
                        {((scholarship.selected / scholarship.applicants) * 100).toFixed(1)}% success rate
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <Button 
                        className="flex-1" 
                        disabled={scholarship.status === "Closed"}
                      >
                        {scholarship.status === "Closed" ? "Application Closed" : "Apply Now"}
                      </Button>
                      <Button variant="outline">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Award, label: "Active Scholarships", value: "500+" },
            { icon: IndianRupee, label: "Total Amount", value: "₹50 Cr+" },
            { icon: Users, label: "Students Helped", value: "25,000+" },
            { icon: CheckCircle, label: "Success Rate", value: "78%" }
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
            <h3 className="text-2xl font-bold mb-4">Need Help Finding Scholarships?</h3>
            <p className="text-lg mb-6 text-white/90">
              Our education counselors can help you find and apply for the best scholarships based on your profile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary-hover"
              >
                Get Personalized Help
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Scholarship Alert
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ScholarshipFinder;