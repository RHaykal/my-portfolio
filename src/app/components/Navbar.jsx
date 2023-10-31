"use client";
import Link from 'next/link'
import React, {useState} from 'react'
import Navlink from './Navlink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    }
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-8 py-6'>
            <Link href={"/"} className='text-2xl md:text-3xl  text-white font-semibold'>{`</>`}</Link>
            <div className="mobile-menu block md:hidden">
                { !navbarOpen ? (
                    <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 text-slate-200 hover:text-white hover:border hover:rounded hover:border-white">
                        <Bars3Icon className="h-5 w-5" />
                    </button>
                ) : (
                    <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 hover:border hover:rounded text-slate-200 hover:text-white hover:border-white">
                        <XMarkIcon className="w-5 h-5" />
                    </button>
                )}
            </div>
            <div className="menu hidden md:block md:w-auto" id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {
                        navLinks.map((link, index) => (
                            <li key={index} className="hover:border-b hover:border-cyan-500">
                                <Navlink href={link.path} title={link.title}></Navlink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        { navbarOpen ? <MenuOverlay links={navLinks}/> : null}
    </nav>
  )
}

export default Navbar;