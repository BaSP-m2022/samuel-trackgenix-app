/* eslint-disable prettier/prettier */
const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');

describe('Enter to app', () => {
  it('open web', async () => {
    await LoginPage.open();
    await expect(browser).toHaveUrl(
      'https://samuel-trackgenix-app.vercel.app/home'
    );
  });
  it('Has tittle', async () => {
    await expect(HomePage.textTitle).toBeDisplayed();
    await expect(HomePage.textTitle).toHaveText('Home');
  });
  it('Go to timesheet', async () => {
    await HomePage.buttonTimesheet.isDisplayed();
    await HomePage.goToTimesheet();
  });
  it('confirmando direccion', async () => {
    await expect(browser).toHaveUrl('https://samuel-trackgenix-app.vercel.app/time-sheets');
  });
  it ('show all elements to table timesheet', async () => {
    await expect(HomePage.btnAddTimrsheet).toBeDisplayed();
    await expect(HomePage.btnAddTimrsheet).toHaveText('Add new timesheet');
    await expect(HomePage.btnEditTimesheet).toBeDisplayed();
    await expect(HomePage.btnEditTimesheet).toHaveText('Edit');
    await expect(HomePage.btnDeleteTimesheet).toBeDisplayed();
    await expect(HomePage.btnDeleteTimesheet).toHaveText('Delete');
  });
  it('go to Tasks', async () => {
     await HomePage.goToTasks();
     await expect(browser).toHaveUrl('https://samuel-trackgenix-app.vercel.app/tasks');
  });
  it('checking all elements in Tasks', async () => {
    await expect(HomePage.btnAddTask).toBeDisplayed();
    await expect(HomePage.btnAddTask).toHaveText('Add new task');
    await expect(HomePage.btnEditTask).toBeDisplayed();
    await expect(HomePage.btnEditTask).toHaveText('Edit');
    await expect(HomePage.btnDeleteTask).toBeDisplayed();
    await expect(HomePage.btnDeleteTask).toHaveText('Delete');
  });
  });
