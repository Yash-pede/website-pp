"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiAlarmClock } from "react-icons/tfi";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setisOpen] = useState<boolean>(false);
  return (
    <>
      <header className=" w-full h-[135px] max-[640px]:h-[80px] flex bg-white fixed top-0 z-10 border-b-2 border-b-[#1db9a0]">
        <div className="w-3/12 max-sm:w-1/2 bg-[#1db9a0] pr-[2px] -skew-x-[20deg] max-[640px]:pr-0 ">
          <div className="w-full h-full bg-white flex justify-center items-center ">
            <Image
              src="/icons/logo.png"
              alt="PurePride"
              height={200}
              width={200}
              className="skew-x-[20deg]"
            />
          </div>
        </div>
        <div className="w-9/12 flex flex-col">
          <div className="lg:flex flex-row gap-10 hidden px-10 py-3 bg-linear-to-r from-[#1db9a0] to-[#4d94c4] text-white">
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>Phone:+91-9993946660</span>
            </div>
            <div className="flex items-center gap-2">
              <TfiAlarmClock />
              <span>Mon-Fri (8am - 4pm)</span>
            </div>
            <div className="flex items-center gap-2">
              <IoIosMail className="scale-[1.2] mt-1" />
              <span>purepridepharma@gmail.com</span>
            </div>
          </div>
          <div className="max-[640px]:hidden flex items-center max-lg:justify-center h-full px-4 lg:px-16 gap-6 font-[600] text-md lg:gap-6 md:gap-4">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About Us</Link>
            <Link href={"/products"}>Our Products</Link>
            <Link href={"/contact"}>Contact Us</Link>
          </div>
        </div>
        {/* sidebar */}
        <div
          className={`fixed right-0 w-full h-full bg-white sm:hidden z-100 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <Image
              src="/icons/logo.png"
              alt="PurePride"
              height={180}
              width={180}
              className="absolute top-0 left-0"
            />
            <nav className="flex flex-col items-center gap-4 mt-6 font-semibold text-2xl">
              <Link href={"/"} className="mb-4">
                Home
              </Link>
              <Link href={"/about"} className="mb-4">
                About Us
              </Link>
              <Link href={"/products"} className="mb-4">
                Our Products
              </Link>
              <Link href={"/contact"}>Contact Us</Link>
            </nav>
          </div>
          <button
            onClick={() => setisOpen(!isOpen)}
            className="absolute right-5 top-6 scale-[2.2] text-gray-700"
          >
            <MdClose />
          </button>
        </div>
        <button
          onClick={() => setisOpen(!isOpen)}
          className="absolute right-5 top-2/5 scale-[2.2] text-gray-700 sm:hidden"
        >
          <FiMenu />
        </button>
      </header>
    </>
  );
};

export default Navbar;
