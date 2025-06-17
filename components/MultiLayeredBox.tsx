import Image from "next/image";
import React from "react";

const MultiLayeredBox = () => {
  return (
    <section className="bg-white w-full pb-10 lg:pb-20">
      <div
        className={
          "relative flex max-[1300px]:w-10/12 max-lg:flex-wrap w-3/4 max-md:w-full max-md:mx-0 gap-30 max-[1200px]:gap-10 max-md:gap-0 lg:justify-center mx-auto mt-10"
        }
      >
        <div className="w-1/2 h-auto z-0 max-lg:w-7/12 max-md:w-1/2 max-sm:w-full relative mx-auto  ">
          <div className="w-[500px] max-[1200px]:w-[400px] max-lg:w-[500px] max-md:w-[400px] max-sm:w-full">
            <Image
              src={"/about1.jpg"}
              height={500}
              width={500}
              alt="image"
              className="-translate-10 max-sm:translate-0 max-sm:w-full shadow-[0_0_25px_rgba(0,0,0,0.5)]"
            />
            <div
              className={`h-[500px] w-[500px] max-[1200px]:w-[400px] max-[1200px]:h-[400px] max-lg:w-[500px] max-lg:h-[500px] max-md:w-[400px] max-md:h-[400px] max-sm:w-[300px] max-sm:h-[300px] bg-white opacity-90 absolute   top-0 -z-2 -translate-5 shadow-[0_0_25px_rgba(0,0,0,0.5)] max-sm:hidden`}
            ></div>
            <div
              className={`h-[500px] w-[500px] max-[1200px]:w-[400px] max-[1200px]:h-[400px] max-lg:w-[500px] max-lg:h-[500px] max-md:w-[400px] max-md:h-[400px] max-sm:w-[300px] max-sm:h-[300px] bg-[#15927D] absolute top-0 -z-3 shadow-[0_0_25px_rgba(0,0,0,0.5)] max-sm:hidden`}
            >
              <Image
                src={"/icons/video-icon-1.png"}
                height={80}
                width={80}
                alt="icon"
                className=" absolute right-[-53px] top-1/3"
              />
              <Image
                src={"/icons/video-icon-2.png"}
                height={80}
                width={80}
                alt="icon"
                className="absolute bottom-[-58px] left-5/12"
              />
            </div>
            <div
              className={`h-[500px] w-[500px] max-[1200px]:w-[400px] max-[1200px]:h-[400px] max-lg:w-[500px] max-lg:h-[500px] max-md:w-[400px] max-md:h-[400px] max-sm:w-[300px] max-sm:h-[300px] bg-white opacity-90 absolute top-0 -z-4 translate-5 shadow-[0_0_25px_rgba(0,0,0,0.5)] max-sm:hidden`}
            ></div>
          </div>
        </div>
        <div className="w-1/2 max-lg:w-10/12 mx-auto max-lg:mt-12">
          <h1 className="text-[46px] mb-[35px] max-lg:mb-4 text-[#223a66] font-[700] exo">
            About Us
          </h1>
          <p className="text-[18px] text-[#223a66] mb-[20px] leading-[1.7em] ">
            Leveraging on our high quality standards, we have been successful in
            keeping our clients satisfy who are spread across the market. Owing
            the consistent efforts and strong will power of our adept personnel,
            we have been able to deliver quality assured medicines for clients
            within the fixed time frame. Our adroit professionals work in a
            close coordination to meet the predefined goals of our prestigious
            entity. In order to maintain defined quality standards, these
            medicines are thoroughly tested against numerous quality parameters
            under the guidance of our quality experts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MultiLayeredBox;
