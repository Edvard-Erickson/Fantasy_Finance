import { Link, useLocation } from "react-router-dom";

interface SubNavItem {
  name: string;
  path: string;
}

interface SubNavProps {
  items: SubNavItem[];
}

export default function SubNav({ items }: SubNavProps) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="h-14 bg-white border-b border-gray-300 flex items-center px-6">
      <ul className="flex gap-8">
        {items.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`block py-3 border-b-2 transition-colors ${
                isActive(item.path)
                  ? "border-black font-medium"
                  : "border-transparent hover:border-gray-300"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
