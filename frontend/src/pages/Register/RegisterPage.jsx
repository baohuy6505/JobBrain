import AuthLayout from "../../layouts/auth/AuthLayout";
import RegisterForm from "../../Components/auth/Register/RegisterForm"; // Check kỹ đường dẫn này

const RegisterPage = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
