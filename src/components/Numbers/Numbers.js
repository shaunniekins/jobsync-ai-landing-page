const NumItem = ({ stat, desc }) => (
  <div className="flex flex-col justify-center">
    <h1 className="text-center text-slate-900 text-[20px] sm:text-[30px] lg:text-[40px] font-bold">
      {stat}
    </h1>
    <h2 className="text-center text-slate-900 text-xs sm:text-lg md:text-2xl font-medium">
      {desc}
    </h2>
  </div>
);

const Numbers = () => {
  return (
    <div className="bg-white px-6 md:px-24 py-[10px] md:py-[50px] justify-around flex space-x-[10px] md:space-x-[102px] lg:space-x-[262px]">
      <NumItem stat="100k+" desc="Users Interviewed" />
      <NumItem stat="40K+" desc="Users Found Jobs" />
      <NumItem stat="50K+" desc="Jobs Recommended" />
    </div>
  );
};

export default Numbers;
