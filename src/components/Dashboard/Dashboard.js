const FeatureItem = ({ text }) => (
  <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-3">
    <img src="checkbox.svg" alt="Checkbox" className="w-8" />
    <p className="text-center text-zinc-800 text-opacity-90 text-base font-medium">
      {text}
    </p>
  </div>
);

const Dashboard = () => {
  return (
    <div className="w-screen font-Montserrat">
      <div className="mt-8 sm:mt-16 text-center">
        <span className="text-[#44B5C1] text-3xl sm:text-4xl font-bold">
          Our
        </span>
        <span className="text-slate-900 text-3xl sm:text-4xl font-bold">
          {" "}
          Dashboard
        </span>
      </div>
      <div className="mt-4 sm:mt-8 text-center text-zinc-800 text-[16px] font-medium leading-snug mb-8 sm:mb-16 px-8 xl:px-[250px] 2xl:px-[450px]">
        The dashboard serves as the central hub within the Platform, providing
        users with a comprehensive overview and easy access to the platform's
        key features and functionalities. Designed with a user-centric approach,
        the dashboard offers a streamlined and intuitive interface that allows
        users to navigate and manage their employment journey effectively.
      </div>
      <div className="flex bg-[#F7F7F7] flex-col xl:flex-row justify-between items-center py-[82px] px-8 xl:px-[250px] 2xl:px-[450px]">
        <img
          className="max-w-full h-auto rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
          src="laptop.png"
          alt="Laptop"
        />
        <div className="flex flex-col justify-center items-center sm:items-start gap-6 xl:px-6 pt-8 xl:pt-0">
          <FeatureItem text="Job Filtering" />
          <FeatureItem text="Personalized job search" />
          <FeatureItem text="Auto apply" />
          <FeatureItem text="Organized search" />
          <FeatureItem text="Short courses recommendation" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
