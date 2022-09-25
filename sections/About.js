import Image from 'next/image';
import Link from 'next/link';
import Animation from '../components/Animation';
import { motion } from 'framer-motion'

function Solution() {
  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1, transition: {
        ease: 'easeInOut',
        duration: 1
      }}}
      viewport={{ once: false, amount: .2 }}
      className="px-[2rem] min-h-screen text-center items-center flex justify-center z-0">
      <div className="relative w-full max-w-xl -mb-2 flex flex-col items-center gap-10">
        <div className="w-full max-w-xl flex flex-col justify-center items-center">
          <h2 className="section-title mt-10 font-bold text-2xl md:text-4xl lg:text-[6rem] text-blue-700 uppercase mb-10">
            About Us
          </h2>
          <p className="mt-6 text-center text-xl text-gray-600 w-full max-w-lg self-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error modi
            optio, ipsum ullam eligendi nemo quis odit iste quasi voluptatem
            veniam, nam doloribus officiis hic.
          </p>
        </div>
        <div className="mt-4 w-full max-w-md">
          <Animation />
        </div>
      </div>
    </motion.div>
  );
}

export default Solution;
