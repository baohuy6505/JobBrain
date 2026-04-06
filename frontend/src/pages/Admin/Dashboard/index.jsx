import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import PublicLayout from '../layouts/PublicLayout';
import PrivateRoute from './PrivateRoute'; // Component check Auth

// Import Pages
import Dashboard from '../pages/admin/Dashboard';
import UserManagement from '../pages/admin/Users';
import Login from '../pages/auth/Login';

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<div>Trang chủ cho khách</div>} />
      </Route>

      <Route path="/login" element={<Login />} />

      {/* 3. Tuyến đường cho Admin (Đã được bảo vệ và bọc Layout) */}
      <Route 
        path="/admin" 
        element={
          <PrivateRoute>
            <AdminLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Dashboard />} />             
        <Route path="users" element={<UserManagement />} /> 
        <Route path="settings" element={<div>Settings</div>} /> 
      </Route>
    </Routes>
  );
};

export default AppRouter;