const Button = ({ children, icon }) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white`}
    >
      {/* Nội dung text */}
      <span>{children}</span>
      {/* Nếu có icon thì render */}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;
