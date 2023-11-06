import { NavLinks } from '@/constatns'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  const session = {};
  return (
    <nav className='navbar'>
      <div className='navbar-item'></div>
      <div className='navbar-item'>
      <div className=''>
        <Link href="/">
          <Image
          src="/logo2.svg"
          width={350}
          height={25}
          alt="Flexibble"
          />
        </Link>
        
        <ul className='flex justify-center gap-2'>
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.text}>
              {link.text}
            </Link>
          ))}
        </ul>
        </div>
        </div>

        <div className='navbar-item '>
       
        
          <div >
           </div>
        
    
     
      
      </div>

    </nav>
  )
}

export default Navbar;
