// src/components/Header.tsx

import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button } from "./ui/button";
import { Menu, X, Phone, User, LogOut } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const { t } = useTranslation();

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
          <div className="flex items-center space-x-2">
            {/* --- DYNAMIC AUTH BUTTONS --- */}
            {user ? (
              <>
                <span className="text-sm text-muted-foreground">Welcome, {user.name}!</span>
                <Button variant="ghost" size="sm" onClick={logout} className="text-muted-foreground hover:text-primary">
                  <LogOut className="w-4 h-4 mr-1" /> Logout
                </Button>
              </>
            ) : (
              <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Link to="/login"><User className="w-4 h-4 mr-1" />{t('header.login')}</Link>
              </Button>
            )}
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold gradient-text-primary">SchoolDekho</h1>
          </Link>

          {/* --- ALL NAVIGATION LINKS ARE HERE --- */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">{t('header.home')}</Link>
            <Link to="/schools" className="text-foreground hover:text-primary transition-colors font-medium">{t('header.schools_in_city')}</Link>
            <Link to="/education-loans" className="text-foreground hover:text-primary transition-colors font-medium">{t('header.education_loans')}</Link>
            <Link to="/scholarships" className="text-foreground hover:text-primary transition-colors font-medium">{t('header.scholarships')}</Link>
            <Link to="/alumni-network" className="text-foreground hover:text-primary transition-colors font-medium">{t('header.alumni_network')}</Link>
            <Link to="/fundraising" className="text-foreground hover:text-primary transition-colors font-medium">{t('header.fundraising')}</Link>
            <Button asChild><Link to="/register-school">{t('header.register_school')}</Link></Button>
          </nav>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium py-2">{t('header.home')}</Link>
              <Link to="/schools" className="text-foreground hover:text-primary transition-colors font-medium py-2">{t('header.schools_in_city')}</Link>
              <Link to="/education-loans" className="text-foreground hover:text-primary transition-colors font-medium py-2">{t('header.education_loans')}</Link>
              <Link to="/scholarships" className="text-foreground hover:text-primary transition-colors font-medium py-2">{t('header.scholarships')}</Link>
              <Link to="/alumni-network" className="text-foreground hover:text-primary transition-colors font-medium py-2">{t('header.alumni_network')}</Link>
              <Link to="/fundraising" className="text-foreground hover:text-primary transition-colors font-medium py-2">{t('header.fundraising')}</Link>
              <div className="pt-2 space-y-2">
                <Button asChild className="w-full"><Link to="/register-school">{t('header.register_school')}</Link></Button>
                {user ? (
                   <Button variant="outline" className="w-full" onClick={logout}><LogOut className="w-4 h-4 mr-1" /> Logout</Button>
                ) : (
                  <Button asChild variant="outline" className="w-full"><Link to="/login"><User className="w-4 h-4 mr-1" />{t('header.login')}</Link></Button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;