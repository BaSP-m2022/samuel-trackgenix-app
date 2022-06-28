module.exports = class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open() {
    // eslint-disable-next-line prettier/prettier
    return browser.url(`https://samuel-trackgenix-app.vercel.app/home`);
  }
};
