import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function PasswordInput({ value, onChange, placeholder }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-slate-400 outline-none rounded-sm py-2 px-4 pr-10"
      />

      <span
        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <FaEye /> : <FaEyeSlash />}
      </span>
    </div>
  );
}

export default PasswordInput;
