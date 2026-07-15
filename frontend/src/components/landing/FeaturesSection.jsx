function FeaturesSection() {
  const features = [
    "Search any country",
    "Search any city",
    "Live weather",
    "Tourist attractions",
    "Save favourite destinations",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item) => (
            <div key={item} className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-xl">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;