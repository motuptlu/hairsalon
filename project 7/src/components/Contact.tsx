import { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: '44ub, Chattori Lane, Block UB, Jawahar Nagar, Kamla Nagar, Delhi, 110007',
      link: 'https://maps.app.goo.gl/3iE1omovKiJqVWfB8',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 7503135104',
      link: 'tel:+917503135104',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'prabhatlal1997@gmail.com',
      link: 'mailto:prabhatlal1997@gmail.com',
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon - Sun: 10:00 AM - 8:00 PM',
      link: null,
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-rose-500 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visit us or book your appointment today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : '-translate-x-20 opacity-0'
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-rose-100 rounded-full flex-shrink-0">
                        <Icon size={24} className="text-rose-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-rose-500 transition-colors duration-300"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className={`bg-gradient-to-br from-rose-500 to-rose-600 p-8 rounded-xl shadow-xl text-white transform transition-all duration-1000 delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">Book Your Appointment</h3>
              <p className="mb-6">
                Contact us via WhatsApp for quick booking and instant confirmation
              </p>
              <a
                href="https://wa.me/917503135104"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-rose-500 px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105 font-semibold"
              >
                Book on WhatsApp
              </a>
            </div>

            <div
              className={`flex items-center space-x-6 mt-8 transform transition-all duration-1000 delay-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <span className="text-gray-700 font-semibold">Follow Us:</span>
              <a
                href="https://www.instagram.com/the_hair_direction_salon"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-rose-500 hover:text-white text-gray-700 transition-all duration-300 hover:scale-110"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/thehairdirectionsalon"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-rose-500 hover:text-white text-gray-700 transition-all duration-300 hover:scale-110"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : 'translate-x-20 opacity-0'
            }`}
          >
            <div className="rounded-xl overflow-hidden shadow-2xl h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.6688932583684!2d77.1894!3d28.6833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQxJzAwLjAiTiA3N8KwMTEnMjEuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Hair Direction Salon Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
