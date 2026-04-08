const LogoItem = ({ logoUrl, altText }) => {
  return (
    <div className="flex items-center justify-center p-4 filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer">
      <img
        src={logoUrl}
        alt={altText}
        // Đổi max-h-12 thành max-h-8 (mobile) và md:max-h-12 (PC)
        className="max-h-8 md:max-h-12 w-auto object-contain transition-all duration-300" 
      />
    </div>
  );
};

export default LogoItem;
