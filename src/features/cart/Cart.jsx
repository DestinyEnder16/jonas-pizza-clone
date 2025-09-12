import { useSelector } from "react-redux";
import ErrorPage from "../../ui/ErrorPage";
import BackBtn from "../../ui/BackBtn";
import CartItem from "./CartItem";
import Button from "../../ui/Button";
import { getTotalCost } from "./cartSlice";
import { Link, useNavigate } from "react-router";
import { formatCurrency } from "../../utilities/helper";
import HandleNavigation from "../../ui/HandleNavigation";

function Cart() {
  const { cart } = useSelector((state) => state.cart);
  const total = useSelector(getTotalCost);

  const navigate = useNavigate();

  if (!cart.length) {
    return (
      <HandleNavigation
        message={
          "Your cart is currently empty, head to our menu to get your order."
        }
        direction={"menu"}
        level={1}
      />
    );
  } else {
    console.log(cart);
  }

  return (
    <div className="padding h-lvh overflow-scroll">
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
          <Button type={"primary"} onClick={() => navigate("/order")}>
            Next
          </Button>
        </div>
      </aside>
    </div>
  );
}

export default Cart;
