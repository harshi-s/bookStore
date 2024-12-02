import React, { useState } from "react";
import { BannerCard } from "./BannerCard";

const BASE_URL = "http://localhost:4000";

export const Banner = ({ onBooksUpdate }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search
  const handleSearch = () => {
    console.log("Search Query:", searchQuery); // Debugging search query
    fetch(`${BASE_URL}/search?query=${encodeURIComponent(searchQuery)}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Search Results:", data); // Debugging response data
        if (onBooksUpdate) {
          onBooksUpdate(data); // Update parent component
        }
      })
      .catch((error) => console.error("Error during search:", error));
  };

  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* Left Side */}
        <div className="md:w-1/2 h-full space-y-8">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Buy and Sell Your Books{" "}
            <span className="text-blue-700">
              for the Best Price, every book at Rs.299
            </span>
          </h2>
          <p className="md:w-4/5">
            The online bookstore offers a seamless browsing experience,
            allowing customers to easily explore a wide range of books. With
            features like book uploads and a convenient shopping cart, users
            can quickly manage their purchases. The platform makes book
            shopping simple and efficient, whether for casual readers or avid
            collectors!
          </p>

          <div>
            {/* Search Input */}
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a book"
              value={searchQuery} // Controlled input
              onChange={(e) => setSearchQuery(e.target.value)} // Update state on change
              className="py-2 px-2 rounded-l-sm outline-none"
            />
            {/* Search Button */}
            <button
              className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded-r-sm"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <BannerCard />
        </div>
      </div>
    </div>
  );
};
