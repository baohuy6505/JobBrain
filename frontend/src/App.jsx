import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";
import ManagerLayout from "./layouts/ManagerLayout";
import AdminLayout from "./layouts/AdminLayout";

// General Pages
import HomePage from "./pages/HomePage/Homepage";
import JobBoard from "./pages/JobsPage/jobBoard";
import JobDetail from "./pages/JobDetailPage/JobDetail";
import MessagesPage from "./pages/MessagesPage/MessagesPage";
import NotificationsPage from "./pages/NotificationsPage/NotificationsPage";
import CompanyPage from "./pages/CompanyPage/CompaniesPage";
import CompanyDetail from "./pages/CompanyPage/CompanyDetail";

// Manager Pages
import MyJobsActivePage from "./pages/Manager/Dashboard/MyJobsActivePage";
import CandidatesBoardPage from "./pages/Manager/Dashboard/CandidatesBoardPage";
import InterviewManager from "./pages/Manager/Interviews/InterviewManager";
import JobPosts from "./pages/JobPosts/JobPosts";

// Admin Pages
import AdminDashboard from "./pages/Admin/Dashboard/AdminDashboard";
import RolePage from "./pages/Admin/Role/RolePage";
import ConfigPage from "./pages/Admin/Config/ConfigPage";
import AdminJobsPage from "./pages/Admin/Jobs/AdminJobsPage";
import CandidatesAdminPage from "./pages/Admin/Candidates/CandidatesAdminPage";
import AnalyticsAdminPage from "./pages/Admin/Analytics/AnalyticsAdminPage";

// Authentication Pages
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <Routes>
      {/* 1. Nhóm Main Layout & Public Routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />

        <Route path="list-job" element={<JobBoard />} />
        <Route path="job/:id" element={<JobDetail />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="companies" element={<CompanyPage />} />
        <Route path="companies/:id" element={<CompanyDetail />} />
      </Route>

      {/* 2. Manager Layout */}
      <Route path="manager" element={<ManagerLayout />}>
        <Route path="job-posts" element={<JobPosts />} />
        <Route path="my-jobs-active" element={<MyJobsActivePage />} />
        <Route path="candidates-board" element={<CandidatesBoardPage />} />
        <Route path="interviews" element={<InterviewManager />} />
      </Route>

      {/* 3.  Admin Layout */}
      <Route path="admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="role" element={<RolePage />} />
        <Route path="config" element={<ConfigPage />} />
        <Route path="jobs" element={<AdminJobsPage />} />
        <Route path="candidates" element={<CandidatesAdminPage />} />
        <Route path="analytics" element={<AnalyticsAdminPage />} />
      </Route>

      {/* 4. Nhóm Authentication */}
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;