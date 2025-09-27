import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
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
            <ThemeToggle />
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
            <Link to="/" className="text-2xl font-bold gradient-text-primary hover:opacity-80 transition-opacity">
              SchoolDekho
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Schools in City
            </Link>
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Boarding Schools
            </Link>
            <Link to="/education-loans" className="text-foreground hover:text-primary transition-colors font-medium">
              Education Loans
            </Link>
            <Link to="/scholarships" className="text-foreground hover:text-primary transition-colors font-medium">
              Scholarships
            </Link>
            <Link to="/alumni-network" className="text-foreground hover:text-primary transition-colors font-medium">
              Alumni Network
            </Link>
            <Link to="/fundraising" className="text-foreground hover:text-primary transition-colors font-medium">
              Fundraising
            </Link>
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
            <div className="flex items-center justify-between p-2 border-b mb-4">
              <Button variant="outline" className="flex-1 mr-2">
                <User className="w-4 h-4 mr-1" />
                Login
              </Button>
              <ThemeToggle />
            </div>
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Schools in City
              </Link>
              <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Boarding Schools
              </Link>
              <Link to="/education-loans" className="text-foreground hover:text-primary transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Education Loans
              </Link>
              <Link to="/scholarships" className="text-foreground hover:text-primary transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Scholarships
              </Link>
              <Link to="/alumni-network" className="text-foreground hover:text-primary transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Alumni Network
              </Link>
              <Link to="/fundraising" className="text-foreground hover:text-primary transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Fundraising
              </Link>
              <div className="pt-2">
                <Button variant="default" className="w-full bg-gradient-secondary text-secondary-foreground hover:bg-secondary-hover">
                  Register School
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