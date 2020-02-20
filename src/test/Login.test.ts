import { suite, test } from "mocha-typescript";
import puppeteer from "puppeteer";
import { locator } from "../util/locators";
import { data } from "../util/data";

@suite
class LoginTest {
  @test
  async loginTest(): Promise<void> {
    const browser = await puppeteer.launch({
      defaultViewport: { width: 1920, height: 1080 },
      headless: true
    });
    const page = await browser.newPage();

    await page.goto("http://the-internet.herokuapp.com/login");

    await page.type(locator.loginPage.usernameInput, data.account.user);
    await page.type(locator.loginPage.passwordInput, data.account.pass);

    await page.click(locator.loginPage.loginButton);

    await page.close();
    await browser.close();
  }
}
