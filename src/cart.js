export const MAX_ITEMS = 50;

export function canAdd(items) {
  return items.length < MAX_ITEMS;
}
