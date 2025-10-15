import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const heroImages = [
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80',
  'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=1920&q=80',
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1920&q=80',
  'https://images.unsplash.com/photo-1521490878867-2f7e0e0b87c2?w=1920&q=80',
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Salon ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1
              className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 transform transition-all duration-1000 ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-full opacity-0'
              }`}
            >
              The Hair Direction
            </h1>
            <p
              className={`text-xl md:text-2xl lg:text-3xl text-gray-200 mb-4 transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-full opacity-0'
              }`}
            >
              Where Style Meets Excellence
            </p>
            <p
              className={`text-lg md:text-xl text-gray-300 mb-8 transform transition-all duration-1000 delay-500 ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-full opacity-0'
              }`}
            >
              Premium Hair Care & Styling Services in Delhi
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-700 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <a
                href="https://wa.me/917503135104"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rose-500 text-white px-8 py-4 rounded-full hover:bg-rose-600 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-2 text-lg font-semibold"
              >
                <Phone size={20} />
                <span>Book Appointment</span>
              </a>
              <a
                href="#services"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center text-lg font-semibold"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
