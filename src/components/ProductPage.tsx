import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductCustomizer from './ProductCustomizer';

const products = [
  { id: 1, name: 'Classic Black Sleeve', category: 'laptop', image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', price: 39.99, description: 'A sleek and stylish sleeve for your laptop.', specs: ['Water-resistant', 'Shock-absorbing padding', 'Fits laptops up to 15"'] },
  { id: 2, name: 'Metallic Blue Sleeve', category: 'laptop', image: 'https://images.unsplash.com/photo-1585634917202-6f03b28fc6d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', price: 44.99, description: 'Protect your laptop in style with this metallic blue sleeve.', specs: ['Premium metallic finish', 'Extra soft interior lining', 'Fits laptops up to 14"'] },
  { id: 3, name: 'Minimalist White Sleeve', category: 'laptop', image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', price: 39.99, description: 'A clean and minimalist sleeve for the modern professional.', specs: ['Stain-resistant exterior', 'Reinforced corners', 'Fits laptops up to 13"'] },
  { id: 4, name: 'Leather Brown Sleeve', category: 'laptop', image: 'https://images.unsplash.com/photo-1585634917202-6f03b28fc6d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', price: 54.99, description: 'Premium leather sleeve for the discerning laptop owner.', specs: ['Genuine leather construction', 'Soft microfiber interior', 'Fits laptops up to 16"'] },
];

const ProductPage: React.FC<{ addToCart: (product: any) => void }> = ({ addToCart }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id || ''));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="glass p-8 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl mb-4">${product.price.toFixed(2)}</p>
            <p className="mb-4">{product.description}</p>
            <h2 className="text-xl font-semibold mb-2">Specifications:</h2>
            <ul className="list-disc list-inside mb-4">
              {product.specs.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Delivery:</h2>
              <p>Free shipping on orders over $50. Estimated delivery: 3-5 business days.</p>
            </div>
            <button onClick={handleAddToCart} className="btn btn-primary w-full">Add to Cart</button>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Customize Your Sleeve</h2>
          <ProductCustomizer />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;