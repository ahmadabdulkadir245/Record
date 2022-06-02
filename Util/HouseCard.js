import React from "react";
import { HeartIcon } from "@heroicons/react/solid";

function HouseCard({
  id,
  type,
  localGov,
  bedrooms,
  bathroom,
  kitchen,
  plot,
  price,
  img,
}) {
  return (
    <div className='w-[300px] 2xl:w-[300px]  rounded-md overflow-hidden  cursor-pointer'>
      <img width='300' height='200' src={img} alt='For rent image' />
      <div className=' text-[#093158] w-[200px]'>
        <h4 className='text-sm text-gray-400 p-1'>{type}</h4>
        <h2 className='text-lg text-semibold py-1  text-center'> {localGov}</h2>
        <div className='flex justify-between items-center px-4 py-[7px] text-sm'>
          <div>
            <p>Bed Rooms : {bedrooms}</p>
          </div>
          <div>
            <p>Bath Rooms: {bathroom}</p>
          </div>
        </div>
        <div className='flex justify-between items-center px-4  py-[7px] text-sm'>
          <div>
            <p>Kitchen: {kitchen}</p>
          </div>
          <div>
            <p>Plot: {plot}</p>
          </div>
        </div>
        <div className='flex justify-between items-center px-4  py-[7px] text-sm mb-4'>
          <div>
            <p> &#8358 {price} / Year</p>
          </div>
          <div className='flex space-x-2'>
            <div>
              <HeartIcon className='h-5 text-[#ffcb05]' />
            </div>
            <div>
              <HeartIcon className='h-5 text-[#ffcb05]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseCard;
