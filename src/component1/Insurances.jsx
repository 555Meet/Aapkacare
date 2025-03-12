import React from 'react';

const Insurances = () => {
    const insurances = [
        { name: "Acko Health Insurance", logo: "/images/hospital-img/acko.png" },
        { name: "Aditya Birla Health Insurance", logo: "/images/hospital-img/aditya-birla.png" },
        { name: "Bajaj Allianz", logo: "/images/hospital-img/bajaj-allianz.png" },
        { name: "Bharti AXA Health Insurance", logo: "/images/hospital-img/bharti-axa.png" },
        { name: "Cholamandalam MS Health Insurance", logo: "/images/hospital-img/cholamandalam.png" },
        { name: "Digit Health Insurance", logo: "/images/hospital-img/digit.png" },
        { name: "Edelweiss Health Insurance", logo: "/images/hospital-img/edelweiss.png" },
        { name: "Future Generali Health Insurance", logo: "/images/hospital-img/future-generali.png" },
        { name: "HDFC Ergo", logo: "/images/hospital-img/hdfc-ergo.png" },
        { name: "ICICI Lombard", logo: "/images/hospital-img/icici-lombard.png" },
        { name: "IFFCO Tokio Health Insurance", logo: "/images/hospital-img/iffco-tokio.png" },
        { name: "Kotak Health Insurance", logo: "/images/hospital-img/kotak.png" },
        { name: "Liberty Health Insurance", logo: "/images/hospital-img/liberty.png" },
        { name: "Manipal Cigna Health Insurance", logo: "/images/hospital-img/manipal-cigna.png" },
        { name: "Max Bupa Health Insurance", logo: "/images/hospital-img/max-bupa.png" },
        { name: "National Insurance", logo: "/images/hospital-img/national.png" },
        { name: "New India Assurance", logo: "/images/hospital-img/new-india.png" },
        { name: "Navi General", logo: "/images/hospital-img/navi.png" },
        { name: "Oriental Insurance", logo: "/images/hospital-img/oriental.png" },
        { name: "Raheja QBE", logo: "/images/hospital-img/raheja-qbe.png" },
        { name: "Reliance General Insurance", logo: "/images/hospital-img/reliance.png" },
        { name: "Royal Sundaram General Insurance", logo: "/images/hospital-img/royal-sundaram.png" },
        { name: "SBI Health Insurance", logo: "/images/hospital-img/sbi.png" },
        { name: "Shriram General Insurance", logo: "/images/hospital-img/shriram.png" },
        { name: "Star Health Insurance", logo: "/images/hospital-img/star.png" },
        { name: "TATA AIG Health Insurance", logo: "/images/hospital-img/tata-aig.png" },
        { name: "United India Insurance", logo: "/images/hospital-img/united-india.png" },
        { name: "Universal Sompo", logo: "/images/hospital-img/universal-sompo.png" }
      ];
    return (
        <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {insurances.map((insurance, index) => (
          <div key={index} className="flex items-center space-x-4 p-4 rounded-lg shadow-sm hover:shadow-md">
            <img src={`${insurance.logo}`} alt={insurance.name} className="w-15 h-15 object-contain" />
            <span className="text-gray-800 font-medium">{insurance.name}</span>
          </div>
        ))}
        </div>
        </div>
    );
}

export default Insurances;
