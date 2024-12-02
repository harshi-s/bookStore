import React from 'react';

export const Blog = () => {
  return (
    <section className="bg-blue-100 py-12 px-6 lg:px-24 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">     </h1>
        <p className="mb-4">
          Welcome to the <strong>BookStore Blog</strong>, your destination for engaging articles, reviews, and insights into the world of books.
          Whether you’re an avid reader, an aspiring author, or simply someone curious about the literary universe, our blog has something for you.
        </p>
        <p className="mb-4">
          Stay updated with the latest trends, book recommendations, and tips to enhance your reading and writing journey.
          Our blog is crafted for book lovers by book lovers.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Book Reviews:</strong> Discover honest and in-depth reviews of trending and classic books.</li>
          <li><strong>Author Spotlights:</strong> Learn about your favorite authors and their creative processes.</li>
          <li><strong>Tips for Readers:</strong> Explore tips on organizing your library, reading efficiently, and much more.</li>
          <li><strong>Writing Insights:</strong> Get advice on writing, publishing, and storytelling from seasoned authors.</li>
        </ul>
        <p>
          Dive into our blog and let’s explore the literary world together. We’re here to fuel your passion for books and stories.
        </p>
      </div>
    </section>
  );
};
