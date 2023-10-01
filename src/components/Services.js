"use client";

import React from "react";

const serviceItems = [
  {
    imgSrc: "job-match-ai-pic.png",
    imgAlt: "Job Match AI",
    title: "Job Match AI",
    description:
      "Get personalized job recommendations that match your job title, skills, and experience.",
    buttonText: "Learn More",
  },
  {
    imgSrc: "cv-builder-pic.png",
    imgAlt: "CV Builder",
    title: "CV Builder",
    description:
      "JobSync offers you the CV/Resume Builder that creates CVs that make you stand out from the crowd.",
    buttonText: "See Templates",
  },
  {
    imgSrc: "personalized-cover-letter-pic.png",
    imgAlt: "Personalized Cover Letter",
    title: "Personalized Cover Letter",
    description:
      "JobSync creates personalized cover letters using the job description and your skills to make it unique.",
    buttonText: "See Templates",
  },
  {
    imgSrc: "short-courses-pic.png",
    imgAlt: "Short Courses",
    title: "Short Courses",
    description:
      "Take recommended courses sourced from career growth platforms to level up your skills.",
    buttonText: "Learn More",
  },
];

const Services = () => {
  return (
    <div
      id="services"
      className="flex flex-col justify-center items-center font-Montserrat px-8 xl:px-[250px] 2xl:px-[450px]">
      <h2 className="text-center text-slate-900 text-2xl sm:text-3xl font-bold py-[100px]">
        Our Comprehensive Range of Services
      </h2>
      {serviceItems.map((item, index) => (
        <div
          key={index}
          className={`flex items-center gap-x-[220px] gap-y-[30px] lg:gap-y-[30px] mb-[120px] flex-col ${
            index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}>
          <img
            src={item.imgSrc}
            alt={item.imgAlt}
            className="w-[180px] h-[190px] sm:w-[280px] sm:h-[290px] md:w-[322px] md:h-[322px] lg:w-[422px] lg:h-[425px]"
          />
          <div className="flex flex-col items-center">
            <h3 className="text-center text-black text-xl font-bold mb-[8px]">
              {item.title}
            </h3>
            <p className="text-center text-zinc-800 text-base font-medium mb-[24px]">
              {item.description}
            </p>
            <button className="w-60 h-[60px] px-10 py-5 rounded-[10px] border border-[#54B5E6] flex justify-center items-center gap-2.5 text-[#54B5E6] text-base font-semibold">
              {item.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
