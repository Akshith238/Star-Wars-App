import { motion } from 'framer-motion';

const TypingText = ({ text }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const transition = {
    duration: 0.5,
    ease: 'easeInOut',
  };

  return (
    <div className="flex items-center opacity-80 justify-center w-full h-full">
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        variants={variants}
        transition={transition}
        className="md:text-6xl fixed-top text-xl text-center object-cover sm:top-1/2 z-10 font-bold bg-gradient-to-r from-amber-500 to-yellow-100 text-transparent bg-clip-text"
      >

        {text.split('').map((char, index) => (
            <motion.span key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
            {char}
            </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default TypingText;