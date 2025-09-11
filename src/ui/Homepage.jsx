import { useState } from "react";
import Button from "./Button";
import CreateUserForm from "../features/user/CreateUserForm";
import { useSelector } from "react-redux";

function Homepage() {
  // const [username, setUsername] = useState("");
  const { username } = useSelector((store) => store.user);
  return (
    <div className="flex h-lvh flex-col items-center justify-center bg-[#888] bg-[url(/pizza-hero.webp)] bg-cover bg-no-repeat px-3 bg-blend-multiply">
      <div className="flex flex-col items-center gap-10 text-white">
        <h2 className="text-center text-xl font-bold">
          Sliced to Perfection, Served with Love.
        </h2>

        <p className="text-center font-medium text-white italic">
          “Authentic flavors, crispy crust, and melty cheese — because life’s
          too short for bad pizza.”
        </p>

        {username ? (
          <Button type={"link"} to={"menu"}>
            Continue Ordering, {username}
          </Button>
        ) : (
          <CreateUserForm />
        )}
      </div>
    </div>
  );
}

export default Homepage;
