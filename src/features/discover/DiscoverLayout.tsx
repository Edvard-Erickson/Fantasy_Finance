import { Outlet } from "react-router-dom";
import { usePageTitle } from "../../hooks/usePageTitle";
import SubNav from "../../layouts/components/SubNav";

export default function DiscoverLayout() {
  usePageTitle("Discover");

  const subNavItems = [
    { name: "Subpage", path: "/discover" },
    { name: "Subpage 2", path: "/discover/subpage2" },
    { name: "Subpage 3", path: "/discover/subpage3" },
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
