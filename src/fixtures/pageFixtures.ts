import { test as baseTest, expect } from '@playwright/test';
import { LoginPage } from '../pages/Loginpage.js';
import { HomePage } from '../pages/HomePage.js';
import { searchResultspage} from '../pages/searchResultspage.js';
import { productInfopage} from '../pages/productInfopage.js';

// defining the type of PageFixtures
type pageFixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
    searchResultspage: searchResultspage;
    ProductInfopage: productInfopage;
}

export const test = baseTest.extend<pageFixtures>({
    loginPage: async ({ page }, use) => {
        let loginPage = new LoginPage(page);
        await use(loginPage);
    },

    homePage: async ({ page }, use) => {
        let homePage = new HomePage(page);
        await use(homePage);
    },

    searchResultspage: async ({ page }, use) => {
        let SearchResultspage = new searchResultspage(page);
        await use(SearchResultspage);
    },

       ProductInfopage: async ({ page }, use) => {
        let ProductInfopage = new productInfopage(page);
        await use(ProductInfopage);
    }


});

export { expect } from '@playwright/test';
