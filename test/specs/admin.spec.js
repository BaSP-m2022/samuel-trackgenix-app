const adminsPage = require('../pageobjects/admins-page');

describe('open the admin page', () => {
  it('should open the admin page', async () => {
    await adminsPage.open();
    await expect(adminsPage.adminPage).toBeDisplayed();
    await expect(adminsPage.adminPage).toBeClickable();
    await adminsPage.adminPage.click();
  });
  it('should opeen the form to add an admin', async () => {
    await expect(adminsPage.adminCreateButton).toBeDisplayed();
    await expect(adminsPage.adminCreateButton).toBeClickable();
    await adminsPage.adminCreateButton.click();
  });
  // it('should opeen the form to add an admin', async () => {
  //   await expect(adminsPage.adminCreateButton).toBeDisplayed();
  //   await expect(adminsPage.adminCreateButton).toBeClickable();
  //   await adminsPage.adminCreateButton.click();
  // });
});
