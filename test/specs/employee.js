const EmployeesPage = require('../pageobjects/employees');

describe('Open employee menu', () => {
    // beforeAll('open the employees menu', () => {
    //     browser.url(`https://samuel-trackgenix-app.vercel.app/`)
    // })
    it('open employee menu', async () => {
        EmployeesPage.open();
        await expect (EmployeesPage.employeeSideMenu).toBeDisplayed();
        await expect (EmployeesPage.employeeSideMenu).toBeClickable();
        await EmployeesPage.employeeSideMenu.click();
        await expect (browser).toHaveUrl(`https://samuel-trackgenix-app.vercel.app/employees`);
    })
    it('Employee list and buttons charge', async () => {
        await expect (EmployeesPage.employeesTable).toBeDisplayed();
        await expect (EmployeesPage.editEmployee).toBeDisplayed();
        await expect (EmployeesPage.editEmployee).toBeClickable();
        await expect (EmployeesPage.deleteEmployee).toBeDisplayed();
        await expect (EmployeesPage.deleteEmployee).toBeClickable();
        await expect (EmployeesPage.addNewEmployee).toBeDisplayed();
        await expect (EmployeesPage.addNewEmployee).toBeClickable();
    })
    it('Social media links charge', async () => {
        await expect (EmployeesPage.facebook).toBeDisplayed();
        await expect (EmployeesPage.facebook).toBeClickable();
        // await expect (browser).toHaveHref(`https://www.facebook.com/radiumrocket`);
        await expect (EmployeesPage.twitter).toBeDisplayed();
        await expect (EmployeesPage.twitter).toBeClickable();
        await expect (EmployeesPage.instagram).toBeDisplayed();
        await expect (EmployeesPage.instagram).toBeClickable();
    })
    it('delete employee button should open modal', async () => {
        await EmployeesPage.deleteEmployee.click();
        await EmployeesPage.deleteEmployeeModal.waitForExist({ timeout: 5000})
        await expect(EmployeesPage.deleteEmployeeModal).toBeDisplayed();
        await expect(browser).toHaveUrl('https://samuel-trackgenix-app.vercel.app/employees')
    })
    it('delete cancelation should close modal', async () => {
        await EmployeesPage.deleteEmployeeCancel.waitForExist({ timeout: 5000 })
        await EmployeesPage.deleteEmployeeCancel.click();
        await expect(browser).toHaveUrl('https://samuel-trackgenix-app.vercel.app/employees');
    })
    it('delete confirmation should close modal', async () => {
        await EmployeesPage.deleteEmployee.click();
        await EmployeesPage.deleteEmployeeConfirm.waitForExist({ timeout: 5000 })
        await EmployeesPage.deleteEmployeeConfirm.click();
        await expect(EmployeesPage.deleteDone).toBeDisplayed();
        await expect(EmployeesPage.deleteDoneMessage).toHaveText('Request done!');
        await expect(browser).toHaveUrl('https://samuel-trackgenix-app.vercel.app/employees');
        await EmployeesPage.deleteModalCross.click();
    })
    it('click on add employee should open form', async () => {
        await EmployeesPage.addNewEmployee.click();
        await expect (browser).toHaveUrl('https://samuel-trackgenix-app.vercel.app/employees/form');
        await expect (EmployeesPage.form).toBeDisplayed();
    })
    // it('add employee correctly', async () => {
    //     await EmployeesPage.addEmployeeForm('Jordan', 'Peele', 'jpeele@getout.com', 'getout1234', '11/11/1990', '1234567891', 'USA', 'LAX', '5555', 'blackandwhite.jpg', true);
    //     await expect (EmployeesPage.requestDone).toBeDisplayed();
    //     await expect (EmployeesPage.requestDoneMessage).toHaveText('Request done!');
    //     await EmployeesPage.quitModal.click();
    //     // await EmployeesPage.goBackButton.click();
    // })

});







