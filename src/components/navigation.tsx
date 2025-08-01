import { useState } from "react";
import { Menu } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Services", path: "/services" },
    // { label: "Industries", path: "/industries" },
    // { label: "About", path: "/about" },
  ];

  // const scrollToContact = () => {
  //   const element = document.getElementById("footer");
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  const handleContactClick = (e: any) => {
    e.preventDefault();
    // Update URL hash

    window.history.pushState(null, '', '/#contact');
    // Scroll to section
    scrollToSection('contact');
  };



  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity">
                  {/* Logo Image */}
                  <img
                    src="/Artboard 3.png"
                    alt="Omensa Limited Logo"
                    className="h-28 w-auto"
                  />
                  {/* Company Name */}
                  {/* <h1 className="text-xl font-bold text-omensa-red hover:text-red-700 transition-colors">
                    Omensa Limited
                  </h1> */}
                </div>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                    location === item.path
                      ? "text-omensa-red font-semibold"
                      : "text-gray-700 hover:text-omensa-red"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/#contact" onClick={handleContactClick}>
                <Button className="omensa-red text-white hover:bg-red-700">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-omensa-red flex items-center">
                    {/* Logo in mobile sheet */}
                    <img
                      src="/Artboard 3.png"
                      alt="Omensa Limited Logo"
                      className="h-6 w-auto mr-2"
                    />
                    Omensa Limited
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col   space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 text-left ${
                        location === item.path
                          ? "text-omensa-red font-semibold"
                          : "text-gray-700 hover:text-omensa-red"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link href="/#contact" onClick={() => setIsOpen(false)}>
                    <Button className="omensa-red text-white hover:bg-red-700 w-full mt-4">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
