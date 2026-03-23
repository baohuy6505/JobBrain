import React from "react";
import "./RegisterForm.css"; // Chúng ta sẽ tạo file này sau

const RegisterForm = () => {
  return (
    <div className="register-card">
      <h2 className="register-card__title text-2xl font-bold mb-6">
        Tạo tài khoản
      </h2>

      {/* Block: role-selector */}
      <div className="role-selector flex gap-4 mb-8">
        <div className="role-selector__item role-selector__item--active flex-1 border-2 border-blue-600 p-4 rounded-xl cursor-pointer bg-blue-50">
          <span className="role-selector__icon text-xl">👤</span>
          <div className="role-selector__content">
            <p className="role-selector__label font-bold">Ứng viên</p>
            <p className="role-selector__desc text-xs text-gray-500">
              Tìm kiếm công việc mơ ước
            </p>
          </div>
        </div>

        <div className="role-selector__item flex-1 border border-gray-200 p-4 rounded-xl cursor-pointer hover:border-blue-300">
          <span className="role-selector__icon text-xl">🏢</span>
          <div className="role-selector__content">
            <p className="role-selector__label font-bold text-gray-400">
              Nhà tuyển dụng
            </p>
            <p className="role-selector__desc text-xs text-gray-400">
              Đăng tin và tìm nhân tài
            </p>
          </div>
        </div>
      </div>

      {/* Block: register-form */}
      <form className="register-form">
        <div className="register-form__field mb-4 text-left">
          <label className="register-form__label block mb-1 font-medium">
            Họ và tên
          </label>
          <input
            type="text"
            className="register-form__input w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nguyễn Văn An"
          />
        </div>

        <div className="register-form__field mb-4 text-left">
          <label className="register-form__label block mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            className="register-form__input w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="name@example.com"
          />
        </div>

        <button
          type="submit"
          className="register-form__button w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-all"
        >
          Tạo tài khoản
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
