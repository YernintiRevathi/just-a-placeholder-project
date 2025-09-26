import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Award, 
  Users, 
  CreditCard, 
  MessageSquare, 
  Heart,
  BookOpen,
  Shield
} from "lucide-react";

const AdditionalServices = () => {
  const services = [
    {
      icon: MapPin,
      title: "Pan India Presence",
      description: "With a presence across most of the cities in India, SchoolDekho has listed schools spread across the length and breadth of the country.",
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/20"
    },
    {
      icon: Award,
      title: "All Boards",
      description: "Be it CBSE, ICSE, IB or state boards, SchoolDekho has listed schools affiliated to all major educational boards in India.",
      color: "text-green-600", 
      bgColor: "bg-green-100 dark:bg-green-900/20"
    },
    {
      icon: CreditCard,
      title: "Education Loans",
      description: "Easy and affordable education loans for students of all classes, from play school to higher education with competitive interest rates.",
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/20"
    },
    {
      icon: BookOpen,
      title: "Scholarship Finder",
      description: "Discover available scholarships and financial aid opportunities tailored to your child's academic profile and needs.",
      color: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-900/20"
    },
    {
      icon: Users,
      title: "Alumni Networks",
      description: "Connect with school alumni networks to get insights, mentorship, and career guidance for your child's future.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100 dark:bg-indigo-900/20"
    },
    {
      icon: MessageSquare,
      title: "AI Education Assistant",
      description: "Get instant answers to your education queries, personalized recommendations, and 24/7 support through our AI chatbot.",
      color: "text-cyan-600",
      bgColor: "bg-cyan-100 dark:bg-cyan-900/20"
    },
    {
      icon: Heart,
      title: "Fundraising Support",
      description: "Join community fundraising initiatives to support educational infrastructure and provide opportunities for underprivileged students.",
      color: "text-pink-600",
      bgColor: "bg-pink-100 dark:bg-pink-900/20"
    },
    {
      icon: Shield,
      title: "Safety & Policies",
      description: "Comprehensive information about school safety measures, code of conduct, privacy policies, and uniform guidelines.",
      color: "text-red-600",
      bgColor: "bg-red-100 dark:bg-red-900/20"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Additional Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive educational support beyond just school discovery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:shadow-card transition-all duration-300 transform hover:-translate-y-1 animate-slide-up border-border/50 hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-full ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Services CTA */}
        <div className="mt-16 bg-gradient-hero rounded-2xl p-8 md:p-12 text-center text-white animate-bounce-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Educational Journey?
          </h3>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of parents who have found the perfect school for their children. 
            Get personalized assistance and make informed decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary-hover shadow-hero"
            >
              Get Started Today
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              Schedule Counseling
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;