import Link from 'next/link'
import React from 'react'
import {FaFacebook, FaGithub, FaLinkedin, FaLocationDot, FaMessage, FaPhone } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='min-h-[400px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white px-3'>
      <section className='max-w-full mx-auto text-white'>
        <div className='grid md:grid-cols-3 py-5'>
          {/* 1st col */}
          <div className='py-8 px-4'>
            <h3 className='capitalize text-xl sm:text-3xl font-bold sm:tetx-left text-justify mb-3'>Be ready to grow</h3>
            <p>Get Exclusive <span className='font-bold'>Update</span> straight to your inbox</p>
            <br />
            <div className='flex items-center h-10'>
              <input type="text" className='py-1 px-3 w-full h-100% inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-800  border-gray-200 border-2 rounded' placeholder='Enter email'/>
              <button className='bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200 ml-2'>OK</button>
            </div>
          </div>

          {/* 2nd col */}

          <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
            <div>
              <div className='py-8 px-4'>
                <h3 className='text-xl font-bold mb-3 sm:text-3xl'>Quick Links</h3>
                <ul className='flex flex-col gap-3'>
                  <li>
                    <Link href="/">Home</Link>
                  </li>

                  <li>
                    <Link href="/about">About</Link>
                  </li>

                  <li>
                    <Link href="/contact">Contact us</Link>
                  </li>

                  <li>
                    <Link href="/login">Login</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className='py-8 px-4'>
                <h3 className='text-xl font-bold mb-3 sm:text-3xl'>Quick Links</h3>
                <ul className='flex flex-col gap-3'>
                  <li>
                    <Link href="/">Home</Link>
                  </li>

                  <li>
                    <Link href="/about">About</Link>
                  </li>

                  <li>
                    <Link href="/contact">Contact us</Link>
                  </li>

                  <li>
                    <Link href="/login">Login</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-span-3 md:col-auto'>
              <div className='py-8 px-4'>
                <h3 className='text-xl font-bold mb-3 sm:text-3xl'>Conatct us</h3>
              </div>
              <div className='space-y-3'>
                <div className='flex items-center gap-2'>
                  <FaLocationDot/>
                  <p>Karachi, Pakistan</p>
                </div>

                <div className='flex items-center gap-3 mt-3'>
                  <FaMessage/>
                  <p>mparvezalam1978@gmail.com</p>
                </div>

                <div className='flex items-center gap-3 mt-3'>
                  <FaPhone/>
                  <p>+92 324-8184287</p>
                </div>
              </div>
            </div>

          </div>
            </div>

          {/* Bottom section */}

          <div className='hidden sm:block'>
            <div className='flex justify-between items-center border-t-2 border-gray-400 py-6'>     
            <span className='text-sm text-gray-400 font-serif'>
              copyright &copy; 2024 by TCJ
            </span>
            <div className='flex justify-center items-center gap-4 pb-4'>
              <Link href='/login'>
              <FaLinkedin className='text-4xl'/>
              </Link>

              <Link href='/login'>
              <FaGithub className='text-4xl'/>
              </Link>

              <Link href='/login'>
              <FaFacebook className='text-4xl'/>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer