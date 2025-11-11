import { Page , Locator } from "playwright-core";
import { config } from "../config/env";
import { console } from "inspector";
export class AddlegalEntityScreen{

    public readonly page : Page;
    public readonly GeneralInformationSectionSection : Locator;
    public readonly GMDMID : Locator;
    public readonly DTTLNetworkOption : Locator;
    public readonly NonDTTLNetworkOption : Locator;
    public readonly LegalEntityName : Locator;
    public readonly MemberFirmDropdown : Locator;
    public readonly selectPoland : Locator;
    public readonly ClickPolandOption : Locator;
    public readonly RequestLevelDropdown : Locator;
    // public readonly selectPolandRL : Locator;
    // public readonly ClickPolandRLOption : Locator;
    public readonly RelationshiptoLegalEntity : Locator;
    public readonly selectInvestment : Locator;
    public readonly ClickInvestmentOption : Locator;
  



     private generateRandomNumber(length = 6): string {
        let s = '';
        for (let i = 0; i < length; i++) {
            s += Math.floor(Math.random() * 10).toString();
        }
        return s;
    }


    constructor(private Page: Page) {
        this.page = Page;
        this.GeneralInformationSectionSection = this.page.getByRole('button', { name: 'General Information' });
        this.GMDMID = this.page.locator('#GMDMID');
        this.DTTLNetworkOption = this.page.getByText('DTTL Network', { exact: true });
        this.NonDTTLNetworkOption = this.page.getByText('Non-DTTL Network');
       this.MemberFirmDropdown = this.page.locator('.coreSelectDropdown-selection__rendered').first();
       this.selectPoland = this.page.locator('//li[@role="option" and @label="Poland"]');
       this.ClickPolandOption = this.page.locator('//li[@role="option" and @label="Poland"]');
       this.RequestLevelDropdown = this.page.locator('//div[contains(@class,"coreSelectDropdown-selection--single")][.//input[@id="RequestLevelID"]]');
    //    this.selectPolandRL = this.page.locator('//li[@role="option" and @label="Poland RL"]');
    //    this.ClickPolandRLOption = this.page.locator('//li[@role="option" and @label="Poland RL"]');
        this.LegalEntityName = this.page.locator('#LegalEntityName');  
        this.RelationshiptoLegalEntity = this.page.locator('//input[@id="MemberFirmRelationship"]');
        this.selectInvestment = this.page.locator('//li[@role="option" and @label="Investment"]');
        this.ClickInvestmentOption = this.page.locator('//*[@id="Mem002"]')
    
    }

    async ClickGeneralInformationSectionSection(GeneralInformationSectionSection: string) {
        await this.GeneralInformationSectionSection.click();
    }
    async ClickGMDMID(length = 8): Promise<string> {
        const randomGMDMID = this.generateRandomNumber(length);
        await this.GMDMID.fill(randomGMDMID);
        return randomGMDMID;
    }
    
    async SelectDTTLNetworkOption(DTTLNetworkOption: string) {
        await this.DTTLNetworkOption.click();
    }
    async SelectNonDTTLNetworkOption(NonDTTLNetworkOption: string) {
        await this.NonDTTLNetworkOption.click();
    }
    async ClickMemberFirmDropdown(MemberFirmDropdown: string) {
        await this.MemberFirmDropdown.click();
        await this.page.locator("#MemberFirmID").fill('Poland');
        await this.selectPoland.waitFor({ state: 'visible' });
// Click the "Poland" option
        await this.ClickPolandOption.click();

    }
    async ClickRequestLevelDropdown(RequestLevelDropdown: string) {
        await this.RequestLevelDropdown.click();
        await this.page.locator("#RequestLevelID").fill('Poland RL');
    }

    async ClickLegalEntityName(LegalEntityName: string) {
        await this.LegalEntityName.fill("Testing LE "+ Math.floor(Math.random() * 150));
    }
    
async ClickRelationshiptoLegalEntityDropDown(RelationshiptoLegalEntity: string) {
    await this.RelationshiptoLegalEntity.click();
    
}}
