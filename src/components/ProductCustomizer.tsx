import React, { useState } from 'react';

const laptopSizes = ['13"', '14"', '15"', '16"'];
const laptopBrands = ['Apple', 'Dell', 'HP', 'Lenovo', 'ASUS'];

const ProductCustomizer: React.FC = () => {
  const [size, setSize] = useState('');
  const [brand, setBrand] = useState('');
  const [engraving, setEngraving] = useState('');

  return (
    <div className="glass p-8 rounded-xl max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Customize Your Sleeve</h2>
      <div className="space-y-6">
        <div>
          <label className="block mb-2">Laptop Size</label>
          <div className="flex space-x-2">
            {laptopSizes.map((laptopSize) => (
              <button
                key={laptopSize}
                className={`btn ${size === laptopSize ? 'btn-primary' : 'glass'}`}
                onClick={() => setSize(laptopSize)}
              >
                {laptopSize}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block mb-2">Laptop Brand</label>
          <select
            className="w-full p-2 glass text-white bg-transparent"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="" className="text-black">Select a brand</option>
            {laptopBrands.map((laptopBrand) => (
              <option key={laptopBrand} value={laptopBrand} className="text-black">
                {laptopBrand}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-2">Engraving (Optional)</label>
          <input
            type="text"
            className="w-full p-2 glass text-white bg-transparent"
            value={engraving}
            onChange={(e) => setEngraving(e.target.value)}
            placeholder="Enter text for engraving"
          />
        </div>
        <button className="btn btn-primary w-full">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCustomizer;