const Page = require('./page');

class Employees extends Page {

    get employeeSideMenu() {
        return $('#root > div > nav > ul > li:nth-child(3) > a');
    }

    get employeesTable () {
        return $('#root > div > div > section > div > table');
    }

    get addNewEmployee () {
        return $('#root > div > div > section > div > button');
    }

    get deleteEmployee () {
        return $('/html/body/div/div/div/section/div/table/tbody/tr[7]/td[6]/button');
    }

    get editEmployee () {
        return $('/html/body/div/div/div/section/div/table/tbody/tr[1]/td[5]/button');
    }

    get facebook () {
        return $('#root > div > div > footer > div > div:nth-child(1) > a:nth-child(1) > img');
    }

    get twitter () {
        return $('#root > div > div > footer > div > div:nth-child(1) > a:nth-child(2) > img');
    }

    get instagram () {
        return $('#root > div > div > footer > div > div:nth-child(1) > a:nth-child(3) > img');
    }

    //Add Employee Form

    get form () {
        return $('#root > div > div > div > div > form > fieldset');
    }

    get name () {
        return $('#firstName');
    }

    get lastName () {
        return $('#lastName');
    }

    get email () {
        return $('#email');
    }

    get pwd () {
        return $('#password');
    }

    get dob () {
        return $('#birthDate');
    }

    get phone () {
        return $('#phone');
    }

    get country () {
        return $('#country');
    }

    get city () {
        return $('#city');
    }

    get zip () {
        return $('#zip');
    }

    get photo () {
        return $('#photo');
    }

    get status () {
        return $('/html/body/div/div/div/div/div/form/fieldset/div[11]/select');
    }
    get statusTrue () {
        return $('#active > option:nth-child(1)');
    }


    get submitButton () {
        return $('#root > div > div > div > div > form > fieldset > button');
    }

    get goBackButton () {
        return $('/html/body/div/div/div/div/div/button');
    }

    get requestDone () {
        return $('/html/body/div/div/div/div/div[2]/div');
    }

    get requestDoneMessage () {
        return $('#root > div > div > div > div.modal_modalOverlay__3su40 > div > div > h1');
    }

    get quitModal () {
        return $('#root > div > div > div > div.modal_modalOverlay__3su40 > div > button');
    }

    //delete employee

    get deleteEmployeeModal () {
        return $('#root > div > div > section > div > div > div');
    }

    get deleteEmployeeConfirm () {
        return $('/html/body/div/div/div/section/div/div/div/div/div/div[1]/button');
    }

    get deleteDone () {
        return $('#root > div > div > section > div > div > div');
    }

    get deleteDoneMessage () {
        return $('#root > div > div > section > div > div > div > div > h1');
    }

    get deleteModalCross () {
        return $('/html/body/div/div/div/section/div/div/div/button');
    }

    get deleteEmployeeCancel () {
        return $('/html/body/div/div/div/section/div/div/div/div/div/div[2]/button');
    }

    open () {
        return super.open('login');
    }

    async addEmployeeForm (name, lastName, email, pwd, dob, phone, country, city, zip, photo, status) {
        await this.name.setValue(name);
        await this.lastName.setValue(lastName);
        await this.email.setValue(email);
        await this.pwd.setValue(pwd);
        await this.dob.setValue(dob);
        await this.phone.setValue(phone);
        await this.country.setValue(country);
        await this.city.setValue(city);
        await this.zip.setValue(zip);
        await this.photo.setValue(photo);
        await this.status.click();
        await this.statusTrue.click();
        await this.submitButton.click();
    }
}



module.exports = new Employees();
