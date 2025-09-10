import { Link } from "react-router";

function Header() {
  return (
    <header className="bg-cheese text-md flex h-min justify-between px-1 py-4">
      <span>
        <Link to={"/"} className="outline-none">
          Fast Pizza Co.
        </Link>
      </span>

      <span>%NAME%</span>
    </header>
  );
}

export default Header;
