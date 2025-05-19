import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

const MenuSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Nawabi Chicken Biryani",
      description: "Succulent chicken pieces marinated in our secret spice blend.",
      price: "₹189",
      image: "/images/menu/chicken-biryani.jpeg"
    },
    {
      id: 2,
      name: "Nawabi Mutton Biryani",
      description: "The royal classic with saffron, tender meat, and aromatic herbs.",
      price: "₹279",
      image: "/images/menu/mutton-biryani.jpeg"
    },
    {
      id: 3,
      name: "Nawabi Egg Biryani",
      description: "Perfectly boiled eggs perfectly blended with fragrant rice and spices.",
      price: "₹149",
      image: "/images/menu/egg-biryani.jpeg"
    },
    {
      id: 4,
      name: "Nawabi Aloo Biryani",
      description: "Uncle Bong's specialty - potatoes soaked in flavorful spices.",
      price: "₹119",
      image: "/images/menu/aloo-biryani.jpeg"
    },
  ];

  return (
    <section id="menu" ref={sectionRef} className="py-20 bg-[#fdf0e2]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#bb3b07] font-['Playfair_Display'] mb-3">Our Signature Biryanis</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Crafted with love, tradition, and the finest ingredients. Each biryani tells a story of royal kitchens and ancestral recipes.</p>
          <div className="w-16 h-1 bg-[#ff9800] mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {menuItems.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="menu-item bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-['Playfair_Display'] text-[#bb3b07] mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#ff9800] font-bold">{item.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <a href="#" className="btn-primary bg-[#fdf0e2] border-2 border-[#bb3b07] text-[#bb3b07] hover:bg-[#bb3b07] hover:text-[#fdf0e2] px-8 py-3 rounded-full text-lg font-medium text-center">
            View Full Menu
          </a>
          <a href="#" className="btn-primary bg-[#bb3b07] text-[#ff9800] hover:bg-[#ff9800] hover:text-[#bb3b07] px-8 py-3 rounded-full text-lg font-medium text-center">
            Order Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
