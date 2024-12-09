'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { CiSearch } from 'react-icons/ci'
import { IoMenu, IoClose, IoCartOutline } from 'react-icons/io5'
import { IoIosContact } from 'react-icons/io'

export default function ResponsiveHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <div className="w-full">
      
      <div className="p-4 lg:hidden">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-[#22202E] text-xl">Avion</h1>
          <div className="flex items-center gap-4">
            <CiSearch size={25} className="text-[#2A254B]" />
            <button
              className="text-2xl focus:outline-none z-30"
              onClick={toggleMenu}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {!menuOpen ? <IoMenu /> : <IoClose />}
            </button>
          </div>
        </div>
      </div>

      
      <div className="hidden lg:block px-8 py-4">
        <div className="flex items-center justify-between w-full relative">
          <CiSearch size={25} className="text-[#2A254B] absolute left-0" />
          <h1 className="text-[#22202E] text-2xl mx-auto">Avion</h1>
          <div className="flex gap-4 items-center absolute right-0">
            <Link href="/Cart">
              <IoCartOutline size={25} className="text-[#2A254B]" />
            </Link>
            <IoIosContact size={25} className="text-[#2A254B]" />
          </div>
        </div>
      </div>

      <hr className="border-[#EBE8F4]" />

      
      <nav className="hidden lg:block py-4">
        <ul className="flex justify-center items-center gap-12 text-[#726E8D] text-base">
          {[
            "Plant pots",
            "Ceramics",
            "Tables",
            "Chairs",
            "Crockery",
            "Tableware",
            "Cutlery",
          ].map((item) => (
            <li key={item} className="hover:text-[#2A254B] transition-colors">
              <Link href="/">{item}</Link>
            </li>
          ))}
        </ul>
      </nav>

     
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden z-20`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <IoClose />
          </button>
        </div>
        <nav className="p-4">
          <ul className="flex flex-col gap-4 text-[#726E8D] text-base">
            {[
              "Plant pots",
              "Ceramics",
              "Tables",
              "Chairs",
              "Crockery",
              "Tableware",
              "Cutlery",
            ].map((item) => (
              <li key={item} className="hover:text-[#2A254B] transition-colors">
                <Link href="/">{item}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

