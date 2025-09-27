import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Heart
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    "About Us", "Contact Us", "Privacy Policy", "Terms & Conditions", 
    "Refund Policy", "Careers", "Blog", "Help & Support"
  ];

  const schoolTypes = [
    "CBSE Schools", "ICSE Schools", "IB Schools", "State Board Schools",
    "Day Schools", "Boarding Schools", "Play Schools", "International Schools"
  ];

  const cities = [
    "Schools in Delhi", "Schools in Mumbai", "Schools in Bangalore", "Schools in Chennai",
    "Schools in Hyderabad", "Schools in Pune", "Schools in Kolkata", "Schools in Ahmedabad"
  ];

  const services = [
    "Education Loans", "Scholarships", "School Comparison", "Alumni Networks",
    "AI Assistant", "Fundraising", "Safety Policies", "Admission Guidance"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="space-y-4">
            <div className="flex items-center">
              <h3 className="text-2xl font-bold text-secondary">SchoolDekho</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner in finding the perfect educational institution. 
              Connecting families with quality education across India.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-2 text-secondary" />
                <span>+91 9811247700</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-2 text-secondary" />
                <span>info@schooldekho.in</span>
              </div>
              <div className="flex items-start text-sm">
                <MapPin className="w-4 h-4 mr-2 text-secondary mt-0.5" />
                <span>New Delhi, India</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3 pt-2">
              <Button size="icon" variant="ghost" className="text-primary-foreground hover:text-secondary hover:bg-white/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-primary-foreground hover:text-secondary hover:bg-white/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-primary-foreground hover:text-secondary hover:bg-white/10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-primary-foreground hover:text-secondary hover:bg-white/10">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link 
                    to="/#" 
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* School Types & Cities */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Schools by Type</h4>
            <ul className="space-y-2 mb-6">
              {schoolTypes.slice(0, 4).map((type) => (
                <li key={type}>
                  <Link 
                    to="/" 
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                  >
                    {type}
                  </Link>
                </li>
              ))}
            </ul>

            <h5 className="text-md font-semibold mb-3 text-secondary">Popular Cities</h5>
            <ul className="space-y-2">
              {cities.slice(0, 4).map((city) => (
                <li key={city}>
                  <Link 
                    to="/" 
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                  >
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Our Services</h4>
            <ul className="space-y-2 mb-6">
              {services.slice(0, 6).map((service) => {
                let route = "/#";
                if (service === "Education Loans") route = "/education-loans";
                else if (service === "Scholarships") route = "/scholarships";
                else if (service === "School Comparison") route = "/compare-schools";
                else if (service === "Alumni Networks") route = "/alumni-network";
                
                return (
                  <li key={service}>
                    <Link 
                      to={route}
                      className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                    >
                      {service}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="text-md font-semibold mb-3 text-secondary">Stay Updated</h5>
              <p className="text-sm text-primary-foreground/80 mb-3">
                Get the latest updates on schools, admissions, and education news.
              </p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 text-sm"
                />
                <Button 
                  size="sm"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary-hover whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-sm text-primary-foreground/80">
              <span>© 2024 SchoolDekho.in. All rights reserved.</span>
            </div>
            
            <div className="flex items-center text-sm text-primary-foreground/80">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-400" />
              <span>for Indian Education</span>
            </div>

            <div className="flex items-center space-x-4 text-sm">
              <Link to="/#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <span className="text-primary-foreground/40">|</span>
              <Link to="/#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                Terms of Service
              </Link>
              <span className="text-primary-foreground/40">|</span>
              <Link to="/#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;