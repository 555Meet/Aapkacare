import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Ophthalmology",
    items: [
      { name: "Best Cataract Services in Pune", path: "/ophthalmology/cataract" },
      { name: "Best Lasik Surgery Services in Pune", path: "/ophthalmology/lasik" },
    ],
  },
  {
    title: "Laparoscopy",
    items: [
      { name: "Best Hernia Services in Pune", path: "/laparoscopy/hernia" },
      { name: "Best Appendicitis Services in Pune", path: "/laparoscopy/appendicitis" },
      { name: "Best Gallbladder Stone Services in Pune", path: "/laparoscopy/gallbladder-stone" },
    ],
  },
  {
    title: "Urology",
    items: [
      { name: "Best Circumcision Services in Pune", path: "/urology/circumcision" },
      { name: "Best Kidney Stone Services in Pune", path: "/urology/kidney-stone" },
      { name: "Best Hydrocele Services in Pune", path: "/urology/hydrocele" },
      { name: "Best Frenuloplasty Services in Pune", path: "/urology/frenuloplasty" },
      { name: "Best Kidney Transplant Services in Pune", path: "/urology/kidney-transplant" },
      { name: "Best Prostate Enlargement Services in Pune", path: "/urology/prostate-enlargement" },
    ],
  },
  {
    title: "Cosmetic",
    items: [
      { name: "Best Gynecomastia Services in Pune", path: "/cosmetic/gynecomastia" },
      { name: "Best Lipoma Services in Pune", path: "/cosmetic/lipoma" },
      { name: "Best Mole Removal Services in Pune", path: "/cosmetic/mole-removal" },
    ],
  },
  {
    title: "Orthopaedic",
    items: [
      { name: "Best Hip Replacement Services in Pune", path: "/orthopaedic/hip-replacement" },
      { name: "Best Knee Replacement Services in Pune", path: "/orthopaedic/knee-replacement" },
      { name: "Best ACL Tear Services in Pune", path: "/orthopaedic/acl-tear" },
      { name: "Best Disc Injury Services in Pune", path: "/orthopaedic/disc-injury" },
      { name: "Best Joint Replacement Services in Pune", path: "/orthopaedic/join-replacement" },
      { name: "Best Knee Arthroscopy Services in Pune", path: "/orthopaedic/knee-arthroscopy" },
      { name: "Best Rotator Cuff Repair Services in Pune", path: "/orthopaedic/rotator-cuff-repair" },
    ],
  },
  {
    title: "Proctology",
    items: [
      { name: "Best Piles Services in Pune", path: "/proctology/piles" },
      { name: "Best Fissure Services in Pune", path: "/proctology/fissure" },
      { name: "Best Fistula Services in Pune", path: "/proctology/fistula" },
    ],
  },
];

const FooterPune = () => {
  return (
    <footer className="bg-gray-800 p-8 text-white">
      <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-8">
        Aapka Care Services In Pune
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {services.map((service, index) => (
          <div key={index} className="p-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">{service.title}</h2>
            <ul className="space-y-2">
              {service.items.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path} className="text-white hover:text-blue-400 transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default FooterPune;
