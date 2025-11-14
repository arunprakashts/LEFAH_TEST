import {Page , Locator } from "@playwright/test";
import { config } from "../config/env";

export class LegalEntitiesDashboard {

    page : Page;
    LegalEntityDashboardTitle : Locator;
    LegalEntityTable: Locator;
    LegalEntityColumnHeaders: Locator;
    LegalEntityExpectedHeaders: string[];
    AtionMenuButton: Locator;
    AddLegalEntityOption: Locator;
    MakeActiveOption: Locator;
    MakeInactiveOption: Locator;
    ExportToExcelButton: Locator;
    LESearchInput: Locator;
    UploadNewPCAOBDataButton: Locator;
    FilterButton: Locator;
    

   

    constructor(public Page:Page){
        this.page = Page;
        this.LESearchInput = this.page.getByRole('textbox', { name: 'Search' });
        this.UploadNewPCAOBDataButton = this.page.getByRole('button', { name: 'UPLOAD NEW PCAOB DATA' });
        this.FilterButton = this.page.getByRole('button', { name: 'Filter' });
        this.ExportToExcelButton = this.page.locator("//button[normalize-space(text())='Export to Excel']");
        this.MakeInactiveOption = this.page.locator("//button[normalize-space(text())='Make Inactive']");
        this.MakeActiveOption = this.page.locator("//button[normalize-space(text())='Make Active']");
        this.AddLegalEntityOption = this.page.getByRole('button', { name: 'Add Legal Entity' });
        this.AtionMenuButton = this.page.getByRole('button', { name: 'Actions' });
        this.LegalEntityDashboardTitle = this.page.getByRole('heading', { name: 'Legal Entities' });
        this.LegalEntityTable = this.page.locator('tableContent loaded');
        this.LegalEntityColumnHeaders = this.page.locator("//span[@data-ths='TextColumnHeader-data-adminDashTable']");
        this.LegalEntityExpectedHeaders = [
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



      
    }
        async VerifyLegalEntityDashboardTitle(LegalEntityDashboardTitle: string) {
        await this.LegalEntityDashboardTitle.waitFor({ state: 'visible', timeout: 5000 });
        return (await this.LegalEntityDashboardTitle.textContent()) === LegalEntityDashboardTitle;
        }  
        
         async getTableHeaders(): Promise<string[]> {
        await this.LegalEntityColumnHeaders.first().waitFor({ state: 'visible', timeout: 10000 });
        const count = await this.LegalEntityColumnHeaders.count();
        const texts: string[] = [];
        for (let i = 0; i < count; i++) {
            const t = (await this.LegalEntityColumnHeaders.nth(i).textContent())?.trim() ?? '';
            if (t) texts.push(t);
        }
        return texts;
    }

    async verifyHeadersMatch(expected = this.LegalEntityExpectedHeaders) {
        const actual = await this.getTableHeaders();
        // throw or return comparison results; test should assert
        return { actual, expected, match: JSON.stringify(actual) === JSON.stringify(expected) };
    }

    async clickActionMenuButton(AtionMenuButton: string) {
        await this.AtionMenuButton.click();
    }

    async clickAddLegalEntityOption(AddLegalEntityOption: string) {
        await this.AddLegalEntityOption.click();
    }
    async clickMakeActiveOption(MakeActiveOption: string) {
        await this.MakeActiveOption.click();
    }
    async clickMakeInactiveOption(MakeInactiveOption: string) {
        await this.MakeInactiveOption.click();
    }
    async clickExportToExcelButton(ExportToExcelButton: string) {
        await this.ExportToExcelButton.click();
    }
    async enterLESearchInput (LESearchInput : string) {
        await this.LESearchInput.fill(LESearchInput);
    }
    async clickUploadNewPCAOBDataButton(UploadNewPCAOBDataButton: string) {
        await this.UploadNewPCAOBDataButton.click();
    }
    async clickFilterButton(FilterButton: string) {
        await this.FilterButton.click();
    }
       
}