import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  icon,
  iconPosition = "left",
  onClick, // Nhận hàm xử lý sự kiện
  to, // Nếu truyền 'to' sẽ là Link chuyển trang
  type = "button",
  className = "",
}) => {
  // Xác định thẻ render: Link hoặc button
  const Component = to ? Link : "button";

  const baseStyles = `flex items-center justify-center gap-2 px-6 py-3 bg-[#6344ff] hover:bg-[#5235d9] text-white font-bold rounded-xl transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none ${className}`;

  return (
    <Component
      to={to}
      type={!to ? type : undefined}
      onClick={onClick} // Gán hàm vào sự kiện click
      className={baseStyles}
    >
      {/* Icon trái */}
      {icon && iconPosition === "left" && (
        <span className="flex items-center text-lg">{icon}</span>
      )}

      {/* Nội dung nút */}
      <span>{children}</span>

      {/* Icon phải */}
      {icon && iconPosition === "right" && (
        <span className="flex items-center text-lg">{icon}</span>
      )}
    </Component>
  );
};

export default Button;
