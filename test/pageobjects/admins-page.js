const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class adminPage extends Page {
  /**
   * define selectors using getter methods
   */
  //getter methods
  get adminPage() {
    return $('/html/body/div/div/nav/ul/li[1]/a');
  }
  get adminCreateButton() {
    return $('/html/body/div/div/div/section/button');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open();
  }
}

module.exports = new adminPage();
