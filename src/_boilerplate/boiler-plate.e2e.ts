import { newE2EPage } from "@stencil/core/testing";

describe("boiler-plate", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<boiler-plate></boiler-plate>");

    const element = await page.find("boiler-plate");
    expect(element).toHaveClass("hydrated");
  });

  it('contains a "Profile Page" button', async () => {
    const page = await newE2EPage();
    await page.setContent("<boiler-plate></boiler-plate>");

    const element = await page.find("boiler-plate >>> button");
    expect(element.textContent).toEqual("Profile page");
  });
});
