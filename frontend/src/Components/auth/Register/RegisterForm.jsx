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
    if (form.password !== form.confirmPassword)
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
    console.log("Submit Data:", { role, ...form });
    alert(
      `Đăng ký thành công vai trò: ${role === "candidate" ? "Ứng viên" : "Nhà tuyển dụng"}`,
    );
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
          errors={errors}
          handleChange={handleChange}
          role={role}
        />
      </form>

      {/* Phần Link điều hướng đã được xóa vì đã có ở AuthLayout */}
    </div>
  );
};

export default RegisterForm;
