import { newE2EPage } from "@stencil/core/testing";

describe("app-header", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<app-header></app-header>");

    const element = await page.find("app-header");
    expect(element).toHaveClass("hydrated");
  });

  it('contains a "Profile Page" button', async () => {
    const page = await newE2EPage();
    await page.setContent("<app-header></app-header>");

    const element = await page.find("app-header >>> button");
    expect(element.textContent).toEqual("Profile page");
  });
});
