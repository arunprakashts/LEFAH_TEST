import {test, Page , Locator, chromium , Browser} from '@playwright/test'
import path from 'path';

test("Legal entity dashboard" , async({page}) =>{
    const browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
    const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 }});

        const columnNames = [
            'Legal Entity Name',
            'Member Firm',
            'Request Level',
            "Headquarters’ Country",
            "Headquarters’ City",
            'PCAOB Form AP Firm Type',
            'PCAOB Registered',
            'Network Type',
            'Active/Inactive in Form AP Hours Firm Database',
            'Relationship to Legal Entity',
            'Types of Professionals Included in the Legal Entity',
            'Legal Structure Contact Name',
            'Contact Name',
            'Last Edit Date',
            'Status',
            'Date Request Sent' ,
            'Date Legal Entity Approved'
];

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
await page.waitForTimeout(5000);
let element =  page.locator("//span[@data-ths='TextColumnHeader-data-adminDashTable']");
const count = await element.count();
console.log(count);
// const columnElement =  page.locator("//span[@data-ths='TextColumnHeader-data-adminDashTable']");
// let columnValues = await columnElement.allTextContents();
// console.log(columnValues);
// for(let i of columnValues){
//     console.log(i);   
    
// }

for(let i = 0 ; i< count ; i++){
    const captured = await element.nth(i).textContent();

    if(captured === columnNames[i]){
        console.log(`Header matched: ${captured}`);
    }else{
        console.log(`Header not matched: ${captured}`);
    }
    
}

});