import React, { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { name: "Ophthalmology", subLinks: [{ name: "Cataract", path: "/ophthalmology/cataract" }, { name: "Lasik Surgery", path: "/ophthalmology/lasik" }] },
  { name: "Laparoscopy", subLinks: [{ name: "Hernia", path: "/laparoscopy/hernia" }, { name: "Appendicitis", path: "/laparoscopy/appendicitis" }, { name: "Gallbladder stone", path: "/laparoscopy/gallbladder-stone" }] },
  { name: "Urology", subLinks: [{ name: "Circumcision", path: "/urology/circumcision" }, { name: "Kidney Stone", path: "/urology/kidney-stone" },{ name: "Hydrocele", path: "/urology/Hydrocele" },{ name: "Frenuloplasty", path: "/urology/Frenuloplasty" },{ name: "Kidney Transplant", path: "/urology/Kidney-Transplant" },{ name: "Prostate enlargement", path: "/urology/Prostate-enlargement" }] },
  { name: "Cosmetic", subLinks: [{ name: "Gynecomastia", path: "/cosmetic/gynecomastia" }, { name: "Lipoma", path: "/cosmetic/lipoma" },{ name: "Mole Removal", path: "/cosmetic/Mole-Removal" }] },
  { name: "Orthopaedic", subLinks: [{ name: "Hip Replacement", path: "/orthopaedic/hip-replacement" }, { name: "Knee Replacement", path: "/orthopaedic/knee-replacement" },{ name: "ACL tear", path: "/orthopaedic/ACL-tear" },{ name: "Disc injury", path: "/orthopaedic/Disc-injury" },{ name: "Joint Replacement", path: "/orthopaedic/Join-replacement" },{ name: "Knee Arthroscopy", path: "/orthopaedic/knee-Arthroscopy" },{ name: "Rotator cuff repair", path: "/orthopaedic/Rotator-cuff-repair" }] },
  { name: "Proctology", subLinks: [{ name: "Piles", path: "/proctology/piles" }, { name: "Fissure", path: "/proctology/fissure" },{ name: "Fistula", path: "/proctology/Fistula" }] },
  { name: "Vascular", subLinks: [{ name: "Varicocele", path: "/vascular/varicocele" },{ name: "Varicose Vein", path: "/vascular/varicose-Vein" }] },
  { name: "Bariatric", subLinks: [{ name: "Bariatric", path: "/Bariatric" }] },
  { name: "Blog", subLinks: [{name: "Blog", path: "/Blog"}]},
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="bg-white shadow-md hidden md:block sm:hidden">
      <div className="container mx-auto mt-2 flex flex-wrap justify-center space-x-6 text-sm">
        {links.map((item, index) => (
          <div key={index} className="relative">
            {item.subLinks ? (
              <>
                <button
                  className="text-[#1EB4FD] font-semibold p-2 hover:bg-gray-100 rounded-md"
                  onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                >
                  {item.name}
                </button>
                {openDropdown === index && item.subLinks.length > 0 && (
                  <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2 z-10">
                    {item.subLinks.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-400 hover:text-[white] rounded-md"
                          onClick={() => setOpenDropdown(null)} // Close dropdown on click
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link to={item.path} className="text-[#1EB4FD] font-semibold p-2 hover:bg-gray-100 rounded-md">
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
