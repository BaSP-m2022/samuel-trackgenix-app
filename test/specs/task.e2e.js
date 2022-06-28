const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');

describe('Create a task', () => {
  it('open browser', async () => {
    await LoginPage.open();
    await expect(browser).toHaveUrl('https://samuel-trackgenix-app.vercel.app/home');
  });
  it('click on task entity', async () => {
    await expect(HomePage.buttonTask).toBeDisplayed();
    await HomePage.buttonTask.click();
    await expect(browser).toHaveUrl('https://samuel-trackgenix-app.vercel.app/tasks');
  });
  it('enter in to form for edit', async () => {
    await HomePage.btnEditTask.click();
    await expect(browser).toHaveUrl('https://samuel-trackgenix-app.vercel.app/tasks/form/');
  });
  it('edit a proyect', async () => {
    await HomePage.editTask('this is an automated edition', '44', '44', '44');
    await expect(HomePage.modalSuccesfull).toHaveText('Request done!')
  });
});
