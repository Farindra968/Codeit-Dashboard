import React from "react";
import { BarChart1 } from "../../components/Chart/BarChart";
import { FaBookReader } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import { MdAccountBalanceWallet } from "react-icons/md";
import Title from "../../components/Ui/Title";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import PurchaseCard from "../../components/PurchaseCard";
export default function Content() {
  const analyticsData = [
    {
      id: 1,
      title: "My Courses",
      value: "5",
      icon: <FaBookReader />,
      color: "text-green-500",
      bgcolor: "bg-gradient-to-br from-blue-700 via-blue-500 to-blue-200",
    },
    {
      id: 2,
      title: "Certificate Earned",
      value: "6",
      icon: <PiCertificateFill />,
      color: "text-blue-500",
      bgcolor: "bg-gradient-to-br from-violet-700 via-violet-500 to-violet-200",
    },
    {
      id: 3,
      title: "Upcoming Courses",
      value: "4",
      icon: <SiGoogleclassroom />,
      color: "text-orange-500",
      bgcolor: "bg-gradient-to-br from-pink-700 via-pink-500 to-pink-200",
    },
    {
      id: 4,
      title: "Wallet",
      value: "Rs. 3,999/-",
      icon: <MdAccountBalanceWallet />,
      color: "text-purple-500",
      bgcolor: "bg-gradient-to-br from-indigo-700 via-indigo-500 to-indigo-200",
    },
  ];

  return (
    <>
      <section className="p-4 ">
        <Title title="Dashboard" size="text-xl" color="text-gray-700" />
        {/* Overviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {analyticsData.map((item) => (
            <div
              key={item.id}
              className={` ${item.bgcolor}   px-4 py-3 rounded-lg shadow hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className=" font-medium text-gray-100">{item.title}</p>
                  <p className="text-2xl font-bold text-gray-50">
                    {item.value}
                  </p>
                </div>
                <div className={`p-3 rounded-full ${item.color} bg-opacity-10`}>
                  <div className="flex items-center justify-center text-3xl border-2 w-12 h-12 bg-white border-white rounded-full">
                    {item.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Upcomming Classes */}

        <section className="py-2">
          <Title
            title="Upcoming Classes"
            size="text-xl"
            color="text-gray-700"
          />
          <Link to={""} className="inline-block">
            <Title
              title="Your Referral Code: FCODE135 "
              size="text-[18px]"
              color="text-black"
            />
          </Link>
          <p className="text-sm text-gray-700 ">
            Get 2% instant cashback on your Code IT digital wallet when
            purchasing this course and
          </p>
          <p className="text-sm text-gray-700 ">
            Get 1% instant cashback when reffering this course with your
            referral code.
          </p>
          <div className="py-6">
            <PurchaseCard />
            </div>
        </section>
      </section>
    </>
  );
}
