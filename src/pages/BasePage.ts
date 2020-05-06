import config from "../data/config.json";
import { Page } from "puppeteer";

export class BasePage {
  public page: Page;
  public path: String;

  constructor(page: Page) {
    this.page = page;
  }

  public async goToPage(): Promise<void> {
    try {
      await this.page.goto(`${config.baseURL}${this.path}`);
    } catch (err) {
      console.log(err);
      this.page.close();
    }
  }
}
