import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CreditCard, GraduationCap, Calculator, CircleCheck as CheckCircle, Clock, IndianRupee, FileText, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EducationLoansPage = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    schoolName: "",
    annualIncome: "",
    loanPurpose: ""
  });

  const classOptions = [
    "Play School", "Nursery", "LKG", "UKG", "Class 1", "Class 2", "Class 3", 
    "Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", 
    "Class 10", "Class 11", "Class 12", "Pre-University", "Graduation"
  ];

  const loanFeatures = [
    { icon: CheckCircle, title: "Quick Approval", desc: "Get approval in 24-48 hours" },
    { icon: IndianRupee, title: "Low Interest", desc: "Starting from 8.5% per annum" },
    { icon: Clock, title: "Flexible Tenure", desc: "Up to 7 years repayment" },
    { icon: FileText, title: "Minimal Documentation", desc: "Simple paperwork process" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateEMI = () => {
    if (!loanAmount) return 0;
    const principal = parseFloat(loanAmount);
    const rate = 8.5 / 100 / 12; // Monthly interest rate
    const tenure = 5 * 12; // 5 years in months
    
    const emi = (principal * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
    return Math.round(emi);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-16 bg-page-gradient">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center mb-4">
              <CreditCard className="w-12 h-12 text-primary mr-3" />
              <GraduationCap className="w-12 h-12 text-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Education Loan for Every Child
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From Play School to Higher Education - Get instant education loans with competitive rates. 
              No child should miss education due to financial constraints.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Loan Features */}
            <div className="lg:col-span-1">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Users className="w-5 h-5 mr-2" />
                    Why Choose Our Education Loans?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {loanFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <feature.icon className="w-5 h-5 text-secondary mt-1" />
                      <div>
                        <h4 className="font-semibold text-sm">{feature.title}</h4>
                        <p className="text-xs text-muted-foreground">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* EMI Calculator */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-secondary">
                    <Calculator className="w-5 h-5 mr-2" />
                    EMI Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label>Loan Amount (₹)</Label>
                      <Input
                        type="number"
                        placeholder="Enter amount"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(e.target.value)}
                      />
                    </div>
                    {loanAmount && (
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">Monthly EMI</p>
                          <p className="text-2xl font-bold text-primary">
                            ₹{calculateEMI().toLocaleString()}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            @ 8.5% for 5 years
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Apply for Education Loan</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and get instant pre-approval
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    {/* Student Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="studentName">Student Name *</Label>
                        <Input
                          id="studentName"
                          placeholder="Enter student's full name"
                          value={formData.studentName}
                          onChange={(e) => handleInputChange("studentName", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="class">Class/Grade *</Label>
                        <Select value={selectedClass} onValueChange={setSelectedClass}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select class" />
                          </SelectTrigger>
                          <SelectContent>
                            {classOptions.map((cls) => (
                              <SelectItem key={cls} value={cls}>
                                {cls}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Parent Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                        <Input
                          id="parentName"
                          placeholder="Enter parent's name"
                          value={formData.parentName}
                          onChange={(e) => handleInputChange("parentName", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          placeholder="Enter 10-digit mobile number"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter email address"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="annualIncome">Annual Family Income *</Label>
                        <Select 
                          value={formData.annualIncome} 
                          onValueChange={(value) => handleInputChange("annualIncome", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select income range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="below-3">Below ₹3 Lakhs</SelectItem>
                            <SelectItem value="3-5">₹3-5 Lakhs</SelectItem>
                            <SelectItem value="5-10">₹5-10 Lakhs</SelectItem>
                            <SelectItem value="10-20">₹10-20 Lakhs</SelectItem>
                            <SelectItem value="above-20">Above ₹20 Lakhs</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* School and Loan Details */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="schoolName">School Name</Label>
                        <Input
                          id="schoolName"
                          placeholder="Enter school name"
                          value={formData.schoolName}
                          onChange={(e) => handleInputChange("schoolName", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="loanAmount">Required Loan Amount (₹) *</Label>
                        <Input
                          id="loanAmount"
                          type="number"
                          placeholder="Enter loan amount"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="loanPurpose">Loan Purpose</Label>
                      <Textarea
                        id="loanPurpose"
                        placeholder="Specify what the loan will be used for (fees, books, uniform, etc.)"
                        value={formData.loanPurpose}
                        onChange={(e) => handleInputChange("loanPurpose", e.target.value)}
                      />
                    </div>

                    {/* Loan Amount Badges */}
                    <div>
                      <Label className="mb-2 block">Quick Amount Selection</Label>
                      <div className="flex flex-wrap gap-2">
                        {["25000", "50000", "100000", "200000", "500000"].map((amount) => (
                          <Badge
                            key={amount}
                            variant={loanAmount === amount ? "default" : "outline"}
                            className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                            onClick={() => setLoanAmount(amount)}
                          >
                            ₹{parseInt(amount).toLocaleString()}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        type="submit" 
                        className="flex-1 bg-gradient-primary text-primary-foreground hover:opacity-90"
                      >
                        Apply for Loan
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="flex-1"
                      >
                        Get Pre-Approval
                      </Button>
                    </div>

                    <div className="text-xs text-muted-foreground text-center">
                      By applying, you agree to our Terms & Conditions and Privacy Policy. 
                      Your information is secure and will be used only for loan processing.
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Loan Types */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Available Loan Types</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: "Play School Loans", desc: "₹10K - ₹1L", icon: "🎨" },
                { title: "Primary Education", desc: "₹25K - ₹3L", icon: "📚" },
                { title: "Secondary Education", desc: "₹50K - ₹5L", icon: "🎓" },
                { title: "Higher Education", desc: "₹1L - ₹50L", icon: "🏛️" }
              ].map((loan, index) => (
                <Card key={index} className="text-center hover:shadow-card transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{loan.icon}</div>
                    <h4 className="font-semibold mb-2">{loan.title}</h4>
                    <p className="text-sm text-muted-foreground">{loan.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EducationLoansPage;
