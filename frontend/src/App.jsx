import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/Homepage";
import Admin from "./pages/Admin";
import MessagesPage from "./pages/MessagesPage/MessagesPage";

import DashboardLayout from "./layouts/Dashboard/DashboardLayout";
import MyJobsPage from "./pages/Dashboard/MyJobsPage";
import MyJobsActivePage from "./pages/Dashboard/MyJobsActivePage";
import CandidatesBoardPage from "./pages/Dashboard/CandidatesBoardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="admin" element={<Admin />} />
      </Route>

      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="my-jobs" element={<MyJobsPage />} />
        <Route path="my-jobs-active" element={<MyJobsActivePage />} />
        <Route path="candidates-board" element={<CandidatesBoardPage />} />
      </Route>
    </Routes>
  );
}

export default App;