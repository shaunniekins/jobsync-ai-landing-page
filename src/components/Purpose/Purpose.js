const Purpose = () => {
  return (
    <div className="bg-white flex flex-col items-center font-Montserrat">
      <h5 className="text-slate-900 text-3xl sm:text-4xl font-bold mt-8 sm:mt-16">
        What we do
      </h5>
      {/* <div className="flex justify-between items-center my-[92px] gap-x-[131px] px-[202px]"> */}
      <div className="flex flex-col sm:flex-row justify-center items-center my-8 sm:my-16 gap-y-8 sm:gap-y-0 gap-x-0 sm:gap-x-[131px] px-[50px] sm:px-[202px]">
        <div className="flex flex-col">
          <div className="text-slate-900 text-xl sm:text-2xl font-bold mb-4">
            Unveiling Our Purpose
          </div>
          <div className="text-zinc-800 text-base sm:text-lg font-normal leading-normal">
            We are dedicated to creating a seamless synergy between job seekers
            and AI, empowering individuals to effortlessly find their ideal
            jobs. By harnessing the power of data and leveraging advanced
            algorithms, we strive to revolutionize the employment landscape,
            offering a range of services that make it easier than ever for job
            hunters to discover tailored opportunities.
          </div>
        </div>
        {/* <img className="w-[513px] h-[391px]" src="ladder.png" alt="Ladder" /> */}
        <img
          className="w-full max-w-md h-auto sm:w-[513px] sm:h-[391px]"
          src="ladder.png"
          alt="Ladder"
        />
      </div>
    </div>
  );
};

export default Purpose;
