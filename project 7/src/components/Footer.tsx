import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">The Hair Direction</h3>
            <p className="text-gray-400 mb-4">
              Premier salon delivering excellence in hair care and styling for over 10 years.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/the_hair_direction_salon"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-rose-500 transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/thehairdirectionsalon"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-rose-500 transition-all duration-300 hover:scale-110"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-rose-500 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-rose-500 transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-rose-500 transition-colors duration-300">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-rose-500 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-rose-500 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Hair Cutting & Styling</li>
              <li>Hair Coloring</li>
              <li>Hair Treatment</li>
              <li>Bridal Makeup</li>
              <li>Party Makeup</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-rose-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  44ub, Chattori Lane, Block UB, Jawahar Nagar, Kamla Nagar, Delhi, 110007
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-rose-500 flex-shrink-0" />
                <a
                  href="tel:+917503135104"
                  className="text-gray-400 hover:text-rose-500 transition-colors duration-300"
                >
                  +91 7503135104
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-rose-500 flex-shrink-0" />
                <a
                  href="mailto:prabhatlal1997@gmail.com"
                  className="text-gray-400 hover:text-rose-500 transition-colors duration-300"
                >
                  prabhatlal1997@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} The Hair Direction Salon. All rights reserved.
            </p>
            <a
              href="https://wa.me/917503135104"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rose-500 text-white px-6 py-2.5 rounded-full hover:bg-rose-600 transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center space-x-2"
            >
              <Phone size={18} />
              <span>Book Appointment</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
