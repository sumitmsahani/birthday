import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-0 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Dear Future Doctor,
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          Abhi bhi time hai, sudhar jao warna late replies will be the reason of your death someday. <br></br>
          Anyways, today is your birthday so enjoy this day. Congratulations on being one year older...aunty😂😂<br></br>
          Okay jokes aside. I'm really happy for your birthday and wish you good luck for your coming exams🥰🥰<br></br>
          May all your dreams come true and have a great year ahead filled with bhot saara happiness and masti<br></br>
          I'll be waiting to meet you, treat bhi toh leni hai afterall😁<br></br>
          Chalo I won't take too much of your time. Baaki dosto ke saath busy jo rehna hai tumhe🙄🙄
        </p>
        <p className="text-lg text-pink-600 font-semibold">
          So on your special day, I wish you the HAPPIEST BIRTHDAY🥰🥳!!!
        </p>
      </motion.div>
    </div>
  );
};

export default Message;
