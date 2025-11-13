import { usePageTitle } from "../../../hooks/usePageTitle";
import PageContent from "../../../layouts/components/PageContent";

function Home() {
  usePageTitle("Home");

  return (
    <PageContent>
      <h1 className="text-2xl font-bold">Home Content</h1>
      <p className="mt-4 text-gray-600">This is the home page.</p>
    </PageContent>
  );
}

export default Home;
