const Page = require('./page');

class Projects extends Page {
    get projectsSideMenu () {
        return $('#root > div > nav > ul > li:nth-child(4) > a');
    }
    get editProject () {
        return $('/html/body/div/div/div/section/table/tbody/tr[1]/td[6]/button');
    }

    get deleteProject () {
        return $('/html/body/div/div/div/section/table/tbody/tr[3]/td[7]/button');
    }

    get deleteProjectConfirm () {
        return $('#root > div > div > section > div.modal_modalOverlay__3su40 > div > div > div > div:nth-child(1) > button');
    }
    get deleteProjectCancel () {
        return $('#root > div > div > section > div.modal_modalOverlay__3su40 > div > div > div > div:nth-child(2) > button');
    }
    get deleteSuccessMessage () {
        return $('#root > div > div > section > div.modal_modalOverlay__3su40 > div > div > h1');
    }

    get addNewProject () {
        return $('#root > div > div > section > div > button')
    }

    get form () {
        return $('#root > div > div > div > div > form > fieldset')
    }

    get addMember () {
        return $('#root > div > div > div > div > form > fieldset > button:nth-child(7)')
    }

    get removeMember () {
        return $('#root > div > div > div > div > form > fieldset > div.form_appended__3XuGr > button')
    }

    get selectEmployee () {
        return $('#employee')
    }

    get selectEmployeeOption () {
        return $('#employee > option:nth-child(1)')
    }

    get role () {
        return $('#role')
    }

    get chooseRole () {
        return $('#role > option:nth-child(1)')
    }
    
    get rate () {
        return $('#rate')
    }

    get projectName () {
        return $('#name')
    }

    get submit() {
        return $('#root > div > div > div > div > form > fieldset > button:nth-child(9)')
    }

    get goBack () {
        return $('#root > div > div > div > div > button')
    }

    get projectName () {
        return $('#name')
    }

    get startdate () {
        return $('#startDate')
    }

    get endDate () {
        return $('#endDate')
    }

    get description () {
        return $('#description')
    }

    get client () {
        return $('#client')
    }

    get status () {
        return $('#active')
    }
    
    get statusTrue () {
        return $('#active > option:nth-child(1)')
    }

    get message () {
        return $('#root > div > div > div > div.modal_modalOverlay__3su40 > div > div > h1')
    }

    get cross () {
        return $('#root > div > div > div > div.modal_modalOverlay__3su40 > div > button')
    }



    async addProject () {
        await this.projectName.setValue('Company testing');
        await this.startdate.setValue('11/06/2022');
        await this.endDate.setValue('20/06/2022');
        await this.description.setValue('Implement of automatic testing strategy');
        await this.client.setValue('Trackgenix');
        await this.status.click();
        await this.statusTrue.click();
        await this.addMember.click();
        await this.selectEmployee.click();
        await this.selectEmployeeOption.click();
        await this.role.click();
        await this.chooseRole.click();
        await this.rate.setValue('20');
        await this.submit.click();
    }

    open () {
        return super.open('login');
    }
}

module.exports = new Projects ();

