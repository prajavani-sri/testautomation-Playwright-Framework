


import { test, expect } from '../src/fixtures/pageFixtures.js';


test.beforeEach(async ({ loginPage }) => {

    await loginPage.goToLoginPage();

    await loginPage.doLogin(process.env.USER_NAME!, process.env.PASSWORD!);

}
)

test("Verify Product Images Count Test", async ({ homePage, searchResultspage, ProductInfopage }) => {
    await homePage.dosearch("macbook");
    await searchResultspage.selectandClickonProduct("MacBook Air");
    let Imagescount = await ProductInfopage.getProductImageCount();
    expect(Imagescount).toBeGreaterThan(1);


})
test("Verify Product Information Test", async ({ homePage, searchResultspage, ProductInfopage }) => {

    await homePage.dosearch("macbook");
    await searchResultspage.selectandClickonProduct("MacBook Air");
    let completeInfo = await ProductInfopage.getProductCompleteInfo();
    console.log(completeInfo);
    expect.soft((completeInfo).get("Brand")).toBe("Apple");
    expect.soft((completeInfo).get("Product Code")).toBe("Product 17");
    expect.soft((completeInfo).get("Reward Points")).toBe("700");
    expect.soft((completeInfo).get("Availability")).toBe("In Stock");
    expect.soft((completeInfo).get("Product Price")).toBe("$1,202.00");


})

test("Click addtocart button", async ({ homePage, searchResultspage, ProductInfopage }) => {

    await homePage.dosearch("macbook");
    await searchResultspage.selectandClickonProduct("MacBook Air");
    await ProductInfopage.Addtocart();
   
})

test("Click addtocart button2", async ({ homePage, searchResultspage, ProductInfopage }) => {

    await homePage.dosearch("macbook");
    await searchResultspage.selectandClickonProduct("MacBook Pro");
    await ProductInfopage.Addtocart();
   
})
// Common Functionality test
test("Verify Common Logo Test", async({ProductInfopage})=>
{

   let isVisible=await ProductInfopage.isLogoVisible();

   expect(isVisible).toBe(true);

})

test("Verify Common Footers Count Test", async({ProductInfopage})=>
{

   let footerCount=await ProductInfopage.getPageFootersCount();

   expect(footerCount).toBe(15);

})
