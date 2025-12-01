import { usePageTitle } from "@/hooks/usePageTitle";
import PageContent from "../../../layouts/components/PageContent";

function Discover() {
  usePageTitle("Discover");

  return (
    <PageContent>
      <p className="text-gray-600">This is the discover page.</p>
    </PageContent>
  );
}

export default Discover;
