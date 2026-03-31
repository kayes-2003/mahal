"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <nav className="relative flex items-center justify-between px-10 md:px-20 lg:px-30 py-8 text-white">
        
        {/* Left Menu */}
        <div className="hidden md:flex gap-8 text-sm tracking-wide">


          <ul className="hidden sm:flex gap-15 text-lg font-medium text-white items-center">

          <Link href="/menu">
            <li className={`cursor-pointer hover:text-blue-600 ${
              pathname === "/menu" ? "underline underline-offset-4" : ""
            }`}>
          Menu 
          </li>
        </Link>
          <Link href="/our_story">
            <li className={`cursor-pointer hover:text-blue-600 ${
              pathname === "/our_story" ? "underline underline-offset-4" : ""
            }`}>
          Our Story
          </li>
        </Link>

          </ul>

          {/* <Link href="/menu" className="cursor-pointer hover:text-blue-600 active:underline  underline-offset-4">Menu</Link>
          <Link href="/our_story" className="cursor-pointer hover:text-blue-600 active:underline  underline-offset-4">Our Story</Link> */}
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-2xl md:text-3xl font-serif">
          <Link href="/" className="cursor-pointer hover:text-blue-600 underline-offset-4">Mahal</Link>
        </div>

        {/* Right Menu */}

        <div className="hidden md:flex gap-8 text-sm tracking-wide">
            <ul className="hidden sm:flex gap-15 text-lg font-medium text-white items-center">

          <Link href="/Customer_reviews">
            <li className={`cursor-pointer hover:text-blue-600 ${
              pathname === "/Customer_reviews" ? "underline underline-offset-4" : ""
            }`}>
          Riviews
          </li>
        </Link>
          <Link href="/contact">
            <li className={`cursor-pointer hover:text-blue-600 ${
              pathname === "/contact" ? "underline underline-offset-4" : ""
            }`}>
          Contact
          </li>
        </Link>

          </ul>
          
        </div>



        {/* Mobile Button */}



        
        <button
          className="md:hidden z-50"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-[2px] bg-white"></span>
            <span className="block w-6 h-[2px] bg-white"></span>
            <span className="block w-6 h-[2px] bg-white"></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-lg transition-transform duration-300 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        
        <Link href="/menu" className="px-4 py-2 text-white hover:underline hover:text-black hover:bg-amber-100 underline-offset-4" onClick={() => setOpen(false)}>Menu</Link>
        <Link href="/our_story" className="px-4 py-2 text-white hover:underline hover:text-black hover:bg-amber-100 underline-offset-4" onClick={() => setOpen(false)}>Our Story</Link>
        <Link href="/Customer_reviews" className="px-4 py-2 text-white hover:underline hover:text-black hover:bg-amber-100 underline-offset-4" onClick={() => setOpen(false)}>Reviews</Link>
        <Link href="/contact" className="px-4 py-2 text-white hover:underline hover:text-black hover:bg-amber-100 underline-offset-4" onClick={() => setOpen(false)}>Contact</Link>
      </div>
    </header>
  );
}