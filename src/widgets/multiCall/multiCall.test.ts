import { main } from "./multiCall.wrapped";

test("should echo 'gnop'", async () => {
  const [[myFirstString], [mySecondString]] = await main();
  expect(myFirstString).toEqual("just works");
  expect(mySecondString).toEqual("works as well");
});
