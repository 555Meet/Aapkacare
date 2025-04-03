import React from 'react';
import MainTop from '../../component1/main-top';
import BestSurgary from '../../component1/best-surgary';
import Check from '../../component1/check';
import ReasonsForLasik from '../../component1/container';
import UnderstandCauces from '../../component1/understandCauces';
import Expert from '../../component1/expert';
import FAQAccordion from '../../component1/FAQAccordion';
import ReactUs from '../../component1/react-us';
import LastImages from '../../component1/last-images';


const Cataract = () => {
    
    return (
    <>
    <MainTop/>
    <div className="mx-auto p-6 max-w-7xl">
      <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center gap-5">
        <div className=" flex-1 w-full md:w-1/2 ">
        <h1 className="text-3xl font-bold">Affordable Cataract Surgery in Pune</h1>
        <p className="text-gray-600 mt-2">
          Reasonable and most affordable Cataract surgery in your city, Pune, by
          the best ophthalmologists. With Aapkacare Health, we will make it
          easy for you to attain the surgery with the best femtosecond
          laser-assisted cataract surgery (FLACS) to remove your cataract. We
          will provide medical advice, clinical support, and healthcare
          solutions.
        </p>
        <Check/>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-blue-600 mt-4 md:mt-0">
          <BestSurgary/>
        </div>
      </section>
      
      <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
        <div className="flex-1 ">
          <h2 className="text-2xl font-bold mb-2">What is a Cataract?</h2>
          <p className="text-gray-700">
            Cataract is a medical condition that affects the eye’s lens due to
            the building up of proteins, making them cloudy and opaque. Our eye’s
            lens is a transparent disc that allows the light to pass through it
            and focus on the retina. When a cataract forms, it obstructs the
            passage of light, which leads to blurred and distorted vision. People
            with cataracts often find it difficult to see at night due to unclear
            vision.
          </p>
        </div>
        <div className="flex-1 flex justify-center mt-4 md:mt-0">
          <img
            src="/images/big-eyes.png"
            alt="Cataract illustration"
            className="w-[625px] h-[325px]"
          />
        </div>
      </section>
    </div>
    <ReasonsForLasik/>
    <UnderstandCauces/>
    <Expert/>
    <FAQAccordion/>
    <ReactUs/>
    <LastImages/>
    </>
    );
}

export default Cataract;
