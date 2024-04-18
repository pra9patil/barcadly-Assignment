import React, { useState } from 'react';
import axios from 'axios';

function Cart({ cart, setCart , refemail }) {
  const [isCheckoutSuccessful, setIsCheckoutSuccessful] = useState(false);

   
  const handleRemoveItem = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
  };

  const handleCheckout = async () => {
    try {
     
      await axios.post('http://localhost:3001/api/checkout', { cart });
     
      setCart([]);
      
      setIsCheckoutSuccessful(true);
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('Error during checkout. Please try again later.');
    }
  };

   cart = cart.map(product => ({
    ...product,
    userEmail: refemail
  }));


  if (isCheckoutSuccessful) {
    return <div>Checkout successful! Your cart is now empty.</div>;
  }

  return (
    <>
      <div className='space-y-10 my-10 '>
        <div>
        <h5 className='text-2xl text-center font-bold'>Cart Items</h5>
        <div className='grid grid-cols-2 gap-10 '>
          {cart?.map((product) => (
            <div key={product.id} className="border shadow-lg text-center p-4">
              <div className="flex justify-center ">
                <img className='w-40' src={product.img} alt="" />
              </div>
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-700 text-xl font-semibold mb-2">${product.price}</p>
              <button className="border-2 px-10 bg-red-600 text-white " onClick={() => handleRemoveItem(product.id)}>Remove</button>
            </div>
          ))}
        </div>
        <div className='m-10 flex items-center justify-center'>
          <button className='border-[3px] w-32 bg-sky-500' onClick={handleCheckout}>Check out</button>
        </div>
      </div>
      </div>
    </>
  );
}

export default Cart;
