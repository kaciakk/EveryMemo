import React from 'react'
import Image from 'next/image'
import { footerLinks } from '@/constatns'
import Link from 'next/link'
type ColumnProps = {
    title: string;
    links: Array<string>;
}
const FooterColumn = ({ title, links }: ColumnProps) => (
    <div className="footer_column">
        <h4 className="font-semibold">{title}</h4>
        <ul className="flex flex-col gap-2 font-normal"> {links.map((link) =>
        <Link href='/' key={link}>{link}</Link>)}
         </ul>
    </div>
)
const Footer = () => {
  return (
    <footer className='flex justify-center items-center'>
        
        <div className='flex flex-col gap-10  '>
        <div className='flex flex-col justify-center items-center '> 
       
        <Image
          src="/004.svg"
          width={350}
          height={25}
          alt="Flexibble"
          />
          <p className = "text-start text-sm font-normal">OCZY KOTA ZERKAJĄ CO TAM PISZESZ</p>
        </div> 
        <div className='flex flex-wrap gap-12'>
            <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />
            <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links} />
            <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links} />
            <div className='flex flex-wrap gap-12'>

            </div>
           
        </div>
        <div className='flex '>
            <p>@ 2023 Copyright EverKaciakMemo xd</p>
            <p className="text-gray-800"> </p>
        </div>
        </div>
        
     </footer>
     
       

     
  )
}

export default Footer