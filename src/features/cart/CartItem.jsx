import DeleteIcon from "../../ui/DeleteIcon";
import { formatCurrency } from "../../utilities/helper";

function CartItem({ cartItem }) {
  return (
    <li className="border-charcoal flex justify-between border-b-1 py-4">
      <div className="flex flex-col gap-1">
        <span>
          <em>{cartItem.quantity}x</em> {cartItem.name}
        </span>

        <span>{formatCurrency(cartItem.unitPrice)} / 1 unit</span>
      </div>

      <div>
        <strong>Cost: </strong>
        <span className="text-charcoal font-medium">
          {formatCurrency(+cartItem.quantity * +cartItem.unitPrice)}
        </span>
      </div>

      <DeleteIcon id={cartItem.id} />
    </li>
  );
}

export default CartItem;
