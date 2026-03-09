"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ value, isInView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate(latest) {
        setCount(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return <>{count}</>;
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { label: "Years of Experience", value: 4 },
    { label: "Completed Projects", value: 20 },
    { label: "Happy Clients", value: 20 },
    { label: "Technologies Mastered", value: 10 },
  ];

  return (
    <section
      ref={ref}
      className="py-10 flex flex-col items-center justify-center bg-[#0e0e0e] text-white px-6 sm:px-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-12"
      >
        Building{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-500">
          Real Results
        </span>{" "}
        Through Experience
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-16 text-center">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.2, duration: 0.5 }}
          >
            <p className="text-5xl sm:text-6xl font-extrabold text-indigo-400 mb-2">
              <Counter value={item.value} isInView={isInView} />+
            </p>

            <p className="text-gray-400 text-sm sm:text-base">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}