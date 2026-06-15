import { Phone, Calendar, MapPin, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function International() {
  const [openItinerary, setOpenItinerary] = useState<string | null>(null);
  const destinations = [
    {
      name: 'Nepal',
      category: 'HIMALAYAS & TEMPLES',
      bestTime: 'October – May',
      description: 'Experience majestic Himalayan panoramas, sacred temples, ancient stupas, and the vibrant culture of the Land of the Gods.',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800',
      days: 4,
      tags: ['Kathmandu Durbar', 'Boudhanath Stupa', 'Phewa Lake Pokhara', 'Sarangkot Sunrise'],
      travelStyles: ['Spiritual', 'Trekking', 'Cultural', 'Scenic Views'],
      itinerary: [
        { day: 1, title: 'Arrival in Kathmandu', desc: 'Swayambhunath (Monkey Temple), Thamel market' },
        { day: 2, title: 'Kathmandu Sightseeing', desc: 'Pashupatinath, Boudhanath, Durbar Square, Patan' },
        { day: 3, title: 'Pokhara', desc: 'Phewa Lake boating, Lakeside area exploration' },
        { day: 4, title: 'Sarangkot & Departure', desc: 'Sunrise view, return to Kathmandu, departure' },
      ],
    },
    {
      name: 'Bhutan',
      category: 'KINGDOM OF HAPPINESS',
      bestTime: 'March – May, Sep – Nov',
      description: "Pristine Himalayan valleys, ancient dzongs, monks in crimson robes, and the iconic Tiger's Nest — the Land of the Thunder Dragon.",
      image: 'https://images.unsplash.com/photo-1761048152533-c9461a31d4bb?q=80&w=800',
      days: 4,
      tags: ["Tiger's Nest Monastery", 'Thimphu Tashichho Dzong', 'Punakha Dzong', 'Dochula Pass'],
      travelStyles: ['Spiritual', 'Heritage', 'Hiking', 'Off-beat'],
      itinerary: [
        { day: 1, title: 'Paro → Thimphu', desc: 'Memorial Chorten, Buddha Dordenma statue' },
        { day: 2, title: 'Thimphu Exploration', desc: 'Tashichho Dzong, National Library, local market' },
        { day: 3, title: 'Punakha Day Trip', desc: 'Punakha Dzong, Chimi Lhakhang, Dochula Pass' },
        { day: 4, title: "Tiger's Nest & Departure", desc: 'Iconic hike to Taktsang, Paro Dzong, departure' },
      ],
    },
    {
      name: 'Sri Lanka',
      category: 'PEARL OF THE OCEAN',
      bestTime: 'December – April',
      description: 'Beautiful beaches, UNESCO World Heritage ruins, lush tea-covered highlands, and incredible wildlife in the Pearl of the Indian Ocean.',
      image: 'https://images.unsplash.com/photo-1770021601066-ff42fb74fa70?q=80&w=800',
      days: 4,
      tags: ['Sigiriya Rock Fortress', 'Dambulla Cave Temple', "Temple of the Tooth Kandy", 'Galle Face Green'],
      travelStyles: ['Heritage', 'Wildlife', 'Beach', 'Tea Estates'],
      itinerary: [
        { day: 1, title: 'Arrival Colombo → Negombo', desc: 'Beach relax, fish market exploration' },
        { day: 2, title: 'Sigiriya & Dambulla', desc: 'Lion Rock Fortress, Cave Temple, village tour' },
        { day: 3, title: 'Kandy', desc: 'Temple of the Tooth, Royal Botanical Gardens, dance show' },
        { day: 4, title: 'Colombo & Departure', desc: 'Galle Face Green, Independence Square, shopping' },
      ],
    },
    {
      name: 'Maldives',
      category: 'LUXURY ISLAND ESCAPE',
      bestTime: 'November – April',
      description: 'Crystal-clear turquoise lagoons, overwater bungalows, vibrant coral reefs, and the most romantic sunsets on earth.',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800',
      days: 4,
      tags: ['Overwater Villas', 'House Reef Snorkeling', 'Dolphin Watching', 'Male Atoll'],
      travelStyles: ['Luxury', 'Honeymoon', 'Snorkeling', 'Beach'],
      itinerary: [
        { day: 1, title: 'Arrival in Male', desc: 'Speedboat to resort island, overwater villa, sunset cruise' },
        { day: 2, title: 'Water Activities', desc: 'House reef snorkeling, glass-bottom boat, dolphin cruise' },
        { day: 3, title: 'Island Exploration', desc: 'Scuba diving, local island visit, bodu beru dance' },
        { day: 4, title: 'Leisure & Departure', desc: 'Morning swim, spa, speedboat to Male, departure' },
      ],
    },
    {
      name: 'Thailand',
      category: 'LAND OF SMILES',
      bestTime: 'November – February',
      description: 'Ornate temples, bustling street markets, idyllic islands, and world-class cuisine across this enchanting Southeast Asian kingdom.',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800',
      days: 5,
      tags: ['Grand Palace Bangkok', 'Phi Phi Islands', 'Patong Beach Phuket', 'Chatuchak Market'],
      travelStyles: ['Beach', 'Street Food', 'Temples', 'Island Hopping'],
      itinerary: [
        { day: 1, title: 'Arrival in Bangkok', desc: 'Asiatique Riverfront, Chao Phraya River cruise' },
        { day: 2, title: 'Bangkok Temples', desc: 'Grand Palace, Wat Phra Kaew, Wat Arun, markets' },
        { day: 3, title: 'Phuket', desc: 'Fly to Phuket, Patong Beach, Big Buddha, Promthep Cape' },
        { day: 4, title: 'Phi Phi Islands', desc: 'Speedboat tour, snorkeling at Maya Bay, beach lunch' },
        { day: 5, title: 'Leisure & Departure', desc: 'Thai massage, Phuket Old Town shopping, departure' },
      ],
    },
    {
      name: 'Vietnam',
      category: 'SOUTHEAST ASIA GEM',
      bestTime: 'February – April, Aug – Oct',
      description: 'Emerald rice terraces, ancient lantern-lit towns, dramatic Ha Long Bay limestone karsts, and a cuisine that is the envy of the world.',
      image: 'https://images.unsplash.com/photo-1675310381494-376fc5e8b995?q=80&w=800',
      days: 6,
      tags: ['Ha Long Bay', 'Hoi An Ancient Town', 'Hanoi Old Quarter', 'Sapa Rice Terraces'],
      travelStyles: ['Nature', 'Heritage', 'Street Food', 'Adventure'],
      itinerary: [
        { day: 1, title: 'Arrival in Hanoi', desc: 'Hoan Kiem Lake, Ngoc Son Temple, Old Quarter walk' },
        { day: 2, title: 'Ha Long Bay Cruise', desc: 'Limestone karsts, kayaking, seafood dinner on boat' },
        { day: 3, title: 'Ha Long → Hoi An', desc: 'Fly to Da Nang, transfer to Hoi An, lantern town walk' },
        { day: 4, title: 'Hoi An Sightseeing', desc: 'Ancient Town, Japanese Covered Bridge, Marble Mountains' },
        { day: 5, title: 'Sapa Day Trip', desc: 'Rice terrace trekking, hill tribe villages, scenic valleys' },
        { day: 6, title: 'Hanoi & Departure', desc: 'Ho Chi Minh Mausoleum, Temple of Literature, departure' },
      ],
    },
  ];

  const styleColors: Record<string, string> = {
    'Spiritual': 'bg-purple-100 text-purple-700',
    'Trekking': 'bg-lime-100 text-lime-700',
    'Cultural': 'bg-orange-100 text-orange-700',
    'Scenic Views': 'bg-sky-100 text-sky-700',
    'Heritage': 'bg-amber-100 text-amber-700',
    'Hiking': 'bg-green-100 text-green-700',
    'Off-beat': 'bg-rose-100 text-rose-700',
    'Wildlife': 'bg-green-100 text-green-700',
    'Beach': 'bg-cyan-100 text-cyan-700',
    'Tea Estates': 'bg-teal-100 text-teal-700',
    'Luxury': 'bg-yellow-100 text-yellow-700',
    'Honeymoon': 'bg-pink-100 text-pink-700',
    'Snorkeling': 'bg-teal-100 text-teal-700',
    'Street Food': 'bg-orange-100 text-orange-700',
    'Temples': 'bg-amber-100 text-amber-700',
    'Island Hopping': 'bg-sky-100 text-sky-700',
    'Nature': 'bg-green-100 text-green-700',
    'Adventure': 'bg-red-100 text-red-700',
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1920')` }}
        >
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="mb-3">International Destinations</h1>
          <p className="max-w-xl mx-auto text-gray-200">Venture beyond borders and discover neighbouring wonders</p>
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
          <h2 className="mb-4">Ready to Travel Abroad?</h2>
          <p className="mb-6 text-gray-300">Contact us to plan your perfect international adventure</p>
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
