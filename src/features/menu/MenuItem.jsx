import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utilities/helper";
import MenuItemPrice from "./MenuItemPrice";
import { addToCart, itemIsInCart } from "../cart/cartSlice";
import DeleteIcon from "../../ui/DeleteIcon";
import Counter from "./Counter";

function MenuItem({ pizzaItem }) {
  const isSoldOut = pizzaItem.soldOut;
  const isInCart = useSelector(itemIsInCart(pizzaItem.id));

  const dispatch = useDispatch();
  return (
    <li
      className={`shadow-cheese mb-[40px] grid grid-cols-1 gap-5 rounded-2xl px-4 py-4 shadow-md ${isSoldOut && "grayscale-75"}`}
    >
      <div className="flex justify-between">
        <div className="w-fit overflow-clip rounded-full">
          <img src={pizzaItem.imageUrl} alt={pizzaItem.name} />
        </div>

        <MenuItemPrice price={pizzaItem.unitPrice} isSoldOut={isSoldOut} />
      </div>

      <div className="flex flex-col items-center justify-between gap-3">
        <h3 className="text-center text-xl font-bold">{pizzaItem.name}</h3>
        <span className="text-center text-sm italic">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </span>

        <div className="mt-3">
          {!isSoldOut ? (
            !isInCart ? (
              <Button
                type={"primary"}
                onClick={() => dispatch(addToCart(pizzaItem))}
              >
                Add To Cart
              </Button>
            ) : (
              <div className="flex gap-3">
                <Counter quantity={2} />
                <DeleteIcon />
              </div>
            )
          ) : (
            <span className="font-medium">Sold Out</span>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
