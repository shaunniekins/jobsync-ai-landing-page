"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const router = useRouter();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRepasswordChange = (e) => {
    setRepassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    setName("");
    setEmail("");
    setPassword("");
    setRepassword("");
  };

  return (
    <>
      <h1 className="text-black text-[24px] font-bold mb-[31px]">Sign Up</h1>
      <div className="w-full flex-col justify-center items-start">
        <form
          onSubmit={handleSubmit}
          className="flex-col justify-start items-start flex">
            <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
            placeholder="Enter Your Name"
            className="w-full h-[50px] mb-[18px] text-[14px] bg-gray-200 bg-opacity-30 rounded-[10px] border border-[#54B5E6] pl-[21.7px]"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
            placeholder="Enter Your Email"
            className="w-full h-[50px] mb-[18px] text-[14px] bg-gray-200 bg-opacity-30 rounded-[10px] border border-[#54B5E6] pl-[21.7px]"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
            placeholder="Enter Your Password"
            className="w-full h-[50px] mb-[18px] text-[14px] bg-gray-200 bg-opacity-30 rounded-[10px] border border-[#54B5E6] pl-[21.7px]"
          />
           <input
            type="password"
            name="repassword"
            value={repassword}
            onChange={handleRepasswordChange}
            required
            placeholder="Re-enter Your Password"
            className="w-full h-[50px] mb-[30px] text-[14px] bg-gray-200 bg-opacity-30 rounded-[10px] border border-[#54B5E6] pl-[21.7px]"
          />
          <button className="w-full h-[50px] mb-[10px] text-[18px] text-white font-semibold bg-[#54B5E6] rounded-[10px]">
            Sign Up
          </button>
        </form>
      </div>
      <p className="text-black font-normal mb-[50px] text-[12px]">
        Already have an account?{" "}
        <button
          className="text-[#54B5E6] font-semibold"
          onClick={() => router.push("/signin")}>
          Sign In
        </button>
      </p>
      <div className="flex gap-3 items-center mb-[50px]">
        <div className="w-full px-[35px] md:px-[75px] h-0 border border-black" />
        <p className="text-black text-[12px] font-semibold">OR</p>
        <div className="w-full px-[35px] md:px-[75px] h-0 border border-black" />
      </div>
      <div className="" />
      <button className="w-full h-[50px] rounded-[10px] border border-zinc-600 flex justify-center items-center gap-3">
        <div className="w-[30px] h-[30px] rounded-[7px] flex justify-center items-center">
          <img src="google-icon.svg" alt="Google Icon" />
        </div>
        <p className="text-zinc-600 text-[16px] font-normal">
          Continue with Google
        </p>
      </button>
    </>
  );
};

export default Signup;
