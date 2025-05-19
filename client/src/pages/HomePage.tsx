import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TriviaSection from "@/components/TriviaSection";
import MenuSection from "@/components/MenuSection";
import LocationSection from "@/components/LocationSection";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.title = "Biryani Bong - Essence of Awadh Since 1856";
  }, []);

  // Smooth scrolling functionality
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: (targetElement as HTMLElement).offsetTop - 80, // Adjust for header height
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TriviaSection />
      <MenuSection />
      <LocationSection />
      <SocialSection />
      <Footer />
    </div>
  );
};

export default HomePage;
