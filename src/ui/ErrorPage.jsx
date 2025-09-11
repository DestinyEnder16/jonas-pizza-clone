import { useRouteError } from "react-router";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>

      {/* <LinkBut to="-1">&larr; Go back</LinkButton> */}
    </div>
  );
}

export default ErrorPage;
