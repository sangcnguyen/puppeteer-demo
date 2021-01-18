import { ElementHandle, Page } from "puppeteer";
import { BasePage } from "./BasePage";

export class SecurePage extends BasePage {
  public page: Page;

  constructor(page: Page) {
    super(page);
  }

  public get flashMsg(): Promise<ElementHandle> {
    return this.page.$("#flash");
  }
}
