import { test } from "node:test";
import assert from "node:assert/strict";
import { total } from "./pricing.js";

test("adds up items", () => {
  assert.equal(total([{ priceCents: 250, quantity: 2 }, { priceCents: 100, quantity: 1 }]), 600);
});

test("takes a discount off", () => {
  assert.equal(total([{ priceCents: 1000, quantity: 1 }], 10), 900);
});
