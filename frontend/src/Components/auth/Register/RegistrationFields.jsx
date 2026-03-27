import PasswordInput from "../../common/PasswordInput";

const RegistrationFields = ({ form, errors, handleChange, role }) => {
  return (
    <>
      {/* Full Name / Company Name */}
      <div className="register-form__field mb-4">
        <label
          htmlFor="fullName"
          className="register-form__label block text-sm font-medium text-gray-700 mb-1"
        >
          {role === "candidate" ? "Họ và tên" : "Tên công ty"}
        </label>
        <input
          id="fullName"
          type="text"
          placeholder={role === "candidate" ? "Nguyễn Văn An" : "Tên công ty"}
          value={form.fullName}
          onChange={handleChange("fullName")}
          className={`register-form__input w-full border rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition
            ${errors.fullName ? "border-red-400 bg-red-50" : "border-gray-300"}`}
        />
        {errors.fullName && (
          <p className="register-form__error text-xs text-red-500 mt-1">
            {role === "candidate"
              ? "Vui lòng nhập họ và tên."
              : "Vui lòng nhập tên công ty."}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="register-form__field mb-4">
        <label
          htmlFor="email"
          className="register-form__label block text-sm font-medium text-gray-700 mb-1"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="name@example.com"
          value={form.email}
          onChange={handleChange("email")}
          className={`register-form__input w-full border rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition
            ${errors.email ? "border-red-400 bg-red-50" : "border-gray-300"}`}
        />
        {errors.email && (
          <p className="register-form__error text-xs text-red-500 mt-1">
            {errors.email}
          </p>
        )}
      </div>

      {/* Password */}
      <div className="register-form__field mb-4">
        <label
          htmlFor="password"
          className="register-form__label block text-sm font-medium text-gray-700 mb-1"
        >
          Mật khẩu
        </label>
        <PasswordInput
          id="password"
          placeholder="Ít nhất 8 ký tự"
          value={form.password}
          onChange={handleChange("password")}
        />
        {errors.password && (
          <p className="register-form__error text-xs text-red-500 mt-1">
            {errors.password}
          </p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="register-form__field mb-5">
        <label
          htmlFor="confirmPassword"
          className="register-form__label block text-sm font-medium text-gray-700 mb-1"
        >
          Xác nhận mật khẩu
        </label>
        <PasswordInput
          id="confirmPassword"
          placeholder="Nhập lại mật khẩu"
          value={form.confirmPassword}
          onChange={handleChange("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="register-form__error text-xs text-red-500 mt-1">
            {errors.confirmPassword}
          </p>
        )}
      </div>

      {/* Terms checkbox */}
      <div className="register-form__terms mb-6">
        <label className="register-form__terms-label flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={form.agreeTerms}
            onChange={handleChange("agreeTerms")}
            className="register-form__terms-checkbox mt-0.5 w-4 h-4 accent-indigo-600 cursor-pointer"
          />
          <span className="text-sm text-gray-600">
            Tôi đồng ý với{" "}
            <a
              href="#"
              className="register-form__terms-link text-indigo-600 hover:underline font-medium"
            >
              Điều khoản sử dụng
            </a>{" "}
            và{" "}
            <a
              href="#"
              className="register-form__terms-link text-indigo-600 hover:underline font-medium"
            >
              Chính sách bảo mật
            </a>
          </span>
        </label>
        {errors.agreeTerms && (
          <p className="register-form__error text-xs text-red-500 mt-1 ml-6">
            {errors.agreeTerms}
          </p>
        )}
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="register-form__submit w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold py-3 rounded-lg transition text-sm tracking-wide shadow-sm"
      >
        Tạo tài khoản
      </button>
    </>
  );
};

export default RegistrationFields;
