import React from "react";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";

const coursesData = [
  {
    id: "codeit2XF4",
    name: "Web Design",
    image: "https://codeit.com.np/storage/01JDRRNY51FKEF5GYA21CE0SEC.png",
  },
  {
    id: "codeit2XF6",
    name: "Laravel PHP Framework",
    image: "https://codeit.com.np/storage/01JDPFDQAH4SWAXMKMK4W2MH12.png",
  },
  {
    id: "codeit2XF7",
    name: "React js",
    image: "https://codeit.com.np/storage/01JDPEGMADNJ4ZKN4S8T5BFWRA.png",
  },
  {
    id: "codeit2XF8",
    name: "Nodejs",
    image: "https://codeit.com.np/storage/01JDPEN89BN6DZYKSWPDEQ09X0.png",
  },

];

const MyCoursesCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
      {coursesData.map((item) => (
        <div key={item.id} className="shadow-md hover:shadow-lg rounded-md overflow-hidden">
          {/* Courses Image */}
          <div className="w-full h-48 relative">
            <img src={item.image} className="w-full h-full object-cover" alt={item.name} />

          </div>
          {/* Product Info */}
          <div className="p-4">
            <h2 className="py-1 text-gray-800">{item.name}</h2>
            <div className="flex gap-4 mt-2">
              <Link to={`/class-content/${item.id}`} >
              <button className="bg-blue-900 text-sm text-white font-medium px-2 py-1 rounded-md ">
                Watch Videos
              </button>
              </Link>


            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCoursesCard;

