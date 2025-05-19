const Footer = () => {
  return (
    <footer className="bg-[#ff9800] text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <div className="w-10 h-10 overflow-hidden flex items-center justify-center">
                <img src="/images/logo-with-border.png" alt="Biryani Bong Logo" className="w-full h-full object-contain" />
              </div>
              <h2 className="ml-3 text-lg font-bold font-['Playfair_Display'] text-[#bb3b07]">Biryani Bong</h2>
            </div>
            <p className="text-sm mt-2 text-[#bb3b07]">"Essence of Awadh Since 1856"</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-[#bb3b07]">© {new Date().getFullYear()} Biryani Bong. All rights reserved.</p>
            <div className="mt-2 flex gap-4 justify-center md:justify-end">
              <a href="#" className="text-[#bb3b07] hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-[#bb3b07] hover:text-white text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
