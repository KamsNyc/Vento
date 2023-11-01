import Image from 'next/image'
import React from 'react'

function HeroSection() {
  return (
    <section className="h-[609px] lg:h-[548px] overflow-hidden w-full relative">
    {/* HERO IMAGE */}
    <div className="bg-white/80 absolute top-0 w-full h-[609px] lg:h-[548px]" />
    <Image
      src={"/HeroBg.png"}
      alt="Vento Hero Background"
      width={1440}
      height={609}
      className="w-full h-full object-cover"
    />

    {/* HERO CONTEXT */}
    <div className="absolute inset-0 flex flex-col items-center justify-center lg:items-start lg:text-left lg:justify-center lg:pl-[137px] ">
      
      <h1 className="text-[44px] font-medium leading-[55px] px-[30px] lg:px-0 lg:max-w-[700px] lg:leading-[78px] lg:text-[61px]">Expert HVAC Design for a <span className="text-[#1A63BB]">Comfortable</span> and <span className="text-[#1A63BB]">Sustainable Home</span></h1>
    </div>
  </section>
  )
}

export default HeroSection
