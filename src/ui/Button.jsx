import { useEffect, useState } from "react";
import { Link } from "react-router";

function Button({ children, type, to, onClick }) {
  const [isMounted, setIsMounted] = useState(false);

  const styles = {
    link: `bg-crust text-maroon ${!isMounted ? `translate-y-4 opacity-0` : `translate-y-0 opacity-100`} cursor-pointer rounded-3xl px-4 py-5 text-sm transition-all  hover:bg-cheese font-semibold duration-500 ease-in-out`,
    button: `bg-cheese text-maroon ${!isMounted ? `translate-y-4 opacity-0` : `translate-y-0 opacity-100`} cursor-pointer rounded-3xl px-4 py-5 font-medium transition-all duration-500 ease-in-out`,
    primary: `bg-cheese text-charcoal px-3 py-4 font-bold rounded-2xl text-sm cursor-pointer`,
    secondary: `bg-red px-2 rounded-full text-white cursor-pointer font-medium`,
  };

  useEffect(function () {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (type === "link") {
    return (
      <Link to={to} className={styles["link"]}>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  }
}

export default Button;
