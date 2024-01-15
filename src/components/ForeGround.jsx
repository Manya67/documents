import React, { useRef } from "react";
import Card from "./Card";
import { data } from "../constants";

const ForeGround = () => {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      className="fixed z-[3] top-0 left-0 w-full h-full my-2 mx-3 flex flex-wrap gap-3"
    >
      {data.map((item, index) => (
        <Card data={item} key={index} reference={ref} />
      ))}
    </div>
  );
};

export default ForeGround;
