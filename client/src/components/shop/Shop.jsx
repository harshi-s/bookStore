import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";

const BASE_URL = "http://localhost:4000";

export const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(BASE_URL + "/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handleBuyNow = (bookId) => {
    // Send request to backend to add book to cart
    fetch(BASE_URL + "/cart/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bookId }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert("Book added to cart!");
        }
      })
      .catch((error) => {
        console.error("Error adding book to cart:", error);
        alert("Failed to add book to cart.");
      });
  };

  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">All Books are Here</h2>

      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map((book) => (
          <Card key={book._id} className="max-w-sm">
            <img src={book.imageUrl} alt={book.bookTitle} />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.bookTitle}
            </h5>
            <p className="text-lg font-semibold text-gray-800">Price: Rs. 299</p>
            <button
              className="bg-blue-700 font-semibold text-white py-2 rounded"
              onClick={() => handleBuyNow(book._id)}
            >
              Buy Now
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};
