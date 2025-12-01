import { Search } from "lucide-react";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="h-14 bg-white border-b border-gray-300 flex items-center justify-between px-6">
      {/* Page Title */}
      <h1 className="text-xl font-medium">{title}</h1>

      {/* Search Bar */}
      <div className="flex items-center gap-4">
        <div className="relative w-96">
          <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search all stocks"
            className="w-full pl-9 pr-4 py-1 text-sm bg-gray-100 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
          />
        </div>
      </div>
    </header>
  );
}
