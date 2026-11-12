import {test, expect} from '../src/fixtures/pageFixtures.js';


test.beforeEach(async ({loginPage }) => {
  
    await loginPage.goToLoginPage();
   
    await loginPage.doLogin(process.env.USER_NAME!,process.env.PASSWORD!);
  
 }
)

test ("Home page Title test" , async({homePage})=>
{
    let homeTitle= await homePage.getHomePageTitle();
    expect(homeTitle).toBe("My Account");
})

test ("Home Page logout link" , async({homePage})=>
{
    let isLogoutlinkavailable = await homePage.isLogoutlinkavailable();
    expect(isLogoutlinkavailable).toBe(true);

})

test ("HomePage headers test", async({homePage})=>
{
    let homePageheaders = await homePage.getHomePageHeaders();
    expect(homePageheaders).toHaveLength(3);
    expect.soft(homePageheaders).toEqual(["My Orders", "My Affiliate Account", "Newsletter"]);

})