/* eslint-disable prettier/prettier */
const Page = require('./page');
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
   get btnTimesheet(){ return $('//*[@id="root"]/div/nav/ul/li[5]/a');}

  async toTimesheet() {
    await this.btnTimesheet.click();
  }

  open() {
    return super.open();
  }
}

module.exports = new LoginPage();
