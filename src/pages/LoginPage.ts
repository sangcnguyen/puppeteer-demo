import { BasePage } from "./BasePage";
import { Page, ElementHandle } from "puppeteer";
import account from "../data/account.json";

export class LoginPage extends BasePage {
  public page: Page;

  constructor(page: Page) {
    super(page);
    this.path = "/login";
  }

  public get username(): Promise<ElementHandle> {
    return this.page.$("#username");
  }

  public get password(): Promise<ElementHandle> {
    return this.page.$("#password");
  }

  public get submitButton(): Promise<ElementHandle> {
    return this.page.$("[type='submit'][class='radius']");
  }

  public async enterUsername(username: string): Promise<void> {
    const userElement = await this.username;
    await userElement.focus();
    await userElement.type(username);
  }

  public async enterPassword(password: string): Promise<void> {
    const passElement = await this.password;
    await passElement.focus();
    await passElement.type(password);
  }

  public async submitLoginForm(): Promise<void> {
    await this.submitButton.then((e) => e.click());
    console.log("clicked!");
  }

  public async loginWithAccount(
    username: string,
    password: string
  ): Promise<void> {
    console.log(username);
    await this.enterUsername(username);
    console.log(password);
    await this.enterPassword(password);
    await this.submitLoginForm();
  }

  public async login(): Promise<void> {
    this.loginWithAccount(account.userInfo.user, account.userInfo.pass);
  }
}
