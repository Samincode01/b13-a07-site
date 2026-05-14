"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import { IoHomeOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { GoGraph } from "react-icons/go";

const NavBar = () => {
  const pathname = usePathname();

  const navBtnClass = (path) =>
    `font-semibold text-sm sm:text-[15px] rounded-xl border transition-all duration-200 btn btn-sm sm:btn-md ${
      pathname === path
        ? "bg-[#244D3F] border-[#244D3F] text-white hover:bg-[#1D4034]"
        : "bg-white border-[#D1D5DB] text-[#244D3F] hover:bg-[#F8FAFC]"
    }`;

  return (
    <div className="sticky top-0 z-50 bg-[#F8FAFC]/80 backdrop-blur-md border-b border-[#E5E7EB]">
      
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        
        <div className="navbar-start">
          <Link href="/" className="flex items-center">
            <span className="font-extrabold text-[#1F2937] text-2xl sm:text-3xl">
              Keen
            </span>

            <span className="font-semibold text-[#244D3F] text-2xl sm:text-3xl">
              Keeper
            </span>
          </Link>
        </div>

        <div className="navbar-end">
          
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-end">
            
            <Link href="/">
              <button className={navBtnClass("/")}>
                <IoHomeOutline className="text-lg" />
                <span className="hidden sm:inline">Home</span>
              </button>
            </Link>

            <Link href="/timeline">
              <button className={navBtnClass("/timeline")}>
                <CiClock2 className="text-lg" />
                <span className="hidden sm:inline">Timeline</span>
              </button>
            </Link>

            <Link href="/stats">
              <button className={navBtnClass("/stats")}>
                <GoGraph className="text-lg" />
                <span className="hidden sm:inline">Stats</span>
              </button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;