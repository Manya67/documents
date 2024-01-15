import React, { useRef } from "react";
import Card from "./Card";

const ForeGround = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia facere voluptates magni a ea ducimus commodi iure dignissimos",
      fileSize: ".8mb",
      downloading: false,
      tag: { tagOpen: false },
    },
    {
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia facere voluptates magni a ea ducimus commodi iure dignissimos",
      fileSize: ".8mb",
      downloading: true,
      tag: { tagOpen: true, progress: false },
    },
    {
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia facere voluptates magni a ea ducimus commodi iure dignissimos",
      fileSize: ".8mb",
      downloading: false,
      tag: { tagOpen: true, progress: true, percentage: "60%" },
    },
  ];
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
