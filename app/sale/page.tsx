"use client";
import { useState } from "react"
import Link from "next/link";

import { SaleData } from "../components/cardData"

export default function Sale() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="bg-white">


      <div className="relativ h-[400px] w-full text-white bg-cover bg-current bg-slate-100">
        <div className="px-4 py-20 md:px-10 lg:px-[200px] lg:py-[150px] pt-[300px] text-center ">
          <h2 className="lg:text-6xl  text-3xl font-bold text-black  pt-10">Sale</h2>
          <p className="mt-5 lg:text-xl text-gray-500 ">Grab these Baronfig products at a discount—available while supplies last.
          </p>
        </div>


      </div>
      <hr />

      <div className="pt-10 px-4 md:px-10 lg:ml-10">

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

    </div>
  )
}
