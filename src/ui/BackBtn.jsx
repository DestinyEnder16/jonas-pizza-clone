import { Link } from "react-router";

function BackBtn() {
  return (
    <Link
      className="underline underline-offset-5 transition-all duration-1000 ease-in-out hover:no-underline"
      to={-1}
    >
      &larr; Go Back
    </Link>
  );
}

export default BackBtn;
