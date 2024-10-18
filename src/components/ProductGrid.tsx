import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Classic Black Sleeve', category: 'laptop', image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', price: 39.99 },
  { id: 2, name: 'Metallic Blue Sleeve', category: 'laptop', image: 'https://images.unsplash.com/photo-1585634917202-6f03b28fc6d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', price: 44.99 },
  { id: 3, name: 'Minimalist White Sleeve', category: 'laptop', image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', price: 39.99 },
  { id: 4, name: 'Leather Brown Sleeve', category: 'laptop', image: 'https://images.unsplash.com/photo-1585634917202-6f03b28fc6d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', price: 54.99 },
];

const ProductGrid: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const filteredProducts = filter === 'all' ? products : products.filter(p => p.category === filter);

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center mb-8">
        <button onClick={() => setFilter('all')} className={`btn ${filter === 'all' ? 'btn-primary' : 'glass'} mr-2`}>All</button>
        <button onClick={() => setFilter('laptop')} className={`btn ${filter === 'laptop' ? 'btn-primary' : 'glass'}`}>Laptop Sleeves</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="glass overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-xl font-bold mb-4">${product.price.toFixed(2)}</p>
              <Link to={`/product/${product.id}`} className="btn btn-primary w-full">Buy</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;