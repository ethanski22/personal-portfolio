import styles from "../style";
import { motion } from "framer-motion";
import { ethan } from "../assets";

const Loading = () => {
  return (
    <motion.div
      id="loading"
      className={`w-[100vw] h-[100vh] flex "${styles.flexCenter}`}
      initial={{ scale: 1.0, opacity: 0.25 }}
      animate={{ scale: 2.2, opacity: 0.75 }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <img src={ethan} alt="Ethan Skowronski" className="w-[150px] h-auto sm:w-[200px] md:w-[250px] lg:w-[290px] max-w-full" />
    </motion.div>
  );
};

export default Loading;
