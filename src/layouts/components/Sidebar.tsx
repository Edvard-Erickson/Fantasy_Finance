import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  Compass,
  Home,
  Mountain,
  PersonStanding,
  PlusCircle,
  User2,
  UserPlus,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type NavItem = {
  name: string;
  path: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export default function Sidebar() {
  const location = useLocation();
  const { profile } = useAuth();

  const navItems: NavItem[] = [
    { name: "Home", path: "/", icon: Home },
    { name: "Discover", path: "/discover", icon: Compass },
    { name: "Solo", path: "/solo", icon: UserRound },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return (
      location.pathname === path || location.pathname.startsWith(path + "/")
    );
  };

  return (
    <aside className="w-50 h-screen bg-gray-100 border-r border-gray-300 flex flex-col">
      {/* Logo/Brand */}
      <div className="flex items-center p-4">
        <img
          src="/public/ff_favicon.png"
          alt="Fantasy Finance Logo"
          className="w-9 h-9 mr-2"
        />
        <h1 className="text-sm font-bold leading-none text-green-700">
          FANTASY
          <br />
          FINANCE
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded transition-colors ${
                    active
                      ? "bg-gray-200 font-semibold text-green-700"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-5 h-5" strokeWidth={active ? 2.5 : 1.8} />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="my-4 px-4">
          <div className="border-t-2 border-gray-300" />
        </div>

        <h3 className="px-4 text-xs font-semibold text-gray-500">LEAGUES</h3>

        <div className="flex gap-2 px-4 mt-2">
          <Button size="xs" variant="secondary" className="flex-1">
            <PlusCircle /> Create
          </Button>
          <Button size="xs" variant="secondary" className="flex-1">
            <UserPlus /> Join
          </Button>
        </div>
      </nav>

      {/* User Profile at Bottom */}
      <div className="border-t border-gray-300">
        <Link
          to="/profile"
          className="flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors"
        >
          <div className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center bg-gray-300">
            <User2 className="w-5 h-5 text-gray-500" />
          </div>
          <span className="text-sm truncate min-w-0">
            {profile?.username || "Username"}
          </span>
        </Link>
      </div>
    </aside>
  );
}
