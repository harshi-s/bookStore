import React from 'react';

export const About = () => {
  return (
    <section className="bg-blue-100 py-12 px-6 lg:px-24 text-gray-800">
      <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">    </h1>
        <p className="mb-4">
          Welcome to <strong>BookStore</strong>, your one-stop digital platform for book enthusiasts and knowledge seekers.
          We’re not just a bookstore; we’re a community that celebrates the love of reading and sharing.
        </p>
        <p className="mb-4">
          At <strong>BookStore</strong>, we believe in empowering readers and authors alike. Whether you're looking for a
          treasure trove of books, want to share your own collection, or manage your personal library, our platform offers the tools
          to make it happen.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Upload and Share:</strong> Share your favorite book PDFs with the community and contribute to a growing library of knowledge.</li>
          <li><strong>Explore a World of Books:</strong> Discover books uploaded by others, spanning a wide range of genres and topics.</li>
          <li><strong>Manage Your Library:</strong> Use our user-friendly interface to create, update, or delete entries in your digital library.</li>
        </ul>
        <p>
          Join us today and be part of a thriving community where stories and knowledge are shared freely!
        </p>
      </div>
    </section>
  );
};
