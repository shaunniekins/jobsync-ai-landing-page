const Contact = () => {
  return (
    <div className="w-screen px-[125px] py-[100px] bg-white md:gap-x-[200px] justify-center items-center flex flex-col sm:flex-row font-Montserrat">
      <img className="max-h-[500px] rounded-[20px]" src="support-img.png" />
      <div className="flex flex-col">
        <div className="text-slate-900 text-[40px] font-bold leading-[50px]">
          We’ll love to hear from you, <br />
          Get in touch.
        </div>
        <form
          action=""
          className="flex flex-col mt-[50px] sm:mr-16 items-center sm:items-start gap-[50px]">
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
