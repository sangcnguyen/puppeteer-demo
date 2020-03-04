import puppeteer, { Page, Browser } from "puppeteer";
import config from "../data/config.json";

export abstract class TestListener {
  public page: Page;
  public browser: Browser;

  public async before(): Promise<void> {
    this.browser = await puppeteer.launch(config.launchOptions);
    this.page = await this.browser.newPage();
  }

  public async after(): Promise<void> {
    await this.page.close();
    await this.browser.close();
  }
}
