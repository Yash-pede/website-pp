import React from "react";

const GreenOverlay = () => {
  return (
    <div className="relative">
      <div className="relative bg-[#1cba9f] bg-[url('/background/1.png')] bg-no-repeat bg-left max-sm:bg-none bg-contain before:content-[''] before:absolute before:inset-0 before:bg-[#1cba9f]/80 before:z-0">
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="relative text-white text-2xl sm:text-3xl md:text-4xl font-bold">
            Welcome to Pure Pride Pharma Private Limited
          </h1>
        </div>
      </div>
    </div>
  );
};

export default GreenOverlay;
