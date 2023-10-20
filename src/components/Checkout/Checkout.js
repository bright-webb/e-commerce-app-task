import React, { useState, useEffect } from 'react';
import { CheckoutWrapper } from './Checkout.styled';

const Checkout = () => {
   const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

    // calculate total price of the cart items
  //    if (cartItems.length === 0) {
  //   return 0; // Return 0 if there are no items in the cart
  // }

  
    
    const calculateTotalPrice = () => {
         if(cartItems.length === 0){
      return 0;
       }
       else{
         // for(let item of cartItems){
         //    console.log(item.price);
         // }
         const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
         return totalPrice.toFixed(2);
       }
     };
   return (
    <CheckoutWrapper data-testid="Checkout">
       <div style={{margin: '20px'}}>
         <h3>Checkout</h3>
         {cartItems.length > 0 ? (
           <div>
            <div>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {cartItems.map((item) => (
              <li key={item.productId} style={{ margin: '10px 0' }}>
                <div>
                  <strong>Name:</strong> {item.productName}
                </div>
                <div>
                  <strong>Description:</strong> {item.description}
                </div>
                <div>
                  <strong>Price:</strong> ${item.price}
                </div>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '20px' }}>
            <strong>Total Price: {calculateTotalPrice()}</strong>
          </div>
        </div>
           </div>
         ) : (
           <p>Your cart is empty</p>
         )}

       </div>
    </CheckoutWrapper>
 )
};


export default Checkout;
