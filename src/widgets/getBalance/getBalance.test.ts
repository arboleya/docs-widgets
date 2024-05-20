import { main } from "./getBalance.wrapped";

test("should get balances", async () => {
  const balances = await main();
  expect(balances.length).toBeGreaterThan(0);
  expect(balances[0]).toBeGreaterThan(0);
});
