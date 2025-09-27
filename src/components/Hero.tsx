import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/60"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Hero Content */}
          <div className="animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <GraduationCap className="w-16 h-16 mr-4 animate-float" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              FIND THE{" "}
              <span className="relative">
                <span className="text-secondary">BEST SCHOOL</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-secondary/60 rounded-full"></div>
              </span>{" "}
              NEAR YOU
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Search the best schools from a list of 25,000+ schools located across India. 
              SchoolDekho offers personalized counseling support to help you find exactly what you're looking for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;