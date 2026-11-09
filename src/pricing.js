export const TAX_RATE = 0;

/** The cart's total in cents: item prices times quantities, plus tax. */
export function total(items, discountPct = 0) {
  const subtotal = items.reduce((sum, i) => sum + i.priceCents * i.quantity, 0);
  const discounted = subtotal - Math.round((subtotal * discountPct) / 100);
  return discounted + Math.round(discounted * TAX_RATE);
}
