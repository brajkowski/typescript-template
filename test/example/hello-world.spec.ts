import { helloWorld } from "example";

describe("helloWorld()", () => {
  it.each(["Hello world!"])("should return %p", (expected) => {
    const actual = helloWorld();
    expect(actual).toStrictEqual(expected);
  });
});
