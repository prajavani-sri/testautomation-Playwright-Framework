
//import { LoginPage } from 'src/pages/Loginpage.js';
import {test, expect} from '../src/fixtures/pageFixtures.js';
import {CsvHelper} from "../src/utils/csvUtils.js" 

test.beforeEach(async ({loginPage})=>
{

await loginPage.goToLoginPage();

}
)

test("Login Page Title Test", async({loginPage})=>
{
  

    let title = await loginPage.getLoginPageTitle();
    expect(title).toBe("Account Login") //toBe is an assertion matches to verify the expected outcome

})

test("Forgot Password Link available", async({loginPage})=>
{
    let isforgotPasswordLinkavailable = await loginPage.getForgotPwdLink();
    expect(isforgotPasswordLinkavailable).toBe(true) //toBe is an assertion matches to verify the expected outcome

    // await expect(lp.getForgotPwdLink()).toBeVisible();


})


test("User doing the actual Login test", async({loginPage, homePage})=>
{
    await loginPage.doLogin(process.env.USER_NAME!,process.env.PASSWORD!);

//assertions

let flag:boolean = await homePage.isLogoutlinkavailable();
expect(flag).toBeTruthy();

})

//Reading multiple data from csv for negative testing

let testData: Record<string, string>[]= CsvHelper.readCsv("src/testData/loginData.csv");


for(let data of testData)
{
    test(`Negative Login Test wiht username : ${data.username} and ${data.password}`, async({loginPage})=>
{
    await loginPage.doLogin(data.username,data.password);
    let errorMessage=await loginPage.getPageErrorMessage();
    expect(errorMessage).toContain("Warning: No match for E-Mail Address and/or Password.");
 
})

}


  



