import React from "react";
import Navbar from "./layout/Navbar";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import ReviewsSection from "./sections/ReviewsSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./layout/Footer";

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Add padding-top to account for fixed navbar */}
        <div className="pt-20">
          {/* Hero Section */}
          <HeroSection />

          {/* Services Section */}
          <ServicesSection />

          {/* Reviews Section */}
          <ReviewsSection />

          {/* About Section */}
          <AboutSection />

          {/* Contact Section */}
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
