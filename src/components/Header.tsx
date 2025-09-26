import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm border-b border-border/50">
          <div className="flex items-center space-x-4 text-muted-foreground">
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              +91 9811247700
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <User className="w-4 h-4 mr-1" />
              Login
            </Button>
            <select className="bg-transparent text-muted-foreground text-sm border-none outline-none">
              <option>EN</option>
              <option>HI</option>
              <option>BN</option>
            </select>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold gradient-text-primary">SchoolDekho</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Schools in City
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Boarding Schools
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Junior Colleges
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Education Loans
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Scholarships
            </a>
            <Button variant="default" className="bg-gradient-secondary text-secondary-foreground hover:bg-secondary-hover">
              Register School
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Schools in City
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Boarding Schools
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Junior Colleges
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Education Loans
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Scholarships
              </a>
              <div className="pt-2 space-y-2">
                <Button variant="default" className="w-full bg-gradient-secondary text-secondary-foreground hover:bg-secondary-hover">
                  Register School
                </Button>
                <Button variant="outline" className="w-full">
                  <User className="w-4 h-4 mr-1" />
                  Login
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;