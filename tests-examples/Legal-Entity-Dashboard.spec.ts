import {test, Page , Locator, chromium , Browser} from '@playwright/test'
import path from 'path';

test("Legal entity dashboard" , async({page}) =>{
    //const browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
    //const context = await browser.newContext({
        //viewport: { width: 1920, height: 1080 }

        
 //});

    // Browser launch
await page.goto("https://qtopportalweb.aaps.deloitte.com/");
await page.getByRole('button', { name: 'Close' }).click();
await page.screenshot({ path: 'screenshot.png', fullPage: true });
await page.getByRole('button', { name: 'get started' }).click(); 

//Enter user name and Password
await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).click();
await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill('lefahtest1006@deloitte.com');
await page.getByRole('button', { name: 'Next' }).click();
await page.getByRole('textbox', { name: 'Enter the password for' }).click();
await page.getByRole('textbox', { name: 'Enter the password for' }).fill('NH@mA4g3$pn?qZF!');
await page.getByRole('button', { name: 'Sign in' }).click();
await page.screenshot({ path: 'change request dashbooadr.png', fullPage: true });

//click Hamburger menu
await page.locator('.nav__toggle-icon').click();
await page.getByText('Legal Entities Database').nth(1).click();
await page.locator('#led-menu').getByText('Legal Entities').click();

await page.screenshot({ path: 'LE dashboad.png', fullPage: true });
await page.getByRole('heading', { name: 'Legal Entities' }).click();
await page.getByText('items').click();

await page.getByRole('button', { name: 'Actions' }).click();
await page.getByRole('button', { name: 'Add Legal Entity' }).click();
await page.getByRole('button', { name: 'General Information' }).click();
await page.getByText('DTTL Network', { exact: true }).click();
await page.locator('.coreSelectDropdown-selection__rendered').first().click();
//await page.locator('#MemberFirmID').press('Enter');


//await page.locator('#dropdownParentContainer').first().click();
const MemberFirm: Locator=  page.locator('#dropdownParentContainer .coreSelectDropdown-arrow').nth(1);
await MemberFirm.click();
await page.getByRole('option', { name: 'Poland' }).click();





});




