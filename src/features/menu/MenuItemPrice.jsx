import { formatCurrency } from "../../utilities/helper";

function MenuItemPrice({ price, isSoldOut }) {
  return (
    <span className={`text-3xl font-extrabold ${isSoldOut && "line-through"}`}>
      {formatCurrency(price)}
    </span>
  );
}

export default MenuItemPrice;
