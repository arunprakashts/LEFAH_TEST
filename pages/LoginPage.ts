import {Page , Locator } from "@playwright/test";
import { config } from "../config/env";

export class loginPage {

    private readonly page : Page;
    private readonly userNameInput : Locator;
    private readonly NextButton : Locator;
    private readonly passwordInput : Locator;
    private readonly signInButton : Locator;
    private readonly cookiesCloseButton : Locator;
    private readonly titleHeader : Locator;
    private readonly getStartedButton : Locator;
    private readonly yellowBannerManager : Locator;

    constructor(private Page:Page){
        this.page = Page;
        this.cookiesCloseButton = this.page.locator('//*[@id="onetrust-close-btn-container"]/button');
        this.getStartedButton = this.page.getByRole('button',{name:'Get Started'});
        this.userNameInput = this.page.getByPlaceholder("Email, phone, or Skype");    
        this.NextButton = this.page.locator('#idSIButton9');
        this.passwordInput = this.page.getByPlaceholder("Password");
        this.signInButton = this.page.locator('#idSIButton9 ');   
        this.titleHeader = this.page.getByRole('heading',{name:'Welcome to Legal Entities and Form AP Hours'});
        this.yellowBannerManager = this.page.getByTestId('alert-custom-close').getByRole('img');
    }

    async closeYellowBanner(yellowBannerManager: string) {
        await this.yellowBannerManager.click();
    }

    async clickGetStartedButton(getStartedButton: string) {
        await this.getStartedButton.click();
    }
    
    async enterUserName (userNameInput : string) {
        await this.userNameInput.fill(userNameInput);
        await this.NextButton.click();
    }

    async enterPassword(passwordInput: string) {
        await this.passwordInput.fill(passwordInput);
        await this.signInButton.click();
    }

    async closeCookiesBanner(cookiesCloseButton: string) {
        // Wait for the button to be visible (optional but recommended)
        await this.cookiesCloseButton.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
        // Click the button if it's present
        if (await this.cookiesCloseButton.isVisible()) {
            await this.cookiesCloseButton.click();
        }
    }

    async verifyTitleHeader(titleHeader: string) {
        await this.titleHeader.waitFor({ state: 'visible', timeout: 5000 });
        const expectedText = titleHeader;

        // const actualText = await this.titleHeader.textContent();
        // if (actualText?.trim() !== expectedText.trim()) {
        //     throw new Error(`Title header does not match. Expected: "${expectedText}", Actual: "${actualText}"`);
        }
    }



// function verifyTitleHeader(titleHeader: Locator, string: any) {
//     throw new Error("Function not implemented.");