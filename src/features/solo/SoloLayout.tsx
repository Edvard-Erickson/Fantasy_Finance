import { Outlet } from "react-router-dom";
import { usePageTitle } from "../../hooks/usePageTitle";
import SubNav from "../../layouts/components/SubNav";

export default function SoloLayout() {
  usePageTitle("Solo");

  const subNavItems = [
    { name: "Portfolio", path: "/solo" },
    { name: "Global Leaderboard", path: "/solo/global-leaderboard" },
  ];

  return (
    <>
      <SubNav items={subNavItems} />
      <div className="p-6">
        <Outlet />
      </div>
    </>
  );
}
