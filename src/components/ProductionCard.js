import React from 'react';
import { Link } from 'react-router-dom';
import { GrFavorite } from "react-icons/gr";
import { FaStar } from "react-icons/fa6";
import { LuPlus } from "react-icons/lu";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="mb-5">
      {/* <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.desc}</p>
      <p>{product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      <Link to={`/thank-you/${product.name}`}>
        <button>View Product</button>
      </Link> */}

  <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative mb-5">
  <div className="flex justify-between items-start p-2">
    <div></div>
    <GrFavorite className="h-5 w-5 ml-auto" />
  </div>
  <img src={product.image} alt="" className="w-full h-48 object-contain" />
  <Link to={`/thank-you/${product.name}`}>
    <button className="bg-customGreen py-1 px-2 text-white font-semibold w-full">
      View Product
    </button>
  </Link>
</div>

<div className='bottom-content font-semibold'>Monsterra</div>
<p className='text-sm text-gray-500'>Indoor Plant, Low maintenance</p>
<div className='stars flex gap-1 items-center'>
<FaStar className='text-yellow-300 h-5 w-5' />
<FaStar className='text-yellow-300 h-5 w-5' />
<FaStar className='text-yellow-300 h-5 w-5' />
<FaStar className='text-yellow-300 h-5 w-5' />
<p className='text-gray-400 font-semibold'>4.9</p>
</div>
<div className='flex gap-4 items-center'>
  <div className='text-sm text-gray-500 line-through'>₹ 359</div>
  <div className='text-lg text-gray-600 font-semibold'>₹ 299</div>
</div>

<div className='flex gap-2'>
  <button onClick={() => onAddToCart(product)} className='py-1 px-3 bg-customGreen text-white font-semibold rounded-lg'><span>&#8722;</span> Add to cart <span>&#43;</span></button>
  <button className='py-1 px-3 border border-customGreen text-customGreen font-semibold rounded-lg'>Buy on Rent</button>
</div>
    </div>
  );
};

export default ProductCard;
