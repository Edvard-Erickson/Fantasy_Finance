import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface LayoutContextType {
  pageTitle: string;
  setPageTitle: (title: string) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [pageTitle, setPageTitle] = useState("Page");

  return (
    <LayoutContext.Provider value={{ pageTitle, setPageTitle }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
}
