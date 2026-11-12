import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage.js';

export class searchResultspage extends BasePage {

    private readonly resultHeader: Locator //Locator for the searchResults page header name
    private readonly searchResults: Locator

    constructor(page: Page) {

        super(page);
        this.resultHeader = page.locator("h1");
        this.searchResults = page.locator("div.product-thumb");
    }

    //public action methods

    async getSearchResultspageHeader(): Promise<string> {

    return await this.resultHeader.innerText();
    }

    async getsearchResultcount(): Promise<number> {

        return await this.searchResults.count();

    }

    async selectandClickonProduct(productName: string): Promise<void>
    {
        let productlocator =  this.page.locator(`(//a[text()='${productName}'])[2]`).first();
        console.log(`clicking on the product with name : ${productName}`);
        await productlocator.click();
    }


    
}

