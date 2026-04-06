import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/Homepage";
import Admin from "./pages/Admin";
import MessagesPage from "./pages/MessagesPage/MessagesPage";
import NotificationsPage from "./pages/NotificationsPage/NotificationsPage";
import Dashboard from "./pages/Admin/DashBoarb";
import CompanyPage from "./pages/CompanyPage/CompaniesPage";
// IMPORT trang chi tiết công ty (Bạn hãy tạo file này theo cấu trúc dưới đây nhé)
import CompanyDetail from "./pages/CompanyPage/CompanyDetail";

import { Provider } from "react-redux";
import { store } from ".././src/app/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="messages" element={<MessagesPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="companies" element={<CompanyPage />} />
          <Route path="companies/:id" element={<CompanyDetail />} />

          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
