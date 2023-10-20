import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CartWrapper } from './Cart.styled';

const Cart = () => {
     const navigate = useNavigate();
    // state to manage the items in the cart
      const [cartItems, setCartItems] = useState([]);

      // retrieve cart items from localStorage
      useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        // check if there are stored cart items
        if (storedCartItems) {
          // set the retrieved cart items to the cartItems state
          setCartItems(storedCartItems);
        }
      }, []);

      // function to handle the removal of items from the cart
      const handleRemoveFromCart = (productId) => {
        // filter the cartItems array to remove the item with the provided productId
        const updatedCartItems = cartItems.filter((item) => item.productId !== productId);
        // update the cartItems state with the filtered array
        setCartItems(updatedCartItems);
        // store the updated cart items back to localStorage 
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      };



      // redirect to checkout
      const handleCheckout = () => {
          navigate('/checkout'); 
        };

   // render the cart items
   return (
  <CartWrapper data-testid="Cart">
    <div style={{ margin: '20px' }}>
      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {cartItems.map((item) => (
            <li key={item.productId} style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '10px', margin: '10px 0' }}>
              <div>
                <strong>Name:</strong> {item.productName}
              </div>
              <div>
                <strong>Description:</strong> {item.description}
              </div>
              <div>
                <strong>Price:</strong> ${item.price}
              </div>
              <button style={{ marginTop: '10px' }} onClick={() => handleRemoveFromCart(item.productId)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items in the cart</p>
      )}
      {cartItems.length > 0 && (
        <button
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </button>
      )}
    </div>
  </CartWrapper>
  )
};

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

export default Cart;
