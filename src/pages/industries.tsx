import Navigation from "../components/navigation";
import Footer from "../components/footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  HardHat,
  Droplets,
  Fuel,
  CheckCircle,
  MapPin,
  // Users,
  TrendingUp,
} from "lucide-react";

export default function Industries() {
  const industries = [
    {
      id: "mining",
      name: "Mining Companies",
      icon: HardHat,
      description:
        "Robust plumbing solutions designed to withstand the harsh conditions of mining operations, including water management, slurry transport, and dewatering systems.",
      challenge:
        "Mining operations require systems that can handle abrasive materials, extreme pressures, and corrosive environments while maintaining reliable operation in remote locations.",
      solutions: [
        {
          name: "Slurry Transport Systems",
          description:
            "Heavy-duty HDPE pipelines designed for transporting mineral slurries with minimal wear and maximum reliability.",
          products: ["HDPE Pipe Fittings", "Gate Valves", "Backing Rings"],
        },
        {
          name: "Dewatering Solutions",
          description:
            "Complete water management systems for mine dewatering and environmental compliance.",
          products: ["Water Meters", "Gate Valves", "Bolts & Nuts"],
        },
        {
          name: "Process Water Systems",
          description:
            "Reliable water supply and distribution for mining operations and mineral processing.",
          products: ["Gate Valves", "HDPE Fittings", "Water Meters"],
        },
      ],
      features: [
        "High-pressure water systems up to 300 PSI",
        "Corrosion-resistant materials for harsh environments",
        "Heavy-duty gate valves rated for continuous operation",
        "Specialized slurry handling equipment",
        "Remote monitoring capabilities",
        "Extreme temperature resistance (-40°F to 180°F)",
      ],
      caseStudies: [
        {
          title: "Copper Mine Dewatering Project",
          location: "Arizona, USA",
          scope: "15km of HDPE pipeline installation",
          result: "40% reduction in water management costs",
        },
        {
          title: "Gold Processing Plant Upgrade",
          location: "Nevada, USA",
          scope: "Complete valve replacement program",
          result: "99.8% system uptime achieved",
        },
      ],
      stats: {
        projects: "150+",
        countries: "12",
        uptime: "99.5%",
      },
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    },
    {
      id: "water",
      name: "Water Companies",
      icon: Droplets,
      description:
        "Precision-engineered components for water treatment, distribution, and management systems that meet stringent quality and safety standards.",
      challenge:
        "Water utilities need reliable, long-lasting infrastructure that meets strict regulatory standards while providing safe, clean water to communities.",
      solutions: [
        {
          name: "Distribution Networks",
          description:
            "Complete pipeline systems for municipal water distribution with leak-free performance.",
          products: ["Gate Valves", "HDPE Fittings", "Water Meters"],
        },
        {
          name: "Treatment Plant Infrastructure",
          description:
            "Specialized components for water treatment facilities and chemical processing.",
          products: ["Stub Ends", "Backing Rings", "Gate Valves"],
        },
        {
          name: "Monitoring Systems",
          description:
            "Advanced metering and monitoring solutions for water management and conservation.",
          products: ["Water Meters", "Gate Valves", "HDPE Fittings"],
        },
      ],
      features: [
        "NSF/ANSI 61 certified for potable water",
        "Advanced flow measurement with ±1.5% accuracy",
        "FDA-approved materials for food-grade applications",
        "Smart metering with remote reading capabilities",
        "Leak detection and prevention technology",
        "100+ year design life for buried infrastructure",
      ],
      caseStudies: [
        {
          title: "Municipal Water System Upgrade",
          location: "Texas, USA",
          scope: "50 miles of distribution pipeline",
          result: "30% reduction in water loss",
        },
        {
          title: "Water Treatment Plant Modernization",
          location: "California, USA",
          scope: "Complete valve and meter replacement",
          result: "25% improvement in operational efficiency",
        },
      ],
      stats: {
        projects: "200+",
        communities: "50+",
        gallons: "2B+/day",
      },
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    },
    {
      id: "oil",
      name: "Oil & Gas Companies",
      icon: Fuel,
      description:
        "High-performance equipment for petroleum processing, refining, and transportation systems that handle extreme pressures and temperatures.",
      challenge:
        "Oil and gas operations require equipment that can handle high pressures, extreme temperatures, and corrosive hydrocarbons while meeting strict safety standards.",
      solutions: [
        {
          name: "Pipeline Infrastructure",
          description:
            "High-pressure pipeline systems for crude oil and natural gas transportation.",
          products: ["Gate Valves", "Stub Ends", "Backing Rings"],
        },
        {
          name: "Refinery Systems",
          description:
            "Specialized components for petroleum refining and chemical processing applications.",
          products: ["Gate Valves", "Bolts & Nuts", "Stub Ends"],
        },
        {
          name: "Offshore Solutions",
          description:
            "Corrosion-resistant systems designed for marine and offshore environments.",
          products: ["Gate Valves", "HDPE Fittings", "Backing Rings"],
        },
      ],
      features: [
        "API certified for petroleum industry applications",
        "High-temperature resistance up to 800°F",
        "Pressure ratings up to 2500 PSI",
        "Chemical-resistant materials and coatings",
        "Fire-safe and explosion-proof designs",
        "Compliance with API, ASME, and NACE standards",
      ],
      caseStudies: [
        {
          title: "Offshore Platform Upgrade",
          location: "Gulf of Mexico",
          scope: "Complete valve replacement program",
          result: "Zero safety incidents in 2 years",
        },
        {
          title: "Refinery Pipeline Project",
          location: "Louisiana, USA",
          scope: "20km of high-pressure pipeline",
          result: "15% increase in throughput capacity",
        },
      ],
      stats: {
        projects: "75+",
        platforms: "25",
        safety: "Zero incidents",
      },
      image:
        "https://images.unsplash.com/photo-1560472354-9c184e8dbde3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="dark-gray text-white py-20 relative">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581092446176-26a3c3e4e4c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Specialized solutions for the most demanding industrial
              applications across mining, water, and oil & gas sectors
            </p>
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep understanding of industry-specific challenges and tailored
              solutions for each sector
            </p>
          </div>

          <div className="space-y-20">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={industry.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={!isEven ? "lg:col-start-2" : ""}>
                    <div className="relative">
                      <img
                        src={industry.image}
                        alt={industry.name}
                        className="w-full h-96 object-cover rounded-lg shadow-xl"
                      />
                      <Badge className="absolute top-4 left-4 omensa-red text-white text-lg px-4 py-2">
                        {industry.name}
                      </Badge>
                    </div>
                  </div>

                  <div
                    className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}
                  >
                    <div className="flex items-center mb-6">
                      <IconComponent
                        className={`mr-4 ${
                          industry.id === "mining"
                            ? "text-omensa-red"
                            : industry.id === "water"
                            ? "text-blue-500"
                            : "text-gray-800"
                        }`}
                        size={48}
                      />
                      <h3 className="text-4xl font-bold text-gray-900">
                        {industry.name}
                      </h3>
                    </div>

                    <p className="text-lg text-gray-600 mb-6">
                      {industry.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        Industry Challenge:
                      </h4>
                      <p className="text-gray-600 bg-gray-100 p-4 rounded-lg italic">
                        {industry.challenge}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-4 bg-white rounded-lg shadow">
                        <div className="text-2xl font-bold text-omensa-red mb-1">
                          {Object.values(industry.stats)[0]}
                        </div>
                        <div className="text-sm text-gray-600">
                          {Object.keys(industry.stats)[0]}
                        </div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg shadow">
                        <div className="text-2xl font-bold text-omensa-red mb-1">
                          {Object.values(industry.stats)[1]}
                        </div>
                        <div className="text-sm text-gray-600">
                          {Object.keys(industry.stats)[1]}
                        </div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg shadow">
                        <div className="text-2xl font-bold text-omensa-red mb-1">
                          {Object.values(industry.stats)[2]}
                        </div>
                        <div className="text-sm text-gray-600">
                          {Object.keys(industry.stats)[2]}
                        </div>
                      </div>
                    </div>

                    <Button className="omensa-red text-white hover:bg-red-700 px-8 py-3">
                      Get {industry.name} Solutions
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Details */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tailored Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solution packages designed for each industry's
              unique requirements
            </p>
          </div>

          {industries.map((industry) => (
            <div key={industry.id} className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <industry.icon className="mr-4 text-omensa-red" size={32} />
                {industry.name} Solutions
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {industry.solutions.map((solution, index) => (
                  <Card
                    key={index}
                    className="shadow-lg hover:shadow-xl transition duration-300"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {solution.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        {solution.description}
                      </p>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">
                          Key Products:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {solution.products.map((product, productIndex) => (
                            <Badge
                              key={productIndex}
                              variant="outline"
                              className="text-xs"
                            >
                              {product}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Industry Features:
                  </h4>
                  <div className="space-y-2">
                    {industry.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center text-gray-600"
                      >
                        <CheckCircle
                          className="text-success-green mr-3 flex-shrink-0"
                          size={18}
                        />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Recent Case Studies:
                  </h4>
                  <div className="space-y-4">
                    {industry.caseStudies.map((study, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-900">
                          {study.title}
                        </h5>
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <MapPin size={14} className="mr-1" />
                          {study.location}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          {study.scope}
                        </p>
                        <div className="flex items-center text-sm font-semibold text-omensa-red">
                          <TrendingUp size={14} className="mr-1" />
                          {study.result}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
