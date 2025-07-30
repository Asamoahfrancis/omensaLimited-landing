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
import { CheckCircle, ArrowRight } from "lucide-react";

export default function Products() {
  const scrollToContact = () => {
    const element = document.getElementById("footer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const products = [
    {
      id: "gate-valves",
      name: "Gate Valves",
      category: "Flow Control",
      description:
        "High-pressure rated gate valves for critical industrial applications. Available in various sizes and materials including cast iron, ductile iron, and stainless steel.",
      features: [
        "Pressure ratings up to 300 PSI",
        'Sizes from 2" to 24"',
        "Non-rising stem design",
        // "Resilient seat construction",
        // "AWWA C509 compliant",
        // "Epoxy coating for corrosion protection",
      ],
      applications: [
        "Water distribution",
        "Wastewater treatment",
        "Industrial process control",
      ],
      price: "From $250",
      image: "gateval.jpg",
    },
    {
      id: "stub-ends",
      name: "Stub Ends",
      category: "Pipe Fittings",
      description:
        "Precision-engineered stub ends for reliable pipe connections in demanding industrial environments.",
      features: [
        // "ASME B16.9 compliant",
        // "316L stainless steel construction",
        "Long and short pattern available",
        "Butt weld ends",
        "Schedule 40 & 80 wall thickness",
        'Sizes 1/2" to 24"',
      ],
      applications: [
        "Chemical processing",
        "Oil & gas pipelines",
        "Food processing",
      ],
      price: "From $75",
      image: "new stub.jpg",
    },
    {
      id: "backing-rings",
      name: "Backing Rings",
      category: "Pipe Fittings",
      description:
        "Durable backing rings designed for secure pipe flanging and long-lasting performance in high-pressure applications.",
      features: [
        "Carbon steel and stainless steel options",
        // "ANSI B16.5 compliance",
        "Precision machined surfaces",
        // "Class 150 to 2500 ratings",
        "Corrosion resistant coating",
        "Custom sizes available",
      ],
      applications: [
        "Flange connections",
        "High-pressure systems",
        "Marine applications",
      ],
      price: "From $45",
      image: "flange-backing-stainless-steel.jpeg",
    },
    {
      id: "water-meters",
      name: "Water Meters",
      category: "Measurement",
      description:
        "Accurate flow measurement devices for water management and monitoring in industrial settings. Digital and analog options available.",
      features: [
        "±1.5% accuracy rating",
        // "NSF/ANSI 61 certified",
        // "Remote reading capability",
        "Tamper-resistant design",
        // "15-year warranty",
        "Cold water rated to 120°F",
      ],
      applications: [
        "Municipal water systems",
        "Industrial monitoring",
        "Irrigation systems",
      ],
      price: "From $180",
      image: "Water-Meter.jpg",
    },
    {
      id: "bolts-nuts",
      name: "Bolts & Nuts",
      category: "Fasteners",
      description:
        "High-strength fasteners engineered for extreme conditions and heavy-duty industrial applications. Available in various grades and coatings.",
      features: [
        "Grade 5 and Grade 8 options",
        "Galvanized and stainless steel",
        "Metric and imperial threads",
        "Full thread and partial thread",
        "Hex head and socket head",
        "Bulk packaging available",
      ],
      applications: [
        "Structural connections",
        "Machinery assembly",
        "Pipeline construction",
      ],
      price: "From $15",
      image: "Nuts-and-bolts.jpg",
    },
    {
      id: "hdpe-fittings",
      name: "HDPE Pipe Fittings",
      category: "Pipe Fittings",
      description:
        "Durable and corrosion-resistant HDPE fittings for versatile piping system connections. Perfect for underground and chemical applications.",
      features: [
        "PE4710 material grade",
        "Butt fusion and electrofusion options",
        "DR11 and DR17 pressure ratings",
        // "UV stabilized for outdoor use",
        "Chemical resistance",
        "50+ year service life",
      ],
      applications: [
        "Water distribution",
        "Gas distribution",
        "Mining slurry transport",
      ],
      price: "From $35",
      image: "14240366-a0e7-4744-a44c-8dc9fb64ccb8.JPG",
    },
    {
      id: "fusion-machine",
      name: "Hydraulic Butt Fusion Machine",
      category: "Equipment",
      description:
        "Advanced fusion welding equipment for creating strong, leak-proof pipe joints in field conditions. Suitable for HDPE pipes from 90mm to 630mm.",
      features: [
        "Pipe sizes 90mm to 630mm",
        "Hydraulic operation",
        "Digital temperature control",
        "Automatic cycle control",
        "Portable design",
        // "Training and certification included",
      ],
      applications: [
        "Pipeline installation",
        "Repair operations",
        "Municipal projects",
      ],
      price: "From $12,500",
      image: "hydraulic butt.jpg",
    },
  ];

  const categories = [
    "All",
    "Flow Control",
    "Pipe Fittings",
    "Measurement",
    "Fasteners",
    "Equipment",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="dark-gray text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/banner for the main products.png')`,
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4  text-yellow-100 sm:px-6 lg:px-8">
          <div className="text-center ">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Industrial Products Catalog
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Comprehensive range of high-quality industrial plumbing components
              and equipment
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Product Range
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional-grade industrial plumbing solutions designed for the
              most demanding applications
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="secondary"
                className="cursor-pointer hover:bg-omensa-red hover:text-white transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 omensa-red text-white">
                    {product.category}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-3xl font-bold text-gray-900">
                      {product.name}
                    </CardTitle>
                    {/* <span className="text-omensa-red font-semibold text-xl">
                      {product.price}
                    </span> */}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600 text-lg">{product.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {product.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle
                            className="text-success-green mr-2 flex-shrink-0"
                            size={16}
                          />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Applications:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((application, index) => (
                        <Badge key={index} variant="outline">
                          {application}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      className="omensa-red text-white hover:bg-red-700 flex-1"
                      onClick={scrollToContact}
                    >
                      Request Quote
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                    {/* <Button
                      variant="outline"
                      className="border-omensa-red text-omensa-red hover:bg-omensa-red hover:text-white"
                    >
                      Download Spec
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
