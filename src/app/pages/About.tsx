import { Target, Users, Award, Globe } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1920')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="mb-4">About Explore Dream Tours</h1>
          <p className="max-w-2xl mx-auto">
            Turning Dreams Into Journey
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-4 bg-[#f5f6fb]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="mb-6 text-center">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Explore Dream Tours is dedicated to making travel dreams come true. We believe that every journey
              should be an unforgettable experience filled with wonder, discovery, and joy. Our passion for travel
              and commitment to excellence drives us to create personalized itineraries that cater to the unique
              needs and desires of each traveler.
            </p>
            <p className="text-gray-600 mb-4">
              Whether you're seeking a romantic honeymoon escape, a fun-filled family vacation, or an adventurous
              exploration of new cultures and landscapes, we're here to make it happen. Our team of experienced
              travel professionals works tirelessly to ensure that every aspect of your trip is carefully planned
              and executed to perfection.
            </p>
            <p className="text-gray-600">
              From the serene backwaters of Kerala to the majestic mountains of Leh-Ladakh, from the spiritual
              tranquility of Bhutan to the tropical paradise of Sri Lanka, we offer a diverse range of destinations
              that promise to captivate your heart and soul.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-12">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#1a2a6c]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[#1a2a6c]" />
              </div>
              <h3 className="mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our service
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#d4a017]/15 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#d4a017]" />
              </div>
              <h3 className="mb-3">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction and happiness are our top priorities
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#e8621a]/15 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#e8621a]" />
              </div>
              <h3 className="mb-3">Trust</h3>
              <p className="text-gray-600">
                Building lasting relationships through transparency and integrity
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#1a2a6c]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-[#1a2a6c]" />
              </div>
              <h3 className="mb-3">Passion</h3>
              <p className="text-gray-600">
                Passionate about travel and creating memorable experiences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-[#f5f6fb]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Our Mission</h2>
          <p className="text-gray-600 mb-8">
            To provide exceptional travel experiences that exceed expectations, create lasting memories,
            and turn travel dreams into reality. We are committed to offering personalized service,
            competitive pricing, and unforgettable journeys to destinations across India and beyond.
          </p>
        </div>
      </section>
    </div>
  );
}
