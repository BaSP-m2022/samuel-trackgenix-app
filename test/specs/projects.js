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
});