import { HardHat, Droplets, Fuel, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

export default function IndustriesSection() {
  const industries = [
    {
      id: "mining",
      name: "Mining Companies",
      description:
        "Robust plumbing solutions designed to withstand the harsh conditions of mining operations, including water management, slurry transport, and dewatering systems.",
      features: [
        "High-pressure water systems",
        "Corrosion-resistant materials",
        "Heavy-duty gate valves",
        "Slurry handling equipment",
      ],
      buttonText: "Get Mining Solutions",
      buttonColor: "omensa-red",
      icon: HardHat,
      image: "/mining.jpg",
    },
    {
      id: "water",
      name: "Water Companies",
      description:
        "Precision-engineered components for water treatment, distribution, and management systems that meet stringent quality and safety standards.",
      features: [
        "Potable water systems",
        "Flow measurement devices",
        "NSF-certified components",
        "Distribution network fittings",
      ],
      buttonText: "Get Water Solutions",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      icon: Droplets,
      image: "/water comp.jpeg",
    },
    {
      id: "oil",
      name: "Oil Companies",
      description:
        "High-performance equipment for petroleum processing, refining, and transportation systems that handle extreme pressures and temperatures.",
      features: [
        "High-temperature applications",
        "Chemical-resistant materials",
        "API-certified products",
        "Pipeline connection systems",
      ],
      buttonText: "Get Oil Solutions",
      buttonColor: "bg-gray-800 hover:bg-gray-900",
      icon: Fuel,
      image: "oil and gas.jpg",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="industries" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized solutions for the most demanding industrial applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {industries.map((industry) => {
            const IconComponent = industry.icon;
            return (
              <Card
                key={industry.id}
                className="overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="relative">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <IconComponent
                      className={`mr-4 ${
                        industry.id === "mining"
                          ? "text-omensa-red"
                          : industry.id === "water"
                          ? "text-blue-500"
                          : "text-gray-800"
                      }`}
                      size={32}
                    />
                    <h3 className="text-3xl font-bold text-gray-900">
                      {industry.name}
                    </h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{industry.description}</p>
                  <ul className="text-gray-600 mb-6 space-y-2">
                    {industry.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle
                          className="text-success-green mr-2"
                          size={16}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={scrollToContact}
                    className={`${
                      industry.id === "mining"
                        ? "omensa-red hover:bg-red-700"
                        : industry.buttonColor
                    } text-white font-semibold`}
                  >
                    {industry.buttonText}
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
