import {
  Factory,
  Users,
  Award,
  Globe,
  Target,
  Shield,
  Heart,
  TrendingUp,
  Mountain,
  Droplets,
  Fuel,
} from "lucide-react";
import Navigation from "../components/navigation";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import Footer from "../components/footer";

export default function About() {
  const stats = [
    { value: "25+", label: "Years Experience", icon: TrendingUp },
    { value: "500+", label: "Projects Completed", icon: Target },
    { value: "3", label: "Industries Served", icon: Factory },
    { value: "15+", label: "Countries Served", icon: Globe },
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality & Reliability",
      description:
        "We maintain the highest standards in every product and service, ensuring long-lasting performance and customer satisfaction.",
    },
    {
      icon: Users,
      title: "Customer Partnership",
      description:
        "Building lasting relationships through collaborative solutions, expert guidance, and dedicated support throughout your project lifecycle.",
    },
    {
      icon: Award,
      title: "Innovation & Excellence",
      description:
        "Continuously advancing our technology and processes to deliver cutting-edge solutions that exceed industry expectations.",
    },
    {
      icon: Heart,
      title: "Safety First",
      description:
        "Prioritizing safety in every aspect of our operations, from product design to installation support and ongoing maintenance.",
    },
  ];

  const team = [
    {
      name: "David Okonkwo",
      position: "Chief Executive Officer",
      experience: "25+ years",
      specialization: "Industrial Engineering & Operations",
      education: "M.Eng Industrial Engineering, University of Houston",
      achievements: "Led 200+ major industrial projects across 3 continents",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      name: "Maria Rodriguez",
      position: "VP of Engineering",
      experience: "20+ years",
      specialization: "Hydraulic Systems & Flow Dynamics",
      education: "Ph.D. Mechanical Engineering, Texas A&M University",
      achievements: "Hold 8 patents in hydraulic valve technology",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      name: "James Mitchell",
      position: "Operations Director",
      experience: "18+ years",
      specialization: "Project Management & Quality Assurance",
      education: "B.S. Civil Engineering, University of Texas",
      achievements: "Managed $500M+ in industrial infrastructure projects",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      name: "Dr. Priya Sharma",
      position: "Technical Director",
      experience: "15+ years",
      specialization: "Materials Science & Corrosion Engineering",
      education: "Ph.D. Materials Science, MIT",
      achievements: "Developed advanced corrosion-resistant coatings",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      name: "Robert Thompson",
      position: "Field Services Manager",
      experience: "22+ years",
      specialization: "Installation & Maintenance Operations",
      education: "B.S. Mechanical Engineering, Rice University",
      achievements: "Led installation teams in 15+ countries",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      name: "Lisa Chang",
      position: "Quality Control Director",
      experience: "16+ years",
      specialization: "Quality Systems & Standards Compliance",
      education: "M.S. Industrial Engineering, Stanford University",
      achievements: "Implemented ISO 9001 systems across all operations",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    },
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System",
      year: "2020",
    },
    {
      name: "API Certified",
      description: "American Petroleum Institute",
      year: "2019",
    },
    {
      name: "NSF Approved",
      description: "Drinking Water System Components",
      year: "2021",
    },
    {
      name: "ANSI/AWWA",
      description: "American Water Works Association",
      year: "2018",
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
            backgroundImage: `url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Omensa Limited
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Leading provider of industrial plumbing solutions with over 25
              years of expertise serving mining, water, and oil companies
              worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 1998, Omensa Limited began as a small engineering
                firm with a vision to provide superior industrial plumbing
                solutions. Over the past 25 years, we have grown into a trusted
                partner for major corporations across mining, water management,
                and oil & gas industries.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our commitment to quality, innovation, and customer service has
                enabled us to complete over 500 projects in 15+ countries,
                establishing ourselves as a leader in industrial plumbing
                solutions.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, we continue to push the boundaries of what's possible in
                industrial plumbing, leveraging cutting-edge technology and
                decades of experience to deliver solutions that exceed our
                clients' expectations.
              </p>
              <Button className="omensa-red text-white hover:bg-red-700 px-8 py-3">
                Contact Our Team
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581092795442-31d8ff0b3a73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Omensa Limited facility"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering measurable results across industries and around the
              globe
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center bg-white p-8 rounded-lg shadow-lg"
                >
                  <IconComponent
                    className="text-omensa-red mx-auto mb-4"
                    size={48}
                  />
                  <div className="text-4xl md:text-5xl font-bold text-omensa-red mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and drive our
              commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card
                  key={index}
                  className="text-center p-8 shadow-lg hover:shadow-xl transition duration-300"
                >
                  <CardContent className="pt-6">
                    <div className="omensa-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to delivering excellence in
              every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {member.name}
                  </CardTitle>
                  <p className="text-omensa-red font-semibold">
                    {member.position}
                  </p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center">
                    <Badge variant="outline" className="mb-2">
                      {member.experience}
                    </Badge>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 text-sm mb-1">
                      Specialization:
                    </h5>
                    <p className="text-sm text-gray-600">
                      {member.specialization}
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 text-sm mb-1">
                      Education:
                    </h5>
                    <p className="text-sm text-gray-600">{member.education}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 text-sm mb-1">
                      Key Achievement:
                    </h5>
                    <p className="text-sm text-gray-600">
                      {member.achievements}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've successfully partnered with major corporations across
              mining, water, and oil industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Mining Companies */}
            <Card className="p-8 text-center shadow-lg">
              <div className="mb-6">
                <Mountain className="w-16 h-16 mx-auto text-omensa-red mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Mining Sector
                </h3>
              </div>
              <div className="space-y-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">
                    Barrick Gold Corporation
                  </span>
                  <Badge variant="secondary">Canada</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">
                    Freeport-McMoRan
                  </span>
                  <Badge variant="secondary">USA</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">Rio Tinto</span>
                  <Badge variant="secondary">Australia</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">
                    Anglo American
                  </span>
                  <Badge variant="secondary">South Africa</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">
                    Newmont Corporation
                  </span>
                  <Badge variant="secondary">USA</Badge>
                </div>
              </div>
            </Card>

            {/* Water Companies */}
            <Card className="p-8 text-center shadow-lg">
              <div className="mb-6">
                <Droplets className="w-16 h-16 mx-auto text-omensa-red mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Water Utilities
                </h3>
              </div>
              <div className="space-y-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">
                    Veolia Water Technologies
                  </span>
                  <Badge variant="secondary">France</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">
                    American Water Works
                  </span>
                  <Badge variant="secondary">USA</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">
                    Thames Water
                  </span>
                  <Badge variant="secondary">UK</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">
                    Suez Water
                  </span>
                  <Badge variant="secondary">Global</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">
                    Aqua America
                  </span>
                  <Badge variant="secondary">USA</Badge>
                </div>
              </div>
            </Card>

            {/* Oil & Gas Companies */}
            <Card className="p-8 text-center shadow-lg">
              <div className="mb-6">
                <Fuel className="w-16 h-16 mx-auto text-omensa-red mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Oil & Gas
                </h3>
              </div>
              <div className="space-y-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">
                    ExxonMobil
                  </span>
                  <Badge variant="secondary">USA</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">Shell</span>
                  <Badge variant="secondary">Netherlands</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">
                    Chevron Corporation
                  </span>
                  <Badge variant="secondary">USA</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">BP</span>
                  <Badge variant="secondary">UK</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">
                    ConocoPhillips
                  </span>
                  <Badge variant="secondary">USA</Badge>
                </div>
              </div>
            </Card>
          </div>

          {/* Project Statistics */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-omensa-red mb-2">
                  500+
                </div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-omensa-red mb-2">
                  25+
                </div>
                <div className="text-gray-600">Countries Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-omensa-red mb-2">
                  98%
                </div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-omensa-red mb-2">
                  $2.5B+
                </div>
                <div className="text-gray-600">Project Value</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Certifications & Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Committed to maintaining the highest industry standards and
              quality certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="text-center p-6 shadow-lg hover:shadow-xl transition duration-300"
              >
                <CardContent className="pt-6">
                  <Award className="text-omensa-red mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{cert.description}</p>
                  <Badge variant="secondary">Certified {cert.year}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="dark-gray text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            "To provide world-class industrial plumbing solutions that enable
            our clients to operate safely, efficiently, and sustainably while
            building lasting partnerships based on trust, innovation, and
            exceptional service."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="omensa-red text-white hover:bg-red-700 px-8 py-4 text-lg">
              Start Your Project
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-omensa-red px-8 py-4 text-lg"
            >
              Download Company Profile
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
