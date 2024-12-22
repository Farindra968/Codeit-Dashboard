import React from "react";
import { SlCalender } from "react-icons/sl";

const coursesData = [
  {
    id: "codeit2XF4",
    name: "Full Stack Web Development in Laravel",
    price: "1499",
    actualPrice: "16999",
    time: "December 08, 2024",
    coursesMode: "Online",
    image: "https://codeit.com.np/storage/01JDM6DXST2E2E0JC80HD0KX5H.png",
  },
  {
    id: "codeit2XF6",
    name: "Digital Marketing",
    price: "1499",
    actualPrice: "16999",
    time: "December 15, 2024",
    coursesMode: "Online",
    image: "https://codeit.com.np/storage/01JDPG7VXAP1ERJKGQZ5NPAQ4D.png",
  },
  {
    id: "codeit2XF7",
    name: "Flutter Framework Training",
    price: "1499",
    actualPrice: "16999",
    time: "December 17, 2024",
    coursesMode: "Online",
    image: "https://codeit.com.np/storage/01JDPDDYDAGTTV58C7THK54DD5.png",
  },
  {
    id: "codeit2XF8",
    name: "React with Nextjs",
    price: "1499",
    actualPrice: "16500",
    time: "December 29, 2024",
    coursesMode: "Online",
    image: "https://codeit.com.np/storage/01JDECE7JPWYR0X8AM8EDQPWR7.jpg",
  },
  {
    id: "codeit2XF9",
    name: "Python Django Library",
    price: "1499",
    actualPrice: "16500",
    time: "December 24, 2024",
    coursesMode: "Online",
    image: "https://codeit.com.np/storage/01JDESWVC1SXMKJ5Q4NP7BZ3NS.jpg",
  },
];

const PurchaseCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
      {coursesData.map((item) => (
        <div key={item.id} className="shadow-md hover:shadow-lg rounded-md overflow-hidden">
          {/* Courses Image */}
          <div className="w-full h-48 relative">
            <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
            <p className="absolute right-2 bottom-2 bg-gray-100 text-gray-500 font-medium px-2 py-1 rounded-lg">
              {item.coursesMode}
            </p>
          </div>
          {/* Product Info */}
          <div className="p-4">
            <p className="flex items-center gap-2 font-medium">
              <SlCalender className="text-red-800" /> {item.time}
            </p>
            <p className="py-1 text-lg">
              <span className="">Rs.{item.price}/-</span>{" "}
              <span className="line-through text-red-600 ml-2">Rs.{item.actualPrice}</span>
            </p>
            <h2 className="py-1 text-[18px]">{item.name}</h2>
            <div className="flex gap-4 mt-2">
              <button className="bg-orange-200 text-orange-700 font-medium p-2 rounded-md ">
                Syllabus
              </button>
              <button className="bg-orange-700 text-white p-2 rounded-md">
                Purchase
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PurchaseCard;

