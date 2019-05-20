import { BoilerPlate } from "./boiler-plate";

describe("app", () => {
  it("builds", () => {
    expect(new BoilerPlate()).toBeTruthy();
  });
});
