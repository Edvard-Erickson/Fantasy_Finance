import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { useLayout } from "../context/LayoutContext";

export default function MainLayout() {
  const { pageTitle } = useLayout();

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header with title and search */}
        <Header title={pageTitle} />

        {/* SubNav will be rendered by individual pages if needed */}

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
