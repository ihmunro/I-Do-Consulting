import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  imageUrl?: string;
  backgroundImage?: string;
}

const HeroSection = ({
  title = "Transforming Organizations Through Strategic Consulting",
  subtitle = "I DO Consulting",
  description = "Led by Jeannette King, I DO Consulting provides expert guidance to help your business navigate challenges, optimize operations, and achieve sustainable growth. Based in Vancouver, we bring years of industry experience to deliver tailored solutions for your unique needs.",
  ctaText = "Learn More",
  ctaLink = "#services",
  imageUrl = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  backgroundImage = "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80",
}: HeroSectionProps) => {
  return (
    <section className="w-full min-h-[700px] relative flex items-center py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/80"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-amber-400 font-medium text-lg">{subtitle}</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {title}
            </h1>
          </div>

          <p className="text-gray-100 text-lg max-w-xl">{description}</p>

          <div className="pt-4">
            <Button
              size="lg"
              className="rounded-md bg-amber-500 hover:bg-amber-600 text-white font-medium"
              onClick={() => (window.location.href = ctaLink)}
            >
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
          <img
            src={imageUrl}
            alt="Jeannette King, Founder of I DO Consulting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
