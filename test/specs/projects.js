const ProjectsPage = require('../pageobjects/projects');

describe('Test Projects', () => {
    // beforeAll('open the employees menu', () => {
    //     browser.url(`https://samuel-trackgenix-app.vercel.app/`)
    // })
    it('open projects menu', async () => {
        ProjectsPage.open();
        await expect (ProjectsPage.projectsSideMenu).toBeDisplayed();
        await expect (ProjectsPage.projectsSideMenu).toBeClickable();
        await ProjectsPage.projectsSideMenu.click();
        await expect (browser).toHaveUrl(`https://samuel-trackgenix-app.vercel.app/projects`);
    })
    it('Add new project should open form', async () => {
        await ProjectsPage.addNewProject.click();
        await expect(ProjectsPage.form).toBeDisplayed();
    })
    it('Add project should with valid data should show success message', async () => {
        await ProjectsPage.addProject();
        await expect(ProjectsPage.message).toHaveText('Request done!');
    })
    it('go back to projects menu', async () => {
        await ProjectsPage.cross.click();
        await ProjectsPage.goBack.waitForExist({ timeout: 5000 })
        await ProjectsPage.goBack.click();
        await expect(browser).toHaveUrl(`https://samuel-trackgenix-app.vercel.app/projects`);
    })
    it('delete button should open a modal', async () => {
        await ProjectsPage.deleteProject.click();
        await expect(ProjectsPage.deleteProjectConfirm).toBeDisplayed();
        await expect(ProjectsPage.deleteProjectConfirm).toBeClickable();
        await expect(ProjectsPage.deleteProjectCancel).toBeDisplayed();
        await expect(ProjectsPage.deleteProjectCancel).toBeClickable();
    })
    it('delete confirmation should open success message', async () => {
        await ProjectsPage.deleteProjectConfirm.click();
        await expect(ProjectsPage.deleteSuccessMessage).toBeDisplayed();
        await expect(ProjectsPage.deleteSuccessMessage).toHaveText('Request done!');
    })

});