import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
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

  return (
    <section ref={targetRef} className="relative h-[300vh] rounded-tl-3xl rounded-tr-3xl bg-zinc-900">
      <h1 className='font-["Poppins"] text-xl border-zinc-700 border-b-[1px] pb-10 sm:text-2xl md:text-[4vw] md:leading-[3vw] tracking-tight p-20'>My Designs</h1>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden border-b-[1px] border-zinc-700">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden rounded-2xl bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 rounded-2xl grayscale group-hover:grayscale-0"
      ></div>
    </div>
  );
};

export default Designs;

const cards = [
  {
    url: Item1,
    id: 1,
  },
  {
    url: Item2,
    id: 2,
  },
  {
    url: Item3,
    id: 3,
  },
  {
    url: Item4,
    id: 4,
  },
  {
    url: Item5,
    id: 5,
  },
  {
    url: Item6,
    id: 6,
  },
  {
    url: Item7,
    id: 7,
  },
  {
    url: Item8,
    id: 8,
  }
];
