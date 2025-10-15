import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Phone } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              The Hair Direction
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-rose-500 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://www.instagram.com/the_hair_direction_salon"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 hover:text-rose-500 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/thehairdirectionsalon"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 hover:text-rose-500 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://wa.me/917503135104"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rose-500 text-white px-6 py-2.5 rounded-full hover:bg-rose-600 transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center space-x-2"
            >
              <Phone size={18} />
              <span>Book Now</span>
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors duration-300 hover:text-rose-500 ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4">
                <a
                  href="https://www.instagram.com/the_hair_direction_salon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-300 hover:text-rose-500 ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.facebook.com/thehairdirectionsalon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-300 hover:text-rose-500 ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  <Facebook size={24} />
                </a>
              </div>
              <a
                href="https://wa.me/917503135104"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rose-500 text-white px-6 py-3 rounded-full hover:bg-rose-600 transition-all duration-300 text-center flex items-center justify-center space-x-2"
              >
                <Phone size={18} />
                <span>Book Now</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
