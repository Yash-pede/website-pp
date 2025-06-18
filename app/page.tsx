"use client";
import * as React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import GreenOverlay from "../components/GreenOverlay";
import { IoPricetagOutline } from "react-icons/io5";
import { GiMedicines } from "react-icons/gi";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/components/animations/animation";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="mt-[135px] max-[640px]:mt-[80px]">
        <div className="relative h-fit bg-[url('/carousel/1.jpg')] bg-cover flex flex-wrap">
          <div className="w-1/2 max-md:w-full max-md:mt-16 flex flex-col justify-center pl-10 md:pl-20">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={slideInFromBottom(0.2)}
              className="text-white underline text-[26px] max-sm:text-2xl mb-[18px] playfair-display italic font-[700]"
            >
              Pharmaceutical
            </motion.h1>
            <motion.span
              initial="hidden"
              animate="visible"
              variants={slideInFromBottom(0.5)}
              className="text-[54px] max-sm:text-4xl text-white mb-[25px] font-[700] exo leading-[1.2em]"
            >
              Best healthcare <br />
              solution
            </motion.span>
            <motion.button
              initial="hidden"
              animate="visible"
              variants={slideInFromBottom(0.8)}
              className="w-fit text-white  bg-[#223A66] py-[14px] px-[53px] rounded-full flex items-center gap-1 
              hover:bg-[#1CBA9F] cursor-pointer transition-all duration-500 hover:translate-x-1.5" 
              onClick={()=>redirect("/products")}
            >
              {" "}
              Our Products <IoIosArrowForward className="scale-125 mt-0.5" />{" "}
            </motion.button>
          </div>

          <div className="w-1/2 max-md:w-full flex justify-center">
            <Image
              src="/carousel/banner1.png"
              alt="Home"
              height={500}
              width={500}
              className="object-cover"
            />
          </div>
        </div>

        <GreenOverlay />
        <Services />
        <section className="w-full relative max-md:hidden">
          <div className="min-h-[35vh] text-white flex">
            <div
              className="bg-[rgba(34,58,102)] p-10 text-center w-1/2 flex justify-center items-center gap-5 
          bg-[url('/background/5.jpg')] bg-no-repeat bg-left before:content-[''] before:absolute before:inset-0 before:bg-[rgba(34,58,102)]/80 before:w-1/2 before:z-0"
            >
              <div className="text-6xl mb-2 -translate-y-2">
                <IoPricetagOutline />
              </div>
              <h2 className="text-2xl text-[46px] text-white exo font-[700] z-1 hover:text-[#222222] transition-all duration-500 ease-linear cursor-pointer">
                Best Quality Products
              </h2>
            </div>
            <div className="bg-[rgba(28,186,159)] p-10 text-center w-1/2 flex justify-center items-center gap-5 bg-[url('/background/6.jpg')] bg-no-repeat bg-right before:content-[''] before:absolute before:ml-auto before:bg-[rgba(28,186,159)]/80 before:z-0 before:inset-0 before:w-1/2">
              <div className="text-7xl mb-2 translate-y-2 z-1">
                <GiMedicines />
              </div>
              <h2 className="text-2xl text-[46px] text-white exo font-[700] z-1 hover:text-[#222222] transition-all duration-500 ease-linear cursor-pointer">
                Sale Center
              </h2>
            </div>
          </div>
        </section>
        <Clients />
      </section>
    </main>
  );
}
