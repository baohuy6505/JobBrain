import PasswordInput from "../../common/PasswordInput";

const RegistrationFields = ({ form, handleChange, role }) => {
  return (
    <>
      {/* Full Name / Company Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {role === "candidate" ? "Họ và tên" : "Tên công ty"}
        </label>
        <input
          type="text"
          placeholder={role === "candidate" ? "Nguyễn Văn An" : "Tên công ty"}
          value={form.fullName}
          onChange={handleChange("fullName")}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          placeholder="name@example.com"
          value={form.email}
          onChange={handleChange("email")}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Password */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Mật khẩu
        </label>
        <PasswordInput
          placeholder="Ít nhất 8 ký tự"
          value={form.password}
          onChange={handleChange("password")}
        />
      </div>

      {/* Confirm Password */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Xác nhận mật khẩu
        </label>
        <PasswordInput
          placeholder="Nhập lại mật khẩu"
          value={form.confirmPassword}
          onChange={handleChange("confirmPassword")}
        />
      </div>

      {/* Terms checkbox */}
      <div className="mb-6">
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={form.agreeTerms}
            onChange={handleChange("agreeTerms")}
            className="mt-0.5 w-4 h-4 accent-indigo-600 cursor-pointer"
          />
          <span className="text-sm text-gray-600">
            Tôi đồng ý với{" "}
            <a href="#" className="text-indigo-600 hover:underline font-medium">
              Điều khoản sử dụng
            </a>{" "}
            và{" "}
            <a href="#" className="text-indigo-600 hover:underline font-medium">
              Chính sách bảo mật
            </a>
          </span>
        </label>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition text-sm"
      >
        Tạo tài khoản
      </button>
    </>
  );
};

export default RegistrationFields;
