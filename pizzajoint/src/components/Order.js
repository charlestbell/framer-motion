import React, { use, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { x: "100vw", opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  },
};
const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);
  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      animate="visible"
      initial="hidden"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      {pizza.toppings.map((topping) => (
        <motion.div variants={childVariants} key={topping}>
          {topping}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Order;
