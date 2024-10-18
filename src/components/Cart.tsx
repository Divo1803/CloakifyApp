import React from 'react';
import { Link } from 'react-router-dom';

interface CartProps {
  cartItems: any[];
  setCartItems: React.Dispatch<React.SetStateAction<any[]>>;
}

const Cart: React.FC<CartProps> = ({ cartItems, setCartItems }) => {
  const removeFromCart = (index: number) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="glass p-8 rounded-xl">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between mb-4 pb-4 border-b border-gray-600">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              </div>
              <button onClick={() => removeFromCart(index)} className="text-red-500 hover:text-red-700">Remove</button>
            </div>
          ))}
          <div className="mt-8">
            <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
            <Link to="/checkout" className="btn btn-primary w-full mt-4">Proceed to Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;