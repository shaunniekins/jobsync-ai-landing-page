const Testimonial = ({ content, customerImage, customerName, rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <img key={index} className="w-4 h-4" src="star.svg" alt="Star" />
  ));

  return (
    <div className="px-[20px] md:px-[30px] py-[10px] md:py-[40px] bg-white rounded-xl w-[350px] md:w-[470px] md:h-[350px] flex flex-col justify-between">
      <div className="text-center text-zinc-800 text-sm md:text-base font-normal leading-normal mb-5 md:mb-0">
        {content}
      </div>
      <div className="flex flex-col items-center overflow-hidden">
        <img
          className="w-[35px] h-[35px] rounded-full border border-blue-400 mb-[4px]"
          src={customerImage}
          alt={customerName}
        />
        <p className="text-center text-black text-xs font-medium">
          {customerName}
        </p>
        <div className="flex mt-[8px]">{stars}</div>
      </div>
    </div>
  );
};

const Candidate = ({ candidateImage }) => {
  return (
    <img
      className="rounded-full w-[62px] h-[62px] ml-[-37px]"
      src={candidateImage}
      alt={candidateImage}
    />
  );
};

const Testimonials = () => {
  const testimonialsData = [
    {
      content:
        "This platform proved me wrong. It helped me create standout CVs and cover letters tailored to each application. The AI-powered guidance elevated my materials, increasing my chances of landing interviews.",
      customerImage: "customer-1.svg",
      customerName: "J. Williams",
      rating: 5,
    },
    {
      content:
        "This platform revolutionized my job search. Its advanced algorithms quickly understood my career goals and presented personalized job recommendations. Impressed with its accuracy and efficiency.",
      customerImage: "customer-2.svg",
      customerName: "Janet Frank",
      rating: 5,
    },
    {
      content:
        "This AI-powered job assistant platform exceeded my expectations. The tailored job matches provided relevant opportunities I wouldn't have found on my own. It made the process smooth and enjoyable.",
      customerImage: "customer-3.svg",
      customerName: "Ayo Dakpo",
      rating: 3,
    },
    {
      content:
        "Thanks to this job assistant AI platform, I found my dream job effortlessly. The personalized job recommendations matched my skills and preferences perfectly. Highly recommended!",
      customerImage: "customer-4.svg",
      customerName: "Grace Chika",
      rating: 3,
    },
  ];

  const testimonials = testimonialsData.map((testimonial, index) => (
    <Testimonial
      key={index}
      content={testimonial.content}
      customerImage={testimonial.customerImage}
      customerName={testimonial.customerName}
      rating={testimonial.rating}
    />
  ));

  return (
    <div
      id="purpose"
      className="w-full bg-[#f5f6f6] pt-[100px] font-Montserrat">
      <h1 className="text-center text-slate-900 text-[32px] font-bold px-8 xl:px-[250px] 2xl:px-[450px]">
        What Our Customers Say
      </h1>
      <h2 className="text-center text-black text-base font-semibold lg:mb-[95px]">
        Testimonials That Speak Volumes.
      </h2>
      <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-100 mt-4 space-x-4 p-4">
        <div className="w-auto flex gap-x-[25px]">{testimonials}</div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:gap-x-[13px] gap-y-[13px] md:gap-y-0 md:mt-[95px] pb-[65px]">
        <div className="flex">
          <Candidate candidateImage={"candidate1.svg"} />
          <Candidate candidateImage={"candidate2.svg"} />
          <Candidate candidateImage={"candidate3.svg"} />
          <Candidate candidateImage={"candidate4.svg"} />
          <Candidate candidateImage={"candidate5.svg"} />
        </div>
        <div className="text-center">
          <span className="text-gray-800 text-opacity-90 text-base font-normal">
            Over 5000+ candidates
            <br />
            got their dream jobs
          </span>
          <span className="text-gray-800 text-opacity-90 text-base font-semibold">
            on JOBSYNC
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
