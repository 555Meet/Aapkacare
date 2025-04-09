import { useState } from "react";
import { ChevronRight } from "lucide-react";
import MainTop from '../../component1/main-top';
import Check from '../../component1/check';
import BestSurgary from '../../component1/best-surgary';
import ReasonCard from '../../component1/ReasonCard';
import FAQvascular from '../../component1/FAQvascular';
import ReactUs from '../../component1/react-us';
import LastImages from '../../component1/last-images';


const Varicocele = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
      {
        title: 'Grade 1 Varicocele: ',
        content: `A grade 1 varicocele is the mildest form of varicocele and is often not visible or palpable.It is detected only through imaging studies, such as ultrasound.While grade 1 varicocele may not require treatment, it is important to monitor the condition as it can progress over time.If it begins to cause pain or affect fertility, treatment options can be discussed with a healthcare provider. `
      },
      {
        title: 'Grade 2 Varicocele: ',
        content: `A grade 2 varicocele is a type of varicocele that is more noticeable and can be felt during a physical exam. The veins in the scrotum are larger and more twisted than in grade 1 varicocele, and may cause some discomfort or pain. While it may not always require treatment, it can affect fertility in some cases. `,
      },
      {
        title: 'Grade 3 Varicocele: ',
        content: `A grade 3 varicocele is the most severe type of varicocele, characterised by large, twisted veins that are easily visible and palpable.It can cause significant pain and discomfort, and affect fertility. The treatment options may include surgical procedures or minimally invasive techniques like embolization to redirect blood flow away from the affected veins.`,
      }
    ];
    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
    const reasons = [
        {
          icon: "/images/vascular/v-1.png",
          title: "Dull Ache ",
          description: "A persistent, dull pain or discomfort in the scrotum, which may worsen with physical activity or extended periods of standing. "
        },
        {
          icon: "/images/vascular/v-2.png",
          title: "Infertility ",
          description: "Varicoceles can interfere with sperm production and quality, potentially leading to male Infertility."
        },
        {
          icon: "/images/vascular/v-3.png",
          title: "Testicular Atrophy ",
          description: "In some cases, untreated varicoceles can result in the shrinkage of the affected testicle."
        }
    ];
    const reasons1 = [
        {
          icon: "/images/vascular/vv-1.png",
          description: "Genetics"
        },
        {
          icon: "/images/vascular/vv-1.png",
          description: "Anatomical abnormalities"
        },
        {
          icon: "/images/vascular/vv-1.png",
          description: "Increased pressure in the abdomen"
        }
    ];
    return (
        <>
            <MainTop/>
            <div className="mx-auto p-6 max-w-7xl">
                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center gap-5">
                    <div className=" flex-1 w-full md:w-1/2 ">
                        <h1 className="text-3xl font-bold">Affordable Varicocele Treatment in Pune </h1>
                        <p className="text-gray-600 mt-2">Want to go through Varicocele surgery and have a healthy life at an affordable price with the best doctors in Pune? Get all kinds of Varicocele consultations for your surgery. Here at Aapkacare Health, we will provide the best surgeons for all your healthcare needs.</p>
                        <Check/>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-blue-600 mt-4 md:mt-0">
                        <BestSurgary/>
                    </div>
                </section>
      
                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className="flex-1 ">
                        <h2 className="text-2xl font-bold mb-2">What is Varicocele? </h2>
                        <p className="text-gray-700">Varicocele is characterized by the enlargement of veins within the scrotum, similar to varicose veins in the legs. While many varicoceles do not cause any symptoms, they can be associated with male infertility and discomfort. Effective treatment options are available to manage this condition, with surgeries performed by skilled doctors at Aapkacare.</p>
                    </div>
                    <div className="flex-1 flex justify-center mt-4 md:mt-0">
                        <img
                            src="/images/vascular/v-main.png"
                            alt="Cataract illustration"
                            className="w-[625px] h-[325px]"
                        />
                    </div>
                </section>
            </div>
            <div className="max-w-full mx-auto p-6 bg-[#E2F2FD] md:px-30 px-0 rounded-lg">
                <h2 className="text-center text-3xl font-bold mb-6">Identify the Signs of Varicocele </h2>
                <p className="text-xl mb-4">Varicoceles are often discovered during a routine physical exam or fertility evaluation. However, some individuals may experience the following signs and symptoms: </p>
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 gap-6 text-center">
                    {reasons.slice(0, 3).map((reason, index) => (
                        <ReasonCard key={index} {...reason} />
                    ))}
                </div>
            </div>
            <div className="max-w-full mx-auto p-6 bg-white md:px-30 px-0 rounded-lg">
                <h2 className="text-center text-3xl font-bold mb-6">Understand the Causes of Varicocele </h2>
                <p className="text-xl mb-4">A varicocele is an enlargement of veins inside the scrotum. The exact cause of varicoceles is not fully understood, but it is believed to occur when the valves inside the spermatic veins are not functioning properly. This can lead to a backup of blood in the veins, causing them to become enlarged and resulting in varicocele. Other potential causes of varicoceles include:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 gap-6 text-center">
                    {reasons1.slice(0, 3).map((reason, index) => (
                        <ReasonCard key={index} {...reason} />
                    ))}
                </div>
            </div>

            <div className='container mx-auto flex flex-col md:flex-row items-center md:items-start'>
                <div className='flex flex-1/2 rounded-lg p-4'>
                    <div className="w-full max-w-3xl md:mx-14 mx-auto p-4">
                    <h1 className="font-bold text-3xl mb-4">Different Types of Varicoceles</h1>
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-gray-300 rounded-lg mb-2">
                                <button
                                    className="w-full flex justify-between items-center p-4 text-gray-800 font-medium"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    {faq.title}
                                    <ChevronRight
                                        className={`transform transition-transform ${
                                            openIndex === index ? "rotate-90" : ""
                                        }`}
                                    />
                                </button>
                                {openIndex === index && faq.content && (
                                    <div className="p-4 text-gray-600 bg-gray-100 rounded-b-lg">
                                        {faq.content.split("\n").map((line, i) => (
                                            <p key={i} className="mb-2">
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-full md:w-1/3 mt-0 md:mt-8 md:ml-4'>
                    <img src="/images/vascular/v-v-1.png" alt="photo" className='h-[325px] w-[500px] rounded'/>
                </div>
            </div>


            <div className="w-full bg-[#E4F4FD]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:px-10 px-5 py-6">
                    <div className="flex justify-center flex-1">
                        <img
                            alt="Surgeons"
                            className="rounded-lg w-[400px] h-[350px] object-cover"
                            src="/images/proctology/p-2f-2.png"
                        />
                    </div>
                    <div className="flex flex-col justify-center flex-1">
                        <h2 class="text-2xl font-bold mb-4">Expert Doctors </h2>
                        <p class="text-lg">At Aapkacare, we have a network of highly skilled doctors who specialize in treating varicocele. Our doctors are dedicated to providing personalized care tailored to your specific needs. They will work with you to determine the most appropriate treatment plan, which may include varicocele surgeries. 
                        </p>
                        <h2 class="text-2xl font-bold mb-4">Contact Us Today </h2>
                        <p class="text-lg">If you're experiencing discomfort, pain, or infertility due to varicocele, don't hesitate to seek treatment. Contact Aapkacare to connect with a knowledgeable doctor who can provide you with the right varicocele treatment plan, including varicocele surgeries. Your health and well-being are our top priorities. 
                        </p>
                        <p class="text-lg">Please schedule an appointment today with our expert doctors and take the first step toward a more comfortable and healthier future.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:px-10 px-5 py-6">
                    <div className="flex flex-col justify-center flex-1">
                        <h1 class="text-2xl font-bold mb-4">When is consultation with the doctor needed? </h1>
                        <p class="text-md mb-4">The patient can visit the doctor if he/she is facing any kind of discomfort, such as: 
                        </p>
                        <ul className='list-disc pl-5 mb-4'>
                            <li>Pain in the abdominal area </li>
                            <li>Inflammation or swelling </li>
                            <li>Infection in the incision area</li> 
                            <li>Bleeding </li>
                        </ul>
                    </div>
                    <div className="flex justify-center flex-1">
                        <img
                            alt="Surgeons"
                            className="rounded-lg w-[400px] h-[350px] object-cover"
                            src="/images/laparoscopy/Gallbladder1-4.png"
                        />
                    </div>
                </div>
            </div>

            <div className="mx-auto p-6 max-w-full bg-[#E4F4FD]">
                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center gap-15 max-w-7xl">
                    <div className=" flex-1 w-full md:w-1/2 ">
                    <h2 className="text-3xl font-bold mb-4 md:ml-20 ml-5">Surgeries for Varicocele Treatment </h2>
                    <p className="mb-2 md:ml-20 ml-5">At Aapkacare, our experienced doctors offer surgical solutions to treat varicoceles. The primary surgical options for varicocele treatment include: </p>
                    <FAQvascular/>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-blue-600 mt-4 md:mt-0">
                        <img src="/images/vascular/v-v-2.png" alt="photo" className='h-[325px] w-[500px] rounded'/>
                    </div>
                </section>
            </div>    

            <div className="h-5 bg-white"></div>
            <ReactUs/>
            <LastImages/>
        </>
    );
}

export default Varicocele;
