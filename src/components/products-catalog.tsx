import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function ProductsCatalog() {
  const products = [
    {
      id: "gate-valves",
      name: "Gate Valves",
      description:
        "High-pressure rated gate valves for critical industrial applications. Available in various sizes and materials.",
      price: "From $250",
      image: "/gateval.jpg",
    },
    {
      id: "stub-ends",
      name: "Stub Ends",
      description:
        "Precision-engineered stub ends for reliable pipe connections in demanding industrial environments.",
      price: "From $75",
      image: "/carbon-steel-pipe-long-stub-end.jpg",
    },
    {
      id: "backing-rings",
      name: "Backing Rings",
      description:
        "Durable backing rings designed for secure pipe flanging and long-lasting performance.",
      price: "From $45",
      image: "/flange-backing-stainless-steel.jpeg",
    },
    {
      id: "water-meters",
      name: "Water Meters",
      description:
        "Accurate flow measurement devices for water management and monitoring in industrial settings.",
      price: "From $180",
      image: "/Water-Meter.jpg",
    },
    {
      id: "bolts-nuts",
      name: "Bolts & Nuts",
      description:
        "High-strength fasteners engineered for extreme conditions and heavy-duty industrial applications.",
      price: "From $15",
      image: "/Nuts-and-bolts.jpg",
    },
    {
      id: "hdpe-fittings",
      name: "HDPE Pipe Fittings",
      description:
        "Durable and corrosion-resistant HDPE fittings for versatile piping system connections.",
      price: "From $35",
      image: "/14240366-a0e7-4744-a44c-8dc9fb64ccb8.JPG",
    },
    {
      id: "fusion-machine",
      name: "Hydraulic Butt Fusion Machine",
      description:
        "Advanced fusion welding equipment for creating strong, leak-proof pipe joints in field conditions.",
      price: "From $12,500",
      image: "/hydraulic butt.jpg",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Product Range
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive industrial plumbing solutions designed for the most
            demanding applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className={`hover:shadow-xl transition duration-300 ${
                index === 6 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {product.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  {/* <span className="text-omensa-red font-semibold text-lg">
                    {product.price}
                  </span> */}
                  <Button
                    onClick={scrollToContact}
                    className="omensa-red text-white hover:bg-red-700"
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
