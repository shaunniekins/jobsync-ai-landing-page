const Services = () => {
  return (
    <div className="bg-white flex flex-col justify-center items-center">
      <h2 className="text-center text-slate-900 text-2xl sm:text-3xl font-bold sm:mt-[100px] sm:mb-[100px]">
        Our Comprehensive Range of Services
      </h2>
      <div className="flex items-center gap-x-[220px] mb-[120px] flex-col md:flex-row">
        <img
          src="job-match-ai-pic.png"
          alt="Job Match Ai"
          className="w-[280px] h-[290px] sm:w-[415px] sm:h-[428px]"
        />
        <div className="flex flex-col items-center w-[390px]">
          <h3 className="text-center text-black text-xl font-bold mb-[8px]">
            Job Match AI
          </h3>
          <p className="text-center text-zinc-800 text-base font-medium mb-[24px]">
            Get personalized job recommendations that match your job title,
            skills and experience.
          </p>
          <button className="w-60 h-[60px] px-10 py-5 rounded-[10px] border border-[#54B5E6] flex justify-center items-center gap-2.5 text-[#54B5E6] text-base font-semibold">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex items-center gap-x-[220px] mb-[120px] flex-col md:flex-row">
        <div className="flex flex-col items-center w-[390px] order-2 md:order-1">
          <h3 className="text-center text-black text-xl font-bold mb-[8px]">
            CV Builder
          </h3>
          <p className="text-center text-zinc-800 text-base font-medium mb-[24px]">
            JobSync offers you the CV/Resume Builder that creates CVs that make
            you stand out from the crowd.
          </p>
          <button className="w-60 h-[60px] px-10 py-5 rounded-[10px] border border-[#54B5E6] flex justify-center items-center gap-2.5 text-[#54B5E6] text-base font-semibold">
            See Templates
          </button>
        </div>
        <img
          src="cv-builder-pic.png"
          alt="CV Builder"
          className="w-[280px] h-[290px] sm:w-[415px] sm:h-[428px] order-1 md:order-2"
        />
      </div>
      <div className="flex items-center gap-x-[220px] mb-[120px] flex-col md:flex-row">
        <img
          src="personalized-cover-letter-pic.png"
          alt="Personalized Cover Letter"
          className="w-[280px] h-[290px] sm:w-[415px] sm:h-[428px]"
        />
        <div className="flex flex-col items-center w-[390px]">
          <h3 className="text-center text-black text-xl font-bold mb-[8px]">
            Personalized Cover Letter
          </h3>
          <p className="text-center text-zinc-800 text-base font-medium mb-[24px]">
            JobSync creates personalized cover letter using the job description
            and your skills to make it you unique.
          </p>
          <button className="w-60 h-[60px] px-10 py-5 rounded-[10px] border border-[#54B5E6] flex justify-center items-center gap-2.5 text-[#54B5E6] text-base font-semibold">
            See Templates
          </button>
        </div>
      </div>
      <div className="flex items-center gap-x-[220px] flex-col md:flex-row">
        <div className="flex flex-col items-center w-[390px] order-2 md:order-1">
          <h3 className="text-center text-black text-xl font-bold mb-[8px]">
            Short Courses
          </h3>
          <p className="text-center text-zinc-800 text-base font-medium mb-[24px]">
            Take recommended courses sourced from career growth platforms in
            order to level up your skills.
          </p>
          <button className="w-60 h-[60px] px-10 py-5 rounded-[10px] border border-[#54B5E6] flex justify-center items-center gap-2.5 text-[#54B5E6] text-base font-semibold">
            Learn More
          </button>
        </div>
        <img
          src="short-courses-pic.png"
          alt="Short Courses"
          className="w-[280px] h-[290px] sm:w-[415px] sm:h-[428px] order-1 md:order-2"
        />
      </div>
    </div>
  );
};

export default Services;
