import { type ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

// TODO: Add authentication logic later
export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  // For now, just render children without auth check
  // Later: check if user is authenticated, redirect to login if not
  return <>{children}</>;
}
