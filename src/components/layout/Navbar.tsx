import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface NavbarProps {
  logo?: string;
  menuItems?: Array<{
    label: string;
    href: string;
  }>;
}

const Navbar = ({
  logo = "I DO Consulting",
  menuItems = [
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#client-success-stories" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-bold text-gray-800">
          {logo}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    href={item.href}
                    className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <Button
            className="bg-indigo-600 hover:bg-indigo-700 text-white"
            onClick={() => (window.location.href = "#contact")}
          >
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            ))}
            <Button
              className="bg-indigo-600 hover:bg-indigo-700 text-white w-full mt-4"
              onClick={() => {
                window.location.href = "#contact";
                toggleMenu();
              }}
            >
              Get in Touch
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
