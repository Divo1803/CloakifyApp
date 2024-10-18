import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Laptop, ShoppingCart, X } from 'lucide-react';

interface NavbarProps {
  cartItemsCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartItemsCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="glass sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <Laptop className="mr-2" />
          Cloakify
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="nav-link">Home</Link>
          <a href="#shop" className="nav-link">Shop</a>
          <a href="#customize" className="nav-link">Customize</a>
          <a href="#coming-soon" className="nav-link">Coming Soon</a>
        </div>
        <div className="flex items-center">
          <Link to="/cart" className="nav-link mr-4 relative">
            <ShoppingCart />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemsCount}
              </span>
            )}
          </Link>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="text-gray-300 hover:text-white" /> : <Menu className="text-gray-300 hover:text-white" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="nav-link block" onClick={toggleMenu}>Home</Link>
            <a href="#shop" className="nav-link block" onClick={toggleMenu}>Shop</a>
            <a href="#customize" className="nav-link block" onClick={toggleMenu}>Customize</a>
            <a href="#coming-soon" className="nav-link block" onClick={toggleMenu}>Coming Soon</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;