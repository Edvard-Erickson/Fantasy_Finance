import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-accent flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg p-8">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900">
              Fantasy Finance
            </h1>
            <p className="mt-2 text-gray-600">Your stock market game</p>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
