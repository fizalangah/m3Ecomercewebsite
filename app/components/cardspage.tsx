"use client";
import { useState } from "react";
import Link from "next/link";
import { SaleData } from "./cardData"
// import Cards from "./cards";


export default function Cardspage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="bg-white ">
        <div className="text-center">
        <h2 className="lg:text-5xl text-3xl pt-5  font-bold ">Shop the World's #1 Rated Pen</h2>
        <p className="text-gray-500 mt-5">Our Squire Pen is rated top pen out of one hundred by New York Magazine</p>
        </div>

        <h3 className="text-3xl font-bold ml-10">Bestselling Pens</h3>
        <p className="mt-2 text-gray-500 ml-10">Timeless and award-winning pens.</p>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
      {SaleData.map((sale, index) => (
        <div key={sale.id} className="flex flex-col items-center">
          <div
            className="relative h-64 w-full bg-gray-300 rounded-xl shadow-lg bg-cover bg-center transition-all duration-500 ease-in-out"
            style={{
              backgroundImage: `url(${hoveredIndex === index ? sale.hoverImage : sale.defaultImage})`,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Background image of the card */}
          </div>

          {/* Display text and price below each card */}
          <p className=" text-center mt-2 text-gray-400">{sale.text}</p>
          <p className="text-left text-gray-400 ">{sale.price}</p>
          <Link href={`/sale/${sale.id}`}>View product</Link> 
        </div>
      ))}
     
    </div>
        
    </div>
  )
}
