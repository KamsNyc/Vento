import React from "react";
import SectionHeading from "./SectionHeading";

function ContactSection() {
  return (
    <section className="max-h-[791px] md:max-h-[1467px] w-full h-full ">
      {/* HEADING CONTAINER*/}
      <div className="flex items-center justify-between gap-8 pt-[52px]">
        {/* HEADING */}
        <h3 className="font-medium text-[44px] leading-[55px] flex-shrink-0 pl-4 md:pl-[138px]">
          Contact Us
        </h3>
        {/* LINE */}
        <div className="w-[85%]">
          <div className="w-full h-[4px] bg-[#1A63BB]" />
        </div>
      </div>

      {/* SPLIT SECTION */}
      <div className=" px-4 xl:px-[138px] block md:flex items-center justify-between my-[41px] lg:py-0 md:gap-[20px] lg:my-[54px]">
        {/* LEFT */}
        <div className="block lg:flex text-left w-full lg:w-[30%] h-full text-[#4E4E4E] text-[20.38px] font-[300] leading-[28px] max-h-[392px] lg:max-h-[292px] lg:max-w-[326px] lg:pr-2 mb-[38px] md:mb-0">
          Whether you are renovating an existing home or building a custom home, our team is here to help. 
          <br></br>
          <br></br>
          Contact us today to learn more about how we can provide you with the best HVAC design solutions for your renovation project or custom home.
          <br></br>
          <br></br>
          <br></br>
          
        </div>
        {/* RIGHT */}
        <div className="block lg:flex items-center justify-center w-full lg:w-[70%] h-full">
          <div className="w-full flex items-center justify-center">
            {/* CONTENT */}
            <div className=" h-full lg:grid grid-cols-2 grid-rows-4 gap-4 w-full lg:p-10">
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
