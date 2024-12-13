"use client";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Right from "@/public/a-Right.png";
import Left from "@/public/a-Left.png";
import { useEffect, useState } from "react";

export default function Demo() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const [isVisible, setIsVisible] = useState(true);
  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    setTimeout(() => {
      setAnimation(false);
    }, 5800);
  });

  const Animation1 = async () => {
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

    await controls1.start({
      x: 400,
      y: -100,
      rotate: 180,
      scale: 2,
      opacity: 1,
      transition: { duration: 1, delay: 1.5 },
    });
  };
  const Animation2 = async () => {
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

    await controls2.start({
      x: -400,
      y: 100,
      rotate: 180,
      scale: 2,
      opacity: 1,
      transition: { duration: 1, delay: 1.5 },
    });
  };

  useEffect(() => {
    Animation1();
    Animation2();
  }, []);

  return (
    <div className="bg-black">
      <AnimatePresence>
        {animation && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut" }}
            exit={{
              opacity: 0,
              backgroundColor: "black",
              transition: {
                opacity: { duration: 0.5, ease: "backOut" },
                backgroundColor: { duration: 0.2 },
              },
            }}
            className="w-screen h-screen flex justify-center items-center overflow-hidden relative"
          >
            <motion.img
              src={Left.src}
              initial={{ width: "108px", height: "156px" }}
              animate={controls1}
              className="z-0 absolute"
            />
            <AnimatePresence>
              {isVisible && (
                <motion.h2
                  initial={{ opacity: 0, scale: 1, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 3.5, duration: 1 }}
                  exit={{ opacity: 0, y: 50, transition: { duration: 0.5, delay: 0.5 } }}
                  className="max-w-[714px] text-center font-manrope text-white sm:text-7xl text-4xl font-normal sm:pt-6 pt-2 relative mx-4"
                >
                  Fast Short Term Payday
                  <span className="text-[#BCD02A] font-serif italic"> Loans </span>
                  Online
                </motion.h2>
              )}
            </AnimatePresence>
            <motion.img
              src={Right.src}
              initial={{ width: "108px", height: "156px" }}
              animate={controls2}
              className="z-10 absolute"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
