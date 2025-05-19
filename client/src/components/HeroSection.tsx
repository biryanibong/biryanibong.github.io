import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="hero-gradient min-h-screen flex items-center text-white relative pt-0"
    >
      <div className="container mx-auto px8 pt-28 md:pt-40 pb-20 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-64 h-64 md:w-96 md:h-96 mx-auto mb-8 flex items-center justify-center"
          >
            <img
              src="/images/logo.png"
              alt="Biryani Bong Logo"
              className="w-full h-full object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16 pt-8"
          >
            <a
              href="https://www.swiggy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-[#ff9800] hover:bg-opacity-90 text-white px-8 py-3 rounded-full text-lg font-medium flex items-center"
            >
              <img
                className="w-26 h-7"
                src="/images/swiggy.png"
                alt="Swiggy Logo"
              />
            </a>
            <a
              href="https://www.zomato.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-[#bb3b07] hover:bg-opacity-90 text-white px-8 py-3 rounded-full text-lg font-medium flex items-center"
            >
              <img
                className="w-26 h-7"
                src="/images/zomato.png"
                alt="Zomato Logo"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
