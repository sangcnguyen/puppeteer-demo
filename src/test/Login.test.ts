import { suite, test } from "mocha-typescript";
import { LoginPage } from "../pages/LoginPage";
import { TestListener } from "./TestListener";
@suite
class LoginTest extends TestListener {
  @test
  public async loginTest(): Promise<void> {
    const loginPage = new LoginPage(this.page);
    await loginPage.goToPage();
    await loginPage.login();
  }
}
