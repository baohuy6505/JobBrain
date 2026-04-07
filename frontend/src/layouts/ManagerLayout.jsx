import { Outlet } from "react-router-dom";
import Sidebar from "../Components/manager/dashboard/Sidebar";
import Topbar from "../Components/manager/dashboard/Topbar";
import FooterManager from "../Components/Footer/FooterManager";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-[#f3f4fa]">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />

        <main className="flex-1 px-6 py-4">
          <div className="mx-auto w-full max-w-[980px]">
            <Outlet />
          </div>
        </main>

        {/* <FooterManager /> */}
      </div>
    </div>
  );
}