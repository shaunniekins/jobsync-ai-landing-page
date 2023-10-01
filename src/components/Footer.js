"use client";

import React from "react";
import {
  LogoFacebook,
  LogoInstagram,
  LogoTwitter,
  LogoYoutube,
  LogoLinkedin,
} from "react-ionicons";

const Footer = () => {
  return (
    <div className="w-screen bg-slate-900 px-8 lg:px-[200px] pt-[30px] 2xl:pt-[100px] pb-[20px] 2xl:pb-[50px] font-Montserrat">
      <div className="flex flex-col items-center 2xl:items-start gap-y-[20px] 2xl:gap-y-0">
        <img
          className="w-[60px] self-center 2xl:self-start"
          src="jobsync-logo.svg"
          alt="JobSync Logo"
        />
        <div className="self-center 2xl:self-end flex gap-[24px]">
          <LogoFacebook color="white" height="24px" width="24px" />
          <LogoInstagram color="white" height="24px" width="24px" />
          <LogoTwitter color="white" height="24px" width="24px" />
          <LogoYoutube color="white" height="24px" width="24px" />
          <LogoLinkedin color="white" height="24px" width="24px" />
        </div>
      </div>
      <hr className="border border-white border-opacity-50 mt-[20px] mb-[50px]" />
      <div className="flex flex-col 2xl:flex-row 2xl:justify-between gap-y-[30px] 2xl:gap-y-0">
        {renderColumn("Services", [
          "Job Match AI",
          "CV Builder",
          "Personalized Cover Letter",
          "Short Courses",
        ])}
        {renderColumn("About", ["What We Do", "Testimonials", "Blog", "FAQs"])}
        {renderColumn("Resources", [
          "Support",
          "Contact",
          "Manage Email References",
        ])}
        <div className="flex flex-col gap-y-[20px] lg:gap-y-[50px] items-center 2xl:items-start mt-[40px] 2xl:mt-0">
          <p className="text-white text-xl font-medium">
            Subscribe to our newsletter.
          </p>
          <form
            action=""
            className="flex flex-col 2xl:flex-row gap-y-[10px] 2xl:gap-y-0 2xl:gap-x-[25px] items-center 2xl:items-start">
            <input
              type="email"
              className="w-[250px] sm:w-[357.14px] h-[50px] flex rounded-[10px] border border-stone-300 text-stone-300 text-base font-normal outline-none pl-3 bg-transparent"
              placeholder="email@example.com"
              required
            />
            <button className="w-[169.05px] h-[50px] px-[30px] py-3.5 bg-[#54B5E6] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-[30px] md:mt-[110px]">
        <div className="flex justify-center 2xl:justify-start items-center gap-1 mb-3">
          <div className="text-white text-xs font-normal">
            © 2015 - {new Date().getFullYear()} JobSync®
          </div>
        </div>
        {renderLinks([
          "Terms of Use",
          "Privacy Policy",
          "Cookie settings",
          "Accessibility",
        ])}
      </div>
    </div>
  );
};

const renderColumn = (title, items) => (
  <div className="flex-col 2xl:justify-start items-center 2xl:items-start gap-y-[15px] 2xl:gap-y-[18px] flex">
    <h4 className="text-white text-lg font-bold text-center">{title}</h4>
    <div className="flex-col justify-center items-center 2xl:items-start gap-3 flex">
      {items.map((item, index) => (
        <p key={index} className="text-gray-200 text-sm font-normal">
          {item}
        </p>
      ))}
    </div>
  </div>
);

const renderLinks = (links) => (
  <div className="flex flex-col md:flex-row justify-start items-center gap-[22px]">
    {links.map((link, index) => (
      <div key={index} className="text-white text-xs font-normal">
        {link}
      </div>
    ))}
  </div>
);

export default Footer;
