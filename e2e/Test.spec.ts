import { test, expect } from "@playwright/test";

test.describe("Challenge App", () => {
  test("should render default challenge and switch to another on click", async ({
    page,
  }) => {
    await page.goto("http://localhost:5173/");

    await expect(page).toHaveTitle("Test App");

    await expect(page.locator("main h2")).toHaveText(/.+/);

    const challengeToClick = "FizzBuzz";
    await page.locator("li", { hasText: challengeToClick }).first().click();

    await expect(page.locator("main h2")).toHaveText(challengeToClick);

    const testCodeBlock = page.locator(
      'section:has(h3:text("Test")) .scroll ol.code-block'
    );
    const solutionCodeBlock = page.locator(
      'section:has(h3:text("Solution")) .scroll ol.code-block'
    );

    await expect(testCodeBlock).toBeVisible();
    await expect(solutionCodeBlock).toBeVisible();

    await expect(testCodeBlock).toContainText(
      `import { expect, test } from "/node_modules/.vite/deps/vitest.js?v=bea0a6f3";`
    );
  });
});
