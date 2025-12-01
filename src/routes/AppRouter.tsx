import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../features/home/pages/HomePage";
import DiscoverPage from "../features/discover/pages/DiscoverPage";
import ProfileLayout from "../features/profile/ProfileLayout";
import ProfilePage from "../features/profile/pages/ProfilePage";
import FriendsPage from "../features/profile/pages/FriendsPage";
import LoginPage from "../features/auth/pages/LoginPage";
import SignupPage from "../features/auth/pages/SignupPage";
import NotFoundPage from "../pages/NotFoundPage";
import { LayoutProvider } from "../context/LayoutContext";
import { AuthProvider } from "../context/AuthContext";
import SoloLayout from "@/features/solo/SoloLayout";
import SoloLeaderboardPage from "@/features/solo/pages/SoloLeaderboardPage";
import SoloPortfolioPage from "../features/solo/pages/SoloPortfolioPage";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      element: (
        <LayoutProvider>
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        </LayoutProvider>
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "/discover", element: <DiscoverPage /> },
        {
          path: "/solo",
          element: <SoloLayout />,
          children: [
            { index: true, element: <SoloPortfolioPage /> },
            { path: "global-leaderboard", element: <SoloLeaderboardPage /> },
          ],
        },
        // Future routes (uncomment when pages are created):
        // { path: '/leagues', element: <LeaguesPage /> },
        // { path: '/leagues/:id', element: <LeagueDetailPage /> },
        {
          path: "/profile",
          element: <ProfileLayout />,
          children: [
            { index: true, element: <ProfilePage /> },
            { path: "friends", element: <FriendsPage /> },
          ],
        },
      ],
    },
    {
      element: <AuthLayout />,
      children: [
        { path: "/login", element: <LoginPage /> },
        { path: "/signup", element: <SignupPage /> },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
