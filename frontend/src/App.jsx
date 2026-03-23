// Thêm dòng này vào đầu file
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import LoginPage from "./pages/Login/loginPage";
// import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
