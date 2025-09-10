import { useSelector } from "react-redux";
import { Link } from "react-router";
import Username from "../features/user/Username";

function Header() {
  const { username } = useSelector((store) => store.user);
  return (
    <header className="bg-crust text-md flex h-min justify-between px-3 py-4">
      <span>
        <Link to={"/"} className="font-semibold outline-none">
          Fast Pizza Co.
        </Link>
      </span>

      <Username />
    </header>
  );
}

export default Header;
