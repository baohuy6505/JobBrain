import { useState } from "react";
import RoleSelector from "./RoleSelector";
import RegistrationFields from "./RegistrationFields";

const RegisterForm = () => {
  const [role, setRole] = useState("candidate");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleChange = (field) => (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    /* Bỏ padding-y và các phần dư thừa vì AuthLayout đã bao quát bên ngoài */
    <div className="register-card bg-white rounded-2xl shadow-md w-full max-w-[450px] px-8 py-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Tạo tài khoản
      </h2>

      {/* Component chọn vai trò */}
      <RoleSelector role={role} setRole={setRole} />

      <form onSubmit={handleSubmit} noValidate>
        {/* Component các trường nhập liệu */}
        <RegistrationFields
          form={form}
          handleChange={handleChange}
          role={role}
        />
      </form>

      {/* Phần Link điều hướng đã được xóa vì đã có ở AuthLayout */}
    </div>
  );
};

export default RegisterForm;
