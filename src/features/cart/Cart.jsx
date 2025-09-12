import { useSelector } from "react-redux";
import ErrorPage from "../../ui/ErrorPage";
import BackBtn from "../../ui/BackBtn";
import CartItem from "./CartItem";
import Button from "../../ui/Button";
import { getTotalCost } from "./cartSlice";
import { Link } from "react-router";
import { formatCurrency } from "../../utilities/helper";

function Cart() {
  const { cart } = useSelector((state) => state.cart);
  const total = useSelector(getTotalCost);
  console.log(total);

  if (!cart.length) {
    return (
      <p>
        cart is empty, visit our menu to eat more pizzas{" "}
        <Link to={"/menu"}>Back to menu</Link>
      </p>
    );
  } else {
    console.log(cart);
  }

  return (
    <div className="padding h-full overflow-scroll">
      <BackBtn />
      <h1 className="text-chilli mt-4 text-center font-semibold">
        Order Summary
      </h1>

      <aside className="mt-10 flex w-full flex-col gap-4">
        <div className="">
          Total:{" "}
          <span className="text-red font-semibold">
            {formatCurrency(total)}
          </span>
        </div>
        <ul className="shrink-0">
          {cart.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </ul>

        <div className="self-center">
          <Button type={"primary"}>Next</Button>
        </div>
      </aside>
    </div>
  );
}

export default Cart;
