"use client";
import { motion, useAnimation } from "framer-motion";
import Right from "@/public/a-Right.png";
import Left from "@/public/a-Left.png";
import { useEffect } from "react";

export default function Demo() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const sequenceAnimation1 = async () => {
    await controls1.start({
      opacity: 1,
      transition: { duration: 1 },
    });

    await controls1.start({
      rotate: 180,
      transition: { duration: 1 },
    });

    await controls1.start({
      scale: 10,
      transition: { duration: 1 },
    });

    await controls1.start({
      x: 100,
      scale: 2,
      transition: { duration: 1 },
    });

    await controls1.start({
      x: -400,
      y: 100,
      rotate: 360,
      scale: 2,
      transition: { duration: 1 },
    });
  };
  const sequenceAnimation2 = async () => {
    await controls2.start({
      opacity: 1,
      transition: { duration: 1 },
    });

    await controls2.start({
      rotate: 180,
      transition: { duration: 1 },
    });

    await controls2.start({
      scale: 10,
      transition: { duration: 1 },
    });

    await controls2.start({
      x: -100,
      scale: 2,
      transition: { duration: 1 },
    });

    await controls2.start({
      x: 400,
      y: -100,
      rotate: 360,
      scale: 2,
      transition: { duration: 1 },
    });
  };

  useEffect(() => {
    sequenceAnimation1();
    sequenceAnimation2();
  }, []);
  return (
    <motion.div
      initial={{ backgroundColor: "black", opacity: 1 }}
      animate={{ backgroundColor: "black", opacity: 1 }}
      exit={{ backgroundColor: "black", opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-screen h-screen flex justify-center items-center overflow-hidden relative"
    >
      <motion.img
        src={Left.src}
        initial={{ width: "108px", height: "156px" }}
        animate={controls1}
        className="z-0 absolute"
      />
      <motion.h2
        initial={{ opacity: 0, scale: 1, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 4, duration: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        className="max-w-[714px] text-center font-manrope text-white sm:text-7xl text-5xl font-normal sm:pt-6 pt-2 relative"
      >
        Fast Short Term Payday
        <span className="text-[#BCD02A] font-serif italic">Loans</span>
        Online
      </motion.h2>

      <motion.img
        src={Right.src}
        initial={{ width: "108px", height: "156px" }}
        animate={controls2}
        className="z-10 absolute"
      />
    </motion.div>
  );
}
