const adminsPage = require('../pageobjects/admins-page');

describe('open the admin page', () => {
  it('should open the admin page', async () => {
    await adminsPage.open();
    await expect(adminsPage.adminPage).toBeDisplayed();
    await expect(adminsPage.adminPage).toBeClickable();
    await adminsPage.adminPage.click();
  });
  it('to charge the table admins correctly', async () => {
    await expect(adminsPage.adminTable).toBeDisplayed();
  });
  it('should open the form to add an admin', async () => {
    await expect(adminsPage.adminCreateButton).toBeDisplayed();
    await expect(adminsPage.adminCreateButton).toBeClickable();
    await adminsPage.adminCreateButton.click();
  });
});
