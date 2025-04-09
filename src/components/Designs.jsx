import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Item1 from '../assets/gd1.png';
import Item2 from '../assets/gd2.png';
import Item3 from '../assets/gd3.png';
import Item4 from '../assets/gd4.png';
import Item5 from '../assets/gd5.png';
import Item6 from '../assets/gd6.png';
import Item7 from '../assets/gd7.jpeg';
import Item8 from '../assets/gd8.jpeg';

const Designs = () => {
  return (
    <div className="bg-neutral-800">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
    };

    handleResize(); // Set on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      ref={targetRef}
      className={`relative ${isMobile ? "h-auto" : "h-[300vh]"} rounded-tl-3xl rounded-tr-3xl bg-zinc-900`}
    >
      <h1 className='font-["Poppins"] text-xl sm:text-2xl md:text-[4vw] md:leading-[3vw] tracking-tight p-6 md:p-20 border-zinc-700 border-b-[1px] pb-6 md:pb-10'>
        My Designs
      </h1>

      {isMobile ? (
        // Stack vertically for mobile
        <div className="flex flex-col items-center gap-6 py-10 px-4">
          {cards.map((card) => (
            <Card card={card} key={card.id} isMobile={true} />
          ))}
        </div>
      ) : (
        // Scroll animation for larger screens
        <div className="sticky top-0 flex h-screen items-center overflow-hidden border-b-[1px] border-zinc-700">
          <motion.div style={{ x }} className="flex gap-4 px-4">
            {cards.map((card) => (
              <Card card={card} key={card.id} isMobile={false} />
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
};

const Card = ({ card, isMobile }) => {
  return (
    <div
      key={card.id}
      className={`group relative ${
        isMobile ? "w-full max-w-[90%] h-[300px]" : "h-[450px] w-[450px]"
      } overflow-hidden rounded-2xl bg-neutral-200 shadow-md`}
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 rounded-2xl lg:grayscale group-hover:grayscale-0"
      ></div>
    </div>
  );
};

export default Designs;

const cards = [
  { url: Item1, id: 1 },
  { url: Item2, id: 2 },
  { url: Item3, id: 3 },
  { url: Item4, id: 4 },
  { url: Item5, id: 5 },
  { url: Item6, id: 6 },
  { url: Item7, id: 7 },
  { url: Item8, id: 8 }
];
