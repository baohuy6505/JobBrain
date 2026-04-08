import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../common/PasswordInput";
import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // Quản lý trạng thái loading
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra nhanh ở Client
    if (!email || !password) {
      return alert("Vui lòng nhập đầy đủ email và mật khẩu!");
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        { email, password },
      );
      if (response.data.success) {
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("user", JSON.stringify(response.data.data));
        navigate("/");
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Đăng nhập thất bại!";
      alert(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
      <form onSubmit={handleSubmit}>
        <h2 className="text-lg font-bold">ĐĂNG NHẬP</h2>
        <p className="text-sm text-slate-600">Chào mừng trở lại</p>

        <div className="form__email mt-3">
          <label htmlFor="email" className="mb-2 block">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Nhập email ở đây nhaaaa"
            className="block w-full border border-slate-400 outline-none rounded-sm py-2 px-4"
          />
        </div>

        <div className="form__password mt-2">
          <label htmlFor="password" className="mb-2 block">
            Mật khẩu
          </label>
          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nhập mật khẩu"
          />
        </div>

        <div className="form__options flex justify-between mt-1">
          <label>
            <input type="checkbox" /> Nhớ đăng nhập
          </label>
          <Link to="/forgot-password" className="text-blue-400">
            Quên mật khẩu ?
          </Link>
        </div>

        <button
          type="submit"
          className="btn-login w-full bg-blue-600 text-center mt-4 py-3 text-white rounded cursor-pointer"
        >
          Đăng nhập
        </button>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-slate-200"></div>
          <span className="flex-shrink mx-4 text-slate-400 text-sm">hoặc</span>
          <div className="flex-grow border-t border-slate-200"></div>
        </div>

        <button
          type="button"
          className="cursor-pointer flex items-center justify-center w-full gap-3 py-2.5 border border-slate-300 rounded-lg bg-white text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-400 transition-all duration-200"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google icon"
            className="w-5 h-5"
          />
          <span>Tiếp tục với Google</span>
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
