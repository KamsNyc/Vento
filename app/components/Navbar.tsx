import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"


function Navbar() {
  return (
    <section className='h-16 bg-[#1A63BB]  hidden md:flex items-center justify-between px-[138px]'>
        {/* LOGO */}
        <Image
        src={'/VentoLogo.svg'}
        alt='Vento Logo'
        width={118}
        height={28}
        className=''
        />

        {/* MENU LINKS */}
        <ul className='flex items-center gap-14 text-white'>
            <Link href={'#about'}>About Us</Link>
            <Link href={'#services'}>Services</Link>
            <Link href={'#contact'}><Button variant="outline" size={'sm'} className='text-[#1A63BB]'>Contact</Button></Link> 
        </ul>

    </section>
  )
}

export default Navbar
