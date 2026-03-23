import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaBuilding } from "react-icons/fa";
import PasswordInput from "../../common/PasswordInput";

// RegisterForm component
const RegisterForm = () => {
  const [role, setRole] = useState("candidate"); // "candidate" | "employer"
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim())
      newErrors.fullName =
        role === "candidate"
          ? "Vui lòng nhập họ và tên."
          : "Vui lòng nhập tên công ty.";
    if (!form.email.trim()) newErrors.email = "Vui lòng nhập email.";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Email không hợp lệ.";
    if (!form.password) newErrors.password = "Vui lòng nhập mật khẩu.";
    else if (form.password.length < 8)
      newErrors.password = "Mật khẩu ít nhất 8 ký tự.";
    if (!form.confirmPassword)
      newErrors.confirmPassword = "Vui lòng xác nhận mật khẩu.";
    else if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Mật khẩu không khớp.";
    if (!form.agreeTerms)
      newErrors.agreeTerms = "Bạn cần đồng ý với điều khoản.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    alert(
      `Đăng ký thành công! Vai trò: ${role === "candidate" ? "Ứng viên" : "Nhà tuyển dụng"}`,
    );
  };

  return (
    <div className="register-page min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="register-card bg-white rounded-2xl shadow-md w-full max-w-lg px-8 py-10">
        {/* Title */}
        <h1 className="register-card__title text-2xl font-bold text-gray-900 mb-6">
          Tạo tài khoản
        </h1>

        {/* Role selector */}
        <div className="register-role-selector grid grid-cols-2 gap-3 mb-6">
          {/* Candidate */}
          <button
            type="button"
            onClick={() => setRole("candidate")}
            className={`register-role-selector__item flex flex-col items-start gap-1 border-2 rounded-xl px-4 py-4 transition cursor-pointer text-left
              ${
                role === "candidate"
                  ? "register-role-selector__item--active border-indigo-500 bg-indigo-50"
                  : "border-gray-200 hover:border-indigo-300 bg-white"
              }`}
          >
            <FaUser
              className={`register-role-selector__icon text-xl ${role === "candidate" ? "text-indigo-600" : "text-gray-500"}`}
            />
            <span
              className={`register-role-selector__label font-semibold text-sm ${role === "candidate" ? "text-indigo-700" : "text-gray-800"}`}
            >
              Ứng viên
            </span>
            <span className="register-role-selector__desc text-xs text-gray-500 leading-snug">
              Tìm kiếm công việc mơ ước
            </span>
          </button>

          {/* Employer */}
          <button
            type="button"
            onClick={() => setRole("employer")}
            className={`register-role-selector__item flex flex-col items-start gap-1 border-2 rounded-xl px-4 py-4 transition cursor-pointer text-left
              ${
                role === "employer"
                  ? "register-role-selector__item--active border-indigo-500 bg-indigo-50"
                  : "border-gray-200 hover:border-indigo-300 bg-white"
              }`}
          >
            <FaBuilding
              className={`register-role-selector__icon text-xl ${role === "employer" ? "text-indigo-600" : "text-gray-500"}`}
            />
            <span
              className={`register-role-selector__label font-semibold text-sm ${role === "employer" ? "text-indigo-700" : "text-gray-800"}`}
            >
              Nhà tuyển dụng
            </span>
            <span className="register-role-selector__desc text-xs text-gray-500 leading-snug">
              Đăng tin và tìm nhân tài
            </span>
          </button>
        </div>

        {/* Form */}
        <form className="register-form" onSubmit={handleSubmit} noValidate>
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
              placeholder={
                role === "candidate" ? "Nguyễn Văn An" : "Tên công ty"
              }
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
        </form>

        {/* Login redirect */}
        <p className="register-card__login-redirect text-center text-sm text-gray-500 mt-5">
          Đã có tài khoản?{" "}
          <Link
            to="/login"
            className="register-card__login-link text-indigo-600 hover:underline font-medium"
          >
            Đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
