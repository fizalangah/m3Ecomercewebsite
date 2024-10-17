"use client"
import { useState ,useEffect} from 'react';
import { IoArrowForwardCircle, IoArrowBackCircle } from 'react-icons/io5';

const data = [
  {
    id: 1,
    image: '/img1.webp', 
    title: "Venture Backpack",
    text: 'Modular straps, loads of compartments, ultra slim, water resistant—this is the backpack that’s ready for anything..',
    btn: "shope Now"
  },
  {
    id: 2,
    image: '/img2.webp',
    title:"Squire Stainless Steel",
    text: 'powefull, indestructible elite.',
    btn : "shope Now"
  },
  {
    id: 3,
    image: '/img3.webp',
    title: "Squire Hex Pen",
    text: 'Get the latest in the award-winning family of Squire Pens.',
    btn: "shope Now"
  },
  {
    id: 4,
    image: '/img4.webp',
    title: "Huddels Mens Journal",
    text: 'Gear up for game day with the Huddle Mens Journal—where every day begins with a plan. In collaboration with NFL player R.K. Russell..',
    btn: "shope Now"
  },
  {
    id: 5,
    image: '/img5.webp',
    title: "Atomic Habits Squire Pens",
    text: 'James Clears special edition, based on his bestselling book Atomic Habits. Habit Tracker included inside every box..',
    btn: "shope Now"
  },
  {
    id: 6,
    image: '/img6.webp',
    title: "NYC Special Addition Squire Pen",
    text: '<p>Experience the vibrant energy of New York City with every stroke</p>.',
    btn: "shope Now"
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 5000;
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
      }, intervalTime);
  
      return () => clearInterval(intervalId);
    }
  }, [isHovered]);
  
  // Handle next arrow click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  // Handle previous arrow click
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const currentItem = data[currentIndex];

  return (
    <div
    className="relative w-full h-screen bg-cover bg-center text-white"
    style={{ backgroundImage: `url(${currentItem.image})` }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
      <div className=" flex justify-between items-center h-full px-5">
        {/* Previous Arrow */}
        <button onClick={handlePrevious} className="text-4xl lg:mt-[500px] mt-[300px] ">
          <IoArrowBackCircle />
        </button>

        {/* Image Description */}
        <div className="text-center ">
                  <h2 className='lg:text-6xl  text-3xl font-bold mt-10'>{currentItem.title}</h2>
          <p className="text-xl flex  text-center justify-center items-center mt-2">{currentItem.text}</p>
          <button className='px-4 py-2 bg-white text-black rounded-2xl shadow-xl mt-3'>{currentItem.btn}</button>
        </div>
    

        {/* Next Arrow */}
        <button onClick={handleNext} className="text-4xl  lg:mt-[500px] mt-[300px]">
          <IoArrowForwardCircle />
        </button>
      </div>
    </div>
  );
}
