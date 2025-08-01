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
  // Compass,
  // Wrench,
  ClipboardCheck,
  Settings,
  // GraduationCap,
  Phone,
  // Clock,
  Users,
  Award,
} from "lucide-react";
import {Link} from "wouter";

export default function Services() {
  // const scrollToContact = () => {
  //   const element = document.getElementById("footer");
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const services = [
    // {
    //   id: "design",
    //   name: "System Design & Engineering",
    //   icon: Compass,
    //   category: "Consultation",
    //   description:
    //     "Comprehensive piping system design and engineering consultation for optimal performance and efficiency. Our experienced engineers work with you to create custom solutions.",
    //   details: [
    //     "3D CAD modeling and design",
    //     "Hydraulic analysis and calculations",
    //     "Material selection guidance",
    //     "Code compliance verification",
    //     "Cost optimization strategies",
    //     "Project timeline development",
    //   ],
    //   benefits: [
    //     "Reduced installation time by 30%",
    //     "Optimized system performance",
    //     "Code compliant designs",
    //     "Cost-effective solutions",
    //   ],
    //   duration: "2-6 weeks",
    //   pricing: "From $2,500",
    //   image:
    //     "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    // },
    // {
    //   id: "installation",
    //   name: "Installation Support & Supervision",
    //   icon: Wrench,
    //   category: "Field Services",
    //   description:
    //     "On-site installation guidance and technical support to ensure proper system implementation according to specifications and industry standards.",
    //   details: [
    //     "Pre-installation planning",
    //     "On-site technical supervision",
    //     "Quality control inspections",
    //     "Installation training for crews",
    //     "Troubleshooting support",
    //     "Final system commissioning",
    //   ],
    //   benefits: [
    //     "First-time installation success",
    //     "Reduced rework and delays",
    //     "Proper system startup",
    //     "Warranty compliance",
    //   ],
    //   duration: "1-4 weeks",
    //   pricing: "From $1,800/week",
    //   image:
    //     "https://images.unsplash.com/photo-1581092795442-31d8ff0b3a73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    // },
    {
      id: "quality",
      name: "Quality Assurance & Testing",
      icon: ClipboardCheck,
      category: "Testing",
      description:
        "Rigorous testing and quality control services to maintain the highest standards of reliability and performance for your industrial systems.",
      details: [
        "Pressure testing protocols",
        "Material certification review",
        "Weld quality inspection",
        "Leak detection testing",
        "Performance verification",
        "Documentation and reporting",
      ],
      benefits: [
        "System reliability assurance",
        "Compliance certification",
        "Risk mitigation",
        "Extended equipment life",
      ],
      // duration: "1-2 weeks",
      // pricing: "From $1,200",
      image: "testing.jpg",
    },
    // {
    //   id: "maintenance",
    //   name: "Preventive Maintenance Programs",
    //   icon: Settings,
    //   category: "Maintenance",
    //   description:
    //     "Comprehensive maintenance scheduling and system optimization services to maximize equipment lifespan and minimize downtime.",
    //   details: [
    //     "Customized maintenance schedules",
    //     "Predictive maintenance planning",
    //     "Component lifecycle tracking",
    //     "Performance monitoring",
    //     "Emergency repair protocols",
    //     "Spare parts management",
    //   ],
    //   benefits: [
    //     "99.5% system uptime",
    //     "Extended equipment life",
    //     "Reduced emergency repairs",
    //     "Optimized maintenance costs",
    //   ],
    //   duration: "Ongoing",
    //   pricing: "From $500/month",
    //   image:
    //     "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    // },
    // {
    //   id: "training",
    //   name: "Training & Certification",
    //   icon: GraduationCap,
    //   category: "Education",
    //   description:
    //     "Comprehensive training programs for operators and maintenance personnel on equipment usage, safety protocols, and best practices.",
    //   details: [
    //     "Equipment operation training",
    //     "Safety protocol education",
    //     "Maintenance procedures",
    //     "Troubleshooting techniques",
    //     "Certification programs",
    //     "Ongoing education support",
    //   ],
    //   benefits: [
    //     "Improved safety records",
    //     "Reduced operator errors",
    //     "Enhanced system performance",
    //     "Industry certification",
    //   ],
    //   duration: "1-5 days",
    //   pricing: "From $1,500/person",
    //   image:
    //     "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    // },
    {
      id: "support",
      name: "24/7 Technical Support",
      icon: Phone,
      category: "Support",
      description:
        "Round-the-clock technical support and emergency response services for critical system issues and urgent repairs.",
      details: [
        "24/7 hotline support",
        "Remote diagnostics",
        "Emergency response team",
        "Rapid parts delivery",
        "Field service dispatch",
        "System monitoring services",
      ],
      benefits: [
        "Immediate issue resolution",
        "Minimized downtime",
        "Expert guidance available",
        "Peace of mind coverage",
      ],
      duration: "24/7/365",
      pricing: "From $200/month",
      image: "support.jpg",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We assess your needs and project requirements",
      icon: Users,
    },
    {
      step: "2",
      title: "Proposal & Planning",
      description: "Detailed service proposal with timeline and pricing",
      icon: ClipboardCheck,
    },
    {
      step: "3",
      title: "Implementation",
      description: "Professional execution of services with regular updates",
      icon: Settings,
    },
    {
      step: "4",
      title: "Quality Assurance",
      description: "Final verification and customer satisfaction review",
      icon: Award,
    },
  ];


  const handleContactClick = (e: any) => {
    e.preventDefault();
    // Update URL hash

    window.history.pushState(null, '', '/#contact');
    // Scroll to section
    // scrollToSection('contact');
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="dark-gray  py-20 relative">

        <div
          className="absolute inset-0 bg-cover bg-center blur-sm"
          style={{
            backgroundImage: `url('Pipeline-and-refinery-construction.jpg')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black  opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-yellow-100">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Services
            </h1>
            <p className="text-xl md:text-2xl  mb-8 max-w-3xl mx-auto font-semibold">
              Expert consultation and support services to optimize your
              industrial plumbing systems
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial design to ongoing maintenance, we provide
              comprehensive support throughout your project lifecycle
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={service.id}
                  className="shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 omensa-red text-white">
                      {service.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="omensa-red text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-gray-900">
                          {service.name}
                        </CardTitle>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                          <div className="flex items-center">
                            {/* <Clock size={16} className="mr-1" /> */}
                            {/* {service.duration} */}
                          </div>
                          <span className="text-omensa-red font-semibold">
                            {/* {service.pricing} */}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-600">{service.description}</p>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Service Details:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {service.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-omensa-red mr-2">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Key Benefits:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.benefits.map((benefit, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs"
                          >
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button
                        className="omensa-red text-white hover:bg-red-700 flex-1"
                        // onClick={scrollToContact}
                      >
                        <Link href="/#contact" onClick={handleContactClick} >
                        Request Service
                        </Link>
                      </Button>
                      {/* <Button
                        variant="outline"
                        className="border-omensa-red text-omensa-red hover:bg-omensa-red hover:text-white"
                      >
                        Learn More
                      </Button> */}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Service Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to delivering exceptional results for every
              project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="omensa-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent size={24} />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 omensa-red text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
