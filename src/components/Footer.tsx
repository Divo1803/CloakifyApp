import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="glass mt-16 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Cloakify</h3>
            <p>Elevate your tech style with premium laptop sleeves and phone skins.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li><a href="#home" className="hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#shop" className="hover:text-white transition-colors duration-300">Shop</a></li>
              <li><a href="#customize" className="hover:text-white transition-colors duration-300">Customize</a></li>
              <li><a href="#coming-soon" className="hover:text-white transition-colors duration-300">Coming Soon</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <form className="mb-4">
              <input type="email" placeholder="Enter your email" className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-l-md focus:outline-none" />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors duration-300">Subscribe</button>
            </form>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center">
          <p>&copy; 2024 Cloakify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;