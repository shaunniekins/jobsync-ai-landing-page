"use client";

import React, { useState } from "react";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full text-black text-xl font-medium shadow-md rounded-[20px] px-6 py-[24px] flex flex-col">
      <div className="flex justify-between items-center">
        <p>{question}</p>
        <button onClick={toggleOpen}>
          <img src="add-circle.svg" alt="Add Circle" />
        </button>
      </div>
      {isOpen && <p className="mt-4 text-[#9B9B9B] text-[18px]">{answer}</p>}
    </div>
  );
}

const Faqs = () => {
  return (
    <div className="flex-col justify-center items-center gap-[100px] flex font-Montserrat w-screen mt-[100px] px-8 xl:px-[250px] 2xl:px-[450px] pb-[100px]">
      <div className="flex-col justify-center items-center flex w-full">
        <h1 className="text-center text-black text-[40px] font-semibold mb-[20px]">
          Frequently Asked Questions
        </h1>
        <h2 className="text-center text-neutral-400 text-2xl font-semibold mb-[45px]">
          Have any questions? We’re here to help.
        </h2>
        <div className="text-center font-medium border-2 border-[#9B9B9B] rounded-[10px] p-[17px] flex items-center gap-x-[12px] w-full">
          <img src="search-icon.svg" alt="Search Icon" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none border-none w-full placeholder:text-[#CCC] text-base font-medium"
          />
        </div>
      </div>
      <div className="flex-col justify-center items-center gap-[30px] flex w-full">
        <FAQItem
          question="How can JobSYNC help me?"
          answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia hic, ullam nesciunt illum cumque iusto qui ea odio iste magni sequi est beatae cupiditate. Eligendi illum necessitatibus ratione asperiores? Eum."
        />
        <FAQItem
          question="Does JobSYNC improve my chances of getting a job?"
          answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia hic, ullam nesciunt illum cumque iusto qui ea odio iste magni sequi est beatae cupiditate. Eligendi illum necessitatibus ratione asperiores? Eum."
        />
        <FAQItem
          question="How can I get started?"
          answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia hic, ullam nesciunt illum cumque iusto qui ea odio iste magni sequi est beatae cupiditate. Eligendi illum necessitatibus ratione asperiores? Eum."
        />
        <FAQItem
          question="Is there a free trial plan available?"
          answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia hic, ullam nesciunt illum cumque iusto qui ea odio iste magni sequi est beatae cupiditate. Eligendi illum necessitatibus ratione asperiores? Eum."
        />
      </div>
      <div className="flex flex-col">
        <h4 className="text-center text-black text-2xl font-semibold">
          Still have any questions?
        </h4>
        <h5 className="text-center text-neutral-400 text-xl font-medium">
          Reach out to our team. Send us an email.
        </h5>
      </div>
    </div>
  );
};

export default Faqs;
