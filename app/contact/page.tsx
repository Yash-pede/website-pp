import React from "react";
import { IoSend } from "react-icons/io5";
import { contactUs } from "@/constants/config";
import { formFields } from "@/constants/config";

const ContactPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="max-sm:mt-[80px] mt-[135px] py-20 max-lg:px-6 max-sm:px-3 lg:px-8 md:w-full md:mx-aut">
        <div className="flex flex-wrap md:flex-nowrap xl:justify-center bg-[url('/background/25.jpg')] bg-no-repeat bg-center">
          <div className="w-full px-4 md:px-10 lg:px-4 md:w-7/12 lg:w-1/2 xl:w-2/3 ">
            <h1 className="exo text-4xl md:text-[46px] text-[#222222] font-[700] ">
              Get in Touch
            </h1>
            <p className="text-[18px] text-[#313131] md:mt-[15px] font-[500] leading-[1.8em]">
              We are awaiting your valued enquiry and the opportunity to offer
              our most competitive quotation.
            </p>
            <div className="flex flex-wrap mt-12">
              {contactUs.map(({ icon, title, description }, index) => {
                const Icon = icon;
                return (
                  <div className="md:w-1/2 md:px-6 mb-10 md:mb-20" key={index}>
                    <Icon className="text-[#1CBA9F] scale-[2] sm:mb-6 ml-2" />
                    <h1 className="exo text-[20px] sm:text-[22px] mt-[18px] mb-[10px] text-[#22222] font-[700] leading-[1.4em] ">
                      {title}
                    </h1>
                    <span className="roboto text-[14px] sm:text-[16px] text-[rgba(34_34_34),0.7] roboto font-[400] leading-[1.7em]">
                      {description}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="h-fit w-full flex flex-col px-6 lg:px-12 py-20 lg:pt-24 mx-auto rounded-xl bg-[#223a66]/90 md:mx-auto lg:mx-0 sm:w-4/5  md:w-5/12 lg:w-1/2 xl:w-1/3 text-white mt-6 md:mt-0">
            <h2 className="text-lg font-semibold mb-3 exo">Enquiry Form</h2>
            <h1 className="text-4xl font-bold mb-10 exo">Drop us a Message</h1>

            <form className="space-y-6">
              {formFields.map(({ icon, placeholder, type }, index) => {
                const Icon = icon;
                return (
                  <div
                    key={index}
                    className="border-b border-gray-500 focus-within:border-[#1CBA9F] transition-all duration-500 flex items-center py-2 relative"
                  >
                    <span className="mr-3 text-gray-300">
                      <Icon className="text-white scale-150 absolute top-3" />
                    </span>
                    <input
                      type={type}
                      placeholder={placeholder}
                      className="bg-transparent outline-none text-gray-300 w-full placeholder-gray-300 pb-2 pl-3"
                    />
                  </div>
                );
              })}

              <div className="pt-6">
                <button
                  type="submit"
                  className="bg-white flex justify-center items-center gap-2 text-[#2f4568] hover:text-white border-2 cursor-pointer border-white hover:bg-transparent w-full py-3 rounded-full font-semibold transition"
                >
                  Submit Now <IoSend />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
