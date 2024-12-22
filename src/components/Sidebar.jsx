import React, { useState } from "react";
import { MdDashboard, MdPerson, MdPersonAdd, MdSchool, MdExpandMore, MdExpandLess, MdEvent } from "react-icons/md";
import Logo from '../assets/images/codeit.webp'
import { PiCertificateFill, PiStudent } from "react-icons/pi";
import { BsCash } from "react-icons/bs";
import { FaArrowLeftLong, FaCartShopping, FaLock } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import { IoReceiptSharp } from "react-icons/io5";
import { Link } from "react-router-dom";


const sidebarItems = [
  {
    title: "Dashboard",
    link: "",
    icon: MdDashboard,
  },
  
  {
    title: "My Courses",
    link: "/my-courses",
    icon: FaBookReader,

  },
  {
    title: "Certificate",
    link: "/certificate",
    icon: PiCertificateFill,

  },
  {
    title: "Purchase Course",
    link: "/purchase",
    icon: FaCartShopping,
  },
  {
    title: "Wallet",
    link: "/wallet",
    icon: BsCash,
  },
  {
    title: "Receipts",
    link: "/receipts",
    icon: IoReceiptSharp,
  },
  {
    title: "Event",
    link: '/events',
    icon: MdEvent,
  },
  {
    title: "Terms & Conditions",
    link: "/students-terms",
    icon: PiStudent,
  },
  {
    title: "Change Password",
    link: "/change-password",
    icon: FaLock,
  }
];

const Sidebar = ({ showSidebar, toggleSidebar }) => {
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (title) => {
    setOpenSubmenus(prev => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <aside className={`w-80 fixed z-30 md:static h-screen  bg-white border-r-2 border-gray-100 px-4 transition-all duration-300 shadow-2xl ${showSidebar ? 'hidden' : ''}`}>
      <div className={`my-4 flex border-b-2 py-3 justify-between items-center gap-2 ${showSidebar ? 'hidden' : ''}`}>
        <img src={Logo} alt='Logo' className="w-28" />
        <FaArrowLeftLong onClick={toggleSidebar} />
      </div>
      <nav>
        {sidebarItems.map((item) => (
          <div key={item.link} className="mb-2">
            <Link to={item.link}>
            <button
              onClick={() => item.submenu && toggleSubmenu(item.title)}
              className="w-full text-[18px] flex items-center justify-between font-medium py-2 px-1.5 text-gray-700 hover:bg-gray-300 transition-colors"
              aria-expanded={openSubmenus[item.title]}
              aria-controls={`submenu-${item.title}`}
            >
              <span className="flex items-center">
                <item.icon className="mr-4" />
                {item.title}
              </span>
              {item.submenu && (
                openSubmenus[item.title] ? <MdExpandLess /> : <MdExpandMore />
              )}
              </button>
            </Link>
            {/* {item.submenu && (
              <ul
                id={`submenu-${item.title}`}
                className={`ml-4 mt-1 space-y-1 transition-all duration-300 ${
                  openSubmenus[item.title] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                {item.submenu.map((subItem) => (
                  <li key={subItem.link}>
                    <a
                      href={subItem.link}
                      className="flex items-center text-gray-700 font-medium rounded-md hover:bg-gray-800 py-1 px-1 hover:text-white transition-colors"
                    >
                      <subItem.icon className="mr-2" />
                      {subItem.title}
                    </a>
                  </li>
                ))}
              </ul>
            )} */}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

