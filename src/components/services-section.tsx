import { Wrench, ClipboardCheck, Phone } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export default function ServicesSection() {
  const services = [
    // {
    //   id: "design",
    //   name: "System Design",
    //   description:
    //     "Comprehensive piping system design and engineering consultation for optimal performance and efficiency.",
    //   icon: Compass,
    // },
    {
      id: "installation",
      name: "Installation Support",
      description:
        "On-site installation guidance and technical support to ensure proper system implementation.",
      icon: Wrench,
    },
    {
      id: "quality",
      name: "Quality Assurance",
      description:
        "Rigorous testing and quality control services to maintain the highest standards of reliability.",
      icon: ClipboardCheck,
    },
    // {
    //   id: "maintenance",
    //   name: "Maintenance Programs",
    //   description:
    //     "Preventive maintenance scheduling and system optimization to maximize equipment lifespan.",
    //   icon: Settings,
    // },
    // {
    //   id: "training",
    //   name: "Training Services",
    //   description:
    //     "Comprehensive training programs for operators and maintenance personnel on equipment usage.",
    //   icon: GraduationCap,
    // },
    {
      id: "support",
      name: "24/7 Support",
      description:
        "Round-the-clock technical support and emergency response for critical system issues.",
      icon: Phone,
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert consultation and support services to optimize your industrial
            plumbing systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.id}
                className="text-center p-8 bg-gray-50 hover:shadow-lg transition duration-300 border-none"
              >
                <CardContent className="pt-6">
                  <div className="omensa-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button
                    variant="link"
                    onClick={scrollToContact}
                    className="text-omensa-red font-semibold hover:text-red-700 p-0"
                  >
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
