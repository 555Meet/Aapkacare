import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import { FaHospital, FaUserMd, FaBars, FaTimes, FaPhone } from "react-icons/fa";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();

  const showSideMenu = () => setToggle(true);
  const hideSideMenu = () => setToggle(false);

  const box = [
    { name: "Hospitals", path: "../pages/HospitalSearch" },
    { name: "Doctors", path: "../pages/docterSearch" }
  ];

  const menuItems = [
    { name: "Hospital", icon: <FaHospital className="text-blue-500" />, path: "/hospital-search" },
    { name: "Doctors", icon: <FaUserMd className="text-blue-500" />, path: "/doctor-search" }
  ];

  const toggleSubMenu = (name) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  return (
    <div>
      {/* Overlay & Side Menu */}
      <div
        className={`fixed z-10 inset-0 bg-blue-200 bg-opacity-50 transition-opacity duration-500 ${
          toggle ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={hideSideMenu}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`fixed top-0 left-0 w-[300px] bg-white h-full shadow-lg transform transition-transform duration-500 ${
            toggle ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Sidebar Header */}
          <div className="bg-blue-500 p-5 text-white flex justify-between items-center">
            <span className="text-xl font-bold">Aapka Care</span>
            <FaTimes className="text-2xl cursor-pointer" onClick={hideSideMenu} />
          </div>

          {/* Main Menu Items */}
          <div className="p-5 space-y-3">
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 text-lg cursor-pointer"
                onClick={() => {
                  navigate(item.path);
                  hideSideMenu();
                }}
              >
                {item.icon}
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Header Bar */}
      <div className="px-5 bg-[#1EB4FD]">
        <div className="flex justify-between items-center h-[70px] text-white">
          {/* Logo & Menu Icon */}
          <div className="text-2xl font-bold flex items-center">
            <span className="text-white text-3xl cursor-pointer">&infin;</span>
            <span className="ml-2">Aapka Care</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            {box.map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className="hover:bg-white hover:text-black border-2 border-white px-4 py-2 rounded-md"
              >
                {item.name}
              </button>
            ))}
            <span className="px-4 py-2 border-2 border-white hover:bg-[green] rounded-md">
              +919821527088
            </span>
            <a
              href="#"
              className="border-2 border-white px-4 py-2 rounded-md bg-white text-black"
            >
              Chat
            </a>
          </div>
          <FaBars className="text-3xl cursor-pointer md:hidden" onClick={showSideMenu} />
        </div>
      </div>
    </div>
  );
};

export default Header;