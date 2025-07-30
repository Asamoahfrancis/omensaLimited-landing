import { Award, Shield, CheckCircle, FileText } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management",
      icon: Award,
      color: "text-omensa-red"
    },
    {
      name: "API Certified",
      description: "Petroleum Industry",
      icon: Shield,
      color: "text-success-green"
    },
    {
      name: "NSF Approved",
      description: "Drinking Water",
      icon: CheckCircle,
      color: "text-blue-500"
    },
    {
      name: "ANSI/AWWA",
      description: "Water Works",
      icon: FileText,
      color: "text-omensa-red"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Standards</h2>
          <p className="text-lg text-gray-600">Committed to the highest industry standards and quality certifications</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <IconComponent className={`${cert.color} mx-auto mb-3`} size={48} />
                <div className="font-semibold text-gray-900">{cert.name}</div>
                <div className="text-sm text-gray-600">{cert.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
