import { Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Omensa Limited delivered exceptional valve systems for our gold mining operations in Nevada. Their technical expertise and reliability have been crucial to maintaining our production targets.",
      company: "Barrick Gold Corporation",
      person: "Michael Chen, Operations Director",
      industry: "Mining",
      logo: "BG",
    },
    {
      quote:
        "The HDPE pipe fittings and fusion machines from Omensa have significantly improved our water treatment facility efficiency. Outstanding quality and professional installation support.",
      company: "American Water Works",
      person: "Sarah Johnson, Engineering Manager",
      industry: "Water Utilities",
      logo: "AW",
    },
    {
      quote:
        "Omensa's consultation services helped optimize our offshore drilling operations. Their deep understanding of industrial plumbing systems saved us millions in downtime costs.",
      company: "Shell",
      person: "Dr. Robert Thomson, Technical Lead",
      industry: "Oil & Gas",
      logo: "SH",
    },
    {
      quote:
        "We've partnered with Omensa on 50+ mining projects across three continents. Their gate valves and backing rings consistently exceed industry standards for durability.",
      company: "Rio Tinto",
      person: "Maria Rodriguez, Procurement Director",
      industry: "Mining",
      logo: "RT",
    },
    {
      quote:
        "The hydraulic butt fusion machines provided by Omensa have revolutionized our pipeline installation process. Exceptional equipment with comprehensive training support.",
      company: "Chevron Corporation",
      person: "James Wilson, Field Operations Manager",
      industry: "Oil & Gas",
      logo: "CV",
    },
    {
      quote:
        "Omensa's water meters and monitoring systems have enhanced our distribution network efficiency by 35%. Professional service from initial design to ongoing maintenance.",
      company: "Thames Water",
      person: "Lisa Parker, Infrastructure Director",
      industry: "Water Utilities",
      logo: "TW",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by industry leaders worldwide for our expertise and
            reliability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="shadow-lg hover:shadow-xl transition duration-300 h-full"
            >
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex-grow">
                  <Quote className="w-8 h-8 text-omensa-red mb-4 opacity-50" />
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-omensa-red text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      {testimonial.logo}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.person}
                      </div>
                      <div className="text-omensa-red font-medium">
                        {testimonial.company}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.industry}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
