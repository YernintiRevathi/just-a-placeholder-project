import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Building, Baby, GraduationCap } from "lucide-react";
import daySchoolIcon from "@/assets/day-school-icon.png";
import boardingSchoolIcon from "@/assets/boarding-school-icon.png";
import playSchoolIcon from "@/assets/play-school-icon.png";
import puCollegeIcon from "@/assets/pu-college-icon.png";

const SchoolCategories = () => {
  const categories = [
    {
      id: "day-school",
      title: "Day School",
      description: "Regular schools with daily attendance",
      icon: daySchoolIcon,
      fallbackIcon: Building,
      count: "15,000+ Schools",
      color: "from-blue-400 to-blue-600"
    },
    {
      id: "boarding-school", 
      title: "Boarding School",
      description: "Full-time residential education",
      icon: boardingSchoolIcon,
      fallbackIcon: Users,
      count: "2,500+ Schools",
      color: "from-green-400 to-green-600"
    },
    {
      id: "play-school",
      title: "Play School",
      description: "Early childhood development",
      icon: playSchoolIcon,
      fallbackIcon: Baby,
      count: "5,000+ Schools",
      color: "from-pink-400 to-pink-600"
    },
    {
      id: "pu-college",
      title: "PU College",
      description: "Pre-university education",
      icon: puCollegeIcon,
      fallbackIcon: GraduationCap,
      count: "3,200+ Colleges",
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect educational institution tailored to your child's needs and aspirations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <Card 
              key={category.id}
              className="group relative overflow-hidden hover:shadow-card transition-all duration-300 transform hover:-translate-y-2 cursor-pointer animate-bounce-in border-border/50 hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center relative">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon container */}
                <div className="relative mb-4 flex justify-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <img 
                      src={category.icon}
                      alt={category.title}
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        // Fallback to Lucide icon if image fails to load
                        const Icon = category.fallbackIcon;
                        e.currentTarget.style.display = 'none';
                        const iconContainer = e.currentTarget.parentElement;
                        if (iconContainer && !iconContainer.querySelector('svg')) {
                          const iconElement = document.createElement('div');
                          iconElement.className = 'w-12 h-12 text-primary';
                          iconContainer.appendChild(iconElement);
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-3">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                  
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 border-2 border-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-4">
            Can't find what you're looking for?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg hover:shadow-card transition-all duration-300 font-medium">
              Get Personalized Recommendations
            </button>
            <button className="px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-all duration-300 font-medium">
              Talk to Our Education Counselor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolCategories;