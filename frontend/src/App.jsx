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

<<<<<<< HEAD
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
import ProfilePage from "./pages/ProfilePage/ProfilePage";
=======
import UserDashboardPage from "./pages/UserDashboardPage/UserDashboardPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import WalletPage from "./pages/WalletPage/WalletPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
>>>>>>> feature/dashboarh-and-profile-ui-Vu

function App() {
  return (
    <Routes>
      {/* 1. Nhóm Main Layout & Public Routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
<<<<<<< HEAD
        <Route path="home" element={<HomePage />} />

        <Route path="list-job" element={<JobBoard />} />
        <Route path="job/:id" element={<JobDetail />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="messages/:id" element={<MessagesPage />} />
        <Route path="profile/:id" element={<ProfilePage />} />
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
=======

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
>>>>>>> feature/dashboarh-and-profile-ui-Vu
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />

      {/* NOT FOUND */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;