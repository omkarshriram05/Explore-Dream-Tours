import { Heart, Users, Plane, Calendar, Hotel, Globe, Headphones, MapPin, Phone, Mail } from 'lucide-react';

export function Services() {
  const mainServices = [
    {
      icon: Heart,
      title: 'Couple Honeymoon Trips',
      description: 'Create magical memories with our specially curated honeymoon packages designed for couples. Enjoy romantic destinations, luxury accommodations, and intimate experiences.',
      features: [
        'Romantic destinations across India & abroad',
        'Luxury hotel bookings with special décor',
        'Candlelight dinners & couple spa',
        'Couple activities and excursions',
        'Personalized itineraries just for two'
      ],
      color: 'pink',
      whatsapp: encodeURIComponent("Hi, I'm interested in a Honeymoon Trip package. Could you please provide more details?")
    },
    {
      icon: Users,
      title: 'Family Trips',
      description: 'Perfect vacation packages for the whole family. We ensure everyone from kids to grandparents has an unforgettable experience with activities for all ages.',
      features: [
        'Family-friendly destinations',
        'Kid-friendly activities & entertainment',
        'Comfortable & spacious accommodations',
        'Safety and security throughout',
        'Flexible and fun-filled itineraries'
      ],
      color: 'navy',
      whatsapp: encodeURIComponent("Hi, I'm interested in a Family Trip package. Could you please provide more details?")
    },
    {
      icon: MapPin,
      title: 'Customized Tours',
      description: 'Your trip, your way. We design fully personalized travel experiences based on your preferences, budget, and travel style. No fixed templates — just pure custom travel.',
      features: [
        'Fully tailored day-by-day itineraries',
        'Budget-friendly to luxury options',
        'Solo, couple, group & corporate tours',
        'Pick your own destinations & duration',
        'On-ground local assistance included'
      ],
      color: 'gold',
      whatsapp: encodeURIComponent("Hi, I'm interested in a Customized Tour package. Could you please provide more details?")
    }
  ];

  const offerings = [
    { icon: Plane, title: 'Flights', subtitle: 'Best Deals', desc: 'We source the best flight deals across all major airlines to get you to your destination affordably.' },
    { icon: Calendar, title: 'Holidays', subtitle: 'Perfect Getaways', desc: 'Carefully planned holiday packages covering sightseeing, stays, meals, and transfers.' },
    { icon: MapPin, title: 'Tour Packages', subtitle: 'Customized for You', desc: 'Bespoke tour packages designed around your interests, group size, and budget.' },
    { icon: Hotel, title: 'Hotels', subtitle: 'Comfortable Stays', desc: 'Handpicked hotels and resorts ensuring comfort, safety, and great value.' },
    { icon: Globe, title: 'Visa Assistance', subtitle: 'Hassle Free Travel', desc: 'Complete documentation support and visa guidance for all international destinations.' },
    { icon: Headphones, title: '24/7 Support', subtitle: "We're With You", desc: 'Round-the-clock assistance before, during, and after your journey.' },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1920')` }}
        >
          <div className="absolute inset-0 bg-black/55"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="tracking-widest uppercase mb-2 text-[#d4a017]">Explore the World</p>
          <h1 className="mb-3">Create Memories That Last a Lifetime</h1>
          <p className="max-w-2xl mx-auto text-lg tracking-wide">
            HOLIDAYS &bull; ADVENTURE &bull; RELAXATION &bull; DISCOVERY
          </p>
          <p className="mt-3 italic text-[#f9e07a]">Turning Dreams Into Journeys</p>
        </div>
      </section>

      {/* Main Service Cards */}
      <section className="py-16 px-4 bg-[#f5f6fb]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-4">Our Travel Services</h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">Tailored travel experiences for every journey of your life</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service) => {
              const Icon = service.icon;
              const bgColor = service.color === 'pink'
                ? 'bg-pink-100'
                : service.color === 'gold'
                ? 'bg-[#d4a017]/15'
                : 'bg-[#1a2a6c]/10';
              const textColor = service.color === 'pink'
                ? 'text-pink-600'
                : service.color === 'gold'
                ? 'text-[#d4a017]'
                : 'text-[#1a2a6c]';
              const buttonColor = service.color === 'pink'
                ? 'bg-pink-600 hover:bg-pink-700'
                : service.color === 'gold'
                ? 'bg-[#d4a017] hover:bg-[#b8890f]'
                : 'bg-[#1a2a6c] hover:bg-[#0d1540]';
              const whatsappLink = `https://wa.me/919167989361?text=${service.whatsapp}`;

              return (
                <div key={service.title} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                  <div className="p-8 flex flex-col flex-1">
                    <div className={`${bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                      <Icon className={`w-8 h-8 ${textColor}`} />
                    </div>
                    <h3 className="mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-5">{service.description}</p>
                    <h4 className="mb-3">What We Offer:</h4>
                    <ul className="space-y-2 mb-6 flex-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-gray-600">
                          <span className={`${textColor} mt-1`}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full ${buttonColor} text-white py-3 rounded-lg transition-colors text-center`}
                    >
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-4">Everything We Provide</h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">From flights to visa assistance — we handle every detail of your trip</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-5 items-start bg-[#f5f6fb] rounded-xl p-6 shadow-sm">
                  <div className="bg-[#d4a017]/15 w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-[#d4a017]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a2a6c]">{item.title}</p>
                    <p className="text-[#d4a017] text-sm mb-1">{item.subtitle}</p>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#1a2a6c] to-[#d4a017] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-3">Let's Plan Your Dream Vacation!</h2>
          <p className="mb-8 opacity-90">Get in touch with us today and let us create your perfect travel experience</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919167989361"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1a2a6c] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +91 9167989361
            </a>
            <a
              href="mailto:info.edreamz@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Mail className="w-5 h-5" />
              info.edreamz@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
