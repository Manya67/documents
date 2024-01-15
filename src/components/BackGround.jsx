import React from "react";

const BackGround = () => {
  return (
    <div className="fixed h-screen w-full z-[2]">
      <span className="py-10 absolute top-[2%] w-full h-8 text-[#faead6] flex justify-center items-center">
        Documents!
      </span>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[#faead6] font-semibold text-[20vw] leading-none tracking-tighter">
        Docs.
      </h1>
    </div>
  );
};

export default BackGround;
