import { useState } from "react";
import Button from "../../ui/Button";

function CreateUserForm() {
  const [username, setUsername] = useState("Des");
  return (
    <>
      <input
        type="text"
        placeholder="Enter your name here"
        required
        className="input z-50"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {username ? <Button>Start Ordering</Button> : null}
    </>
  );
}

export default CreateUserForm;
