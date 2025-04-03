import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // For mobile menu toggle

const links = [
  { name: "Ophthalmology", subLinks: [{ name: "Cataract", path: "/ophthalmology/cataract" }, { name: "Lasik Surgery", path: "/ophthalmology/lasik" }] },
  { name: "Laparoscopy", subLinks: [{ name: "Hernia", path: "/laparoscopy/hernia" }, { name: "Appendicitis", path: "/laparoscopy/appendicitis" }, { name: "Gallbladder Stone", path: "/laparoscopy/gallbladder-stone" }] },
  { name: "Urology", subLinks: [{ name: "Circumcision", path: "/urology/circumcision" }, { name: "Kidney Stone", path: "/urology/kidney-stone" }, { name: "Hydrocele", path: "/urology/hydrocele" }, { name: "Frenuloplasty", path: "/urology/frenuloplasty" }, { name: "Kidney Transplant", path: "/urology/kidney-transplant" }, { name: "Prostate Enlargement", path: "/urology/prostate-enlargement" }] },
  { name: "Cosmetic", subLinks: [{ name: "Gynecomastia", path: "/cosmetic/gynecomastia" }, { name: "Lipoma", path: "/cosmetic/lipoma" }, { name: "Mole Removal", path: "/cosmetic/mole-removal" }] },
  { name: "Orthopaedic", subLinks: [{ name: "Hip Replacement", path: "/orthopaedic/hip-replacement" }, { name: "Knee Replacement", path: "/orthopaedic/knee-replacement" }, { name: "ACL Tear", path: "/orthopaedic/acl-tear" }, { name: "Disc Injury", path: "/orthopaedic/disc-injury" }, { name: "Joint Replacement", path: "/orthopaedic/joint-replacement" }, { name: "Knee Arthroscopy", path: "/orthopaedic/knee-arthroscopy" }, { name: "Rotator Cuff Repair", path: "/orthopaedic/rotator-cuff-repair" }] },
  { name: "Proctology", subLinks: [{ name: "Piles", path: "/proctology/piles" }, { name: "Fissure", path: "/proctology/fissure" }, { name: "Fistula", path: "/proctology/fistula" }] },
  { name: "Vascular", subLinks: [{ name: "Varicocele", path: "/vascular/varicocele" }, { name: "Varicose Vein", path: "/vascular/varicose-vein" }] },
  { name: "Bariatric", subLinks: [{ name: "Bariatric", path: "/bariatric" }] },
  { name: "Blog", subLinks: [{ name: "Blog", path: "/blog" }] },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="bg-white shadow-md hidden lg:block">
        <div className="container mx-auto flex justify-center space-x-6 py-3 text-sm">
          {links.map((item, index) => (
            <div key={index} className="relative">
              {item.subLinks ? (
                <>
                  <button
                    className="text-[#1EB4FD] font-semibold px-3 py-2 hover:bg-gray-100 rounded-md"
                    onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                  >
                    {item.name}
                  </button>
                  {openDropdown === index && (
                    <div className="absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-lg p-2 z-10 transition-opacity duration-300">
                      {item.subLinks.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path.toLowerCase()} // Ensuring lowercase paths
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-400 hover:text-white rounded-md"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link to={item.to} className="text-[#1EB4FD] font-semibold px-3 py-2 hover:bg-gray-100 rounded-md">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
