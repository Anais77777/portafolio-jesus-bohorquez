"use client";

import { motion } from "framer-motion";

export default function CategoryButtons({
  categories,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <motion.div
      className="flex justify-center items-center mb-12"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex space-x-3 md:space-x-6 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm md:text-base ${
              activeCategory === category
                ? "bg-gradient-to-r from-[#4facfe] to-[#7f78ff] text-white"
                : "text-[#4facfe] hover:bg-[#1b1b4a] transition-colors"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category === "all" ? "All Projects" : category}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
