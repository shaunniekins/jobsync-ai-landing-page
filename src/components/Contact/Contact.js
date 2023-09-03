const Contact = () => {
  return (
    <div
      id="contact"
      className="w-screen px-8 xl:px-[350px] my-[100px] bg-green-300 flex flex-col items-center justify-center lg:flex-row gap-x-[100px] font-Montserrat">
      <img
        className="w-full lg:w-[500px] max-w-[500px] h-auto lg:h-[500px] rounded-20 "
        src="support-img.png"
        alt="Support"
      />
      <div className="flex flex-col">
        <div className="text-slate-900 text-[20px] md:text-[30px] lg:text-[40px] font-bold md:leading-[40px] lg:leading-[50px]">
          We’ll love to hear from you, <br />
          Get in touch.
        </div>
        <form
          action=""
          className="flex flex-col mt-[50px] sm:mr-16 items-center sm:items-start gap-y-[50px]">
          <div className="w-full">
            <input
              type="text"
              className="placeholder:text-[#C7C7C7] ml-3 text-sm font-normal outline-none"
              placeholder="Name"
              required></input>
            <div className="h-0 border border-[#C8C8C8]" />
          </div>
          <div className="w-full">
            <input
              type="email"
              className="placeholder:text-[#C7C7C7] ml-3 text-sm font-normal outline-none"
              placeholder="email@example.com"
              required></input>
            <div className="h-0 border border-[#C8C8C8]" />
          </div>
          <div className="w-full">
            <input
              type="text"
              className="placeholder:text-[#C7C7C7] ml-3 text-sm font-normal outline-none"
              placeholder="Your message"
              required></input>
            <div className="h-0 border border-[#C8C8C8]" />
          </div>
          <button className="h-[60px] px-[60px] py-5 bg-[#54B5E6] rounded-[10px] justify-center items-center gap-2.5 flex text-white text-xl font-semibold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
