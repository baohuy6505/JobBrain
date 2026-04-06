import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
// import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/Homepage";
import Admin from "./pages/Admin";
import MessagesPage from "./pages/MessagesPage/MessagesPage";
import JobBoard from "./pages/JobsPage/jobBoard";
import JobDetail from "./pages/JobDetailPage/JobDetail";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="list-job" element={<JobBoard />} />
        <Route path="job/:id" element={<JobDetail />} />
        <Route path="admin" element={<Admin />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
