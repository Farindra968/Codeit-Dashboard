import React, { useState } from "react";
import {
  FiSearch,
  FiBell,
  FiMessageSquare,
  FiChevronDown,
  FiSettings,
  FiUser,
  FiLogOut,
} from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import p1 from "../assets/images/t-1.png";
import { IoIosArrowDown } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import Headerlogo from '../assets/images/studentlogo.png'
import { BiX } from "react-icons/bi";

export default function Header({toggleSidebar, showSidebar}) {

  return (
    <>
      <div className="bg-gradient-to-l fixed from-blue-950 via-blue-900 to-blue-900 z-50 p-3 w-full">
        <div className="flex justify-between items-center px-4">
          <div className="">
            {/* Header Logo and Menu icon */}
            <div className="w-auto flex justify-center gap-6 items-center relative">
              {
                showSidebar ? (
                  <div><BiX size={32} onClick={toggleSidebar} className="text-gray-200" /></div>
                ) : (<div>
                  <RiMenu2Line size={32} onClick={toggleSidebar} className="text-gray-200" />
                </div>)
              }
              <img src={Headerlogo} className="w-36"/>
            </div>
          </div>
          {/* Profile, Notification, Mssage icon */}
          <div className="flex items-center gap-4">
            {/* Message icon */}
            <div className="flex items-center justify-center hover:bg-gray-200 rounded-md w-8 h-8 relative">
              <FiMessageSquare
                size={24}
                className="text-white text-2xl hover:text-gray-600"
              />
              <div className="absolute top-0 right-0 flex items-center justify-center rounded-full text-red-600 font-semibold bg-yellow-400 w-4 h-4 p-2 text-sm animate-bounce">
                5
              </div>
            </div>
            {/* Notification Icon */}
            <div className="flex items-center justify-center hover:bg-gray-200 rounded-md w-8 h-8 relative">
              <IoNotificationsOutline
                size={24}
                className="text-white text-2xl hover:text-gray-600"
              />
              <div className="absolute top-0 right-0 flex items-center justify-center rounded-full text-red-600 font-semibold bg-yellow-400 w-4 h-4 p-2 text-sm animate-bounce">
                5
              </div>
            </div>
            {/* Shortcut Icon */}
            <div className="flex items-center justify-center hover:bg-gray-200 rounded-md w-8 h-8">
              <CgMenuGridR
                size={24}
                className="text-white text-2xl hover:text-gray-600"
              />
            </div>
            {/* User Profile */}
            <div className="flex items-center gap-3">
              <img src={p1} className="w-10 h-10 rounded-full" />
              <IoIosArrowDown className="text-gray-100 " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
