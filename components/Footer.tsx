import Image from "next/image";
import Link from "next/link";
import React from "react";
import { footerData } from "@/constants/config";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      {/* upper part */}
      <section className="w-full bg-[#f8fafc]">
        <div className="w-10/12 md:w-10/12 mx-auto flex max-sm:flex-wrap gap-8 pt-28 pb-18 ">
          <div className="flex flex-col w-1/2 max-sm:w-full">
            <Image src="/icons/logo.png" height={170} width={170} alt="logo" />
            <p className="ml-2">{footerData.upper.description}</p>
          </div>
          <div className="flex flex-col w-1/4 gap-3 max-sm:w-1/2">
            <h1 className="exo font-bold text-[22px]">
              {footerData.upper.reachUs.title}
            </h1>
            {footerData.upper.reachUs.links.map((link, index) => {
              return (
                  <span key={index} className="hover:text-[#1CBA9F] transition-all duration-300 cursor-pointer font-[500]">
                    {link.text}
                  </span>
              );
            })}
          </div>
          <div className="flex flex-col w-1/4 gap-3 max-sm:w-1/2">
            <h1 className="exo font-bold text-[22px]">
              {footerData.upper.explore.title}
            </h1>
            {footerData.upper.explore.links.map((link, index) => {
              return (
                  <Link key={index} href={link.href} className="hover:text-[#1CBA9F] transition-all duration-300 cursor-pointer font-[500]">
                    {link.text}
                  </Link>
              );
            })}
          </div>
        </div>
      </section>
      {/* lower part */}
      <section className="w-full bg-linear-to-r from-[#1db9a0] to-[#4d94c4] py-7 text-white ">
        <div className="w-3/4 mx-auto flex flex-wrap justify-between items-center max-sm:flex-col max-sm:mx-5 max-sm:items-start max-sm:gap-7">
          <div className="max-sm:mb-0 max-lg:mb-6">
            {footerData.lower.title}
          </div>
          <div className="flex items-center gap-3 max-sm:flex-col max-sm:items-start max-sm:gap-7">
            <button className="bg-white rounded-full text-black flex justify-center gap-2 items-center px-4 py-2 cursor-pointer">
              <IoLogoGooglePlaystore className="scale-[1.3]" />{" "}
              {footerData.lower.button.text}
            </button>
            <div className="flex gap-4 max-sm:gap-6">
              {footerData.lower.socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link href={link.href} key={index} className="cursor-pointer">
                    <Icon className="h-6 w-6 " />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
