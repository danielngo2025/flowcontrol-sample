export const TAX_RATE = 0;

/** The cart's total in cents: item prices times quantities, plus tax. */
export function total(items) {
  const subtotal = items.reduce((sum, i) => sum + i.priceCents * i.quantity, 0);
  return subtotal + Math.round(subtotal * TAX_RATE);
}
