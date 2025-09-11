export function formatCurrency(value) {
  const formatter = new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: "USD",
  }).format(value);

  return formatter;
}
