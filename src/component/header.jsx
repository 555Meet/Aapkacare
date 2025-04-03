import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    { name: "Hospital", icon: <FaHospital className="text-blue-500" />, path: "../pages/HospitalSearch" },
    { name: "Doctors", icon: <FaUserMd className="text-blue-500" />, path: "../pages/docterSearch" }
  ];

  const expandableItems = [
    { name: "Ophthalmology", subLinks: [{ name: "Cataract", path: "/ophthalmology/cataract" }, { name: "Lasik Surgery", path: "/ophthalmology/lasik" }] },
    { name: "Laparoscopy", subLinks: [{ name: "Hernia", path: "/laparoscopy/hernia" }, { name: "Appendicitis", path: "/laparoscopy/appendicitis" }, { name: "Gallbladder stone", path: "/laparoscopy/gallbladder-stone" }] },
    { name: "Urology", subLinks: [{ name: "Circumcision", path: "/urology/circumcision" }, { name: "Kidney Stone", path: "/urology/kidney-stone" },{ name: "Hydrocele", path: "/urology/Hydrocele" },{ name: "Frenuloplasty", path: "/urology/Frenuloplasty" },{ name: "Kidney Transplant", path: "/urology/Kidney-Transplant" },{ name: "Prostate enlargement", path: "/urology/Prostate-enlargement" }] },
    { name: "Cosmetic", subLinks: [{ name: "Gynecomastia", path: "/cosmetic/gynecomastia" }, { name: "Lipoma", path: "/cosmetic/lipoma" },{ name: "Mole Removal", path: "/cosmetic/Mole-Removal" }] },
    { name: "Orthopaedic", subLinks: [{ name: "Hip Replacement", path: "/orthopaedic/hip-replacement" }, { name: "Knee Replacement", path: "/orthopaedic/knee-replacement" },{ name: "ACL tear", path: "/orthopaedic/ACL-tear" },{ name: "Disc injury", path: "/orthopaedic/Disc-injury" },{ name: "Joint Replacement", path: "/orthopaedic/Join-replacement" },{ name: "Knee Arthroscopy", path: "/orthopaedic/knee-Arthroscopy" },{ name: "Rotator cuff repair", path: "/orthopaedic/Rotator-cuff-repair" }] },
    { name: "Proctology", subLinks: [{ name: "Piles", path: "/proctology/piles" }, { name: "Fissure", path: "/proctology/fissure" },{ name: "Fistula", path: "/proctology/Fistula" }] },
    { name: "Vascular", subLinks: [{ name: "Varicocele", path: "/vascular/varicocele" },{ name: "Varicose Vein", path: "/vascular/varicose-Vein" }] },
    { name: "Bariatric", subLinks: [{ name: "Bariatric", path: "/Bariatric" }] },
    { name: "Blog", subLinks: [{ name: "Blog", path: "/Blog" }]},
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
          <div className="bg-[#1EB4FD] p-5 text-white flex justify-between items-center">
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

          {/* Expandable Menu Items */}
          <div className="px-5 space-y-2">
            {expandableItems.map((item, index) => (
              <div key={index}>
                <div
                  className="flex justify-between items-center text-lg p-2 cursor-pointer border-b"
                  onClick={() => toggleSubMenu(item.name)}
                >
                  <span>{item.name}</span>
                  <span>{openMenu === item.name ? "▲" : "▼"}</span>
                </div>
                {openMenu === item.name && (
                  <div className="pl-5 space-y-1 text-gray-600">
                    {item.subLinks.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className="block p-2 hover:bg-gray-200"
                        onClick={hideSideMenu}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
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
          <div className="hidden lg:flex space-x-6 items-center">
            {box.map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className="hover:bg-white hover:text-black border-2 border-white px-4 py-2 rounded-md"
              >
                {item.name}
              </button>
            ))}
            <a href="tel:9821527088" className="px-4 py-2 border-2 border-white hover:bg-[green] rounded-md">
              +919821527088
            </a>
            <a onClick={() => {
              window.open('https://api.whatsapp.com/send/?phone=%2B919821527088&text=Hello%21&type=phone_number&app_absent=0');
              }}
              className="border-2 border-white px-4 py-2 rounded-md bg-white text-black cursor-pointer"
            >
              Chat
            </a>
          </div>
          <FaBars className="text-3xl cursor-pointer lg:hidden" onClick={showSideMenu} />
        </div>
      </div>
    </div>
  );
};

export default Header;
