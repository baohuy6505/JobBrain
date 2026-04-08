const LogoItem = ({ logoUrl, altText }) => {
  return (
    <div className="flex items-center justify-center p-4 filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer">
      <img
        src={logoUrl}
        alt={altText}
        className="max-h-12 w-auto object-contain"
      />
    </div>
  );
};

export default LogoItem;
