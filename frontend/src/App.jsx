import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/Homepage";
import Admin from "./pages/Admin";
import JobPosts from "./pages/JobPosts/JobPosts";
import MessagesPage from "./pages/MessagesPage/MessagesPage";
import DashboardLayout from "./layouts/Dashboard/DashboardLayout";
import MyJobsPage from "./pages/Dashboard/MyJobsPage";
import MyJobsActivePage from "./pages/Dashboard/MyJobsActivePage";
import CandidatesBoardPage from "./pages/Dashboard/CandidatesBoardPage";
import JobBoard from "./pages/JobsPage/jobBoard";
import JobDetail from "./pages/JobDetailPage/JobDetail";
import NotificationsPage from "./pages/NotificationsPage/NotificationsPage";
import Dashboard from "./pages/Admin/DashBoarb";
import CompanyPage from "./pages/CompanyPage/CompaniesPage";
import CompanyDetail from "./pages/CompanyPage/CompanyDetail";

import UserDashboardPage from "./pages/UserDashboardPage/UserDashboardPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import WalletPage from "./pages/WalletPage/WalletPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />

        <Route path="job-posts" element={<JobPosts />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="list-job" element={<JobBoard />} />
        <Route path="job/:id" element={<JobDetail />} />

        <Route path="user-dashboard" element={<UserDashboardPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="notifications" element={<NotificationsPage />} />

        <Route path="admin" element={<Admin />} />

      </Route>
        {/* DASHBOARD */}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="my-jobs" element={<MyJobsPage />} />
          <Route path="my-jobs-active" element={<MyJobsActivePage />} />
          <Route path="candidates-board" element={<CandidatesBoardPage />} />
          <Route path="messages" element={<MessagesPage />} />
          <Route path="companies" element={<CompanyPage />} />
          <Route path="companies/:id" element={<CompanyDetail />} />
          <Route path="wallet" element={<WalletPage />} />
        </Route>

      {/* AUTH */}
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />

      {/* NOT FOUND */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;