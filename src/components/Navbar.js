"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LoadingScreenFullScreen, LoadingScreenSection } from "./LoadingScreen";

const NavItem = ({ text, active, onClick }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer justify-center items-center gap-2.5 flex ${
      active ? "text-white hover:text-white" : "text-[#9B9B9B]"
    } hover:text-gray-600`}>
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
  const [loading, setLoading] = useState(false);

  const [activeSection, setActiveSection] = useState("hero");

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroSection = document.getElementById("hero");
      const servicesSection = document.getElementById("services");
      const aboutSection = document.getElementById("purpose");
      const contactSection = document.getElementById("contact");

      if (
        scrollY >= heroSection.offsetTop &&
        scrollY < servicesSection.offsetTop
      ) {
        setActiveSection("hero");
      } else if (
        scrollY >= servicesSection.offsetTop &&
        scrollY < aboutSection.offsetTop
      ) {
        setActiveSection("services");
      } else if (
        scrollY >= aboutSection.offsetTop &&
        scrollY < contactSection.offsetTop
      ) {
        setActiveSection("purpose");
      } else if (scrollY >= contactSection.offsetTop) {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {loading && <LoadingScreenFullScreen />}
      <div className="sticky top-0 z-40 px-8 lg:px-[200px] pt-[8px] pb-2 md:pt-[18px] md:pb-3 bg-[#061624CC] bg-opacity-80 shadow backdrop-blur-[28px] justify-between items-center flex font-Montserrat select-none">
        <img
          className="w-[60px] h-[62px] md:w-[71px] md:h-[73px]"
          src="jobsync-logo.svg"
          alt="Logo"
        />
        <div className="hidden sm:flex justify-center items-center space-x-12">
          <NavItem
            text="Home"
            active={activeSection === "hero"}
            onClick={() => handleScrollToSection("hero")}
          />
          <NavItem
            text="Services"
            active={activeSection === "services"}
            onClick={() => handleScrollToSection("services")}
          />
          <NavItem
            text="About us"
            active={activeSection === "purpose"}
            onClick={() => handleScrollToSection("purpose")}
          />
          <NavItem
            text="Contact Us"
            active={activeSection === "contact"}
            onClick={() => handleScrollToSection("contact")}
          />
        </div>
        <div className="sm:hidden">
          <button
            className="px-4 py-1.5 md:px-6 md:py-2.5 bg-[#54B5E6] rounded-lg justify-start items-center gap-2.5 flex"
            onClick={toggleMobileMenu}>
            {!isMobileMenuOpen ? (
              <span className="text-white text-base font-normal">☰</span>
            ) : (
              <span className="text-white text-base font-normal">X</span>
            )}
          </button>
          {isMobileMenuOpen && (
            <div className="absolute top-[78px] left-0 bg-[#061624CC] shadow font-Montserrat w-full">
              <div className="flex flex-col p-5 gap-5">
                <NavItem
                  text="Home"
                  active={activeSection === "hero"}
                  onClick={() => handleScrollToSection("hero")}
                />
                <NavItem
                  text="Services"
                  active={activeSection === "services"}
                  onClick={() => handleScrollToSection("services")}
                />
                <NavItem
                  text="About us"
                  active={activeSection === "purpose"}
                  onClick={() => handleScrollToSection("purpose")}
                />
                <NavItem
                  text="Contact Us"
                  active={activeSection === "contact"}
                  onClick={() => handleScrollToSection("contact")}
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
            onClick={() => {
              setLoading(true);
              router.push("/signin");
            }}>
            <p className="text-white text-base font-normal">Log In</p>
          </button>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
