"use client"

import Image from "next/image"
import Logo from '../../../public/logo (1).png'
import Link from "next/link"
import { useState } from "react"
import { FaBars, FaX } from "react-icons/fa6"

const NavBar = () => {

  const [isClick, setIsClick] = useState(false);

  const toggleNavBar = () => {
    setIsClick(!isClick)
  }


  return (
    <div className="fixed top-0 right-0 w-full z-[51] bg-black/10 backdrop-blur-sm py-4 sm:py-2 md:px-28 px-4">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center md:gap-4 text-white font-bold text-xl md:text-2xl">
            <Image src={Logo} alt="logo" height={50} width={50} />
            <span>TCJ-SPACE</span>
          </div>
          <div className="text-white">
            <ul className="md:flex md:items-center gap-3 md:gap-7 text-lg md:text-xl py-4 sm:py-0 hidden">
              <Link href='/'><li>Home</li></Link>
              <Link href='/tech'><li>Technology</li></Link>
              <Link href='/galaxy'><li>Galaxy</li></Link>
              <Link href='/satelite'><li>Satelite</li></Link>
              <Link href='/about'><li>About</li></Link>
            </ul>
          </div>

          <div>
            <Link href='/login'> <button className="text-white border-2 border-white px-3 py-1 rounded hidden md:flex">Login</button> </Link>
          </div>



          <div className="md:hidden">
            <div className="text-2xl text-white" onClick={toggleNavBar}>

              {isClick ? (
               <FaX />
              ) : <FaBars />

              }

              {isClick && (
                <div className="md:hidden">
                  <div className="absolute mt-8 right-1 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 px-4 py-3 rounded-md">
                    <ul>
                      <Link href='/'><li>Home</li></Link>
                      <Link href='/tech'><li>Technology</li></Link>
                      <Link href='/galaxy'><li>Galaxy</li></Link>
                      <Link href='/satelite'><li>Satelite</li></Link>
                      <Link href='/about'><li>About</li></Link>
                      <Link href='/login'><li>Login</li></Link>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default NavBar