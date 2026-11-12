import {test, expect} from '../src/fixtures/pageFixtures.js';

//page fixtures is used to create the object for different page

test.beforeEach(async ({loginPage}) =>
    
    {
  
    await loginPage.goToLoginPage();
   
    await loginPage.doLogin(process.env.USER_NAME!,process.env.PASSWORD!);
  
 }
)

test ("Verify Search Header Functionality Test" , async({homePage, searchResultspage})=>
   
{

    await homePage.dosearch("macbook");
    let searchHeader:string = await searchResultspage.getSearchResultspageHeader();

    expect(searchHeader).toContain("macbook");


})

test ("Verify Search Header Functionality count Test" , async({homePage, searchResultspage})=>
   
{

    await homePage.dosearch("samsung");
    let searchCount:number = await searchResultspage.getsearchResultcount();

    expect(searchCount).toBeGreaterThan(0);


})

test ("Verify click Product Functionality test" , async({homePage, searchResultspage, page})=>
   
{

    await homePage.dosearch("macbook");
    await searchResultspage.selectandClickonProduct("MacBook Air");

    expect(page).toHaveTitle("MacBook Air");


})