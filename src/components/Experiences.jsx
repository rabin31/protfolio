import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export function Experiences() {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
    <div data-scroll 
      data-scroll-section 
      data-scroll-speed=".1"  className="lg:h-[40vw] sm:h-[120vw] p-20">
    <h1 className='font-["Poppins"] text-xl border-b-[1px] border-zinc-700 pb-10 sm:text-2xl md:text-[4vw] md:leading-[3vw] tracking-tight pt-10'>Experiences</h1>

      <Accordion open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${
            open === 1 ? "text-white hover:!text-white" : ""
          }`}
        >
          Graphic Design Intern
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        Graphic Designer Intern at Pearl Publication (Dec 2023 – Sept 2024), where I designed promotional materials, collaborated with marketing, and gained expertise in Adobe software while delivering quality projects under tight deadlines.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            open === 2 ? "text-white hover:!text-white" : ""
          }`}
        >
          Wordpress Development Intern
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        WordPress Developer Intern at Pearl Publication (Dec 2023 – Sept 2024), assisting in developing and customizing WordPress websites, modifying themes to meet client needs, and collaborating with designers and content writers to deliver cohesive solutions.
        </AccordionBody>
      </Accordion>
      </div>
    </>
  );
}

export default Experiences;