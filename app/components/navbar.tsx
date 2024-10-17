"use client";

import { useState } from "react";
import Link from "next/link";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleNav() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Announcement bar */}
      <div className="bg-black h-[40px] text-white text-center flex justify-center items-center">
        <p>Free Shipping on all US orders over $65</p>
      </div>

      {/* Large screen */}
      <div className="hidden lg:flex bg-white h-[60px] items-center justify-between px-10 shadow-md">
        <div className="flex gap-x-10 items-center font-semibold">
          <Link href="/" className="text-2xl font-bold">STATIONERY</Link>
          <Link href="/pens">Pens</Link>
          <Link href="/journals">Journals</Link>
          <Link href="/accessories">Accessories</Link>
          <Link href="/sale">Sale</Link>
        </div>
        <div className="flex gap-x-6 items-center font-bold text-2xl">
          <Link href="/search"><IoSearchOutline /></Link>
          <Link href="/cart"><IoCartOutline /></Link>
        </div>
      </div>

      {/* Small screen */}
      <div className="lg:hidden bg-white shadow-md">
        <div className="h-[60px] flex justify-between items-center px-4">
          <button onClick={handleNav} className="text-black text-2xl">
            {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
          </button>
          <Link href="/" className="text-xl font-bold">BARONFIG</Link>
          <Link href="/cart" className="text-black text-2xl">
            <IoCartOutline />
          </Link>
        </div>

        {/* Dropdown for small screens */}
        {isOpen && (
          <div className="bg-white text-black mt-2 py-2">
            <div className="flex flex-col gap-y-4 font-medium px-6">
              <Link href="/pens">Pens</Link>
              <Link href="/journals">Journals</Link>
              <Link href="/accessories">Accessories</Link>
              <Link href="/sale">Sale</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
