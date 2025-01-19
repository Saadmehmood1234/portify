"use client";
import { Fade } from "react-awesome-reveal";
import Social from "./Social";
const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Fade
            direction="up"
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <Social
              containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
              iconStyles="text-white text-[20px] transition-all
          dark:text-white/70 hover:text-white/50 dark:text-primary"
            />
          </Fade>
          <Fade
            direction="up"
            delay={600}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <div className="text-white">
              Copyright &copy; 2024, All Rights Reserved.
            </div>
          </Fade>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
