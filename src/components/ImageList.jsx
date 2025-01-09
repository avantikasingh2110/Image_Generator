import React from "react";

const ImageList = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="bg-white rounded shadow overflow-hidden transform hover:scale-105 transition"
        >
          <img
            src={image.urls.small}
            alt={image.alt_description || "Image"}
            className="w-full h-64 object-cover"
          />
          <p className="p-2 text-center text-sm text-gray-700">
            {image.alt_description || "No description available"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
