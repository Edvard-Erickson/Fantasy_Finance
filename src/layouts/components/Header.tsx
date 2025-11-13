interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-gray-300 flex items-center justify-between px-6">
      {/* Page Title */}
      <h1 className="text-2xl font-medium">{title}</h1>

      {/* Search Bar */}
      <div className="relative w-96">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </header>
  );
}
