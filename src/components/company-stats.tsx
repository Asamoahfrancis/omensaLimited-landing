export default function CompanyStats() {
  const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "100+", label: "Projects Completed" },
    { value: "3", label: "Industries Served" },
    { value: "3+", label: "Countries Served" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl md:text-5xl font-bold text-omensa-red mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
