import { Button } from "@/components/ui/button";
import { usePageTitle } from "../../../hooks/usePageTitle";
import PageContent from "../../../layouts/components/PageContent";

function Home() {
  usePageTitle("Home");

  return (
    <PageContent>
      <p className="text-gray-600">This is the home page.</p>
      <Button className="mt-4">Example</Button>
    </PageContent>
  );
}

export default Home;
