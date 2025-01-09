import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const fetchImages = async (searchQuery, newPage = 1) => {
    const apiKey = "Bn0EgsVvcO3KK0Mh5uX_1tzHgMXAaAkDVJJaUAJLHQk";
    const url = `https://api.unsplash.com/search/photos/?client_id=${apiKey}&query=${searchQuery}&page=${newPage}&per_page=12`;

    try {
      const response = await axios.get(url);
      if (newPage === 1) {
        setImages(response.data.results);
      } else {
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      }
      setPage(newPage);
    } catch (error) {
      console.error("Error fetching images:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    fetchImages(searchQuery);
  };

  const handleShowMore = () => {
    fetchImages(query, page + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-blue-500 to-green-500 text-white bg-fixed">
      <header className="p-4 text-center">
        <h1 className="text-4xl font-bold">Image Generator</h1>
      </header>
      <SearchBar onSearch={handleSearch} />
      <ImageList images={images} />
      {images.length > 0 && (
        <div className="text-center my-4">
          <button
            onClick={handleShowMore}
            className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
