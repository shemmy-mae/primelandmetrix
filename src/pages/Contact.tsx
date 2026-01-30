import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Have questions about our services? We'd love to hear from you. Reach out to our team for a consultation.
          </p>
        </div>
      </div>
      <Contact />
    </main>
  );
}
