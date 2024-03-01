"use client";

import { BallTriangle } from "react-loader-spinner";

export const LoadingScreenSection = () => {
  return (
    <div className="z-[100] flex w-full h-full justify-center items-center absolute inset-0 bg-opacity-50 bg-black">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export const LoadingScreenFullScreen = () => {
  return (
    <div className="z-[200] flex w-screen h-[100svh] justify-center items-center">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

LoadingScreenFullScreen;
