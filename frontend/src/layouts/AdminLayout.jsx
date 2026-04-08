import { Outlet, useLocation } from "react-router-dom";
import { useMemo, useState } from "react";
import AdminSidebar from "../Components/admin/AdminSidebar";
import AdminHeader from "../Components/admin/AdminHeader";

export default function AdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const pageTitle = useMemo(() => {
    if (location.pathname.includes("/admin/dashboard")) return "System Performance";
    if (location.pathname.includes("/admin/jobs")) return "Job Management";
    if (location.pathname.includes("/admin/candidates")) return "Candidate Management";
    if (location.pathname.includes("/admin/analytics")) return "Employer Analytics";
    if (location.pathname.includes("/admin/role")) return "Role Management";
    if (location.pathname.includes("/admin/config")) return "System Configuration";
    return "Admin Dashboard";
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#f3f4fa]">
      <AdminSidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <div className="min-h-screen lg:ml-[188px]">
        <AdminHeader
          title={pageTitle}
          onMenuClick={() => setMobileOpen(true)}
        />
        <main className="px-4 py-5 md:px-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}