import Team from '../components/Team';

export default function TeamPage() {
  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Our expert team brings decades of combined experience in land surveying, geospatial analysis, and project management.
          </p>
        </div>
      </div>
      <Team />
    </main>
  );
}
