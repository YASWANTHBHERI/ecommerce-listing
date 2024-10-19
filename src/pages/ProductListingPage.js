import React, { useState } from "react";
import ProductCard from "../components/ProductionCard";
import AddToCartModal from "../components/AddToCartModel";
import { products } from "../data/Product";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";

const ProductListingPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // Number of products to load per page
  const [productsPerPage] = useState(6); 
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Carousel
  const [currentIndex, setCurrentIndex] = useState(0); 

  const images = [
    {
      src: "https://res.cloudinary.com/dfznm3iv7/image/upload/v1729318975/Todo/plantCarousel1.png",
      alt: "Plant 1",
      caption: "Lorem ipsum dolor sit amet.",
    },
    {
      src: "https://res.cloudinary.com/dfznm3iv7/image/upload/v1729318975/Todo/plantCarousel2.png",
      alt: "Plant 2",
      caption: "Lorem ipsum dolor sit amet.",
    },
    {
      src: "https://res.cloudinary.com/dfznm3iv7/image/upload/v1729318975/Todo/plantCarousel3.png",
      alt: "Plant 3",
      caption: "Lorem ipsum dolor sit amet.",
    },
    {
      src: "https://res.cloudinary.com/dfznm3iv7/image/upload/v1729318975/Todo/plantCarousel4.png",
      alt: "Plant 4",
      caption: "Lorem ipsum dolor sit amet.",
    },
    {
      src: "https://res.cloudinary.com/dfznm3iv7/image/upload/v1729318975/Todo/plantCarousel5.png",
      alt: "Plant 5",
      caption: "Lorem ipsum dolor sit amet.",
    },
    {
      src: "https://res.cloudinary.com/dfznm3iv7/image/upload/v1729318975/Todo/plantCarousel1.png",
      alt: "Plant 6",
      caption: "Lorem ipsum dolor sit amet.",
    },
    {
      src: "https://via.placeholder.com/150x150.png?text=Image+7",
      alt: "Plant 7",
      caption: "Lorem ipsum dolor sit amet.",
    },
    {
      src: "https://via.placeholder.com/150x150.png?text=Image+8",
      alt: "Plant 8",
      caption: "Lorem ipsum dolor sit amet.",
    },
    {
      src: "https://via.placeholder.com/150x150.png?text=Image+9",
      alt: "Plant 9",
      caption: "Lorem ipsum dolor sit amet.",
    },
    {
      src: "https://via.placeholder.com/150x150.png?text=Image+10",
      alt: "Plant 10",
      caption: "Lorem ipsum dolor sit amet.",
    },
    {
      src: "https://via.placeholder.com/150x150.png?text=Image+11",
      alt: "Plant 11",
      caption: "Lorem ipsum dolor sit amet.",
    },
  ];

  // Navigation
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 3 + images.length) % images.length
    );
  };

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  const [isOpen, setIsOpen] = useState(false);

  const toggleSortByDropdown = () => {
    setIsOpen(!isOpen);
  };
  

 
  const indexOfLastProduct = currentPage * productsPerPage;
  const currentProducts = products.slice(0, indexOfLastProduct); 


  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <Header />
      <Navbar />
      <SearchBar />

      <div className="top-content">
        <div className="plants-pots">
          <div className="bg-customGreen text-white p-1 text-center shadow-lg">
            Plants
          </div>
          <div className="border border-gray-600 text-gray-600 p-1 text-center shadow-md">
            Pots
          </div>
        </div>

        <div className="mt-3">
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id maxime
            explicabo asperiores eius numquam? Eius velit maxime facilis enim
            autem labore sapiente magni provident. Voluptates beatae hic facere
            mollitia molestiae.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="nursery mt-3">
          <h1 className="text-gray-950 font-semibold">Nursery</h1>

          <div className="carousel-container mt-3 relative flex items-center justify-center">
            <button
              className="absolute left-8 p-2 bg-transparentGray text-white rounded-full w-10 h-10 flex items-center justify-center z-10"
              onClick={prevSlide}
            >
              <FaLessThan />
            </button>

            <div className="carousel flex space-x-12 justify-center">
              {images
                .slice(currentIndex, currentIndex + 5)
                .map((image, index) => (
                  <div
                    key={index}
                    className="carousel-item flex flex-col items-center text-center"
                  >
                    <div className="carousel-image-wrapper flex justify-center">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="carousel-image rounded-full w-24 h-24 object-cover"
                      />
                    </div>
                    <p className="text-gray-600 mt-2 text-sm max-w-[150px] mx-auto">
                      {image.caption}
                    </p>
                  </div>
                ))}
            </div>

            <button
              className="absolute right-8 p-2  bg-transparentGray text-white rounded-full w-10 h-10 flex items-center justify-center z-10"
              onClick={nextSlide}
            >
              <FaGreaterThan />
            </button>
          </div>
        </div>
      </div>

      {/* Product List Section */}
      <div className="main-product-container grid grid-cols-12">
        <div className="product-filter p-5 col-span-3 bg-customPaleGreen h-auto max-h-[95vh]">
          <div className="flex justify-between items-center pb-3 border-b border-gray-400 text-gray-600 mb-4">
            <h3>Filter</h3>
            <h3 className="">CLEAR ALL</h3>
          </div>

          <div className="flex justify-between items-center pb-3 border-b border-gray-400 text-gray-600 mb-4">
            <h3>Type of Plants</h3>
            <LuPlus />
          </div>

          <div className="flex justify-between items-center pb-3 border-b border-gray-400 text-gray-600 mb-4">
            <h3>Price</h3>
            <LuPlus />
          </div>

          <div className="flex justify-between items-center pb-3 border-b border-gray-400 text-gray-600 mb-4">
            <h3>Nursery</h3>
            <LuPlus />
          </div>

          <div className="flex justify-between items-center pb-3 border-b border-gray-400 text-gray-600 mb-4">
            <h3>Ideal Plants Location</h3>
            <LuPlus />
          </div>

          <div className="flex justify-between items-center pb-3 border-b border-gray-400 text-gray-600 mb-4">
            <h3>Indoor/ Outdoor</h3>
            <LuPlus />
          </div>

          <div className="flex justify-between items-center pb-3 border-b border-gray-400 text-gray-600 mb-4">
            <h3>Maintenance</h3>
            <LuPlus />
          </div>

          <div className="flex justify-between items-center pb-3 border-b border-gray-400 text-gray-600 mb-4">
            <h3>Plant Size</h3>
            <LuPlus />
          </div>

          <div className="flex justify-between items-center pb-3 border-b border-gray-400 text-gray-600 mb-4">
            <h3>Water Schedule</h3>
            <LuPlus />
          </div>

          <div className="flex justify-between items-center pb-3 border-b border-gray-400 text-gray-600 mb-4">
            <h3>Color</h3>
            <LuPlus />
          </div>

          <div className="flex justify-between items-center pb-3 border-b border-gray-400 text-gray-600 mb-4">
            <h3>Seasonal</h3>
            <LuPlus />
          </div>

          <div className="flex justify-between items-center pb-3  text-gray-600">
            <h3>Light Efficient</h3>
            <LuPlus />
          </div>
        </div>

        {/* List of Products */}

        <div className="col-span-9">
                {/* sort by */}
          <div className="sort pl-5 flex gap-3 items-center">
            <div className="">
              <p>300 Products</p>
            </div>
          <div className="relative inline-block text-left">
      <button
        id="sortByDropdownButton"
        onClick={toggleSortByDropdown}
        className="text-white bg-customGreen focus:outline-none  font-medium text-sm px-12 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Sort By
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="z-10 bg-customGreen text-white divide-y divide-gray-100  shadow w-full dark:bg-gray-700 absolute">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="sortByDropdownButton">
            <li>
              <a href="#" className="text-white block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white">Option 1</a>
            </li>
            <li>
              <a href="#" className="text-white  block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white">Option 2</a>
            </li>
            <li>
              <a href="#" className="text-white  block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white">Option 3</a>
            </li>
            <li>
              <a href="#" className="text-white  block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white">Option 4</a>
            </li>
          </ul>
        </div>
      )}
    </div>

          </div>
          <div className="product-grid">
            {currentProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
          {/* view more button */}
          {indexOfLastProduct < products.length && (
            <div className="text-center mt-5">
              <button
                className="bg-customGreen text-white py-2 px-4 rounded"
                onClick={handlePageChange}
              >
                View More
              </button>
            </div>
          )}
          <AddToCartModal
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            product={selectedProduct}
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ProductListingPage;
