import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  function homeButtonClickHandler() {
    router.push("/");
  }

  return (
    <>
      <h1>Page not found</h1>
      <p>
        The page you are looking for was not found. Click the button below to
        visit our homepage.
      </p>
      <button onClick={homeButtonClickHandler}>Home</button>
    </>
  );
}
