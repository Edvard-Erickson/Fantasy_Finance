import { useEffect } from "react";
import { useLayout } from "../context/LayoutContext";

export function usePageTitle(title: string) {
  const { setPageTitle } = useLayout();

  useEffect(() => {
    setPageTitle(title);
  }, [title, setPageTitle]);
}
