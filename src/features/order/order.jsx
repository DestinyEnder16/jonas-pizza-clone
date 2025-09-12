import { Form, Link, useNavigate } from "react-router";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { getTotalCartItems } from "../cart/cartSlice";
import { clearCart } from "../cart/cartSlice";
import { useState } from "react";

const formInputFields = `focus:ring-cheese placeholder:text-charcoal text-charcoal ring-offset-cheese rounded-full border border-white bg-[#eda83fe4] px-4 py-2.5 text-sm ml-4 mb-2 ring-offset-1 font-semibold transition-all duration-300 focus:ring focus:outline-none md:px-4 md:py-3 `;

function Order() {
  const { username } = useSelector((store) => store.user);
  const totalItemsInCart = useSelector(getTotalCartItems);
  const navigate = useNavigate();

  const [fullName, setFullName] = useState(username || "");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  if (!totalItemsInCart)
    return (
      <p>
        Head to our menu to create an order <Link to="/menu"> &larr; Menu</Link>
      </p>
    );

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName || !address || !phone) return;

    // Later: dispatch(createOrder({ fullName, address, phone }))
    dispatch(clearCart());
    navigate("complete");
  }

  return (
    <section className="padding h-lvh">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div>
          <label htmlFor="fullName" className="font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className={formInputFields}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="address" className="font-medium">
            Address
          </label>
          <input
            type="text"
            id="address"
            className={formInputFields}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className={formInputFields}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <Button type="primary">Confirm Order</Button>
      </form>
    </section>
  );
}

export default Order;
