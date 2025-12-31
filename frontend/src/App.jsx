// Thêm dòng này vào đầu file
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from './pages/Home';
// import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route
            path="login"
            element={<div className="p-10 text-black">🔑 Trang Đăng nhập</div>}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
