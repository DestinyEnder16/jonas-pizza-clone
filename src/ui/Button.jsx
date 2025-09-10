import { useEffect, useState } from "react";

function Button({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(function () {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <button
      className={`bg-cheese text-maroon ${!isMounted ? `translate-y-4 opacity-0` : `translate-y-0 opacity-100`} cursor-pointer rounded-3xl px-4 py-5 font-medium transition-all duration-1000 ease-in-out`}
    >
      {children}
    </button>
  );
}

export default Button;
