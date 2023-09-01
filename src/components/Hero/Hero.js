"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  const url = "./images/professional-lady.png";
  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(90deg, #061624 0%, rgba(6, 22, 36, 0.92) 46.88%, rgba(6, 22, 36, 0.42) 78.13%, rgba(6, 22, 36, 0.00) 100%), url('https://bedrocksolicitors.co.uk/wp-content/uploads/2021/07/lady-small.jpg')`,
  };
  return (
    <div
      className="font-Montserrat text-[700] font-[700] flex flex-col md:flex-row w-screen"
      style={backgroundImageStyle}>
      <div className="flex flex-col justify-center mt-[55px] md:mt-[105px] mb-[55px] md:mb-[185px] px-[30px] md:px-0 md:ml-[95px]">
        <p className="text-center md:text-left text-white text-3xl md:text-5xl font-bold leading-[1.4] md:leading-[57.60px] mb-4 md:mb-6">
          With the power of <br /> automation,{" "}
          <span className="text-[#54B5E6]">
            JOBSYNC <br />
          </span>
          doubles your chances <br />
          of securing interviews
        </p>
        <p className="text-center md:text-left text-white text-sm md:text-base font-normal mb-6 md:mb-10">
          Unlock your career potential with our AI-powered employment assistant,{" "}
          <br />
          guiding you towards success in the ever-evolving job market.
        </p>
        <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4">
          <button
            className="px-6 py-2 md:py-3 bg-[#54B5E6] rounded-[24px] text-white text-sm md:text-base font-semibold mb-1 md:mb-0"
            onClick={() => router.push("/signup")}>
            Create an account
          </button>
          <button className="px-6 py-2 md:py-3 bg-[#0C1C2A] rounded-[6px] border-[2px] border-[#54B5E6] text-[#54B5E6] text-sm md:text-base font-normal">
            Watch Demo Video
          </button>
        </div>
      </div>
      <div
        className="hidden md:block md:w-1/2 h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${url})` }}></div>
    </div>
  );
};

export default Hero;
