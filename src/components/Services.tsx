import { MapPin, Map, Database, Building2, FileText } from 'lucide-react';

const services = [
  {
    icon: MapPin,
    title: 'Land Surveying',
    description: 'High-precision surveys for residential, commercial, and industrial projects.',
    features: ['Boundary Surveys', 'ALTA/NSPS Surveys', 'Topographic Surveys', 'Site Planning'],
  },
  {
    icon: Map,
    title: 'Topographic & Boundary Mapping',
    description: 'Detailed maps and boundaries for planning, construction, and legal purposes.',
    features: ['3D Terrain Models', 'Boundary Delineation', 'Contour Mapping', 'Legal Documentation'],
  },
  {
    icon: Database,
    title: 'Geospatial Data Analysis',
    description: 'Advanced analytics to turn land data into actionable insights.',
    features: ['GIS Mapping', 'Spatial Analysis', 'Data Visualization', 'Predictive Modeling'],
  },
  {
    icon: Building2,
    title: 'Construction & Engineering Support',
    description: 'Providing data and measurements for infrastructure, roads, and building projects.',
    features: ['Site Layout', 'Grade Checking', 'As-Built Surveys', 'Volume Calculations'],
  },
  {
    icon: FileText,
    title: 'Consulting & Project Advisory',
    description: 'Expert guidance on land use, development planning, and regulatory compliance.',
    features: ['Feasibility Studies', 'Zoning Analysis', 'Permit Assistance', 'Risk Assessment'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-emerald-700 to-blue-700 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive land surveying and geospatial solutions tailored to your project needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="text-emerald-700" size={32} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
