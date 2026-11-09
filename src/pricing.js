export const TAX_RATE = 0;
export const FREE_SHIPPING_CENTS = 5000;
export const shipping = (subtotalCents) => (subtotalCents > FREE_SHIPPING_CENTS ? 0 : 599);

/** The cart's total in cents: item prices times quantities, plus tax. */
export function total(items, discountPct = 0) {
  const subtotal = items.reduce((sum, i) => sum + i.priceCents * i.quantity, 0);
  const discounted = subtotal - Math.round((subtotal * discountPct) / 100);
  return discounted + Math.round(discounted * TAX_RATE);
}
