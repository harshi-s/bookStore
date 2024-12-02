
import React from 'react';
import { useLoaderData } from 'react-router-dom';

export const SingleBook = () => {
  const { bookTitle, imageUrl, bookPdfUrl } = useLoaderData(); // Assuming `pdfUrl` is included in the data.

  const handleImageClick = () => {
    if (bookPdfUrl) {
      window.open(bookPdfUrl, '_blank'); // Opens the PDF in a new tab.
    } else {
      alert('PDF not available.');
    }
  };

 
  return (
    <div className="mt-28 px-4 lg:px-24 text-center">
      <img
        src={imageUrl}
        alt={bookTitle}
        className="h-96 mx-auto cursor-pointer"
        onClick={handleImageClick} 
      />
      <h2 className="text-2xl font-semibold mt-4">{bookTitle}</h2>
    </div>
  );
};
