import { useSelector } from "react-redux";
import { Link } from "react-router";
import Username from "../features/user/Username";
import CartIcon from "./CartIcon";
import { getTotalCartItems } from "../features/cart/cartSlice";

function Header() {
  const { username } = useSelector((store) => store.user);
  const totalCartItems = useSelector(getTotalCartItems);
  return (
    <header className="bg-crust text-md sticky top-0 z-50 flex h-min w-full items-center justify-between px-3 py-4 shadow-md">
      <nav>
        <Link to={"/"} className="font-semibold outline-none">
          Fast Pizza Co.
        </Link>
      </nav>

      <span>
        <CartIcon number={totalCartItems} />
      </span>

      {username.length > 0 && <Username />}
    </header>
  );
}

export default Header;
