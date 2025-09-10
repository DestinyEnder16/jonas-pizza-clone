import { useState } from "react";
import Button from "../../ui/Button";
import { createUser } from "./userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function CreateUserForm() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = function (e) {
    e.preventDefault();
    // if (username.length < 3) return;
    dispatch(createUser(username));
    setUsername("");
    navigate("/menu");
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      <input
        type="text"
        placeholder="Enter your name here"
        required
        minLength={3}
        className="input z-50"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {username ? <Button type={"button"}>Start Ordering</Button> : null}
    </form>
  );
}

export default CreateUserForm;
