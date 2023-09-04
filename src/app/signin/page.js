"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Signin from "../../components/Signin/Signin";

export default function SigninRoute() {
  const router = useRouter();

  return (
    // h-[calc(100vh+50px)]
    <div className="w-screen h-screen flex flex-col items-center font-Montserrat">
      <Link href="/" className="self-center md:self-start">
        {" "}
        <img
          className="w-[60px] h-[60px] mt-[50px] mb-[50px] md:ml-[67px] "
          src="jobsync-logo.svg"
          alt="Jobsync Logo"
        />
      </Link>

      <div className="w-full pb-[50px] md:w-[435px] px-5 md:px-0 flex flex-col items-center">
        <Signin />
      </div>
    </div>
  );
}
