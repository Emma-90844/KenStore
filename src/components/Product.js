import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  // Ratings demo ramdomizing
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  //   Has Prime Delievery
  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    //   Each Product
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
      <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className='my-3'>{title}</h4>
      {/* Rating */}
      <div className="flex ">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-400 " />
          ))}
      </div>
      <p className='text-xs my-2 line-clamp-2'>{description}</p>
      <div className='mb-5'>
        <Currency  quantity={price} currency="GBP" />
      </div>
      {hasPrime && (
        <div className='flex items-center space-x-2 mt-5'>
          <img className='w-12' src="https://links.papareact.com/fdw" alt="" />
          <p className='text-sm text-gray-500'>FREE Next-day Delievery</p>
        </div>
      )}
      <button className='mt-auto p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500'>Add to Basket</button>
    </div>
  );
}

export default Product;
