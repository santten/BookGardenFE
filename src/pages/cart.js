import React, { useState } from 'react'; // Import useState

import CartHeading from '../components/shoppingcart/CartHeading';
import ShoppingCartItem from '../components/shoppingcart/ShoppingCartItem';
import CartSummary from '../components/shoppingcart/CartSummary';
import './cartPage.css';

function Cart() {
  // removed import to mockdata, since we are using database now. 
  const bookArray = [{ "id": 5, "title": "Adventures of Ford Fairlane, The", "author": "Andreana Grimes", "genre": "Thriller", "rating": 3.31, "year": 2005, "publisher": "Plajo", "ISBN": "830266193-7", "binding": "Hardcover", "pages": 418, "language": "Persian", "price": 24.96 },
  { "id": 6, "title": "My Best Friend (Mon meilleur ami)", "author": "Cecilius New", "genre": "Drama", "rating": 4.66, "year": 1958, "publisher": "Leexo", "ISBN": "465761365-0", "binding": "Paperback", "pages": 144, "language": "Luxembourgish", "price": 4.49 },
  { "id": 7, "title": "Windfall", "author": "Emmet Seldner", "genre": "Thriller", "rating": 1.04, "year": 1969, "publisher": "Voonder", "ISBN": "407785307-9", "binding": "Softcover", "pages": 895, "language": "Yiddish", "price": 146.82 },]

  const [cartItems, setCartItems] = useState([{ ...bookArray[1], quantity: 2 }, { ...bookArray[2], quantity: 1 }])

  // the initial code had the cart open automatically with 1 of every item in stock. uncomment to see how:  
  // const [cartItems, setCartItems] = useState(bookArray.map(item => ({ ...item, quantity: 1 }))); // Initialize cart with quantity

  // the handling of the items will be thought about later, but it should likely be initially empty
  // uncomment this line if you want to start with an empty cart:
  // const [cartItems, setCartItems] = useState([])

  const handleAdd = (item) => {
    // Update the cart item quantity
    setCartItems(prevItems =>
      prevItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const handleRemove = (item) => {
    // Remove the item or decrease quantity if more than 1
    setCartItems(prevItems =>
      prevItems
        .map(cartItem =>
          cartItem.id === item.id && cartItem.quantity > 0
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter(cartItem => cartItem.id !== item.id || cartItem.quantity > 0) // Filter out item if quantity is 0
    );
  };

  const handleDelete = (item) => {
    setCartItems(prevItems => prevItems.filter(cartItem => cartItem.id !== item.id));
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div className="cart">
      <CartHeading itemCount={totalItems} />
      <div className="cart-items">
        {cartItems.map(element => (
          <ShoppingCartItem
            key={element.id}
            item={element}
            onAdd={handleAdd}
            onRemove={handleRemove}
            onDelete={handleDelete}
          />
        ))}
      </div>
      <CartSummary totalItems={totalItems} totalPrice={totalPrice} />
    </div>
  );
}

export default Cart;

