import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { User2 } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();
  const { profile } = useAuth();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Discover", path: "/discover" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-56 h-screen bg-gray-100 border-r border-gray-300 flex flex-col">
      {/* Logo/Brand */}
      <div className="h-14 flex items-center px-6 border-b border-gray-300">
        <h1 className="text-lg font-medium leading-tight">Fantasy Finance</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-2">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`block px-4 py-2 rounded transition-colors ${
                  isActive(item.path)
                    ? "bg-white font-medium text-green-700"
                    : "hover:bg-gray-200"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile at Bottom */}
      <div className="border-t border-gray-300">
        <Link
          to="/profile"
          className="flex items-center gap-3 px-4 py-4 hover:bg-gray-200 transition-colors"
        >
          <div className="w-8 h-8 shrink-0 rounded-full border-[1.5px] border-gray-500 flex items-center justify-center bg-white">
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
