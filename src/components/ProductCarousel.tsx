import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  { id: 1, name: 'Sleek Black Sleeve', image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  { id: 2, name: 'Metallic Blue Sleeve', image: 'https://images.unsplash.com/photo-1585634917202-6f03b28fc6d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  { id: 3, name: 'Minimalist White Sleeve', image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
];

const ProductCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-xl shadow-lg">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {products.map((product) => (
            <div key={product.id} className="w-full flex-shrink-0 relative">
              <img src={product.image} alt={product.name} className="w-full h-96 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 glass p-4">
                <h3 className="text-white text-xl font-bold">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 glass rounded-full p-2 text-white">
        <ChevronLeft size={24} />
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 glass rounded-full p-2 text-white">
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default ProductCarousel;