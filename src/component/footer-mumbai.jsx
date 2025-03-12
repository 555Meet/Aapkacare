import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Ophthalmology",
    items: [
      { name: "Best Cataract Services in Mumbai", path: "/ophthalmology/cataract" },
      { name: "Best Lasik Surgery Services in Mumbai", path: "/ophthalmology/lasik" },
    ],
  },
  {
    title: "Laparoscopy",
    items: [
      { name: "Best Hernia Services in Mumbai", path: "/laparoscopy/hernia" },
      { name: "Best Appendicitis Services in Mumbai", path: "/laparoscopy/appendicitis" },
      { name: "Best Gallbladder Stone Services in Mumbai", path: "/laparoscopy/gallbladder-stone" },
    ],
  },
  {
    title: "Urology",
    items: [
      { name: "Best Circumcision Services in Mumbai", path: "/urology/circumcision" },
      { name: "Best Kidney Stone Services in Mumbai", path: "/urology/kidney-stone" },
      { name: "Best Hydrocele Services in Mumbai", path: "/urology/hydrocele" },
      { name: "Best Frenuloplasty Services in Mumbai", path: "/urology/frenuloplasty" },
      { name: "Best Kidney Transplant Services in Mumbai", path: "/urology/kidney-transplant" },
      { name: "Best Prostate Enlargement Services in Mumbai", path: "/urology/prostate-enlargement" },
    ],
  },
  {
    title: "Cosmetic",
    items: [
      { name: "Best Gynecomastia Services in Mumbai", path: "/cosmetic/gynecomastia" },
      { name: "Best Lipoma Services in Mumbai", path: "/cosmetic/lipoma" },
      { name: "Best Mole Removal Services in Mumbai", path: "/cosmetic/mole-removal" },
    ],
  },
  {
    title: "Orthopaedic",
    items: [
      { name: "Best Hip Replacement Services in Mumbai", path: "/orthopaedic/hip-replacement" },
      { name: "Best Knee Replacement Services in Mumbai", path: "/orthopaedic/knee-replacement" },
      { name: "Best ACL Tear Services in Mumbai", path: "/orthopaedic/acl-tear" },
      { name: "Best Disc Injury Services in Mumbai", path: "/orthopaedic/disc-injury" },
      { name: "Best Joint Replacement Services in Mumbai", path: "/orthopaedic/join-replacement" },
      { name: "Best Knee Arthroscopy Services in Mumbai", path: "/orthopaedic/knee-arthroscopy" },
      { name: "Best Rotator Cuff Repair Services in Mumbai", path: "/orthopaedic/rotator-cuff-repair" },
    ],
  },
  {
    title: "Proctology",
    items: [
      { name: "Best Piles Services in Mumbai", path: "/proctology/piles" },
      { name: "Best Fissure Services in Mumbai", path: "/proctology/fissure" },
      { name: "Best Fistula Services in Mumbai", path: "/proctology/fistula" },
    ],
  },
];

const FooterMumbai = () => {
  return (
    <div className="bg-gray-800 p-8 text-white">
      <h1 className="text-4xl font-bold text-left ml-7 mb-8">Aapka Care Services In Pune</h1>
      <div className="grid grid-cols-1 md:grid-cols-6">
        {services.map((service, index) => (
          <div key={index} className="p-6">
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <ul className="list-disc pl-5">
              {service.items.map((item, idx) => (
                <li key={idx} className="mb-2">
                  <Link to={item.path} className="text-white hover:text-blue-300 ">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterMumbai;
