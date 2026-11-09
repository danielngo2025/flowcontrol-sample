import { test } from "node:test";
import assert from "node:assert/strict";
import { canAdd } from "./cart.js";

test("stops at 50", () => {
  assert.equal(canAdd(new Array(49)), true);
  assert.equal(canAdd(new Array(50)), false);
});
