import { Link } from "react-router";

function Header() {
  return (
    <header className="bg-crust text-md flex h-min justify-between px-1 py-4">
      <span>
        <Link to={"/"} className="font-semibold outline-none">
          Fast Pizza Co.
        </Link>
      </span>

      <span className="font-medium">%NAME%</span>
    </header>
  );
}

export default Header;
