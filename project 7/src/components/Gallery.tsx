import { useState, useEffect, useRef } from 'react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
    title: 'Modern Salon Interior',
  },
  {
    url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80',
    title: 'Hair Styling',
  },
  {
    url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
    title: 'Professional Cut',
  },
  {
    url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    title: 'Hair Treatment',
  },
  {
    url: 'https://images.unsplash.com/photo-1521490878867-2f7e0e0b87c2?w=800&q=80',
    title: 'Styling Session',
  },
  {
    url: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&q=80',
    title: 'Hair Coloring',
  },
  {
    url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
    title: 'Bridal Makeup',
  },
  {
    url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80',
    title: 'Hair Washing',
  },
  {
    url: 'https://images.unsplash.com/photo-1595475884562-073c30d45670?w=800&q=80',
    title: 'Professional Service',
  },
];

export default function Gallery() {
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
      { threshold: 0.1 }
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
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-rose-500 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a look at our work and our beautiful salon space
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => {
            const isVisible = visibleItems.has(index);

            return (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`group relative overflow-hidden rounded-2xl shadow-lg aspect-square transform transition-all duration-700 ${
                  isVisible
                    ? 'translate-y-0 opacity-100 scale-100'
                    : 'translate-y-20 opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${(index % 3) * 100}ms` }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-xl font-semibold">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
