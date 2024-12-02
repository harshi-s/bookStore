
import React, { useState, useEffect } from "react";

const BASE_URL = "http://localhost:4000"; // Adjust the URL if needed

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const bookPrice = 299; // Fixed price per book

  useEffect(() => {
    // Fetch cart items from the server
    fetch(`${BASE_URL}/cart`)
      .then((res) => res.json())
      .then((data) => setCartItems(data))
      .catch((error) => console.error("Error fetching cart items:", error));
  }, []);

  const handleRemoveFromCart = (itemId) => {
    // Send DELETE request to the backend
    fetch(`${BASE_URL}/cart/${itemId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          // Update the cart state by filtering out the removed item
          setCartItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
        } else {
          console.error("Failed to remove item from cart");
        }
      })
      .catch((error) => console.error("Error removing item from cart:", error));
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
    // Add checkout functionality here, such as redirecting to a payment page.
  };

  // Calculate total amount
  const totalAmount = cartItems.length * bookPrice;

  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">Your Cart</h2>

      <div className="my-12">
        {cartItems.length > 0 ? (
          <>
            <div className="grid gap-8 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h5 className="text-xl font-bold">{item.title}</h5>
                    <p className="text-gray-700">{item.author}</p>
                    <p className="text-lg font-semibold text-gray-800">
                      Price: Rs. {bookPrice}
                    </p>
                    <button
                      className="mt-4 bg-blue-700 text-white py-2 px-4 rounded-md w-full"
                      onClick={() => handleRemoveFromCart(item._id)}
                    >
                      Remove from Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <h3 className="text-3xl font-bold">Total Amount: Rs. {totalAmount}</h3>
              <button
                className="mt-4 bg-green-600 text-white py-3 px-6 rounded-md text-xl"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-xl">Your cart is empty</p>
        )}
      </div>
    </div>
  );
};
