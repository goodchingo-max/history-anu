import { motion } from 'framer-motion';

const images = [
  { id: 1, url: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=800', title: 'Roman Forum', size: 'h-[400px]' },
  { id: 2, url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800', title: 'Great Wall', size: 'h-[500px]' },
  { id: 3, url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800', title: 'Taj Mahal', size: 'h-[350px]' },
];

const Gallery = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              className={`relative group overflow-hidden rounded-sm cursor-crosshair ${img.size}`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
