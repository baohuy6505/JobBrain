import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* BỎ container mx-auto ở đây để các Section như Hero có thể tràn viền */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
