import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      {/* Main Footer Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 px-5">
        
        {/* Column 1: Baronfig Info */}
        <div>
          <h5 className="text-xl font-bold">Baronfig</h5>
          <p className="mt-5 text-lg font-semibold leading-relaxed">
            Science-backed analog tools <br />
            that supercharge <br />
            your thinking.
          </p>
        </div>

        {/* Column 2: Product Links */}
        <div>
          <h5 className="text-xl font-bold lg:mb-5">Products</h5>
          <ul className="mt-5 space-y-2">
            <li>Starter Kit</li>
            <li>Pens</li>
            <li>Journals</li>
            <li>Gift Cards</li>
            <li>Shop All</li>
          </ul>
        </div>

        {/* Column 3: About Links */}
        <div>
          <h5 className="text-xl font-bold lg:mb-5">About</h5>
          <ul className="mt-5 space-y-2 font-semibold">
            <li>Our Story</li>
            <li>Science</li>
            <li>Plant a Tree</li>
            <li>For Business</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Column 4: Support Links */}
        <div>
          <h5 className="text-xl font-bold lg:mb-5">Support</h5>
          <ul className="mt-5 space-y-2 font-semibold">
            <li>FAQ</li>
            <li>Feedback</li>
            <li>Affiliates</li>
            <li>Wholesale</li>
            <li>Customize</li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-700 mb-10" />

      {/* Footer Bottom: Socials and Legal Info */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-5">
        {/* Social Media Links */}
        <div className="flex space-x-6 mb-6 lg:mb-0">
          <Link href="mailto:fizalangah2001@gmail.com">
            <SiGmail className="text-2xl" />
          </Link>
          <Link href="https://www.linkedin.com/in/fiza-langah-33543b2b7">
            <FaLinkedin className="text-2xl" />
          </Link>
          <Link href="https://github.com/fizalangah">
            <FaGithub className="text-2xl" />
          </Link>
        </div>

        {/* Terms and Copyright */}
        <div className="text-center lg:text-right text-sm text-gray-400">
          <p>Terms of Service | Refund policy</p>
          <p className="mt-1">POS and Ecommerce by Shopify</p>
          <p className="mt-1">Copyright 2024 ©. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
