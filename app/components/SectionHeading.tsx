import React from 'react'

function SectionHeading() {
  return (
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
  )
}

export default SectionHeading
