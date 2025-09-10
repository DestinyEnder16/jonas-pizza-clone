import { useState } from "react";
import Button from "./Button";
import CreateUserForm from "../features/user/CreateUserForm";

function Homepage() {
  // const [username, setUsername] = useState("");
  return (
    <div className="flex h-full flex-col items-center justify-center bg-[#888] bg-[url(/pizza-hero.jpg)] bg-cover bg-blend-multiply">
      {/* <span></span> */}
      <div className="flex flex-col items-center gap-10 text-white">
        <h2 className="text-xl font-bold">
          Sliced to Perfection, Served with Love.
        </h2>

        <p className="text-center font-medium text-white italic">
          “Authentic flavors, crispy crust, and melty cheese — because life’s
          too short for bad pizza.”
        </p>

        <CreateUserForm />
      </div>
    </div>
  );
}

export default Homepage;
