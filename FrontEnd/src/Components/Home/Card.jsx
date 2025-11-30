import React from "react";
import { motion } from "framer-motion";

function Card({ item }) {
  // truncate title helper
  const truncateTitle = (title, maxLength = 35) =>
    title.length > maxLength ? title.substring(0, maxLength) + "..." : title;

  return (
    <motion.div
      className="mt-6 my-3 p-3"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05, rotate: 0.5 }}
    >
      <motion.div
        className="relative card bg-white/10 backdrop-blur-md shadow-xl border border-white/20 transition-all duration-500 hover:shadow-pink-300/40 hover:border-pink-400"
        whileHover={{ y: -6 }}
      >
        {/* Image with overlay */}
        <figure className="relative">
          <img
            src={item.image}
            alt={item.name}
            className="object-cover w-full h-76 rounded-t-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-xl" />
        </figure>

        <div className="card-body text-gray-800">
          {/* Title with tooltip */}
          <h2
            className="card-title tooltip text-lg font-semibold"
            data-tip={item.name}
          >
            {truncateTitle(item.name)}
            <motion.div
              className="badge badge-secondary text-white"
              whileHover={{ scale: 1.1 }}
            >
              {item.category}
            </motion.div>
          </h2>

          <p
            className="text-gray-600 text-sm tooltip"
            data-tip={item.title}
          >
            {truncateTitle(item.title)}
          </p>

          <div className="card-actions justify-between items-center mt-3">
            <motion.div
              className="badge badge-outline font-medium"
              whileHover={{ scale: 1.1 }}
            >
              {item.price}
            </motion.div>

            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: "#ec4899",
                color: "#fff",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border-2 rounded-full cursor-pointer px-3 py-1 transition-all border-pink-500 text-pink-600 font-semibold"
            >
              Buy Now
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Card;
