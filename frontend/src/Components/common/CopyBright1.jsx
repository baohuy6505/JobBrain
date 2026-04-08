const CopyBright = ({ company = "ProRecruit Network" }) => {
  return (
    <div className="pt-8 border-t border-gray-50 text-center">
      <p className="text-gray-400 text-xs tracking-wide">
        © {new Date().getFullYear()} {company}. All rights reserved.
      </p>
    </div>
  );
};

export default CopyBright;
