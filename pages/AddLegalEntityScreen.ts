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
    public readonly RelationshiptoLegalEntity : Locator;
    public readonly SelectAssociatedEntity : Locator;
    public readonly selectInvestment : Locator;
    public readonly InvestmentDescriptionSection : Locator;
    public readonly InvestmentTypeDropdown : Locator;
    public readonly SelectOtherOption : Locator;
    public readonly DescriptionofInvestmentInterest : Locator;  
    public readonly SarbanesOxleyConsentsSection : Locator; 
    public readonly _102ConsentonFileDropdown : Locator; 
    public readonly SelectYesSignedconsentOption : Locator;
    public readonly SelectYesLegalOpinionOption : Locator;
    public readonly SelectNO102ConsentonFileOption : Locator;
    public readonly _106bConsentOnFileDropdown : Locator;
    public readonly SelectYes106bConsentOnFileOption : Locator;
    

   

    

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
        this.LegalEntityName = this.page.locator('#LegalEntityName');  
        this.RelationshiptoLegalEntity = this.page.locator('//div[contains(@class,"coreSelectDropdown-selection--single")][.//input[@id="MemberFirmRelationship"]]');
        this.SelectAssociatedEntity = this.page.locator('//*[@id="Mem001"]');
        this.selectInvestment = this.page.locator('//*[@id="Mem002"]');
        this.InvestmentDescriptionSection = this.page.getByRole('button', { name: 'Investment Description' });
        this.InvestmentTypeDropdown = this.page.locator('//div[contains(@class,"coreSelectDropdown-selection--single")][.//input[@id="InvestmentType"]]');
        this.SelectOtherOption = this.page.locator('//*[@id="Inv002"]')
        this.DescriptionofInvestmentInterest = this.page.locator('textarea[name="InvestmentInterestDescription"]')
        this.SarbanesOxleyConsentsSection = this.page.getByRole('button', { name: 'Sarbanes-Oxley Consents' });
        this._102ConsentonFileDropdown = this.page.locator('//div[contains(@class,"coreSelectDropdown-selection--single")][.//input[@id="ConsentOnFile_102"]]');
        this.SelectYesSignedconsentOption = this.page.locator('//*[@id="Cof001"]');
        this.SelectYesLegalOpinionOption = this.page.locator('//*[@id="Cof002"]');
        this.SelectNO102ConsentonFileOption = this.page.locator('//*[@id="Cof003"]');
        this._106bConsentOnFileDropdown = this.page.locator('//div[contains(@class,"coreSelectDropdown-selection--single")][.//input[@id="ConsentOnFile_106b"]]');
        this.SelectYes106bConsentOnFileOption = this.page.locator('//*[@id="Na001"]');
        
        

        
    
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
        await this.selectInvestment.waitFor({ state: 'visible' });
        await this.selectInvestment.click();
    }
    async ClickInvestmentDescriptionSection(InvestmentDescriptionSection: string) {
        await this.InvestmentDescriptionSection.click();

    }
    async ClickInvestmentTypeDropdown(InvestmentTypeDropdown: string) {
        await this.InvestmentTypeDropdown.click();
        await this.SelectOtherOption.waitFor({ state: 'visible' });
        await this.SelectOtherOption.click();
    }

    async EnterDescriptionofInvestmentInterest(DescriptionofInvestmentInterest: string) {
        await this.DescriptionofInvestmentInterest.fill("Automation Test Description of Investment Interest");
    }
    async ClickSarbanesOxleyConsentsSection(SarbanesOxleyConsentsSection: string) {
        await this.SarbanesOxleyConsentsSection.click();
    }
    async Select102ConsentonFileDropdown(_102ConsentonFileDropdown: string) {
        await this._102ConsentonFileDropdown.click();
        await this.SelectYesSignedconsentOption.waitFor({ state: 'visible' });
        await this.SelectYesSignedconsentOption.click();
    }
    async Select106bConsentOnFileDropdown(_106bConsentOnFileDropdown: string){
        await this._106bConsentOnFileDropdown.click();
        await this.SelectYes106bConsentOnFileOption.click();
    }

}
