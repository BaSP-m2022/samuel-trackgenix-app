const Page = require('./page');

class Projects extends Page {
    get projectsSideMenu () {
        return $('#root > div > nav > ul > li:nth-child(4) > a');
    }
    get editProject () {
        return $('/html/body/div/div/div/section/table/tbody/tr[1]/td[6]/button');
    }

    get deleteProject () {
        return $('/html/body/div/div/div/section/table/tbody/tr[1]/td[7]/button');
    }

    get addNewProject () {
        return $('#root > div > div > section > div > button')
    }

    open () {
        return super.open('login');
    }
}

module.exports = new Projects ();

