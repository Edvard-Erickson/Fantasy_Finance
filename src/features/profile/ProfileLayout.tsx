import { Outlet } from "react-router-dom";
import { usePageTitle } from "../../hooks/usePageTitle";
import SubNav from "../../layouts/components/SubNav";

export default function ProfileLayout() {
  usePageTitle("Username");

  const subNavItems = [
    { name: "Profile", path: "/profile" },
    { name: "Friends", path: "/profile/friends" },
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
