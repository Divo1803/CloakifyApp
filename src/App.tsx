import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductCarousel from './components/ProductCarousel';
import ProductGrid from './components/ProductGrid';
import ProductPage from './components/ProductPage';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <div className="min-h-screen font-poppins">
        <div className="content-wrapper">
          <Navbar cartItemsCount={cartItems.length} />
          <main className="container mx-auto px-4">
            <Routes>
              <Route path="/" element={
                <>
                  <section id="home" className="py-20">
                    <h1 className="text-5xl font-bold mb-8 text-center animate-slideIn text-shadow">Welcome to Cloakify</h1>
                    <p className="text-xl text-center mb-12 animate-slideIn text-shadow" style={{animationDelay: '0.2s'}}>Elevate your tech style with premium laptop sleeves and phone skins.</p>
                    <ProductCarousel />
                  </section>

                  <section id="shop" className="py-20">
                    <h2 className="text-3xl font-bold mb-12 text-center animate-slideIn text-shadow">Shop Our Collection</h2>
                    <ProductGrid />
                  </section>

                  <Testimonials />

                  <section id="coming-soon" className="py-20">
                    <div className="glass p-8 text-center">
                      <h2 className="text-3xl font-bold mb-8 animate-slideIn text-shadow">Coming Soon: Phone Skins</h2>
                      <p className="text-xl mb-12 animate-slideIn" style={{animationDelay: '0.2s'}}>Stay tuned for our upcoming collection of premium phone skins.</p>
                      <button className="btn btn-primary text-lg animate-slideIn" style={{animationDelay: '0.4s'}}>Notify Me</button>
                    </div>
                  </section>
                </>
              } />
              <Route path="/product/:id" element={<ProductPage addToCart={addToCart} />} />
              <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
              <Route path="/checkout" element={<Checkout cartItems={cartItems} setCartItems={setCartItems} />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;