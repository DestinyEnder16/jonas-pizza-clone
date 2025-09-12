import { Link } from "react-router";

function HandleNavigation({ message, direction, level }) {
  return (
    <aside className="padding flex h-lvh flex-col items-center justify-center gap-3">
      <span className="text-5xl">{level === 0 ? "😏" : "🥲"}</span>
      <h3 className="text-center text-xl">{message}</h3>
      <Link
        className="text-maroon cursor-pointer underline"
        to={`/${direction}`}
      >
        &larr; Go to {direction}
      </Link>
    </aside>
  );
}

export default HandleNavigation;
