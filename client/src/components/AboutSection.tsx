import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-[#fdf0e2]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#bb3b07] font-['Playfair_Display'] mb-3">
              Uncle Bong's Story
            </h2>
            <div className="w-16 h-1 bg-[#ff9800] mx-auto"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-2/5"
            >
              <div className="bg-[#bb3b07] rounded-xl shadow-lg transform rotate-3">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/images/uncle-bong.png"
                    alt="Uncle Bong Cartoon Character"
                    className="w-full h-auto pt-4 px-4"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:w-3/5"
            >
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-['Playfair_Display'] text-[#bb3b07] mb-4">
                  A Family Man, Foodie and Flavourist.
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Spent 12 years in Lucknow as Kitchen Manager at a Shahi
                  restaurant — but always in Kolkata by heart. Founder of
                  Biryani Bong, a quick-service biryani outlet.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Uncle Bong's philosophy is simple: authentic flavors, quality
                  ingredients, and the perfect balance of spices. Every biryani
                  is crafted with love and tradition, bringing the royal recipes
                  of 1856 to modern plates...
                </p>
                <p className="text-xl font-medium text-[#ff9800] italic font-['Playfair_Display']">
                  "Egg stays. Aloo forever."
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="bg-[#fdf0e2] text-[#bb3b07] px-4 py-2 rounded-full text-sm">
                    Authentic Recipes
                  </span>
                  <span className="bg-[#fdf0e2] text-[#bb3b07] px-4 py-2 rounded-full text-sm">
                    Nawabi Slow Dum
                  </span>
                  <span className="bg-[#fdf0e2] text-[#bb3b07] px-4 py-2 rounded-full text-sm">
                    Secret Spice Blend
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
