import { CheckCircle2, Cpu, Users, Clock } from 'lucide-react';

const reasons = [
  {
    icon: CheckCircle2,
    title: 'Accurate, Reliable, Actionable Data',
    description: 'Every measurement and analysis is validated to ensure the highest level of precision and reliability for your critical decisions.',
  },
  {
    icon: Cpu,
    title: 'State-of-the-Art Technology',
    description: 'We utilize the latest surveying equipment, GPS systems, and geospatial software to deliver cutting-edge solutions.',
  },
  {
    icon: Users,
    title: 'Industry-Leading Expertise',
    description: 'Our team of certified professionals brings decades of combined experience in land surveying and geospatial analysis.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery & Exceptional Service',
    description: 'We prioritize your project timeline while maintaining our commitment to quality, with dedicated support throughout.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="bg-gradient-to-r from-emerald-700 to-blue-700 bg-clip-text text-transparent">Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Excellence in every measurement, precision in every project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start space-x-6 p-8 rounded-xl bg-gradient-to-br from-emerald-50 to-blue-50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <reason.icon className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-700 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Partner with PrimelandMetrix for precision land insights you can trust. Let's discuss your project today.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-white text-emerald-700 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl"
          >
            Request a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
