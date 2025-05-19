import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Globe, Map } from "lucide-react";

const LocationSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-[#ff9800] bg-opacity-10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#bb3b07] font-['Playfair_Display'] mb-3">Visit Biryani Bong</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Come experience the authentic essence of Awadh at our outlet</p>
            <div className="w-16 h-1 bg-[#ff9800] mx-auto mt-4"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="bg-[#ff9800] p-6 rounded-xl shadow-md h-full">
                <h3 className="text-xl font-['Playfair_Display'] text-[#bb3b07] font-bold mb-4">Find Us Here</h3>
                
                <div className="mb-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-[#bb3b07] mt-1">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#fdf0e2]">Address</h4>
                      <p className="text-[#bb3b07]">Old Jessore Road, Doltala, Near Kolkata Airport</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-[#bb3b07] mt-1">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#fdf0e2]">Phone</h4>
                      <p className="text-[#bb3b07]">
                        <a href="tel:+919073933939" className="hover:text-[#bb3b07] transition-colors">+91 907-393-3939</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="text-[#bb3b07] mt-1">
                      <Globe size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#fdf0e2]">Website</h4>
                      <p className="text-[#bb3b07]">
                        <a href="https://biryanibong.com" className="hover:text-[#bb3b07] transition-colors">biryanibong.com</a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-['Playfair_Display'] text-[#bb3b07] font-bold mb-4">Opening Hours</h3>
                  <div className="grid grid-cols-2 gap-2 text-[#fdf0e2]">
                    <div>Daily</div>
                    <div>12:00 - 23:00</div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-['Playfair_Display'] text-[#bb3b07] font-bold mb-4">Dine-In and Takeaway Available</h3>
                  <p className="text-[#fdf0e2]">
                    Enjoy our biryani at the comfort of our outlet or take it home fresh and hot!
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:w-1/2"
            >
              <div className="bg-[#ff9800] rounded-xl overflow-hidden shadow-md h-full">
                <div className="h-96 bg-gray-200">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.2875961177792!2d88.46138372600113!3d22.680335379011694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f69636e0361%3A0x13e6d6c2f79f7971!2sDoharia%2C%20Srijoni%20Housing%2C%20Madhyamgram%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1743896756668!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="Google Map"
                  ></iframe>
                </div>
                <div className="p-6">
                  <div className="flex justify-between">
                    <a href="https://goo.gl/maps/ABC123" className="text-[#bb3b07] hover:underline flex items-center">
                      <Map className="mr-2" size={16} /> Get Directions
                    </a>
                    <a href="#" className="text-[#bb3b07] hover:underline flex items-center">
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" fill="currentColor"/>
                        <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" fill="currentColor"/>
                        <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" fill="currentColor"/>
                        <path d="M8.59 13.51L15.42 17.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15.41 6.51L8.59 10.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Share Location
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
