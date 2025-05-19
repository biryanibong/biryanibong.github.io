import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ScanLine, Lightbulb, Gift } from "lucide-react";

const TriviaSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="trivia" ref={sectionRef} className="py-20 bg-[#ff9800] bg-opacity-10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-[#bb3b07] p-8 text-white">
              <h2 className="text-3xl font-bold font-['Playfair_Display'] mb-4 text-[#ff9800]">Uncle Bong Asks...</h2>
              <div className="text-xl font-['Playfair_Display'] mb-6 italic text-[#fdf0e2]">
                "Where did the word 'Biryani' come from?"
              </div>
              
              <div className="mt-8">
                <div className="flex gap-2 items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#ff9800] text-[#bb3b07] flex items-center justify-center">
                    <ScanLine size={20} />
                  </div>
                  <span className="text-[#fdf0e2] font-medium">Scan</span>
                </div>
                
                <div className="flex gap-2 items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#ff9800] text-[#bb3b07] flex items-center justify-center">
                    <Lightbulb size={20} />
                  </div>
                  <span className="text-[#fdf0e2] font-medium">Guess</span>
                </div>
                
                <div className="flex gap-2 items-center">
                  <div className="w-10 h-10 rounded-full bg-[#ff9800] text-[#bb3b07] flex items-center justify-center">
                    <Gift size={20} />
                  </div>
                  <span className="text-[#fdf0e2] font-medium">Win</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5 p-8">
              <h3 className="text-xl font-['Playfair_Display'] text-[#bb3b07] mb-4">Scan the QR code to solve the trivia</h3>
              <p className="text-gray-600 mb-6">
                Every week we post a new food history trivia question. Scan, answer correctly, and you could win free biryani!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div className="w-[160px] h-[154px] rounded-md">
                  <img 
                    src="/images/qr-code.png" 
                    alt="Trivia QR Code" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <p className="text-gray-700 mb-4">
                    Today's winner: <br></br><span className="font-semibold">Priya Sharma</span> from Kolkata
                  </p>
                  <a 
                    href="#" 
                    className="btn-primary inline-block bg-[#ff9800] text-white px-6 py-2 rounded-full font-medium"
                  >
                    View Past Trivia
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TriviaSection;
