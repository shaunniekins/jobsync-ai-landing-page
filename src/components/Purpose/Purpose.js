"use client";

import React from "react";

const Purpose = () => {
  return (
    <div
      id="purpose"
      className="w-screen flex flex-col justify-center items-center font-Montserrat px-8 xl:px-[250px] 2xl:px-[450px]">
      <h5 className="text-slate-900 text-3xl sm:text-4xl font-bold mt-8 sm:mt-16 text-center">
        What we do
      </h5>
      <div className="flex flex-col 2xl:flex-row items-center justify-between my-8 sm:my-16 gap-y-8 2xl:gap-y-0 2xl:gap-x-[131px]">
        <div className="flex flex-col text-center lg:text-left">
          <div className="text-slate-900 text-xl sm:text-2xl font-bold mb-4">
            Unveiling Our Purpose
          </div>
          <div className="text-zinc-800 text-base sm:text-[16px] font-normal leading-normal">
            We are dedicated to creating a seamless synergy between job seekers
            and AI, empowering individuals to effortlessly find their ideal
            jobs. By harnessing the power of data and leveraging advanced
            algorithms, we strive to revolutionize the employment landscape,
            offering a range of services that make it easier than ever for job
            hunters to discover tailored opportunities.
          </div>
        </div>
        <img
          className="max-w-full h-auto rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
          src="ladder.png"
          alt="Ladder"
        />
      </div>
    </div>
  );
};

export default Purpose;
