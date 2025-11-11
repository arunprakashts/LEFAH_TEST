import { test, expect } from "@playwright/test";

test("Login as Global manager", async ({ page }) => {
 await page.goto("https://qtopportalweb.aaps.deloitte.com/");
  console.log("title:", await page.title());
   await expect(page).toHaveTitle("Deloitte | Legal Entities and Form AP Hours");
   //await page.getByRole('button', { name: 'Close' }).click();
   const closeButton = page.locator('//*[@id="onetrust-close-btn-container"]/button'); 
   await closeButton.click();

   //Browser launch

   const getStarted = page.locator('//*[@id="route-wrapper"]/div[3]/div//button');
   await getStarted.click();

   await page.locator('//input[@type="email"]').fill('LEFAHTest1006@deloitte.com');
   const usernextButton = page.locator('//input[@type="submit"]');
   await usernextButton.click();

   await page.locator('//input[@name="passwd"]').fill('RexR)7t>%80v#ZhzX');
   const signButton = page.locator('//input[@type="submit"]')
   await signButton.click();

})







