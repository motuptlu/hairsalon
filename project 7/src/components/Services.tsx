import { useState, useEffect, useRef } from 'react';
import { Scissors, Sparkles, Palette, UserCheck } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Hair Cutting & Styling',
    description: 'Expert cuts and styles tailored to your personality and face shape',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
  },
  {
    icon: Palette,
    title: 'Hair Coloring',
    description: 'Premium color treatments with the latest trends and techniques',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&q=80',
  },
  {
    icon: Sparkles,
    title: 'Hair Treatment',
    description: 'Nourishing treatments for healthy, shiny, and beautiful hair',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80',
  },
  {
    icon: UserCheck,
    title: 'Bridal & Party Makeup',
    description: 'Professional makeup and styling for your special occasions',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
  },
];

export default function Services() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setVisibleItems((prev) => new Set(prev).add(index));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref && observerRef.current) {
        observerRef.current.observe(ref);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-rose-500 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience premium hair care services with our expert stylists
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleItems.has(index);

            return (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`group relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-700 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-500 group-hover:-translate-y-2">
                  <div className="flex items-center mb-3">
                    <div className="p-3 bg-rose-500 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                      <Icon size={24} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-200 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
