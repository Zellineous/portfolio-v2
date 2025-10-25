"use client";
import React from 'react'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }
    
  return (
    <div className="bg-black-100">
        <nav className="flex flex-row justify-between max-w-5xl mx-auto px-4 py-3 sm:px-6">
            <Link href="/">Raymond Zuo</Link> 
            <div className="hidden sm:flex">
                <ul className="hidden sm:flex flex-row gap-6">
                <Link href="#Projects-section"><li>Projects</li></Link>
                <Link href="#About-section"><li>About</li></Link>
                <Link href="#Contact-section"><li>Contact</li></Link>
                </ul>
            </div>
            <div onClick={handleNav} className="sm:md:hidden cursor-pointer pl-24">
                <AiOutlineMenu size={25} />
            </div>
            <div className={
                menuOpen ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#1D1D1D] p-10 ease-in duration-500 z-50"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500 z-50"
            }
            >
                <div className="flex w-full items-center justify-end">
                    <div onClick={handleNav} className="cursor-pointer">
                        <AiOutlineClose size={25} />
                    </div>
                </div>
                <ul className="flex-col py-4">
                <Link href="#Projects-section"><li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">Projects</li></Link>
                <Link href="#About-section"><li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">About</li></Link>
                <Link href="#Contact-section"><li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">Contact</li></Link>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar