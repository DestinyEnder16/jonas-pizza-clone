import { useEffect } from "react";
import { getPizzas } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  return (
    <div className="padding">
      <h3 className="mt-16 mb-10 text-center text-2xl font-medium italic">
        Your Pizza Adventure Starts Here 🚀
      </h3>
      <ul>
        {menu.map((item) => (
          <MenuItem pizzaItem={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const menu = await getPizzas();
  return menu;
}

export default Menu;
