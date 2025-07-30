// import { Factory } from "lucide-react";
import { SiLinkedin, SiFacebook } from "react-icons/si";
import { Twitter } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "Products", id: "products" },
    { label: "Services", id: "services" },
    { label: "Industries", id: "industries" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer id="footer" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img
              src="/Artboard 3 copy 5.png"
              alt="Omensa Limited Logo"
              className="h-30 w-auto"
            />
            <p className="text-gray-400 mb-6 max-w-md">
              Leading provider of industrial plumbing solutions for mining,
              water, and oil companies worldwide. Quality products, expert
              consultation, and reliable service.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/OmensaLimited_"
                className="bg-gray-800 hover:bg-[color:var(--omensa-red)] p-3 rounded-lg transition duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61577810146403"
                className="bg-gray-800 hover:bg-[color:var(--omensa-red)] p-3 rounded-lg transition duration-300"
              >
                <SiFacebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/omensa-limited"
                className="bg-gray-800 hover:bg-[color:var(--omensa-red)] p-3 rounded-lg transition duration-300"
              >
                <SiLinkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-white transition duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+233 (24) 8800888</li>
              <li>+233 (54) 6693411</li>
              <li>omensa.steel@yahoo.com</li>
              <li>www.omensalimited.com</li>
              <li>
                Korley Dudor,
                <br />
                Hansen Road, Accra
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
