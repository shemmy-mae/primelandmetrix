import { Award, Users, Zap, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">About PrimelandMetrix</h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              PrimelandMetrix is a leading provider of land surveying and geospatial services, committed to delivering precise measurements and insightful data to support development, planning, and investment decisions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Leveraging state-of-the-art technology and a team of highly skilled professionals, we ensure that every project meets the highest standards of accuracy and reliability.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We envision a world where land data is accessible, actionable, and trusted by decision-makers across industries. Our commitment is to be the most reliable partner for geospatial intelligence.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through innovation and dedication to excellence, we empower our clients to make informed decisions that drive sustainable growth and development.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-12 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <Award className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-700">We maintain the highest standards in every project we undertake.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Zap className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-700">We invest in cutting-edge technology and modern surveying techniques.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Collaboration</h3>
                <p className="text-gray-700">We work closely with clients to understand their unique needs.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <TrendingUp className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Growth</h3>
                <p className="text-gray-700">We support our clients' success through reliable, actionable insights.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Industry Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Land Surveying', desc: 'High-precision measurements for residential, commercial, and industrial projects.' },
              { title: 'Geospatial Services', desc: 'Advanced mapping and spatial analysis for planning and development.' },
              { title: 'Mapping & Metrics', desc: 'Detailed cartography and data analytics for informed decisions.' }
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-lg p-8 hover:border-emerald-300 transition-colors">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
