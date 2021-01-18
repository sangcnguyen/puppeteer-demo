import { LoginPage } from "../pages/LoginPage";
import puppeteer, { Page, Browser } from "puppeteer";
import config from "../data/config.json";

describe("Login", () => {
  let browser: Browser, page: Page, loginPage: LoginPage;

  before(async () => {
    browser = await puppeteer.launch(config.launchOptions);
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    await loginPage.goToPage();
  });

  after(async () => {
    await browser.close();
  });

  it("verify users login successfully", async () => {
    await loginPage.login();
  });
});
