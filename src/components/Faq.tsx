"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Fade } from "react-awesome-reveal";
const Faq = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="w-full pt-12 mb-6 xl:mb-24">
          <Fade
            direction="up"
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h2 className="section-title mb-12 text-center mx-auto">
              Our Studio
            </h2>
          </Fade>

          <div>
            <Fade
              direction="up"
              delay={600}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="ms-3">
                      01. What types of photography services do you offer?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    We specialize in a variety of photography services,
                    including weddings, portraits, events, commercial shoots,
                    product photography, and nature photography. Check our
                    Services page for more details.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <div className="ms-3">02.How do I book a photoshoot?</div>
                  </AccordionTrigger>
                  <AccordionContent>
                    You can book a photoshoot through our Booking page. Simply
                    choose your desired service, select an available date and
                    time, and fill out the form. We’ll confirm your booking
                    within 24 hours.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <div className="ms-3">
                      03.Do you offer customized photography packages?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer customized packages tailored to your specific
                    needs. Contact us through the Contact Us page or email us
                    directly to discuss your requirements.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    <div className="ms-3">
                      04. What is your pricing for photography services?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    Our pricing varies depending on the type of service and the
                    duration of the shoot. Please visit our Pricing page or
                    contact us for a detailed quote.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    <div className="ms-3">05. Can I view your portfolio?</div>
                  </AccordionTrigger>
                  <AccordionContent>
                    Of course! Visit our Portfolio page to see examples of our
                    work, including past events, portraits, and commercial
                    shoots.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
