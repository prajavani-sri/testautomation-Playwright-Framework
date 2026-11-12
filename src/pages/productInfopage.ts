import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage.js';

export class productInfopage extends BasePage {

    private readonly productHeader: Locator
    private readonly productMetadata: Locator
    private readonly productimages: Locator
    private readonly productprice: Locator
    private readonly addtocart: Locator
    private readonly map: Map<string, string>;

    constructor(page: Page) {
        super(page);
        this.productHeader = page.locator("h1");
        this.productimages = page.locator("//div[@class = 'image magnific-popup']//img")
        this.productMetadata = page.locator("(//div[@class = 'col-sm']//ul[@class='list-unstyled'])[1]//li")
        this.productprice = page.locator("(//div[@class = 'col-sm']//ul[@class='list-unstyled'])[2]//span")
        this.addtocart = page.locator("//div//button[@class='btn btn-primary btn-lg btn-block']")
        this.map = new Map<string, string>(); //for key and value format-- Map helps to store in key and value pair format with Map type

    }

    async getProductHeader(): Promise<string> {
        return this.productHeader.innerText();
    }

    async getProductImageCount(): Promise<number> {

        await this.productimages.first().waitFor({ state: 'visible' }); //for the first image to be visible 

        return await this.productimages.count();
    }

    async getProductMetadata(): Promise<void> {

        await this.productMetadata.first().waitFor({ state: 'visible' });
        let metaInfo: string[] = await this.productMetadata.allInnerTexts();

        for (let data of metaInfo) {

            let meta = data.split(":");
            let metaKey = meta[0].trim();
            let metaValue = meta[1].trim();
            this.map.set(metaKey, metaValue);

        }

    }

    async getproductPriceData(): Promise<void> {

        let priceInfo = await this.productprice.innerText();
        this.map.set("Product Price", priceInfo);

    }

    async getProductCompleteInfo(): Promise<Map<string, string>> {

        await this.getProductMetadata();
        await this.getproductPriceData();
        return this.map;

    }

    async Addtocart(): Promise<void> {

        await this.addtocart.waitFor({ state: 'visible' });
        await this.addtocart.click();
        
    }




}