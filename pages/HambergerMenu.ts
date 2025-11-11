import {Page , Locator } from "@playwright/test";
//import { config } from "../config/env";

export class HambergerMenuIcon {

    private readonly page : Page;
    private readonly HamburgerMenu : Locator;
    private readonly LeadAuditor : Locator;
    private readonly OtherAccountingFirmParticipant : Locator;
    private readonly Reports : Locator; 
    private readonly LegalEntitiesDatabase : Locator;
    private readonly LegalEntitiesDashboard : Locator;
    private readonly DeliveryCentersDashboard : Locator;
    private readonly ChangeRequestsDashboardGlobalDashboard : Locator;
    private readonly AnnualRequestGlobalDashboard : Locator;
    private readonly ApplicationManagement : Locator;   


    constructor(private Page:Page){
        this.page = Page;
        this.HamburgerMenu = this.page.locator('.nav__toggle-icon')
        this.LeadAuditor = this.page.locator('//span[text()="Lead Auditor"]');
        this.OtherAccountingFirmParticipant = this.page.locator('//span[text()="Other Accounting Firm Participant"]');
        this.Reports = this.page.locator('//span[text()="Reports"]');
        this.LegalEntitiesDatabase = this.page.getByText('Legal Entities Database')  
        this.LegalEntitiesDashboard = this.page.locator('//span[text()="Legal Entities"]');
        this.DeliveryCentersDashboard = this.page.locator('//span[text()="Delivery Centers"]');
        this.ChangeRequestsDashboardGlobalDashboard = this.page.locator('//span[text()="Change Requests Dashboard (Global)"]');
        this.AnnualRequestGlobalDashboard = this.page.locator('//span[text()="Annual Request (Global)"]');
        this.ApplicationManagement = this.page.locator('//span[text()="Legal Entities"]');
    }

    async clickHamburgerMenu(HamburgerMenu: string) {
        await this.HamburgerMenu.click();
    }
    async clickLeadAuditor(LeadAuditor: string) {
        await this.LeadAuditor.click();
    }
    async clickOtherAccountingFirmParticipant(OtherAccountingFirmParticipant: string) {
        await this.OtherAccountingFirmParticipant.click();
    }
    async clickReports(Reports: string) {
        await this.Reports.click();
    }
    async clickLegalEntitiesDatabase(LegalEntitiesDatabase: string) {       
        await this.LegalEntitiesDatabase.nth(1).click();
    }

    async clickLegalEntitiesDashboard(LegalEntitiesDashboard: string) {
        await this.LegalEntitiesDashboard.click();
    }

    async clickDeliveryCenterDashboard(DeliveryCentersDashboard: string) {
        await this.DeliveryCentersDashboard.click();
    }
    async clickChangeRequestsDashboardGlobal(ChangeRequestsDashboardGlobalDashboard: string) {
        await this.ChangeRequestsDashboardGlobalDashboard.click();
    }
    async clickAnnualRequestGlobal(AnnualRequestGlobalDashboard: string) {
        await this.AnnualRequestGlobalDashboard.click();
    }
    async clickApplicationManagement(ApplicationManagement: string) {
        await this.ApplicationManagement.click();
    }

}