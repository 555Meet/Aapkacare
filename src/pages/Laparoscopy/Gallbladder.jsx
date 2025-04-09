import React from 'react';
import MainTop from '../../component1/main-top';
import Check from '../../component1/check';
import BestSurgary from '../../component1/best-surgary';
import ReactUs from '../../component1/react-us';
import LastImages from '../../component1/last-images';

const Gallbladder = () => {
    return (
        <>
            <MainTop/>
            <div className="mx-auto p-6 max-w-7xl">
                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center gap-5">
                    <div className=" flex-1 w-full md:w-1/2 ">
                        <h1 className="text-3xl font-bold">Affordable Gallbladder Stone Surgery in Pune </h1>
                        <p className="text-gray-600 mt-2">Gallbladder stones (cholelithiasis) can be silent or cause unbearable pain if they get stuck. Our gallstone specialists in Pune use gallstone surgery (cholecystectomy) to resolve the condition effectively. Consult the best gallstone surgeons in Pune using advanced techniques for gallstone treatment.
                        </p>
                        <Check/>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-blue-600 mt-4 md:mt-0">
                        <BestSurgary/>
                    </div>
                </section>

                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className="flex-1 ">
                        <h2 className="text-2xl font-bold mb-2">What Is A Gallbladder Stone?</h2>
                        <p className="text-gray-700">Gallbladder stones, also known as gallstones or cholelithiasis, are solid particles that form in the gallbladder, a small organ located just beneath the liver. The gallbladder's primary function is to store bile, a digestive fluid produced by the liver, and release it into the small intestine to help digest the fats needed. A gallstone can vary in size from tiny grains of sand to larger, golf ball-sized stones. They primarily comprise cholesterol or bilirubin, a pigment produced when red blood cells break down.</p>
                    </div>
                    <div className="flex-1 flex justify-center mt-4 md:mt-0">
                        <img src="/images/laparoscopy/Gallbladder -1.png" alt="Cataract illustration" className="w-[425px] h-[325px]"/>
                    </div>
                </section>

                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className="flex-1 ">
                        <h2 className="text-2xl font-bold mb-2">Treatment</h2>
                        <h2 className='text-xl font-bold mb-4'>Diagnosis</h2>
                        <p className='mb-4'>Diagnosis and treatment of gallbladder stones typically involve a combination of medical evaluation, imaging tests, and, in some cases, medical surgery intervention. Here's an overview of the process</p>
                            <ul class="list-disc pl-5 mb-4">
                                <li class="mb-2">
                                    <strong>Medical History and Physical Examination:</strong>
                                    The doctor will begin by taking a detailed medical history and conducting a physical examination. They will ask about your symptoms, including abdominal pain, digestive issues, or jaundice. 
                                </li>
                                <li class="mb-2">
                                    <strong>Blood Test:</strong>
                                    A blood test may be ordered to check for elevated liver enzyme and bilirubin levels. 
                                </li>
                                <li class="mb-2">
                                    <strong>Imaging Tests:</strong>
                                    Various imaging studies can help confirm the presence of gallstones and assess the severity of the condition. Standard imaging tests are: Ultra Sound, CT Scan, MRI, HIDA Scan
                                </li>
                            </ul>
                    </div>
                    <div className="flex-1 flex justify-center mt-4 md:mt-0">
                        <img src="/images/laparoscopy/Gallbladder-2.png" alt="Cataract illustration" className="w-[425px] h-[325px]"/>
                    </div>
                </section>
            </div>
            <div className="container max-w-full space-y-10">
            {/* Section 1 */}
                <div className="bg-[#E4F4FD] w-full flex flex-col md:flex-row items-center px-5 md:px-20 py-8 gap-6">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-2xl font-bold mb-4 text-gray-800">Surgery (Cholecystectomy)</h1>
                        <p className="text-md text-gray-700 text-justify">If gallstone is causing symptoms or complications, the most common treatment is the surgical removal of the gallbladder, known as cholecystectomy. This procedure can be performed using minimally invasive laparoscopic techniques or open surgery, depending on the patient’s condition. Treatment choice depends on the specific circumstances, including the size and location of the stone, the severity of symptoms, and the patient’s overall health. It’s essential to consult with a healthcare provider for a proper evaluation and individualized treatment plan. Left untreated, gallstones can lead to potentially serious complications.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img alt="Surgeons performing a cholecystectomy" className="rounded-lg w-full max-w-[400px] p-2 md:p-6" src="/images/laparoscopy/Gallbladder1-1.png" />
                    </div>
                </div>

            {/* Section 2 */}
                <div className="bg-white w-full flex flex-col md:flex-row items-center px-5 md:px-20 py-8 gap-6">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img alt="Surgeons performing laparoscopic surgery" className="rounded-lg w-full max-w-[500px] p-2 md:p-6" src="/images/laparoscopy/Gallbladder1-2.png" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Best Treatment for Gallstone in Pune at Aapka Care</h2>
                        <p className="text-lg text-gray-700 text-justify">Laparoscopy is the best treatment for gallstones in Pune, even if it involves the removal of the gallbladder. At Aapka Care, we offer top surgeons and facilities at reasonable prices. With a 90% success rate, our process is hassle-free from appointments to surgery. For gallstone treatment in Pune, Aapka Care is one of the best healthcare services. Book an appointment today and consult with our specialists.
                        </p>
                    </div>
                </div>

            {/* Section 3 */}
                <div className="bg-[#E4F4FD] w-full flex flex-col md:flex-row items-center px-5 md:px-20 py-8 gap-6">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-2xl font-bold mb-4 text-gray-800">Surgery Cholecystectomy</h1>
                        <p className="text-md text-gray-700 text-justify">If gallstone is causing symptoms or complications, cholecystectomy is often necessary. This surgical procedure may be done laparoscopically or through open surgery depending on the patient. Consult a healthcare provider for evaluation. Untreated gallstones may cause severe issues.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img alt="Surgeons performing a cholecystectomy" className="rounded-lg w-full max-w-[400px] p-2 md:p-6" src="/images/laparoscopy/Gallbladder1-3.png" />
                    </div>
                </div>

            {/* Section 4 */}
                <div className="bg-white w-full flex flex-col md:flex-row items-center px-5 md:px-20 py-8 gap-6">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-2xl font-bold mb-4 text-gray-800">Surgery Cholecystectomy</h1>
                        <p className="text-md text-gray-700 text-justify">Gallstones can lead to complications that require gallbladder removal (cholecystectomy). This can be done using laparoscopic techniques or open surgery depending on patient conditions. Early consultation is key to avoiding complications.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img alt="Surgeons performing a cholecystectomy" className="rounded-lg w-full max-w-[500px] p-2 md:p-6" src="/images/laparoscopy/Gallbladder1-4.png" />
                    </div>
                </div>
            </div>
            <div className="bg-[#E4F4FD] w-full px-5 md:px-20 py-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Left Image Section */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                        <img
                            alt="Surgeons"
                            className="rounded-lg w-full max-w-[500px] h-auto"
                            src="/images/laparoscopy/Gallbladder1-2.png"
                        />
                    </div>

                {/* Right Content Section */}
                    <div className="w-full md:w-1/2">
                        <h1 className="text-2xl font-bold mb-4">Prevention of Gallbladder Stones</h1>
                        <h3 className="font-bold mb-4">
                        It is mostly our lifestyle that increases the risk of gallbladder stone formation. Therefore, you can prevent gallstones by making the following changes in your daily life:
                        </h3>

                        <ul className="list-disc pl-6 space-y-3 text-justify mb-4">
                            <li><strong>Do not skip meals - </strong>Try your best to stick with the usual meal times each day. Skipping meals can cause excess bile secretion and deposition.
                            </li>
                            <li><strong>Lose weight slowly - </strong>Being overweight is a risk factor for gallstone development. Rapid weight loss can cause the liver to secrete extra cholesterol, increasing the risk of gallstones.
                            </li>
                            <li><strong>Eat high-fiber foods - </strong>Foods rich in fiber help reduce bad cholesterol and keep the digestive system moving, aiding in bile removal.
                            </li>
                            <li><strong>Exercise regularly - </strong>Physical activity promotes digestion and prevents bile buildup. Even moderate movement helps—avoid a sedentary lifestyle.
                            </li>
                            <li><strong>Take prescribed medications - </strong>Those at higher risk due to heredity or medical conditions may take preventive medicines after consulting a doctor.
                            </li>
                        </ul>

                        <p className="text-gray-700">You can talk to a gallstone specialist to find out what else you can do to prevent gallstones.
                        </p>
                    </div>
                </div>
            </div>
            <div className='max-w-full h-5 bg-white'></div>
            
            <ReactUs/>
            <LastImages/>  
        </>
    );
}

export default Gallbladder;
