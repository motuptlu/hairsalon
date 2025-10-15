import { useState, useEffect, useRef } from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const stats = [
  { icon: Award, value: '10+', label: 'Years Experience' },
  { icon: Users, value: '5000+', label: 'Happy Clients' },
  { icon: Clock, value: '24/7', label: 'Support Available' },
  { icon: Heart, value: '100%', label: 'Satisfaction' },
];

export default function About() {
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

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : '-translate-x-20 opacity-0'
            }`}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
                alt="The Hair Direction Salon"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-rose-500 rounded-2xl -z-10" />
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : 'translate-x-20 opacity-0'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About Us
            </h2>
            <div className="w-24 h-1 bg-rose-500 mb-6" />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The Hair Direction Salon is a premier destination for hair care and styling
              in Delhi. With over 10 years of experience, we have been transforming
              looks and boosting confidence for thousands of satisfied clients.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of expert stylists stays updated with the latest trends and
              techniques to provide you with exceptional service. We use only premium
              products and maintain the highest standards of hygiene and professionalism.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className={`text-center p-6 bg-white rounded-xl shadow-lg transform transition-all duration-700 hover:scale-105 hover:shadow-xl ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${(index + 2) * 150}ms` }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-rose-100 rounded-full">
                        <Icon size={28} className="text-rose-500" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
