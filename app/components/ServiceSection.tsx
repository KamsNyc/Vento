import React from "react";
import SectionHeading from "./SectionHeading";
import Image from "next/image";

function ServiceSection() {
  return (
    <section id="services" className="max-h-[1327px] md:max-h-[411px] w-full ">
      {/* HEADING CONTAINER*/}
      <div className="flex items-center justify-between gap-8 pt-[52px]">
        {/* HEADING */}
        <h3 className="font-medium text-[44px] leading-[55px] flex-shrink-0 pl-4 md:pl-[138px]">
          Services
        </h3>
        {/* LINE */}
        <div className="w-[85%]">
          <div className="w-full h-[4px] bg-[#1A63BB]" />
        </div>
      </div>

      {/* SPLIT SECTION */}
      <div className=" px-4 lg:px-[138px] my-[41px] lg:py-0 lg:my-[64px] grid md:grid-cols-4 gap-y-20 h-full">
        {/* COL 1 */}
        <div className="flex-[25%] flex items-center justify-center">
            <div className="text-center">
          {/* ICON */}
          <div className="flex items-center justify-center pb-[20px]">
          <Image
            src={"/Sun.png"}
            alt="sun service image"
            width={80}
            height={80}
            className="flex items-center justify-center"
          />
          </div>
          {/* DESCRIPTION */}
          <p className="text-[15px] leading-[20px] font-[300] px-24 md:px-2">Residential Heat Loss & Gain Calculations</p>
          </div>
        </div>
        {/* COL 2 */}
        <div className="flex-[25%] flex items-center justify-center">
            <div className="text-center">
          {/* ICON */}
          <div className="flex items-center justify-center pb-[20px]">
          <Image
            src={"/Building.png"}
            alt="building service image"
            width={90}
            height={80}
            className="flex items-center justify-center"
          />
          </div>
          {/* DESCRIPTION */}
          <p className="text-[15px] leading-[20px] font-[300] px-24 md:px-2">Residential Air System Design</p>
          </div>
        </div>
        {/* COL 3 */}
        <div className="flex-[25%] flex items-center justify-center">
            <div className="text-center">
          {/* ICON */}
          <div className="flex items-center justify-center pb-[20px]">
          <Image
            src={"/Cool.png"}
            alt="cool service image"
            width={70}
            height={80}
            className="flex items-center justify-center"
          />
          </div>
          {/* DESCRIPTION */}
          <p className="text-[15px] leading-[20px] font-[300] px-24 md:px-2">Residential Mechanical Ventilation Design</p>
          </div>
        </div>
        {/* COL 4 */}
        <div className="flex-[25%] flex items-center justify-center">
            <div className="text-center">
          {/* ICON */}
          <div className="flex items-center justify-center pb-[20px]">
          <Image
            src={"/Energy.png"}
            alt="energy service image"
            width={80}
            height={80}
            className="flex items-center justify-center"
          />
          </div>
          {/* DESCRIPTION */}
          <p className="text-[15px] leading-[20px] font-[300] px-24 md:px-2">Energy Efficiency Design Summary  </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ServiceSection;
