import Image from 'next/image'
import React from 'react'

function MNavbar() {
  return (
    <section className='h-14 bg-[#1A63BB] flex items-center justify-center md:hidden'>
        <Image
        src={'/VentoLogo.svg'}
        alt='Vento Logo'
        width={118}
        height={28}
        className=''
        />
    </section>
  )
}

export default MNavbar
