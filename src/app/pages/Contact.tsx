import { Phone, Mail, Clock, MapPin } from "lucide-react";

export function Contact() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1920')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="mb-4">Get in Touch</h1>
          <p className="max-w-2xl mx-auto">
            We're here to help you plan your perfect journey
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-[#f5f6fb]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-[#1a2a6c]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-[#1a2a6c]" />
              </div>
              <h3 className="mb-3">Phone</h3>
              <a
                href="tel:+919167989361"
                className="text-gray-600 hover:text-[#1a2a6c] transition-colors"
              >
                +91 9167989361
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-[#d4a017]/15 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-[#d4a017]" />
              </div>
              <h3 className="mb-3">Email</h3>
              <a
                href="mailto:info.edreamz@gmail.com"
                className="text-gray-600 hover:text-[#d4a017] transition-colors break-all"
              >
                info.edreamz@gmail.com
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-[#e8621a]/15 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#e8621a]" />
              </div>
              <h3 className="mb-3">Business Hours</h3>
              <p className="text-gray-600 text-sm">
                Mon - Fri: 9:00 AM - 6:00 PM
              </p>
              <p className="text-gray-600 text-sm">
                Sat - Sun: 10:00 AM - 4:00 PM
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-[#1a2a6c]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-[#1a2a6c]" />
              </div>
              <h3 className="mb-3">Location</h3>
              <p className="text-gray-600 text-sm">
                Mumbai,India
              </p>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
            <h2 className="mb-4">Ready to Start Planning?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you have questions about our services,
              need help planning your trip, or want to learn
              more about our destinations, we're here to help.
              Reach out to us via phone or email, and our travel
              experts will be happy to assist you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919167989361"
                className="inline-flex items-center justify-center gap-2 bg-[#1a2a6c] hover:bg-[#0d1540] text-white px-8 py-3 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
              <a
                href="mailto:info.edreamz@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-[#d4a017] hover:bg-[#b8890f] text-white px-8 py-3 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">
            Why Choose Explore Dream Tours
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#1a2a6c] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span>1</span>
              </div>
              <h4 className="mb-2">Expert Guidance</h4>
              <p className="text-gray-600 text-sm">
                Our experienced team provides personalized
                recommendations
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#d4a017] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span>2</span>
              </div>
              <h4 className="mb-2">Best Prices</h4>
              <p className="text-gray-600 text-sm">
                Competitive rates and exclusive deals on travel
                packages
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#e8621a] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span>3</span>
              </div>
              <h4 className="mb-2">24/7 Support</h4>
              <p className="text-gray-600 text-sm">
                Round-the-clock assistance throughout your
                journey
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}