import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../component/Pagination";
import { FaUser, FaClock, FaFolder, FaComments } from "react-icons/fa"

const itemsPerPage = 12;

const blogData =[
  {
    id:1,
    title:"What is Bariatric surgery? Shedding Pounds, Gaining a Life: A Guide to Bariatric Surgery",
    image:"/images/Blog/1.png",
    description:"What is Bariatric surgery?Shedding Pounds, Gaining a Life: A Guide to Bariatric Surgery l..."
  },
  {
    id:2,
    title:"Best Liver Transplant Hospitals in India - Updated List 2024 ",
    image:"/images/Blog/2.png",
    description:"Written by Aapka Care team, last updated on 16 September 2024 "
  },
  {
    id:3,
    title:"Breast Cancer Pictures - Types of Breast Cancer Lumps Images ",
    image:"/images/Blog/3.png",
    description:"Written by Aapka Care Team 15 min read Quick Summary Breast cancer is...."
  },
  {
    id:4,
    title:"What Size of Ovarian Cyst is Dangerous? ",
    image:"/images/Blog/4.png",
    description:"What Size of Ovarian Cyst is Dangerous? Written by Aapka Care Team, last updated..."
  },
  {
    id:5,
    title:"Varicocele Surgery or Embolization: Which Is Better?",
    image:"/images/Blog/5.png",
    description:"If you or someone you know has been diagnosed with a varicocele, you might..."
  },
  {
    id:6,
    title:"Understanding the 7 Types of Arthritis That Affect the Knee ",
    image:"/images/Blog/6.png",
    description:"Arthritis is a condition that causes. inflammation and pain in the joints, and th..."
  },
  {
    id:7,
    title:"Understanding Bone Marrow Transplant Success Rates ",
    image:"/images/Blog/7.png",
    description:"Bone marrow transplants (BMT), also known as stem cell transplants, are lifesaving pro..."
  },
  {
    id:8,
    title:"Best Health Insurance Policy for Liver Transplant in India ",
    image:"/images/Blog/8.png",
    description:"Finding the right health insurance policy is crucial, especially when you need a compl..."
  },
  {
    id:9,
    title:"Best Liver Transplant Hospitals in India - Updated List for 2024 ",
    image:"/images/Blog/9.png",
    description:"The liver is a remarkable organ, silently performing over 500 different functions to k..."
  },
  {
    id:10,
    title:"Understanding Liver Transplant Success Rates in India ",
    image:"/images/Blog/10.png",
    description:"Introduction Liver transplants are life-saving procedures for people suffering from sever..."
  },
  {
    id:11,
    title:"What Is the Best Position to Pass a Kidney Stone? ",
    image:"/images/Blog/11.png",
    description:"Kidney Stones and Your Positioning: Imagine tiny, rough pebbles stuck in a narrow hallw..."
  },
  {
    id:12,
    title:"What is a Kidney Transplant? Advantages and disadvantages of kidney transplant? ",
    image:"/images/Blog/12.png",
    description:"Kidney transplant is a surgical procedure that involves replacing a diseased or failin... "
  },
  {
    id:13,
    title:"Immediate Relief from Kidney Stone Pain",
    image:"/images/Blog/13.png",
    description:"How to stop kidney stone pain immediately Kidney stones are small, hard mineral depo..."
  },
  {
    id:14,
    title:"How to Pass a Kidney Stone & 5 Tips to Prevent Them ",
    image:"/images/Blog/14.png",
    description:"Dealing with Kidney Stones: Passing the Pain and Preventing Future Ouchies Kidney ston..."
  },
  {
    id:15,
    title:"The Best Position to Pass a Kidney Stone ",
    image:"/images/Blog/15.png",
    description:"Kidney Stones and Your Positioning: Imagine tiny, rough pebbles stuck in a narrow hallw..."
  },
  {
    id:16,
    title:"10 Key aspects which causes hernia and it's recover options ",
    image:"/images/Blog/16.png",
    description:"Understanding Hernias: Causes, Symptoms, and Your Path to Recovery A hernia might s... "
  },
  {
    id:17,
    title:"Understanding Hernia Surgery: Types, Cost and Risk ",
    image:"/images/Blog/17.png",
    description:"Have you ever heard a gurgle in your belly or felt a bulge that... "
  },
  {
    id:18,
    title:"Hernia Surgery: What You Should Know",
    image:"/images/Blog/18.png",
    description:"Hernias happen when an organ or tissue pushes through a weak spot in the..."
  },
  {
    id:19,
    title:"Self-Care Practices for Mental Healt ",
    image:"/images/Blog/19.png",
    description:"Essential Practices for Nurturing Your Mental Wellbeing in our fast-paced world, it's easy..."
  },
  {
    id:20,
    title:"Seeking Professional Help for Anxiety: You Are Not Alone ",
    image:"/images/Blog/20.png",
    description:"Anxiety. It's a common word tossed around so casually that its true impact can.... "
  },
  {
    id:21,
    title:"When Worry Becomes Your World: Seeking Professional Help for Anxiety ",
    image:"/images/Blog/21.png",
    description:"When Worry Becomes Your World: Seeking Professional Help for Anxiety pen_spark An.."
  },
  {
    id:22,
    title:"Bariatric Surgery: Is It Covered Under Insurance? Cost Estimate In Cash ",
    image:"/images/Blog/22.png",
    description:"Decoding Bariatric Surgery: Insurance Coverage and Cost Estimates Bariatric sur..."
  },
  {
    id:23,
    title:"Examining how stress can contribute to anxiety and exploring effective stress management techniques: ",
    image:"/images/Blog/23.png",
    description:"Examining how stress can contribute to anxiety and exploring effective stress man..... "
  },
  {
    id:24,
    title:"Providing practical tips and techniques for coping with anxiety on a daily basis. ",
    image:"/images/Blog/24.png",
    description:"Providing practical tips and techniques for coping with anxiety on a daily basis. It's..."
  },
  {
    id:25,
    title:"Exploring the different types of anxiety disorders, their symptoms, and treatment options: ",
    image:"/images/Blog/25.png",
    description:"Exploring the different types of anxiety disorders, their symptoms, and treatment o..."
  },
  {
    id:26,
    title:"What is hernia? - Know the symptoms, causes and treatment of this disease ",
    image:"/images/Blog/26.png",
    description:"Understanding Hernia: Symptoms, Causes, and Treatments Explained Simply Hernia - i... "
  },
  {
    id:27,
    title:"What to Eat in Piles: Best and Worst Foods for Piles ",
    image:"/images/Blog/27.png",
    description:"What to Eat in Piles: Best and Worst Foods for Piles Piles, also known..."
  },
  {
    id:28,
    title:"5 Best Sunscreen Creams for Men in India ",
    image:"/images/Blog/28.png",
    description:"5 Best Sunscreen Creams for Men in India Sunscreen is important for everyone, includ..."
  },
  {
    id:29,
    title:"Calories in 10 Cashews: Carbs, Nutrition Facts & Benefits ",
    image:"/images/Blog/29.png",
    description:"Calories in 10 Cashews: Carbs, Nutrition Facts & Benefits Cashews are a popular nut..."
  },
  {
    id:30,
    title:"Boost Heart Health: Top 5 Homeopathic Artery Cleaning Medicine ",
    image:"/images/Blog/30.png",
    description:"Top 5 Homeopathic Remedies for Artery Cleaning Maintaining heart health is crucia..."
  },
  {
    id:31,
    title:"Top 10 Homeopathic Medicines for Thyroid Treatment ",
    image:"/images/Blog/31.png",
    description:"Top 10 Homeopathic Medicines for Thyroid Treatment Thyroid issues are common tod.."
  },
  {
    id:32,
    title:"5 Effective Tips to Repair Damaged Nerves Naturally ",
    image:"/images/Blog/32.png",
    description:"Nerves play a crucial role in our bodies, transmitting signals between the brain and... "
  },
  {
    id:33,
    title:"10 Best Yoga Asanas and Exercises for Thyroid ",
    image:"/images/Blog/33.png",
    description:"Thyroid problems are common and can cause various health issues like weight..."
  },
  {
    id:34,
    title:"Regular Eye Checkup: Importance, What to Expect and Benefits ",
    image:"/images/Blog/34.png",
    description:"Examining your eyes on a regular basis is an essential component of ensuring that...."
  },
  {
    id:35,
    title:"Precautions to Be Taken After Hernia Surgery ",
    image:"/images/Blog/35.png",
    description:"Introduction: Surgery to repair a hernia is a common procedure that is performed to...."
  },
  {
    id:36,
    title:"Top 10 Kidney Stone Pain Relief Tablets in India ",
    image:"/images/Blog/36.png",
    description:"Introduction: A common urological condition, kidney stones are characterised.."
  },
  {
    id:37,
    title:"Artificial Hymen Repair Kit Uses and Effectiveness ",
    image:"/images/Blog/37.png",
    description:"Artificial Hymen Repair Kit Uses and Effectiveness it has come to the attention o..."
  },
  {
    id:38,
    title:"Know How to Treat Joint Inflammation ",
    image:"/images/Blog/38.png",
    description:"Introduction: Inflammation of the joints, which is frequently connected with disorde..."
  },
  {
    id:39,
    title:"Understanding How Weight Affects Your Knees? ",
    image:"/images/Blog/39.png",
    description:"Introduction: To effectively manage knee pain and prevent debilitating conditions su... "
  },
  {
    id:40,
    title:"7 Types of Arthritis That Affect the Knee ",
    image:"/images/Blog/40.png",
    description:"The condition known as arthritis, which is characterised by inflammation of the joints..."
  },
  {
    id:41,
    title:"Hair Transplant Success Rate in India -Does It Work? ",
    image:"/images/Blog/41.png",
    description:"The cosmetic industry has been revolutionised by hair transplant procedure..."
  },
  {
    id:42,
    title:"How to Relieve Hip Pain While Sleeping at Night? ",
    image:"/images/Blog/42.png",
    description:"Understanding Hip Pain at Night Hip pain while sleeping can significantly disrupt the..."
  },
  {
    id:43,
    title:"HOW LONG IS BED REST AFTER KNEE REPLACEMENT?",
    image:"/images/Blog/43.png",
    description:"Introduction: Knee replacement surgery, which is also referred to as knee arthroplas..."
  },
  {
    id:44,
    title:"What is the biggest complaint after knee replacement?",
    image:"/images/Blog/44.png",
    description:"An increasing number of people are finding that knee replacement surgery, which is a... "
  },
  {
    id:45,
    title:"HOW TO PASS A KIDNEY STONE PREVENTO PREVENT THEM ",
    image:"/images/Blog/45.png",
    description:"Dealing with Kidney Stones: Passing the Pain and Preventing Future Ouchies Kidney ston..."
  },
  {
    id:46,
    title:"How to stop kidney stone pain immediately ",
    image:"/images/Blog/46.png",
    description:"Immediate Relief from Kidney Stone Pain: Kidney stones are small, hard mineral depo..."
  },
  {
    id:47,
    title:"How to pass a kidney stone & 5 tips to prevent them ",
    image:"/images/Blog/47.png",
    description:"Dealing with Kidney Stones: Passing the Pain and Preventing Future Ouchies Kidney ston..."
  },
  {
    id:48,
    title:"Types of Gallbladder Stone Surgery & Cost of Different ",
    image:"/images/Blog/48.png",
    description:"Gallbladder Woes? Understanding Gallstone Surgery: Gallstones can be a real pain, liter...."
  },
  {
    id:49,
    title:"Types of bariatric surgery?Comparing All Weight Loss Surgery Options: Sleeve Gastrectomy, Intragastric Balloon, an...",
    image:"/images/Blog/49.png",
    description:"Surgical treatments have become effective Instruments in the fight against obesity, as..."
  },
  {
    id:50,
    title:"On Maintaining Weight After Bariatric Surgery ",
    image:"/images/Blog/48.png",
    description:"Starting the process of bariatric surgery is a sign of a deep dedication to.."
  },
  {
    id:51,
    title:"The Role of Dieticians in Post Bariatric CareEmpowering Success: The Comprehensive Role of Dieticians in P...",
    image:"/images/Blog/51.png",
    description:"For those who are struggling with obesity, bariatric surgery is a life-changing proced..."
  },
  {
    id:52,
    title:"Decoding Bariatric Surgery: Insurance Coverage and Cost Estimates ",
    image:"/images/Blog/52.png",
    description:"Bariatric surgery has become increasingly popular in recent years, with many people... "
  },
  {
    id:53,
    title:"Weighing the Benefits and Risks of Bariatric Surgery ",
    image:"/images/Blog/53.png",
    description:"Being obese can be a very frustrating struggle. You might have made innumerab..."
  },
  {
    id:54,
    title:"Providing practical tips and techniques for coping with anxiety on a daily basis...",
    image:"/images/Blog/54.png",
    description:"It's normal to feel stressed and anxious on a daily basis in the fast-paced..."
  },
  {
    id:55,
    title:"Exploring the different types of anxiety disorders, their symptoms, and treatment options.",
    image:"/images/Blog/55.png",
    description:"Anxiety is a typical human emotion. It is that sensation of anxiety, trepidation, or..."
  },
  {
    id:56,
    title:"Exploring Weight Loss Options: Allurion Pills vs. Bariatric Surgery ",
    image:"/images/Blog/56.png",
    description:"Obesity has become a pressing global health concern, with traditional weight loss..."
  },
  {
    id:57,
    title:"Understanding Bariatric Surgery, Hospital Stay, and Recovery ",
    image:"/images/Blog/57.png",
    description:"For those who are battling with obesity, bariatric surgery is a strong tool. It..."
  },
  {
    id:58,
    title:"A Balloon in Your Belly? A Comprehensive Look into Intragastric Balloons for Weight Loss ",
    image:"/images/Blog/58.png",
    description:"For millions of people, the battle against the bulge is ongoing. When diet and..."
  },
  {
    id:59,
    title:"Allurion vs. Spatz: A Close Look at the Contestants for Weight Loss ",
    image:"/images/Blog/59.png",
    description:"The struggle to reduce the bulge can seem never-ending. Even while food and exercise...."
  },
  {
    id:60,
    title:"Latest technology without surgery or cuts to reduce weight (intragastric balloon) ",
    image:"/images/Blog/60.png",
    description:"Exploring Intragastric Balloons. The struggle to lose weight can seen never-ending. Exe..."
  },
  {
    id:61,
    title:"Difference between gastric bypass surgery/sleeve gastrectomy surgery/intragastric balloon ",
    image:"/images/Blog/61.png",
    description:"Comparing All Weight Loss Surgery Options: Sleeve Gastrectomy, Intragastric Balloon, a..."
  },
  {
    id:62,
    title:"Bariatric Surgery: Different types of procedures or surgeries you can go for if you are an obese ",
    image:"/images/Blog/62.png",
    description:"The prevalence of obesity has reached alarming levels globally, contributing to a..."
  },
  {
    id:63,
    title:"Bariatric Surgery: Is It Right for You? Understanding Obesity and Eligibility ",
    image:"/images/Blog/63.png",
    description:"Bariatric Surgery: Is It Right for You? Understanding Obesity and Eligibility For m... "
  },
  {
    id:64,
    title:"What is Bariatric surgery? Shedding Pounds, Gaining a Life: A Guide to Bariatric Surgery ",
    image:"/images/Blog/64.png",
    description:"What is Bariatric surgery?Shedding Pounds, Gaining a Life: A Guide to Bariatric Surgery I... "
  },
  {
    id:65,
    title:"The Complete Guide: What to Eat and Avoid After a Lasik Surgery ",
    image:"/images/Blog/65.png",
    description:"The Complete Guide What to Eat and Avoid After a Lasik Surgery Maintaining a..."
  },
];
const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = blogData.slice(startIndex, startIndex + itemsPerPage);

  return (
<div>
      <div className="p-6 min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-white rounded-lg shadow-lg">
          {currentItems.map((item) => (
            <Link
              key={item.id}
              to={`/blog/${item.id}`}
              className="p-4 border rounded-md shadow-md hover:shadow-lg bg-white"
            >
              <img src={item.image} alt={item.title} className="w-full h-32 object-cover rounded-md" />
              <h2 className="mt-4 mb-4 text-lg font-semibold">{item.title}</h2>
              <div className="grid grid-cols-2 gap-2 text-gray-500 text-sm mb-4">
                <div className="flex items-center">
                  <FaUser className="mr-1" />
                  DoctorAdmin
                </div>
                <div className="flex items-center">
                  <FaClock className="mr-1" />
                  17 Sep, 2024
                </div>
                <div className="flex items-center">
                  <FaFolder className="mr-1" />
                  Uncategorized
                </div>
                <div className="flex items-center">
                  <FaComments className="mr-1" />
                  0 Comments
                </div>
              </div>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <p className="text-gray-600 underline">Continue Reading →</p>
            </Link>
          ))}
        </div>

        {/* Hardcoded Pagination */}
        <Pagination currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>
    </div>
  );
};

export default Blog;
