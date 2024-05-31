'use client'

import Image from "next/image"
import logo from "../../public/logo.png"
import Link from "next/link"
import sc from "../../public/search.png"
import fb from "../../public/fb.png"
import ggl from "../../public/ggl.png"
import wa from "../../public/wa.png"

const Header = () => {
    return (
        <div className="w-full flex justify-center">
            <nav className="w-full bg-white px-40 h-24 flex gap-16 content-center items-center justify-center">
                <Image src={logo} alt="logo image" width={1440} height={672} 
                    className="m-4"
                />

                <button className="bg-[#14609D] p-2 rounded-full my-8 text-white flex items-center px-6">Home</button>
                <Link href="#" className="text-[#707070]">DEPARTMENT</Link>
                <Link href="#" className="text-[#707070]">FACILITIES</Link>
                <Link href="#" className="text-[#707070]">BLOGS</Link>
                <Link href="#" className="text-[#707070]">CAREERS</Link>
                
                <Image src={sc} alt="search icon" height={18} width={18} className="mr-10" />
                <Image src={fb} alt="facebook icon" height={18} width={18} />
                <Image src={ggl} alt="google icon" height={18} width={18} />
                <Image src={wa} alt="whatsapp icon" height={18} width={18} />

            </nav>
        </div>
    )
}

export default Header