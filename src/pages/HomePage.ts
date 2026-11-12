import {Locator, Page} from '@playwright/test'
import { BasePage } from './BasePage.js';

export class HomePage extends BasePage
{

    private readonly headers: Locator
    private readonly logoutlink: Locator
    private readonly searchIcon: Locator
    private readonly searchBar: Locator

    constructor (page:Page)
    {
        super(page);
        this.headers = page.locator("h2")
        this.logoutlink = page.locator("//a[@class='list-group-item'][14]");
        this.searchIcon = page.locator("//i[@class='fa-solid fa-magnifying-glass']");
        this.searchBar = page.locator("//input[@class='form-control form-control-lg']");
        //this.searchBar = page.getByPlaceholder("Search");
    }

async getHomePageTitle(): Promise<string>
{
    return await this.page.title();

}

async getHomePageHeaders(): Promise<string[]>
{
    let headerList:string[]= await this.headers.allInnerTexts();
    return headerList;
}
async isLogoutlinkavailable(): Promise<boolean>
{
    return await this.logoutlink.isVisible();
}

async dosearch(searchText:string): Promise<void> //parameter -searchText
{
    console.log(`Searching for product: ${searchText}`); //use placeholder as searchText

    await this.searchBar.fill(searchText);
    await this.searchIcon.click();

}


}
