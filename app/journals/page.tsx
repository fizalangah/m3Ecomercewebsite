"use client";
import { useState } from 'react';
import { journalData } from '../components/cardData'
import Link from 'next/link'


export default function Journals() {

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="bg-white">


  <div
    className="relative h-[500px] w-full text-white bg-cover bg-current"
    style={{ backgroundImage: "url(/jrmainimg.webp)" }}
  >
  
  </div>

 <div className="pt-10 px-4 md:px-10 lg:ml-10">
  <h2 className="text-3xl font-bold   lg:text-5xl">Journals</h2>
  <p className=" mt-2 md:text-xl">Top-rated journals and notebooks for any task.</p>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
      {journalData.map((journal, index) => (
        <div key={journal.id} className="flex flex-col items-center">
           
          <div
            className="relative h-64 w-full bg-gray-300 rounded-xl shadow-lg bg-cover bg-center transition-all duration-500 ease-in-out"
            style={{
              backgroundImage: `url(${hoveredIndex === index ? journal.hoverImage : journal.defaultImage})`,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Background image of the card */}
          </div>

          {/* Display text and price below each card */}
          <p className=" text-center mt-2 text-gray-400">{journal.text}</p>
          <p className="text-left text-gray-400 ">{journal.price}</p>
          <Link href={`/journals/${journal.id}`}>View product</Link> 
        </div>
      ))}
     
    </div>
    </div>

  )
}
