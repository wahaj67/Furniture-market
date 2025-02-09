import Link from "next/link";
import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="px-6 md:px-12 py-8 bg-[#2A254B] mt-8">
        <div className="flex flex-wrap gap-12 md:gap-[100px] lg:gap-[200px]">
          
          <div className="text-gray-500 w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Menu</h1>
            <div className="space-y-2">
              <h1>
                <Link href={"/"}>Home</Link>
              </h1>
              <h1>
                <Link href={"/productlisting"}>All Products</Link>
              </h1>
            </div>
          </div>

          
          <div className="text-gray-500 w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Categories</h1>
            <div className="space-y-2">
              <h1>
              <Link href={"/Planpots"}>Plant pots</Link>
              </h1>
              <h1>
                <Link href={"/ceramics"}> Ceramics</Link>
              </h1>
              <h1>
                <Link href={"/tables"}>Tables</Link>
              </h1>
              <h1>
                <Link href={"/chairs"}>Chairs</Link>
              </h1>
              <h1>
                <Link href={"/crockery"}>Crockery</Link>
              </h1>
              <h1>
                <Link href={"/tableware"}>Tableware</Link>
              </h1>
              <h1>
                <Link href={"/cutlery"}>Cutlery</Link>
              </h1>
              
                
            </div>
          </div>

          
          <div className="text-gray-500 w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Our Company</h1>
            <div className="space-y-2">
              <h1>
                <Link href="/about">About us</Link>
              </h1>
              <h1>
                <Link href={"/"}>Vacancies</Link>
              </h1>
              <h1>
                <Link href={"/"}>Contact us</Link>
              </h1>
              <h1>
                <Link href={"/"}>Privacy</Link>
              </h1>
              <h1>
                <Link href={"/"}>Return policy</Link>
              </h1>
            </div>
          </div>

         
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">
              Join our mailing list
            </h1>
            <div className="mt-4">
              <input
                type="text"
                placeholder="your@email.com"
                className="w-full sm:w-[250px] lg:w-[300px] h-[48px] p-2 bg-transparent opacity-35 border border-white rounded-md"
              />
              <button className="mt-2 sm:mt-0 sm:ml-2 w-full sm:w-[100px] h-[48px] bg-white text-[#2A254B] rounded-md">
                Sign up
              </button>
            </div>
          </div>
        </div>

        <hr className="bg-[#4E4D93] my-8" />
        <div className="flex flex-wrap justify-between items-center text-white gap-4">
          <div>
            <h1>Copyright 2022 Avion LTD</h1>
          </div>
          <div className="flex gap-4">
            <Link href={"/"}>
              <FaLinkedin size={20} />
            </Link>
            <Link href={"/"}>
              <FaFacebookSquare size={20} />
            </Link>
            <Link href={"/"}>
              <FaInstagram size={20} />
            </Link>
            <Link href={"/"}>
              <IoLogoSkype size={20} />
            </Link>
            <Link href={"/"}>
              <FaTwitter size={20} />
            </Link>
            <Link href={"/"}>
              <FaPinterest size={20} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
