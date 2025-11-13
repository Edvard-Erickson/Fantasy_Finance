import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
// import AuthLayout from '../layouts/AuthLayout';
import ProtectedRoute from "./ProtectedRoute";
import Home from "../features/home/pages/HomePage";
import DiscoverLayout from "../features/discover/DiscoverLayout";
import DiscoverPage from "../features/discover/pages/DiscoverPage";
import ProfileLayout from "../features/profile/ProfileLayout";
import ProfilePage from "../features/profile/pages/ProfilePage";
import FriendsPage from "../features/profile/pages/FriendsPage";
import NotFoundPage from "../pages/NotFoundPage";
import { LayoutProvider } from "../context/LayoutContext";

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
      // Future routes (uncomment when pages are created):
      // { path: '/solo', element: <SoloPage /> },
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
  // Auth routes (uncomment when auth pages are created):
  // {
  //   element: <AuthLayout />,
  //   children: [
  //     { path: '/login', element: <LoginPage /> },
  //     { path: '/register', element: <RegisterPage /> },
  //   ],
  // },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
