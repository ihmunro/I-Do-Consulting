import React from "react";
import { Button } from "@/components/ui/button";

interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  expertise?: string[];
  ctaText?: string;
  ctaLink?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title = "About Jeannette King",
  subtitle = "Founder & Principal Consultant",
  description = "With over 15 years of experience in organizational development and strategic consulting, Jeannette King has helped numerous businesses across Vancouver and beyond transform their operations and achieve sustainable growth. Her unique approach combines data-driven insights with a deep understanding of human dynamics, allowing her to create tailored solutions that address the specific needs of each client.",
  imageUrl = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
  expertise = [
    "Strategic Planning",
    "Organizational Development",
    "Leadership Coaching",
    "Change Management",
    "Team Building",
  ],
  ctaText = "Learn More",
  ctaLink = "#contact",
}) => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-indigo-50 to-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <img
                src={imageUrl}
                alt="Jeannette King"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                style={{ maxHeight: "500px" }}
              />
              <div className="absolute -bottom-6 -right-6 bg-primary/10 w-full h-full rounded-lg -z-10"></div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {title}
            </h2>
            <h3 className="text-xl text-indigo-600 mb-6">{subtitle}</h3>

            <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-3 text-indigo-700">
                Areas of Expertise
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {expertise.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-500 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Button
              asChild
              variant="outline"
              className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
            >
              <a href={ctaLink}>{ctaText}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
