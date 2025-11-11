import { Page , Locator } from "playwright-core";
import { config } from "../../config/env";
export class GeneralInformationSection {

    private readonly page : Page;
    private readonly searchInput : Locator;

    constructor(private Page:Page){
        this.page = Page;
        this.searchInput = this.page.locator('//*[@id="main"]//input[@type="search"]');
    }   
    async enterSearchInput (searchInput : string) {
