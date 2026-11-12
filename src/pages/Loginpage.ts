import { Locator, Page} from '@playwright/test';
import { BasePage } from './BasePage.js';

export class LoginPage extends BasePage
{
    private readonly emailId:Locator
    private readonly password: Locator
    private readonly loginBtn:Locator
    private readonly forgotPwdLink:Locator
    //private readonly logo:Locator
    private readonly pageErrormessage:Locator

    constructor(page:Page) //page reference of Page type
    {
        super(page);
        this.emailId = page.locator("#input-email");//initialize class level variable 
        this.password = page.locator('#input-password')
        this.loginBtn = page.locator("//button[text()='Login']")
        this.forgotPwdLink = page.locator("(//a[text()='Forgotten Password'])[1]")
        //this.logo = page.locator('img');
        this.pageErrormessage= page.locator("//div[@class='alert alert-danger alert-dismissible']");

    }
    //public action methods
    async goToLoginPage(): Promise<void>
    {
        await this .page.goto("/en-gb?route=account/login");
    }

    async getLoginPageTitle(): Promise<string>
    {
        return await this.page.title();
    }

    async getForgotPwdLink(): Promise<boolean>
    {
        return await this.forgotPwdLink.isVisible();
    }
    async doLogin(username:string, password:string)
    {
        await this.emailId.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click();
        await this.page.waitForTimeout(2000);
    }
    async getPageErrorMessage():Promise<string>
    {

        return await this.pageErrormessage.innerText();
    }
}
