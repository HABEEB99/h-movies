import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
const Thumbnail = ({ imageUrl }) => {
  return (
    <motion.div
      whileHover={{
        scale: [1, 1.5, 1.2],
        rotate: [0, 10, -10, 0],
        filter: [
          'hue-rotate(0) contrast(100%)',
          'hue-rotate(360deg) contrast(200%)',
          'hue-rotate(45deg) contrast(300%)',
          'hue-rotate(0) contrast(100%)',
        ],
        transition: {
          duration: 0.2,
        },
        position: 'relative',
        zIndex: 1,
        background: 'white',
      }}
      className="relative flex items-center mr-4 w-[20rem] h-[20rem] rounded-lg "
    >
      <Image
        className=" rounded-lg"
        src={imageUrl}
        alt="thumbnail"
        width="100%"
        height="100%"
        objectFit="cover"
        layout="fill"
      />
    </motion.div>
  );
};

export default Thumbnail;
