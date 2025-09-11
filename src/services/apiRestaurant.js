const API_URL = "https://react-fast-pizza-api.jonas.io/api";

export const getPizzas = async function () {
  const res = await fetch(`${API_URL}/menu`);

  if (!res.ok) throw new Error("Error loading menu");
  const { data } = await res.json();
  return data;
};
