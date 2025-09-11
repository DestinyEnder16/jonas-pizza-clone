import { useSelector } from "react-redux";
import { Link } from "react-router";
import Username from "../features/user/Username";
import CartIcon from "./CartIcon";
import { getTotalCartItems } from "../features/cart/cartSlice";

function Header() {
  const { username } = useSelector((store) => store.user);
  const totalCartItems = useSelector(getTotalCartItems);
  return (
    <header className="bg-crust text-md fixed top-0 z-50 flex h-min w-full justify-between px-3 py-4 shadow-md">
      <span>
        <Link to={"/"} className="font-semibold outline-none">
          Fast Pizza Co.
        </Link>
      </span>

      <span>
        <CartIcon number={totalCartItems} />
      </span>

      {username.length > 0 && <Username />}
    </header>
  );
}

export default Header;
