import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const SocialSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="py-12 bg-[#bb3b07] text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-['Playfair_Display'] mb-6 text-[#ff9800]">
            STAY CONNECTED
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex justify-center gap-6 mb-8"
          >
            <a
              href="https://www.instagram.com/unclebong.ofc"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#fdf0e2] text-[#bb3b07] flex items-center justify-center text-xl hover:bg-opacity-90 transition-all"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/biryanibong.ofc"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#fdf0e2] text-[#bb3b07] flex items-center justify-center text-xl hover:bg-opacity-90 transition-all"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://wa.me/+919073933939"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#fdf0e2] text-[#bb3b07] flex items-center justify-center text-xl hover:bg-opacity-90 transition-all"
            >
              <FaWhatsapp />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mb-6"
          >
            <p className="text-lg mb-2 text-[#ff9800]">Follow Us</p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                <a href="https://instagram.com/unclebong.ofc">@unclebong.ofc</a>
              </span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                <a href="https://instagram.com/biryanibong.ofc">@biryanibong.ofc</a>
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <p className="text-lg mb-2 text-[#ff9800]">Join the conversation</p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                #unclebong
              </span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                #biryanibong
              </span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                #kolkatabiryani
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialSection;
