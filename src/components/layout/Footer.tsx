import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

interface FooterProps {
  companyName?: string;
  year?: number;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  contactInfo?: {
    email?: string;
    phone?: string;
  };
  navigationLinks?: Array<{
    label: string;
    href: string;
  }>;
  backgroundImage?: string;
}

const Footer = ({
  companyName = "I DO Consulting",
  year = new Date().getFullYear(),
  socialLinks = {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  contactInfo = {
    email: "jeannette@idoconsulting.ca",
    phone: "+1 (604) 555-1234",
  },
  navigationLinks = [
    { label: "Services", href: "#services" },
    { label: "Client Success Stories", href: "#client-success-stories" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  backgroundImage = "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80",
}: FooterProps) => {
  return (
    <footer className="w-full py-12 px-4 md:px-8 lg:px-12 relative">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={backgroundImage}
          alt="Footer background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-indigo-900/90"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold text-white">{companyName}</h3>
            <p className="text-sm text-gray-300">
              Professional consulting services based in Vancouver, BC.
            </p>
            <div className="flex space-x-4">
              {socialLinks.facebook && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-amber-300 hover:bg-indigo-800/50"
                  asChild
                >
                  <a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </Button>
              )}
              {socialLinks.instagram && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-amber-300 hover:bg-indigo-800/50"
                  asChild
                >
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
              )}
              {socialLinks.linkedin && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-amber-300 hover:bg-indigo-800/50"
                  asChild
                >
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <nav>
              <ul className="space-y-2">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-amber-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold text-white">Contact Us</h3>
            {contactInfo.email && (
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-2 text-gray-300 hover:text-amber-300 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>{contactInfo.email}</span>
              </a>
            )}
            {contactInfo.phone && (
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center space-x-2 text-gray-300 hover:text-amber-300 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>{contactInfo.phone}</span>
              </a>
            )}
          </div>
        </div>

        <Separator className="my-6 bg-indigo-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            &copy; {year} {companyName}. All rights reserved.
          </p>
          <p className="text-sm text-gray-300 mt-2 md:mt-0">
            <a
              href="/privacy-policy"
              className="hover:text-amber-300 transition-colors"
            >
              Privacy Policy
            </a>
            {" | "}
            <a
              href="/terms-of-service"
              className="hover:text-amber-300 transition-colors"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
