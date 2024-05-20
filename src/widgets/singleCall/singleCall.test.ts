import { main } from "./singleCall.wrapped";

test("should echo 'gnop'", async () => {
  const myString = await main();
  expect(myString).toEqual("just works");
});
