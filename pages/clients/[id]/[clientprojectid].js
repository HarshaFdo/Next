import { useRouter } from "next/router";

function SelectedClientProjectsPage() {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>The Project Page for a Specifc Project for a Selected Client</h1>
    </div>
  )
}

export default SelectedClientProjectsPage;