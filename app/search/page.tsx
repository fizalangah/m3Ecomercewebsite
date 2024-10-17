"use client";

import { useState, ChangeEvent, KeyboardEvent } from "react";
import Link from "next/link";
import { FaSearch, FaTimes } from "react-icons/fa"; // Font Awesome icons

export default function Search() {
  const [input, setInput] = useState("");
  const [searchOpen, setSearchOpen] = useState(true); // Track if the search is open

  const links = [
    { name: "Pens", href: "/pens" },
    { name: "Journals", href: "/journals" },
    { name: "Accessories", href: "/accessories" },
    { name: "Sale on Product", href: "/sale" },
  ];

  // Handle input change
  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  // Clear the input field
  function clearInput() {
    setInput("");
  }

  // Handle search on Enter key
  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && input.trim()) {
      console.log("Searching for:", input);
    }
  }

  // Filter the links based on the input value
  const filteredLinks = links.filter((link) =>
    link.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div >
      {/* Apply blur to the background content when search is open */}
      <div className={`${searchOpen ? "blur-md" : ""} transition duration-300 `}>
        {/* Main content of your page goes here */}
        {/* Example placeholder for content */}
        <div className="p-4">
          <h1 className="text-2xl font-bold">Main Content</h1>
          <p>This is the content that will be blurred when the search is open.</p>
          {/* Add more content here */}
        </div>
      </div>

      {/* Background Overlay to close search when clicked */}
      {searchOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setSearchOpen(false)}
        />
      )}

      {/* Search Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-20">
        <div className="h-[500px] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] bg-white rounded-xl p-4 relative mt-20">
          <div className="relative">
            {/* Search Icon (left) */}
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />

            {/* Input Field */}
            <input
              type="text"
              placeholder="Search by products, colors, and more"
              value={input}
              onChange={handleInput}
              onKeyDown={handleKeyDown} // Trigger search on Enter
              className="w-full p-2 pl-10 pr-10 rounded-xl bg-gray-300"
            />

            {/* Clear (X) Icon inside the input */}
            {input && (
              <FaTimes
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={clearInput}
              />
            )}
          </div>

          {/* Render the filtered links */}
          <div className="mt-4 space-y-2">
            {filteredLinks.length > 0 ? (
              filteredLinks.map((link, index) => (
                <div key={index}>
                  <Link
                    href={link.href}
                    className="text-blue-500 hover:underline"
                  >
                    {link.name}
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No results found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
