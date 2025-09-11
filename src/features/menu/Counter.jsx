import Button from "../../ui/Button";

function Counter({ quantity }) {
  return (
    <div>
      <Button type={"secondary"}>+</Button>
      <span className="mx-2 font-medium">{quantity}</span>
      <Button type={"secondary"}>-</Button>
    </div>
  );
}

export default Counter;
