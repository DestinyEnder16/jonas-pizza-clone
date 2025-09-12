import { Link } from "react-router";

function BackHomeBtn() {
  return (
    <Link
      className="underline underline-offset-5 transition-all duration-500 ease-in-out hover:no-underline"
      to={"/"}
    >
      &larr; Go Back To Homepage
    </Link>
  );
}

export default BackHomeBtn;
