import React from "react";
import { motion } from "framer-motion";
import { FiFileText } from "react-icons/fi";
import { BsDownload } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const Card = ({ data, reference }) => {
  const { desc, fileSize, downloading, tag } = data;
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.5}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 8 }}
      className="w-60 h-72 bg-[#faead6]/90 text-zinc-900 rounded-[45px] px-8 py-10 relative overflow-hidden flex-shrink-0"
    >
      <FiFileText size="1.3em" />
      <div className="text-xs font-semibold mt-4 leading-tight  ">{desc}</div>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="flex justify-between mb-3 py-4 px-8 items-center">
          <span>{fileSize}</span>
          <span className="bg-zinc-900 w-6 h-6 rounded-full flex justify-center items-center">
            {downloading ? (
              <RxCross2 size=".7em" color="#faead6" />
            ) : (
              <BsDownload size=".7em" color="#faead6" />
            )}
          </span>
        </div>
        {tag.tagOpen && (
          <div
            className={`text-[#faead6] w-full flex justify-center items-center h-12 ${
              tag.progress ? "bg-blue-700" : "bg-green-700"
            }`}
          >
            {tag.progress ? (
              <div className="h-1 w-[80%] bg-transparent rounded-xl">
                <div className={`h-1 bg-[#faead6] rounded-xl w-[50%]`}></div>
              </div>
            ) : (
              <span className="text-md font-semibold">Download Now</span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
// progress percentage
// file size
// text overflow
