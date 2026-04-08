import AuthLayout from "../../layouts/auth/AuthLayout";
import RegisterForm from "../../components/auth/Register/RegisterForm"; // Check kỹ đường dẫn này

const RegisterPage = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
