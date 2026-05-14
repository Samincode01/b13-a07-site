'use client'
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation'
import { IoHomeOutline } from 'react-icons/io5';
import { CiClock2 } from 'react-icons/ci';
import { GoGraph } from 'react-icons/go';

const NavBar = () => {
    const pathname = usePathname()

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm py-4 px-4 sm:px-6 md:px-10 lg:px-20">
                
                <div className="navbar-start">
                    <Link href="/" className="btn btn-ghost text-xl gap-0 px-0">
                        <span className='font-extrabold text-[#1F2937] text-xl sm:text-2xl'>
                            Keen
                        </span>
                        <span className='font-semibold text-[#244D3F] text-xl sm:text-2xl'>
                            Keeper
                        </span>
                    </Link>
                </div>

                <div className="navbar-end gap-1 sm:gap-2 flex-wrap">
                    
                    <Link href='/'>
                        <button
                            className={`font-semibold text-[14px] sm:text-[16px] btn btn-sm md:btn-md lg:btn-lg ${
                                pathname === '/'
                                    ? 'bg-[#244D3F] text-white'
                                    : 'bg-white text-[#244D3F]'
                            }`}
                        >
                            <IoHomeOutline /> Home
                        </button>
                    </Link>

                    <Link href='/timeline'>
                        <button
                            className={`font-semibold text-[14px] sm:text-[16px] btn btn-sm md:btn-md lg:btn-lg ${
                                pathname === '/timeline'
                                    ? 'bg-[#244D3F] text-white'
                                    : 'bg-white text-[#244D3F]'
                            }`}
                        >
                            <CiClock2 /> Timeline
                        </button>
                    </Link>

                    <Link href='/stats'>
                        <button
                            className={`font-semibold text-[14px] sm:text-[16px] btn btn-sm md:btn-md lg:btn-lg ${
                                pathname === '/stats'
                                    ? 'bg-[#244D3F] text-white'
                                    : 'bg-white text-[#244D3F]'
                            }`}
                        >
                            <GoGraph /> Stats
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default NavBar;