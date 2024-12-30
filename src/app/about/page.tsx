import React from "react";
import HeroImg from "@/components/HeroImg";
import {
  RiRidingFill,
  RiUserHeartFill,
  RiStarHalfFill,
  RiVidiconFill,
  RiVipCrown2Fill,
  RiSendPlaneFill,
} from "react-icons/ri";
const infoData = [
  {
    icon: <RiUserHeartFill size={20} />,
    text: "Mr. Saad Mehmood",
  },
  {
    icon: <RiSendPlaneFill size={20} />,
    text: "+91 97 73 83 47 96",
  },
  {
    icon: <RiVidiconFill size={20} />,
    text: "mehmoodsaad347@gmail.com",
  },
  {
    icon: <RiVipCrown2Fill size={20} />,
    text: "Born on 15 march,2003",
  },
  {
    icon: <RiStarHalfFill size={20} />,
    text: "Bachelor Degree (BCA)",
  },
  {
    icon: <RiRidingFill size={20} />,
    text: "Okhla New Delhi, Delhi, India",
  },
];

const About = () => {
  return (
    <section className="pb-12 min-h-screen xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="relative flex max-xl:justify-center max-xl:items-center ">
            <HeroImg
              containerStyles="w-[480px]  h-[280px] max-sm:h-[220px] lg:w-[520px] lg:h-[300px] bg-no-repeat relative"
              imgSrc="/avatar1.png"
            />
          </div>
          <div className="flex-1">
            <div className="text-lg mt-12 xl:mt-3">
              <div className="text-center xl:text-left">
                <h3 className="h3 mb-4">Let’s build something amazing together!</h3>
                <p className="subtitle max-w-xl mx-auto xl:mx-0">
                Hi, I'm Saad Mehmood, a passionate and dedicated Full-Stack Web Developer 
                with a flair for creating seamless, user-friendly,
                 and innovative web solutions. With expertise 
                in both frontend and backend technologies, I specialize
                 in building responsive, dynamic, and scalable web applications.
                </p>
                <p className="subtitle max-w-xl mx-auto xl:mx-0">
                I enjoy turning complex problems into simple, elegant
                 solutions and transforming ideas into engaging digital
                 experiences. My tech stack includes React, Node.js, Express, MongoDB, and Next.js,
                  but I’m always eager to learn and work with new tools and technologies.
                </p>
                <div className="grid 2xl:grid-cols-2 gap-4 mb-12">
                  {
                    infoData.map((item:any,index:any)=>{
                      return(
                        <div key={index} className="flex max-sm:w-[80%] items-center mx-auto xl:mx-0 gap-4">
                          <div className="max-sm:w-7/8">{item.icon}</div>
                          <div className="max-sm:w-1/8 max-sm:text-sm">{item.text}</div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
