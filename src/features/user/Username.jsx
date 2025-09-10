import { useSelector } from "react-redux";

function Username() {
  const { username } = useSelector((store) => store.user);
  return (
    <div className="font-medium">{!username.length ? null : username}</div>
  );
}

export default Username;
