import React from 'react';
import MainTop from '../../component1/main-top';
import Check from '../../component1/check';
import BestSurgary from '../../component1/best-surgary';
import ReasonCard from '../../component1/ReasonCard';
import ReactUs from '../../component1/react-us';
import LastImages from '../../component1/last-images';

const DiscInjury = () => {
    const reasons = [
        {
          icon: "/images/cosmetic/c-m-1.png",
          title: "Back Pain ",
          description: "A persistent, dull, or sharp pain in the lower back or neck"
        },
        {
          icon: "/images/cosmetic/c-m-1.png",
          title: "Leg or Arm Pain ",
          description: "Radiating pain down the legs (sciatica) or arms"
        },
        {
          icon: "/images/cosmetic/c-m-1.png",
          title: "Numbness and Weakness ",
          description: "Tingling or weakness in the extremities"
        },
        {
          icon: "/images/cosmetic/c-m-1.png",
          title: "Limited Mobility ",
          description: "Difficulty bending, lifting, or standing for extended periods"
        },
        {
            icon: "/images/cosmetic/c-m-1.png",
            title: "Bowel or Bladder Problems ",
            description: "In severe cases, disc injuries can lead to losing control over bowel or bladder functions."
        }
    ];
    return (
        <>
            <MainTop/>
            <div className="mx-auto p-6 max-w-7xl">
                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center gap-5">
                    <div className=" flex-1 w-full md:w-1/2 ">
                        <h1 className="text-3xl font-bold">Affordable Disc Surgery in Pune </h1>
                        <p className="text-gray-600 mt-2">Want to go Disc replacement surgery and have a healthy life at an affordable price with the best doctors in Pune? Get all kinds of Varicocele consultations for your surgery. Here at Aapkacare Health, we will provide the best surgeons 
                        </p>
                        <p className="text-gray-600 mt-2">Welcome to Aapkacare, your trusted source for information about hip replacement surgery, experienced doctors, and post-treatment care. If you or a loved one is experiencing hip pain, limited mobility, and other signs and symptoms of hip problems, you're in the right place. We're here to provide you with valuable insights and guidance to help you make informed decisions regarding your hip health.
                        </p>
                        <Check/>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-blue-600 mt-4 md:mt-0">
                        <BestSurgary/>
                    </div>
                </section>
            </div>
            <div className="max-w-full mx-auto p-6 bg-[#E2F2FD] md:px-30 px-0 rounded-lg">
                <h2 className="text-center text-3xl font-bold mb-2">Signs of Disc Injury </h2>
                <p className="text-center text-xl mb-4">Disc injuries often present with various signs and symptoms. These can include </p>
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-1 gap-6 text-center">
                    {reasons.slice(0, 4).map((reason, index) => (
                        <ReasonCard key={index} {...reason} />
                    ))}
                </div>
            </div>

            <div className="container max-w-full space-y-10">
            {/* Section 1 */}
                <div className="bg-white w-full flex flex-col md:flex-row items-center px-5 md:px-30 py-8 gap-6">
                    <div className="w-full md:w-1/2">
                        <h1 class="text-4xl font-bold mb-4">When to Seek Treatment  </h1>
                        <p class="text-xl mb-4">If you experience any of the signs mentioned above, it is crucial to seek prompt medical attention. Early diagnosis and treatment can prevent the condition from worsening and reduce the need for surgery. 
                        </p>
                        <h1 className='text-3xl mb-4'>Treatment Options </h1>
                        <ul className='list-disc pl-5 mb-4 text-xl'>
                            <li><span className='font-bold'>Conservative Treatment: </span>Non-surgical options include rest, physical therapy, pain management, and anti-inflammatory medications. </li>
                            <li><span className='font-bold'>Conservative Treatment: Surgical Treatment: </span>In cases where conservative methods are ineffective or if there is significant nerve compression, surgery may be necessary.</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img alt="Surgeons performing a cholecystectomy" className="rounded-lg w-full max-w-[400px] p-2 md:p-6" src="/images/orthopaedic/o-d-1.png" />
                    </div>
                </div>

            {/* Section 2 */}
                <div className="bg-[#E4F4FD] w-full flex flex-col md:flex-row items-center px-5 md:px-30 py-8 gap-6">
                    <div className="w-full md:w-1/2">
                        <h1 class="text-4xl font-bold mb-4">Types of Disc Surgery  </h1>
                        <p class="text-xl mb-4">When surgery becomes the preferred option, several procedures can be considered:  
                        </p>
                        <ul className='list-disc pl-5 mb-4 text-xl'>
                            <li><span className='font-bold'>Conservative Treatment: Discectomy: </span>This surgery involves removing the damaged portion of the disc. </li>
                            <li><span className='font-bold'>Conservative Treatment: Surgical Treatment: Laminectomy: </span>Involves removing the lamina (the back part of the vertebra) to relieve pressure on the nerve </li>
                            <li><span className='font-bold'>Spinal Fusion: </span>This procedure fuses two or more vertebrae to stabilize the spine. </li>
                            <li><span className='font-bold'>Laminectomy: Artificial Disc Replacement: </span>Replace the damaged disc with an artificial one, maintaining flexibility.</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img alt="Surgeons performing laparoscopic surgery" className="rounded-lg w-full max-w-[500px] max-h-[500px] p-2 md:p-6" src="/images/docter.png" />
                    </div>
                </div>
            </div>
            <div className='container max-w-full'>
                <div className='bg-white w-full md:px-30 px-5 md:py-10 py-5'>
                    <h1 class="text-4xl font-bold mb-4">How Disc Surgery Works</h1>
                    <p class="text-xl mb-4">Disc surgeries are typically performed under general anesthesia. Minimally invasive techniques are becoming more common, reducing recovery time and scarring. Your surgeon will discuss the best approach for your specific case.</p>
                </div>
            </div>
            <div class="w-full bg-[#E2F2FD]">
                <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:px-10 px-5 gap-6 md:py-10 py-5">
                    <img
                        alt="Surgeons performing a cholecystectomy"
                        class="rounded-lg w-full max-w-[500px] max-h-[500px] p-2 md:p-6"
                        src="/images/laparoscopy/Gallbladder1-2.png"
                    />
                    <div class="flex flex-col flex-1">
                        <h1 class="text-4xl font-bold mb-4">Benefits of Disc Surgery</h1>
                        <ul class="list-disc pl-5 mb-4 text-xl">
                            <li><span class="font-bold">Pain Relief:</span> This surgery can provide rapid relief from severe pain and discomfort.</li>
                            <li><span class="font-bold">Improved Mobility:</span> Many patients experience increased mobility and a return to regular activities.</li>
                            <li><span class="font-bold">Prevention of Nerve Damage:</span> Surgery can prevent further nerve damage, ensuring a better long-term outcome.</li>
                            <li><span class="font-bold">Enhanced Quality of Life:</span> Surgery can significantly improve your overall quality of life by addressing the underlying issue.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='bg-white w-full md:px-30 px-5 md:py-10 py-5'>
                <h1 class="text-4xl font-bold mb-4">Aapkacare: Your Partner in Recovery </h1>
                <p class="text-xl mb-4"><span className='font-bold'>Aapkacareis </span>committed to providing you with the best possible care and support throughout your recovery from a disc injury. Our experienced medical professionals will guide you through the treatment options, including surgery, and provide personalized care that meets your needs. </p>
                <p class="text-xl mb-4">Disc injuries are a common source of pain and discomfort, but you can regain your quality of life with timely and appropriate treatment. Aapkacare is here to assist you on your path to recovery. If you have any questions or concerns about disc injuries, cure, or surgery, please don't hesitate to contact us. Your health and well-being are our top priorities.</p>
            </div>
            <ReactUs/>
            <LastImages/>
        </>
    );
}

export default DiscInjury;
