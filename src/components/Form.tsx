"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Fade } from "react-awesome-reveal";
import { Textarea } from "./ui/textarea";
import {
  UserCheck,
  MailIcon,
  ArrowRightIcon,
  MessageSquare,
  UserRoundCheck,
  Building,
} from "lucide-react";

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      <Fade
        triggerOnce={true}
        damping={1e-1}
        cascade
        delay={400}
        direction="right"
      >
        <div className="relative flex items-center">
          <Input type="name" id="first name" placeholder="First Name" />
          <UserCheck className="absolute right-6" size={20} />
        </div>
      </Fade>
      <Fade
        triggerOnce={true}
        damping={1e-1}
        cascade
        delay={600}
        direction="right"
      >
        <div className="relative flex items-center">
          <Input type="name" id="last name" placeholder="Last Name" />
          <UserRoundCheck className="absolute right-6" size={20} />
        </div>
      </Fade>
      <Fade
        triggerOnce={true}
        damping={1e-1}
        cascade
        delay={800}
        direction="right"
      >
        <div className="relative flex items-center">
          <Input type="email" id="email" placeholder="Email" />
          <Building className="absolute right-6" size={20} />
        </div>
      </Fade>
      <Fade
        triggerOnce={true}
        damping={1e-1}
        cascade
        delay={1000}
        direction="right"
      >
        <div className="relative flex items-center">
          <Textarea placeholder="Type your message..." />
          <MessageSquare className="absolute top-4 right-6" size={20} />
        </div>
      </Fade>
      <Fade
        triggerOnce={true}
        damping={1e-1}
        cascade
        delay={1200}
        direction="right"
      >
        <Button className="flex items-center gap-x-1 max-w-[165px]">
          Let's Talk
          <ArrowRightIcon size={20} />
        </Button>
      </Fade>
    </form>
  );
};

export default Form;
