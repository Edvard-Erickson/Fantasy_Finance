import { Outlet } from "react-router-dom";
import { LogOut } from "lucide-react";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useAuth } from "../../context/AuthContext";
import SubNav from "../../layouts/components/SubNav";
import { Button } from "../../components/ui/button";

export default function ProfileLayout() {
  usePageTitle("Your Profile");
  const { signOut } = useAuth();

  const subNavItems = [
    { name: "Profile", path: "/profile" },
    { name: "Friends", path: "/profile/friends" },
  ];

  return (
    <>
      <SubNav
        items={subNavItems}
        rightContent={
          <Button
            variant="ghost"
            size="sm"
            onClick={() => signOut()}
            className="gap-2"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        }
      />
      <div className="p-6">
        <Outlet />
      </div>
    </>
  );
}
