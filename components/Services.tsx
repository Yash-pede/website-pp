import React from "react";
import { motion } from "framer-motion";
import { services } from "@/constants/config";

const Services = () => {
  return (
    <section className="py-[100px] max-sm:py-[50px] flex flex-col w-full bg-white">
      <div className="w-3/4 mx-auto max-sm:w-11/12">
        <div className="mb-[50px] flex flex-col items-center">
          <h1 className="text-[46px] text-[#222222] font-bold max-sm:text-4xl">u
            Why Choose Us
          </h1>
          <p className="text-center leading-[1.8em] text-[18px] text-[#313131] font-[500] mt-[18px]">
            We have earned a reputed position in the market by offering high
            quality medicines at nominal prices. <br /> Owing to the following
            reasons, we have got the edge over other market players
          </p>
        </div>
        <div className="flex flex-wrap">
          {services.map(({ icon, title, description }, index) => {
            const Icon = icon;
            return (
              <motion.div
                key={index}
                className="lg:w-4/12 md:w-1/2 w-full py-[50px] px-[50px] max-sm:py-[30px] max-sm:px-[20px] hover:shadow-[0_0_10px_rgba(0,0,0,0.25)] transition-all duration-300"
              >
                <Icon className="h-10 w-10 mb-4 text-[#1bb399]" />
                <h1 className="text-[22px] font-bold text-[#222222]">
                  {title}
                </h1>
                <p className="font-[17px] leading-[1.7em] mt-[12px] text-[#000000]/70 roboto">
                  {description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
