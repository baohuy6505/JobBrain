import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/manager/navigations/Sidebar";
import Topbar from "../components/manager/navigations/Topbar";
import FooterManager from "../components/Footer/FooterManager";

export default function ManagerLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-screen overflow-hidden bg-[#f3f4fa]">
      <div className="flex h-full">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <div className="flex min-w-0 flex-1 flex-col lg:pl-[310px]">
          <Topbar onMenuClick={() => setIsSidebarOpen(true)} />

          <main className="flex-1 overflow-y-auto px-3 py-4 sm:px-4 sm:py-5 lg:px-6 lg:py-6">
            <div className="mx-auto w-full max-w-[1400px]">
              <Outlet />
            </div>
          </main>

          <FooterManager />
        </div>
      </div>
    </div>
  );
}