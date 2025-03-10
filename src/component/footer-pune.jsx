import React from 'react';

const services2 = [
    {
      title: "Ophthalmology",
      items: [
        "Best Cataract Services in Mumbai",
        "Best Lasik Surgery Services in Mumbai"
      ]
    },
    {
      title: "Laparoscopy",
      items: [
        "Best Hernia Services in Mumbai",
        "Best Appendicitis Services in Mumbai",
        "Best Gallbladder stone Services in Mumbai"
      ]
    },
    {
      title: "Urology",
      items: [
        "Best Circumcision Services in Mumbai",
        "Best Kidney Stone Services in Mumbai",
        "Best Hydrocele Services in Mumbai",
        "Best Frenuloplasty Services in Mumbai",
        "Best Kidney Transplant Services in Mumbai",
        "Best Prostate enlargement Services in Mumbai"
      ]
    },
    {
      title: "Best Cosmetic",
      items: [
        "Best Gynecomastia Services in Mumbai",
        "Best Lipoma Services in Mumbai",
        "Best Mole Removal Services in Mumbai"
      ]
    },
    {
      title: "Orthopaedic",
      items: [
        "Best Hip replacement Services in Mumbai",
        "Best Knee replacement Services in Mumbai",
        "Best ACL tear Services in Mumbai",
        "Best Disc injury Services in Mumbai",
        "Best Joint replacement Services in Mumbai",
        "Best Knee Arthroscopy Services in Mumbai",
        "Best Rotator cuff repair Services in Mumbai"
      ]
    },
    {
      title: "Proctology",
      items: [
        "Best Piles Services in Mumbai",
        "Best Fissure Services in Mumbai",
        "Best Fistula Services in Mumbai"
      ]
    }
  ];
const FooterPune = () => {
    return (
    <div className="bg-gray-800 p-8 text-white">
      <h1 className="text-4xl font-bold text-left ml-7 mb-8">Aapka Care Services In Pune</h1>
      <div className="grid grid-cols-1 md:grid-cols-6">
        {services2.map((service, index) => (
          <div key={index} className="p-6">
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <ul className="list-disc pl-5">
              {service.items.map((item, idx) => (
                <li key={idx} className="mb-2">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    );
}

export default FooterPune;
