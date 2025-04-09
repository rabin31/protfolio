import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import Unibytes from "../assets/Unibytes.png"
import Guffgaff from "../assets/Guffgaff.png"
import Todo from "../assets/Todo.png"
import Tic from "../assets/Tic.png"
import Zomato from "../assets/Zomato.png"
import Amazon from "../assets/Amazon.png"

export const Featured= () => {
  return (
    <section className="bg-neutral-950 p-4 md:p-8">
            <h1 className='font-["Poppins"] text-xl border-b-[1px] border-zinc-700 pb-5 sm:text-2xl md:text-[4vw] md:leading-[3vw] tracking-tight p-10'>Feat Works</h1>
      <div className="mx-auto max-w-5xl pt-10 pb-20">
        <Link
          heading="UniBytes"
          subheading="Educational website developed for BCA Students"
          imgSrc={Unibytes}
          href="https://github.com/rabin31/unibytes"
        />
        <Link
          heading="GuffGaff"
          subheading="Web Based Chatting System"
          imgSrc={Guffgaff}
          href="https://github.com/rabin31/Guffgaff"
        />
        <Link
          heading="Todo App"
          subheading="Web Based Task Management System"
          imgSrc={Todo}
          href="https://todo-three-swart.vercel.app/"
        />
        <Link
          heading="Tic Tac Toe"
          subheading="Javascript Game"
          imgSrc={Tic}
          href="https://github.com/rabin31/Tic-Tac-Toe-Game"
        />
        <Link
          heading="Zomato Clone"
          subheading="Food Delivery Website"
          imgSrc={Zomato}
          href="https://github.com/rabin31/Zomato-clone"
        />
        <Link
          heading="Amazon Clone"
          subheading="Online Shopping Website"
          imgSrc={Amazon}
          href="https://github.com/rabin31/amazon-clone"
        />
      </div>
    </section>
  );
};

export default Featured;

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};