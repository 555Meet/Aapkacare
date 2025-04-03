import React from 'react';

const UnderstandCauces = () => {
    return (
        <div className="bg-white font-roboto">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
                    Understand the Causes of Cataract
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
                    {causes.map((cause, index) => (
                        <div key={index}>
                            <img
                                alt={cause.alt}
                                className="mx-auto mb-4"
                                height="64"
                                src={cause.image}
                                width="64"
                            />
                            <h2 className="text-lg font-bold">{cause.title}</h2>
                            <p>{cause.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Data for causes
const causes = [
    {
        image: "/images/u-1.png",
        title: "Aging",
        description:
            "Aging is the most common cause of cataracts. The proteins in your eye’s lens can clump together as you age, causing cataracts.",
        alt: "Illustration of aging process",
    },
    {
        image: "/images/u-2.png",
        title: "Ultraviolet (UV) Radiation",
        description: "Prolonged and excessive exposure to UV radiation from the sun.",
        alt: "Illustration of UV radiation",
    },
    {
        image: "/images/u-3.png",
        title: "Uveitis",
        description: "Inflammation of the uvea (the eye’s middle layer) can increase the risk of cataracts.",
        alt: "Illustration of uveitis",
    },
    {
        image: "/images/u-4.png",
        title: "Smoking",
        description: "Smoking and exposure to smoke can increase the risk of cataracts.",
        alt: "Illustration of smoking",
    },
    {
        image: "/images/u-5.png",
        title: "Diabetes",
        description:
            "People with diabetes have a higher risk of developing cataracts. This is due to changes in the eye’s lens because of increased sugar levels.",
        alt: "Illustration of diabetes",
    },
    {
        image: "/images/u-6.png",
        title: "Eye Injuries",
        description: "Injuries to the eyes can increase the risk of developing cataracts.",
        alt: "Illustration of eye injuries",
    },
];

export default UnderstandCauces;
