import { Link, useLocation } from "react-router-dom";
import { type ReactNode } from "react";

interface SubNavItem {
  name: string;
  path: string;
}

interface SubNavProps {
  items: SubNavItem[];
  rightContent?: ReactNode;
}

export default function SubNav({ items, rightContent }: SubNavProps) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="h-12 bg-white border-b border-gray-300 flex items-center justify-between px-6">
      <ul className="flex gap-8">
        {items.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`block py-3 border-b-2 transition-colors ${
                isActive(item.path)
                  ? "border-green-700 font-medium text-green-700"
                  : "border-transparent hover:border-gray-300"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      {rightContent && <div className="flex items-center">{rightContent}</div>}
    </nav>
  );
}
