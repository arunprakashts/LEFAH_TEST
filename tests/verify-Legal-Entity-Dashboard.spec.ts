import {test, expect } from '@playwright/test';
import { config } from '../config/env';
import { loginPage } from '../pages/loginPage';
import testData from "../Testdata/data/TestData.json";
import { HambergerMenuIcon } from '../pages/HambergerMenu';
import { LegalEntitiesDashboard } from '../pages/LegalEntitiesDashboard';
import { AddlegalEntityScreen } from '../pages/AddLegalEntityScreen';  

let loginpage: loginPage;
let hamburgerMenuIcon: HambergerMenuIcon;
let legalEntitiesDashboard: LegalEntitiesDashboard;
let addLegalEntityScreen: AddlegalEntityScreen;


test.beforeEach(async ({ page }) => {  
// Use the imported loginPage object
  loginpage = new loginPage(page);
  hamburgerMenuIcon = new HambergerMenuIcon(page);
  legalEntitiesDashboard = new LegalEntitiesDashboard(page);
  addLegalEntityScreen = new AddlegalEntityScreen(page);

  await page.goto(config.baseURL.toString());
  await loginpage.verifyTitleHeader("Deloitte | Legal Entities and Form AP Hours");
  await expect(page).toHaveTitle(testData.globalManager.Expected);
  await loginpage.closeCookiesBanner('Close Cookies Banner');
  await loginpage.clickGetStartedButton('Get Started'); 
  await loginpage.enterUserName(testData.globalManager.username);
  await loginpage.enterPassword(testData.globalManager.password);
  await page.waitForTimeout(10000);


});

test.afterEach(async ({ page }) => {
  await page.close();
});

test('Login flow', async ({ page }) => {
  
  await loginpage.closeYellowBanner('Close Yellow Banner');
  await hamburgerMenuIcon.clickHamburgerMenu('Click Hamburger Menu');
  await hamburgerMenuIcon.clickLegalEntitiesDatabase('Click Legal Entities Database');

  //verufy Legal Entities Dashboard Title
  await hamburgerMenuIcon.clickLegalEntitiesDashboard('Click Legal Entities Dashboard');
  //await page.waitForTimeout(5000);

  
  const testInfo = test.info();

  const actualHeaders = await legalEntitiesDashboard.getTableHeaders();
  await testInfo.attach('table-headers', { body: actualHeaders.join('\n'), contentType: 'text/plain' });

  expect(actualHeaders.length).toBe(legalEntitiesDashboard.LegalEntityExpectedHeaders.length);
  expect(actualHeaders).toEqual(legalEntitiesDashboard.LegalEntityExpectedHeaders);
  
  await legalEntitiesDashboard.clickActionMenuButton('Click Action Menu Button');
  await legalEntitiesDashboard.clickAddLegalEntityOption('Click Add Legal Entity Option');
  // await page.waitForTimeout(5000);
  await addLegalEntityScreen.ClickGMDMID();
  await addLegalEntityScreen.ClickGeneralInformationSectionSection('Click General Information Section Section');
  
  await addLegalEntityScreen.SelectDTTLNetworkOption('Select DTTL Network Option');
  await addLegalEntityScreen.ClickMemberFirmDropdown('Click Member Firm Dropdown');
  await addLegalEntityScreen.ClickRequestLevelDropdown('Select Request Level Dropdown');
  await addLegalEntityScreen.ClickLegalEntityName('Click Legal Entity Name');
  await page.waitForTimeout(3000);
  


 

});
