import { Outlet } from "react-router-dom";
import Sidebar from "../components/manager/navigations/Sidebar";
import Topbar from "../components/manager/navigations/Topbar";
import FooterManager from "../components/Footer/FooterManager";

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