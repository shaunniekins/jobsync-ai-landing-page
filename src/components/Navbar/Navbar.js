"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const NavItem = ({ text, active, onClick }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer justify-center items-center gap-2.5 flex ${
      active ? "text-white" : "text-[#9B9B9B]"
    }`}>
    <div className="text-base font-semibold">{text}</div>
  </div>
);

const Navbar = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHero, setIsHero] = useState(true);
  const [isServices, setIsServices] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [isContact, setIsContact] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }

    if (sectionId === "hero") {
      setIsHero(true);
      setIsServices(false);
      setIsAbout(false);
      setIsContact(false);
    }

    if (sectionId === "services") {
      setIsHero(false);
      setIsServices(true);
      setIsAbout(false);
      setIsContact(false);
    }

    if (sectionId === "purpose") {
      setIsHero(false);
      setIsServices(false);
      setIsAbout(true);
      setIsContact(false);
    }

    if (sectionId === "contact") {
      setIsHero(false);
      setIsServices(false);
      setIsAbout(false);
      setIsContact(true);
    }
    toggleMobileMenu();
  };

  return (
    <div className="sticky top-0 z-40 w-screen px-8 lg:px-[200px] pt-[18px] pb-3 bg-[#061624CC] bg-opacity-80 shadow backdrop-blur-[28px] justify-between items-center flex font-Montserrat">
      <img className="w-[71px] h-[73px]" src="jobsync-logo.svg" alt="Logo" />
      <div className="hidden sm:flex justify-center items-center gap-5">
        <NavItem
          text="Home"
          active={isHero}
          onClick={() => {
            handleScrollToSection("hero");
          }}
        />
        <NavItem
          text="Services"
          active={isServices}
          onClick={() => {
            handleScrollToSection("services");
          }}
        />
        <NavItem
          text="About us"
          active={isAbout}
          onClick={() => {
            handleScrollToSection("purpose");
          }}
        />
        <NavItem
          text="Contact Us"
          active={isContact}
          onClick={() => {
            handleScrollToSection("contact");
          }}
        />
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
              <NavItem
                text="Home"
                active={isHero}
                onClick={() => {
                  handleScrollToSection("hero");
                }}
              />
              <NavItem
                text="Services"
                active={isServices}
                onClick={() => {
                  handleScrollToSection("services");
                }}
              />
              <NavItem
                text="About us"
                active={isAbout}
                onClick={() => {
                  handleScrollToSection("purpose");
                }}
              />
              <NavItem
                text="Contact Us"
                active={isContact}
                onClick={() => {
                  handleScrollToSection("contact");
                }}
              />
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
