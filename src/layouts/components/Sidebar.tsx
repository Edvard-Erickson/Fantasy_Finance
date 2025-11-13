import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Discover", path: "/discover" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-56 h-screen bg-gray-100 border-r border-gray-300 flex flex-col">
      {/* Logo/Brand */}
      <div className="h-16 flex items-center px-6 border-b border-gray-300">
        <h1 className="text-lg font-medium leading-tight">Fantasy Finance</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`block px-4 py-2 rounded transition-colors ${
                  isActive(item.path)
                    ? "bg-white font-medium"
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
      <div className="p-4 border-t border-gray-300">
        <Link
          to="/profile"
          className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-200 transition-colors"
        >
          <div className="w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center bg-white">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <span className="text-sm">Username</span>
        </Link>
      </div>
    </aside>
  );
}
