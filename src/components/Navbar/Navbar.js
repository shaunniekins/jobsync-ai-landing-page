"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavItem = ({ text, active }) => (
  <div
    className={`justify-center items-center gap-2.5 flex ${
      active ? "text-white" : "text-[#9B9B9B]"
    }`}>
    <div className="text-base font-semibold">{text}</div>
  </div>
);

const Navbar = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="sticky top-0 z-40 w-screen px-6 md:px-24 pt-[18px] pb-3 bg-[#061624CC] bg-opacity-80 shadow backdrop-blur-[28px] justify-between items-center flex font-Montserrat">
      <img className="w-[71px] h-[73px]" src="jobsync-logo.svg" alt="Logo" />
      <div className="hidden sm:flex justify-center items-center gap-5">
        <NavItem text="Home" active={true} />
        <NavItem text="Services" />
        <NavItem text="About us" />
        <NavItem text="Contact Us" />
      </div>
      <div className="sm:hidden">
        <button
          className="px-6 py-2.5 bg-[#54B5E6] rounded-lg justify-start items-center gap-2.5 flex"
          onClick={toggleMobileMenu}>
          {!isMobileMenuOpen ? (
            <span className="text-white text-base font-normal">☰</span>
          ) : (
            <span className="text-white text-base font-normal">⨳</span>
          )}
        </button>
        {isMobileMenuOpen && (
          <div className="absolute top-[103px] left-0 w-screen bg-[#061624CC] shadow font-Montserrat">
            <div className="flex flex-col p-5 gap-5">
              <NavItem text="Home" active={true} />
              <NavItem text="Services" />
              <NavItem text="About us" />
              <NavItem text="Contact Us" />
            </div>
            {/* <button
              className="px-6 py-2.5 bg-[#54B5E6] rounded-lg justify-start items-center gap-2.5 flex"
              onClick={toggleMobileMenu}>
              <p className="text-white text-base font-normal">Close</p>
            </button> */}
          </div>
        )}
      </div>
      <div className="hidden sm:flex">
        {/* <Link href="/signin" className="self-center md:self-start"> */}
        <button
          className="px-6 py-2.5 bg-[#54B5E6] rounded-lg justify-start items-center gap-2.5 flex"
          onClick={() => router.push("/signin")}>
          <p className="text-white text-base font-normal">Log In</p>
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
