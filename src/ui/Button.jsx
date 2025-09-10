import { useEffect, useState } from "react";
import { Link } from "react-router";

function Button({ children, type, to }) {
  const [isMounted, setIsMounted] = useState(false);

  const styles = {
    link: `bg-crust text-maroon ${!isMounted ? `translate-y-4 opacity-0` : `translate-y-0 opacity-100`} cursor-pointer rounded-3xl px-4 py-5 font-medium text-sm transition-all  hover:bg-cheese duration-1000 ease-in-out`,
    button: `bg-cheese text-maroon ${!isMounted ? `translate-y-4 opacity-0` : `translate-y-0 opacity-100`} cursor-pointer rounded-3xl px-4 py-5 font-medium transition-all duration-1000 ease-in-out`,
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
    return <button className={styles["link"]}>{children}</button>;
  }
}

export default Button;
