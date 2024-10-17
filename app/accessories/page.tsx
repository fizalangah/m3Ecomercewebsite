"use client";
import { useState } from "react";
import Link from "next/link";
import { AccessoriesData } from "../components/cardData";

export default function Accessories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-white">


      <div className="relativ h-[400px] w-full text-white bg-cover bg-current"
        style={{ backgroundImage: "url(/accmainpic.webp)" }}
      >
        <div className="px-4 py-20 md:px-10 lg:px-[200px] lg:py-[150px] pt-[200px] text-center lg:text-start">
          <h2 className="lg:text-5xl  text-3xl font-bold ">Accessories</h2>
          <p className="mt-2 lg:text-xl ">Take your analog game to the next level.</p>
        </div>

      </div>

      <div className="pt-10 px-4 md:px-10 lg:ml-10">
        <h3 className="text-2xl  lg:text-4xl font-bold">Workspace</h3>
        <p className="text-gray-500 mt-2 text-xl">Easily keep yourself organized—clear workspace, clear mind.</p>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
          {AccessoriesData.map((acc, index) => (
            <div key={acc.id} className="flex flex-col items-center">
              <div
                className="relative h-64 w-full bg-gray-300 rounded-xl shadow-lg bg-cover bg-center transition-all duration-500 ease-in-out"
                style={{
                  backgroundImage: `url(${hoveredIndex === index ? acc.hoverImage : acc.defaultImage})`,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background image of the card */}
              </div>

              {/* Display text and price below each card */}
              <p className=" text-center mt-2 text-gray-400">{acc.text}</p>
              <p className="text-left text-gray-400 ">{acc.price}</p>
              <Link href={`/accessories/${acc.id}`}>View product</Link>
            </div>
          ))}

        </div>
      </div>

    </div>
  )
}
