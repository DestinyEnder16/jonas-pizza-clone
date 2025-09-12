import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItemFromCart,
} from "../cart/cartSlice";

function Counter({ quantity, id }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        type={"secondary"}
        onClick={() => {
          quantity > 1
            ? dispatch(decreaseItemQuantity(id))
            : dispatch(removeItemFromCart(id));
        }}
      >
        -
      </Button>
      <span className="mx-2 font-bold">{quantity}</span>
      <Button
        type={"secondary"}
        onClick={() => dispatch(increaseItemQuantity(id))}
      >
        +
      </Button>
    </div>
  );
}

export default Counter;
