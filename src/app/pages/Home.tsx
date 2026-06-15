import { Globe, MapPin, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="mb-6">Turning Dreams Into Journey</h1>
          <p className="mb-8 max-w-2xl mx-auto">
            Discover breathtaking destinations, create unforgettable memories, and embark on the adventure of a lifetime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/domestic"
              className="bg-[#1a2a6c] hover:bg-[#0d1540] text-white px-8 py-3 rounded-lg transition-colors"
            >
              Domestic Destinations
            </Link>
            <Link
              to="/international"
              className="bg-[#d4a017] hover:bg-[#b8890f] text-white px-8 py-3 rounded-lg transition-colors"
            >
              International Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-[#f5f6fb]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-12">Why Choose Explore Dream Tours</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-[#1a2a6c]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-[#1a2a6c]" />
              </div>
              <h3 className="mb-3">Global Destinations</h3>
              <p className="text-gray-600">
                Access to beautiful destinations across domestic and international locations
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-[#d4a017]/15 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-[#d4a017]" />
              </div>
              <h3 className="mb-3">Expert Guidance</h3>
              <p className="text-gray-600">
                Our travel experts help you plan the perfect itinerary for your dream vacation
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-[#e8621a]/15 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="w-8 h-8 text-[#e8621a]" />
              </div>
              <h3 className="mb-3">Best Deals</h3>
              <p className="text-gray-600">
                Get exclusive packages and best rates for your travel adventures
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-12">Popular Destinations</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1761048152533-c9461a31d4bb?q=80&w=600"
                alt="Bhutan Tiger's Nest"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3>Kingdom of Happiness</h3>
                  <p className="text-sm">Bhutan</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1675310381494-376fc5e8b995?q=80&w=600"
                alt="Vietnam Ha Long Bay"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3>Southeast Asia Gem</h3>
                  <p className="text-sm">Vietnam</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600"
                alt="Leh Ladakh"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3>Mountain Adventure</h3>
                  <p className="text-sm">Leh-Ladakh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
