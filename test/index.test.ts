import { OpsBRTypeScriptProject } from "../src";

test("hello", () => {
  expect(
    new OpsBRTypeScriptProject({
      name: "foo",
      defaultReleaseBranch: "main",
    })
  ).toBeDefined();
});
