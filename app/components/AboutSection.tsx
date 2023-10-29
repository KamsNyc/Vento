import React from "react";
import SectionHeading from "./SectionHeading";

function AboutSection() {
  return (
    <section className="max-h-[961px] md:max-h-[528px] w-full ">
      {/* HEADING CONTAINER*/}
      <div className="flex items-center justify-between gap-8 pt-[52px]">
        {/* HEADING */}
        <h3 className="font-medium text-[44px] leading-[55px] flex-shrink-0 pl-4 md:pl-[138px]">
          About us
        </h3>
        {/* LINE */}
        <div className="w-[85%]">
          <div className="w-full h-[4px] bg-[#1A63BB]" />
        </div>
      </div>

      {/* SPLIT SECTION */}
      <div className=" px-4 xl:px-[138px] block md:flex items-center justify-between my-[41px] lg:py-0 md:gap-[80px] lg:my-[64px]">
        {/* LEFT */}
        <div className="block lg:flex text-left w-full lg:w-1/2 h-full text-[#4E4E4E] text-[20.38px] font-[300] leading-[24px] max-h-[392px]lg:max-h-[252px] mb-[38px] md:mb-0">
        Welcome to VentoHVAC, where we recognize that renovation projects and custom homes demand HVAC design solutions tailored to their distinctive requirements. Our team of skilled designers and technicians specializes in creating HVAC designs specifically for renovations and custom homes, boasting comprehensive expertise in the latest technologies and trends. Our commitment lies in crafting systems that are not only efficient, cost-effective, and sustainable but also prioritizing optimal comfort and indoor air quality for your home.
        </div>
        {/* RIGHT */}
        <div className="block lg:flex items-center justify-center w-full lg:w-1/2 h-full">
              <div className="w-full flex items-center justify-center">

            <img src="/AboutImg.png" alt="about image" className=" object-cover w-full max-w-[430px] max-h-[317px] " />
            </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
