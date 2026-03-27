import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const AuthLayout = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  return (
    <div className="flex items-center justify-center min-h-screen flex-col px-4">
      <h1 className="text-3xl my-6 font-bold">JOBBRAIN</h1>
      {children}
      <div className="my-6 text-center">
        {isLoginPage ? (
          <p className="text-slate-600 text-base">
            Chưa có tài khoản?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:underline transition-all"
            >
              Đăng ký ngay
            </Link>
          </p>
        ) : (
          <p className="text-slate-600 text-base">
            Đã có tài khoản?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline transition-all"
            >
              Đăng nhập ngay
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};
export default AuthLayout;
