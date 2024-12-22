import React from "react";
import Title from "../Ui/Title";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function ClassContent() {
  return (
    <>
      <section className="p-4 ">
        <Title title="Class Video" size="text-xl" color="text-gray-700" />
        <div className="shadow-md hover:shadow-lg rounded-md overflow-hidden">
          <div className="w-full h-80 relative">
            <img
              src="https://codeit.com.np/storage/01JDRRNY51FKEF5GYA21CE0SEC.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
                  <div className="px-10 py-10">
                      <p className="flex items-center gap-3 py-1 font-medium text-blue-900"><FaRegArrowAltCircleRight />Web Design Day 1 | HTML5</p>
                      <p className="flex items-center gap-3 py-1 font-medium text-blue-900"><FaRegArrowAltCircleRight />Web Design Day 1 | HTML5</p>
                      <p className="flex items-center gap-3 py-1 font-medium text-blue-900"><FaRegArrowAltCircleRight />Web Design Day 1 | HTML5</p>
                      <p className="flex items-center gap-3 py-1 font-medium text-blue-900"><FaRegArrowAltCircleRight />Web Design Day 1 | HTML5</p>
                      <p className="flex items-center gap-3 py-1 font-medium text-blue-900"><FaRegArrowAltCircleRight />Web Design Day 1 | HTML5</p>
                      <p className="flex items-center gap-3 py-1 font-medium text-blue-900"><FaRegArrowAltCircleRight />Web Design Day 1 | HTML5</p>
                      <p className="flex items-center gap-3 py-1 font-medium text-blue-900"><FaRegArrowAltCircleRight />Web Design Day 1 | HTML5</p>
                      <p className="flex items-center gap-3 py-1 font-medium text-blue-900"><FaRegArrowAltCircleRight />Web Design Day 1 | HTML5</p>
                      <p className="flex items-center gap-3 py-1 font-medium text-blue-900"><FaRegArrowAltCircleRight />Web Design Day 1 | HTML5</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClassContent;
