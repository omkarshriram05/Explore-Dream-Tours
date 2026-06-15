import { Phone, Calendar, MapPin, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Domestic() {
  const [openItinerary, setOpenItinerary] = useState<string | null>(null);
  const destinations = [
    {
      name: 'Kerala',
      category: 'NATURE & WELLNESS',
      bestTime: 'September – March',
      description: "God's Own Country captivates with serene backwaters, emerald tea gardens, Ayurvedic retreats, and a coastline that feels untouched by time.",
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800',
      days: 6,
      tags: ['Munnar', 'Alleppey', 'Kovalam', 'Kochi'],
      travelStyles: ['Backwaters', 'Ayurveda', 'Hill Stations', 'Beach Retreat'],
      itinerary: [
        { day: 1, title: 'Arrival in Cochin', desc: 'Fort Kochi, Chinese Fishing Nets, St. Francis Church' },
        { day: 2, title: 'Munnar', desc: 'Tea gardens, Mattupetty Dam, Echo Point' },
        { day: 3, title: 'Munnar Sightseeing', desc: 'Eravikulam National Park, Tea Museum' },
        { day: 4, title: 'Alleppey Houseboat', desc: 'Backwater cruise, Kerala cuisine on board' },
        { day: 5, title: 'Kovalam Beach', desc: 'Lighthouse Beach, sunset, beach walk' },
        { day: 6, title: 'Departure', desc: 'Trivandrum shopping, airport transfer' },
      ],
    },
    {
      name: 'Amritsar',
      category: 'HERITAGE & CULTURE',
      bestTime: 'October – March',
      description: 'Experience the soul-stirring Golden Temple, the living spirit of Sikhism, Punjabi culture, and the electrifying Wagah Border ceremony.',
      image: 'https://images.unsplash.com/photo-1621377099913-ac1ec4848e52?q=80&w=800',
      days: 5,
      tags: ['Golden Temple', 'Wagah Border', 'Jallianwala Bagh', 'Durgiana Temple'],
      travelStyles: ['Spiritual', 'Heritage', 'Cultural', 'Pilgrimage'],
      itinerary: [
        { day: 1, title: 'Arrival & Golden Temple', desc: 'Check-in, evening prayers at Harmandir Sahib' },
        { day: 2, title: 'Historical Tour', desc: 'Jallianwala Bagh, Partition Museum, local markets' },
        { day: 3, title: 'Wagah Border', desc: 'Beating Retreat ceremony, dinner at dhaba' },
        { day: 4, title: 'Durgiana Temple', desc: 'Durgiana Temple, Ram Tirath, Amritsari food trail' },
        { day: 5, title: 'Departure', desc: 'Morning darshan at Golden Temple, departure' },
      ],
    },
    {
      name: 'Leh-Ladakh',
      category: 'ADVENTURE & MOUNTAINS',
      bestTime: 'June – September',
      description: "Breathtaking Himalayan landscapes, azure high-altitude lakes, Khardung La Pass, and ancient Buddhist monasteries in India's most dramatic terrain.",
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800',
      days: 6,
      tags: ['Pangong Lake', 'Nubra Valley', 'Khardung La', 'Diskit Monastery'],
      travelStyles: ['Adventure', 'Scenic Drives', 'Monasteries', 'High Altitude'],
      itinerary: [
        { day: 1, title: 'Arrival & Acclimatisation', desc: 'Rest, light walk around Leh market' },
        { day: 2, title: 'Leh Sightseeing', desc: 'Shanti Stupa, Leh Palace, Magnetic Hill' },
        { day: 3, title: 'Nubra Valley', desc: 'Khardung La Pass, Diskit Monastery, camel safari' },
        { day: 4, title: 'Pangong Lake', desc: 'Mesmerizing blue waters, overnight stay' },
        { day: 5, title: 'Return to Leh', desc: 'Changla Pass, evening leisure in Leh' },
        { day: 6, title: 'Departure', desc: 'Shopping, departure from Leh airport' },
      ],
    },
    {
      name: 'Himachal Pradesh',
      category: 'HILL STATIONS',
      bestTime: 'March – June, Oct – Nov',
      description: 'Snow-capped peaks, charming hill stations, apple orchards, and ancient temples spread across the stunning landscapes of the Himalayas.',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800',
      days: 6,
      tags: ['Shimla', 'Manali', 'Dharamshala', 'Kullu'],
      travelStyles: ['Hill Stations', 'Snow Activities', 'Scenic Drives', 'Trekking'],
      itinerary: [
        { day: 1, title: 'Arrival in Shimla', desc: 'Mall Road, Christ Church, Ridge grounds' },
        { day: 2, title: 'Shimla Sightseeing', desc: 'Jakhu Temple, Kufri, local markets' },
        { day: 3, title: 'Drive to Manali', desc: 'Kullu Valley, shawl factories, arrival in Manali' },
        { day: 4, title: 'Manali Sightseeing', desc: 'Solang Valley, Rohtang Pass, Hidimba Temple' },
        { day: 5, title: 'Dharamshala', desc: 'Namgyal Monastery, Bhagsu Waterfall, Tibetan Market' },
        { day: 6, title: 'Departure', desc: 'Dal Lake, Tibetan crafts shopping, departure' },
      ],
    },
    {
      name: 'Andaman Nicobar',
      category: 'BEACH & ISLANDS',
      bestTime: 'October – May',
      description: 'Pristine white-sand beaches, crystal-clear coral reefs, and lush tropical forests in the jewel archipelago of the Bay of Bengal.',
      image: 'https://images.unsplash.com/photo-1535262412227-85541e910204?q=80&w=800',
      days: 5,
      tags: ['Havelock Island', 'Neil Island', 'Radhanagar Beach', 'Cellular Jail'],
      travelStyles: ['Beach', 'Snorkeling', 'Scuba Diving', 'Island Hopping'],
      itinerary: [
        { day: 1, title: 'Arrival in Port Blair', desc: 'Cellular Jail, Light & Sound Show' },
        { day: 2, title: 'Havelock Island', desc: "Radhanagar Beach — Asia's best, water sports" },
        { day: 3, title: 'Elephant Beach', desc: 'Snorkeling, scuba diving, coral viewing' },
        { day: 4, title: 'Neil Island', desc: 'Natural Bridge, Bharatpur Beach, Laxmanpur' },
        { day: 5, title: 'Departure', desc: 'Ferry back to Port Blair, local market shopping' },
      ],
    },
    {
      name: 'Rajasthan',
      category: 'ROYAL HERITAGE',
      bestTime: 'October – February',
      description: "Step into the royal land of forts, palaces, and desert dunes — where every city tells a story of kings, valour, and vibrant Rajput heritage.",
      image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800',
      days: 6,
      tags: ['Jaipur City Palace', 'Mehrangarh Fort', 'Udaipur Lake Pichola', 'Sam Sand Dunes'],
      travelStyles: ['Heritage & Culture', 'Desert Adventures', 'Luxury Palace Stays', 'Wildlife Safari'],
      itinerary: [
        { day: 1, title: 'Arrival in Jaipur', desc: 'Hawa Mahal, local bazaar evening' },
        { day: 2, title: 'Jaipur Sightseeing', desc: 'Amber Fort, City Palace, Jantar Mantar' },
        { day: 3, title: 'Jodhpur', desc: 'Mehrangarh Fort, Jaswant Thada, Clock Tower' },
        { day: 4, title: 'Jaisalmer', desc: 'Jaisalmer Fort, Patwon Ki Haveli, Sand Dunes' },
        { day: 5, title: 'Desert Safari', desc: 'Camel safari, sunset dunes, folk dance evening' },
        { day: 6, title: 'Departure', desc: 'Gadisar Lake, handicraft shopping, departure' },
      ],
    },
    {
      name: 'Goa',
      category: 'BEACH & NIGHTLIFE',
      bestTime: 'November – February',
      description: "Sun-soaked golden beaches, fresh seafood, Portuguese colonial churches, and vibrant nightlife — India's beloved beach paradise.",
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800',
      days: 5,
      tags: ['Baga Beach', 'Old Goa Churches', 'Dudhsagar Falls', 'Anjuna Market'],
      travelStyles: ['Beach', 'Nightlife', 'Heritage', 'Water Sports'],
      itinerary: [
        { day: 1, title: 'Arrival in Goa', desc: 'Calangute / Baga Beach, beach shack dinner' },
        { day: 2, title: 'North Goa Beaches', desc: 'Anjuna, Vagator, Chapora Fort, flea market' },
        { day: 3, title: 'Old Goa Heritage', desc: 'Basilica of Bom Jesus, Se Cathedral, Panjim' },
        { day: 4, title: 'Dudhsagar & Spices', desc: 'Dudhsagar Waterfalls, spice plantation lunch' },
        { day: 5, title: 'South Goa & Departure', desc: 'Colva Beach, Margao market, departure' },
      ],
    },
    {
      name: 'Varanasi',
      category: 'SPIRITUAL & SACRED',
      bestTime: 'October – March',
      description: "The spiritual soul of India — ancient ghats, sacred Ganga rituals, and centuries-old temples in one of the world's oldest living cities.",
      image: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?q=80&w=800',
      days: 5,
      tags: ['Dashashwamedh Ghat', 'Sarnath', 'Kashi Vishwanath', 'Assi Ghat'],
      travelStyles: ['Spiritual', 'Pilgrimage', 'Heritage Walk', 'River Cruise'],
      itinerary: [
        { day: 1, title: 'Arrival in Varanasi', desc: 'Evening Ganga Aarti at Dashashwamedh Ghat' },
        { day: 2, title: 'Sunrise Boat Ride', desc: 'Pre-dawn Ganga cruise, Manikarnika Ghat' },
        { day: 3, title: 'Temples & Sarnath', desc: 'Kashi Vishwanath, Sankat Mochan, Sarnath' },
        { day: 4, title: 'Heritage Walk', desc: 'Vishwanath Gali, Banarasi silk, street food' },
        { day: 5, title: 'Departure', desc: 'Final sunrise ride, Durga Temple, departure' },
      ],
    },
  ];

  const styleColors: Record<string, string> = {
    'Backwaters': 'bg-teal-100 text-teal-700',
    'Ayurveda': 'bg-green-100 text-green-700',
    'Hill Stations': 'bg-blue-100 text-blue-700',
    'Beach Retreat': 'bg-cyan-100 text-cyan-700',
    'Spiritual': 'bg-purple-100 text-purple-700',
    'Heritage': 'bg-amber-100 text-amber-700',
    'Cultural': 'bg-orange-100 text-orange-700',
    'Pilgrimage': 'bg-rose-100 text-rose-700',
    'Adventure': 'bg-red-100 text-red-700',
    'Scenic Drives': 'bg-sky-100 text-sky-700',
    'Monasteries': 'bg-indigo-100 text-indigo-700',
    'High Altitude': 'bg-slate-100 text-slate-700',
    'Snow Activities': 'bg-blue-100 text-blue-700',
    'Trekking': 'bg-lime-100 text-lime-700',
    'Beach': 'bg-cyan-100 text-cyan-700',
    'Snorkeling': 'bg-teal-100 text-teal-700',
    'Scuba Diving': 'bg-blue-100 text-blue-700',
    'Island Hopping': 'bg-sky-100 text-sky-700',
    'Heritage & Culture': 'bg-amber-100 text-amber-700',
    'Desert Adventures': 'bg-orange-100 text-orange-700',
    'Luxury Palace Stays': 'bg-yellow-100 text-yellow-700',
    'Wildlife Safari': 'bg-green-100 text-green-700',
    'Nightlife': 'bg-pink-100 text-pink-700',
    'Water Sports': 'bg-cyan-100 text-cyan-700',
    'Heritage Walk': 'bg-amber-100 text-amber-700',
    'River Cruise': 'bg-blue-100 text-blue-700',
    'Kullu': 'bg-sky-100 text-sky-700',
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1920')` }}
        >
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="mb-3">Domestic Destinations</h1>
          <p className="max-w-xl mx-auto text-gray-200">Explore the incredible diversity and beauty of India</p>
        </div>
      </section>

      {/* Destination Cards */}
      <section className="py-14 px-4 bg-[#f5f6fb]">
        <div className="max-w-5xl mx-auto space-y-6">
          {destinations.map((dest) => {
            const whatsappMsg = encodeURIComponent(`Hi, I'm interested in the ${dest.name} tour package. Please share more details.`);
            const whatsappLink = `https://wa.me/919167989361?text=${whatsappMsg}`;

            return (
              <div key={dest.name} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col sm:flex-row group">
                {/* Image column — fills full card height via object-cover, never distorts */}
                <div className="relative w-full sm:w-64 md:w-72 flex-shrink-0 h-56 sm:h-auto overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />

                  {/* Category label top-left */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] tracking-widest text-white/90 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-sm uppercase">
                      {dest.category}
                    </span>
                  </div>

                  {/* Days badge top-right */}
                  <div className="absolute top-4 right-4 bg-[#d4a017] text-white px-2.5 py-1 rounded-full flex items-center gap-1 text-xs">
                    <Calendar className="w-3 h-3" />
                    {dest.days} Days
                  </div>

                  {/* Sub-location chips bottom of image */}
                  <div className="absolute bottom-4 left-3 right-3 flex flex-wrap gap-1.5">
                    {dest.tags.map((tag) => (
                      <span key={tag} className="flex items-center gap-1 text-[11px] text-white bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                        <MapPin className="w-2.5 h-2.5" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content column */}
                <div className="flex-1 p-5 flex flex-col gap-3 min-w-0">
                  {/* Title + best time */}
                  <div>
                    <h3 className="text-[#1a2a6c]">{dest.name}</h3>
                    <p className="text-xs text-gray-400 mt-0.5">Best Time: {dest.bestTime}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">{dest.description}</p>

                  {/* Highlights */}
                  <div>
                    <p className="text-[10px] tracking-widest text-gray-400 uppercase mb-1.5">Highlights</p>
                    <div className="flex flex-wrap gap-1.5">
                      {dest.tags.map((tag) => (
                        <span key={tag} className="text-xs text-[#1a2a6c] bg-[#1a2a6c]/8 border border-[#1a2a6c]/15 px-2.5 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Itinerary — animated dropdown */}
                  <div>
                    <button
                      className="w-full flex items-center justify-between group/btn"
                      onClick={() => setOpenItinerary(openItinerary === dest.name ? null : dest.name)}
                    >
                      <span className="flex items-center gap-2 text-[10px] tracking-widest text-gray-400 uppercase">
                        Day-wise Itinerary
                        {/* Pulsing dot — signals interactivity */}
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4a017] opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4a017]" />
                        </span>
                      </span>
                      <motion.span
                        animate={{ rotate: openItinerary === dest.name ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-gray-400"
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {openItinerary === dest.name && (
                        <motion.div
                          key="itinerary"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="mt-2 grid grid-cols-1 gap-1.5 border-l-2 border-[#d4a017]/30 pl-3">
                            {dest.itinerary.map((d, i) => (
                              <motion.div
                                key={d.day}
                                initial={{ x: -8, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.05, duration: 0.2 }}
                                className="flex gap-2 text-xs"
                              >
                                <span className="flex-shrink-0 w-10 text-[#d4a017] font-semibold">Day {d.day}</span>
                                <span className="text-gray-500">
                                  <span className="text-gray-700 font-medium">{d.title}</span> — {d.desc}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Travel styles */}
                  <div>
                    <p className="text-[10px] tracking-widest text-gray-400 uppercase mb-1.5">Travel Styles</p>
                    <div className="flex flex-wrap gap-1.5">
                      {dest.travelStyles.map((style) => (
                        <span key={style} className={`text-xs px-2.5 py-0.5 rounded-full ${styleColors[style] ?? 'bg-gray-100 text-gray-600'}`}>
                          {style}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center justify-center gap-2 bg-[#1a2a6c] hover:bg-[#d4a017] text-white px-5 py-2.5 rounded-lg transition-colors text-sm w-full"
                  >
                    Plan {dest.name} Trip →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 px-4 bg-[#1a2a6c] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4">Ready to Explore India?</h2>
          <p className="mb-6 text-gray-300">Contact us to plan your perfect domestic getaway</p>
          <a
            href="tel:+919167989361"
            className="inline-flex items-center gap-2 bg-[#d4a017] hover:bg-[#b8890f] text-white px-8 py-3 rounded-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call us: +91 9167989361
          </a>
        </div>
      </section>
    </div>
  );
}
