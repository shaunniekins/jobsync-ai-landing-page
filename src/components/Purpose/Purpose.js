const Purpose = () => {
  return (
    <div
      id="purpose"
      className="bg-green-500 w-screen flex flex-col items-center font-Montserrat px-8 xl:px-[450px]">
      <h5 className="text-slate-900 text-3xl sm:text-4xl font-bold mt-8 sm:mt-16 text-center">
        What we do
      </h5>
      <div className="flex flex-col lg:flex-row items-center my-8 sm:my-16 gap-y-8 lg:gap-y-0 gap-x-[131px]">
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
          className="w-full max-w-md h-auto sm:w-full sm:max-w-[513px] sm:h-auto lg:max-w-none lg:w-auto lg:h-auto"
          src="ladder.png"
          alt="Ladder"
        />
      </div>
    </div>
  );
};

export default Purpose;
