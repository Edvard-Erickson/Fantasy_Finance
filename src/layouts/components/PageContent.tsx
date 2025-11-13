import type { ReactNode } from "react";

interface PageContentProps {
  children: ReactNode;
}

export default function PageContent({ children }: PageContentProps) {
  return <div className="p-6">{children}</div>;
}
