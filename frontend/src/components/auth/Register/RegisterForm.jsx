import { useState } from "react";
import RoleSelector from "./RoleSelector";
import RegistrationFields from "./RegistrationFields";
import axios from "axios";

const RegisterForm = () => {
  const [role, setRole] = useState("candidate");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
const [loading, setLoading] = useState(false);
  const handleChange = (field) => (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        {
          fullName: form.fullName,
          email: form.email,
          password: form.password,
          role: role,
        },
      );

      if (response.data.success) {
        window.location.href = "/login";
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Đã có lỗi xảy ra!";
      alert(errorMsg);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="register-card bg-white rounded-2xl shadow-md w-full max-w-[450px] px-8 py-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Tạo tài khoản
      </h2>

      <RoleSelector role={role} setRole={setRole} />

      <form onSubmit={handleSubmit} noValidate>
        <RegistrationFields
          form={form}
          handleChange={handleChange}
          role={role}
        />

        {/* <button
          type="submit"
          disabled={loading}
          className={`w-full mt-6 py-3 rounded-xl font-semibold text-white transition-all ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Đang xử lý..." : "Đăng ký ngay"}
        </button> */}
      </form>
    </div>
  );
};

export default RegisterForm;
