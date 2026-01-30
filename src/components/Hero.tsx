import { ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://www.pexels.com/video/aerial-view-of-urban-land-development-site-32038061/"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full shadow-sm mb-6 border border-white/20">
            <MapPin size={16} className="text-amber-400 mr-2" />
            <span className="text-sm font-medium text-white">Professional Land Surveying Services</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            PrimelandMetrix
          </h1>

          <p className="text-2xl md:text-3xl font-semibold text-gray-100 mb-6">
            Precision Land Insights, Trusted Results
          </p>

          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto">
            PrimelandMetrix delivers top-tier land surveying, mapping, and metrics services using cutting-edge
            technology and industry-leading techniques to provide accurate, reliable, and actionable data.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center group"
            >
              Get a Quote
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/30 transition-all shadow-md hover:shadow-lg border border-white/30"
            >
              Contact Us Today
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto relative z-10">
          {[
            { value: '1000+', label: 'Projects Completed' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '15+', label: 'Years Experience' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400">
                {stat.value}
              </div>
              <div className="text-sm text-gray-200 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
