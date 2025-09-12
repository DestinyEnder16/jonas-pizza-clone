import { Link, useRouteError } from "react-router";
import BackHomeBtn from "./BackHomeBtn";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>

      {/* <LinkBut to="-1">&larr; Go back</LinkButton>
       */}
      <BackHomeBtn />
    </div>
  );
}

export default ErrorPage;
