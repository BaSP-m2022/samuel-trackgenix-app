const Page = require('./page');

class adminsFormPage extends Page {
  // * GETTERS

  get adminFormTittle() {
    return $('/html/body/div/div/div/div/h2');
  }
  get adminFormFirstName() {
    return $('/html/body/div/div/div/div/div/form/fieldset/div[1]/input');
  }
  get adminFormLastName() {
    return $('/html/body/div/div/div/div/div/form/fieldset/div[1]/input');
  }
  get adminFormEmail() {
    return $('/html/body/div/div/div/div/div/form/fieldset/div[3]/input');
  }
  get adminFormPassword() {
    return $('/html/body/div/div/div/div/div/form/fieldset/div[4]/input');
  }
  get adminFormGenderSelect() {
    return $('/html/body/div/div/div/div/div/form/fieldset/div[5]/select');
  }
  get adminFormPhone() {
    return $('/html/body/div/div/div/div/div/form/fieldset/div[5]/select');
  }
  get adminFormDateOfBirth() {
    return $('/html/body/div/div/div/div/div/form/fieldset/div[7]/input');
  }
  get adminFormCity() {
    return $('/html/body/div/div/div/div/div/form/fieldset/div[8]/input');
  }
  get adminFormPostalCode() {
    return $('/html/body/div/div/div/div/div/form/fieldset/div[9]/input');
  }
  get adminFormActive() {
    return $('/html/body/div/div/div/div/div/form/fieldset/div[10]/select');
  }
  get adminSubmit() {
    return $('/html/body/div/div/div/div/div/form/fieldset/button');
  }
  get adminFormGetBackButton() {
    return $('/html/body/div/div/div/div/div/button');
  }
  // * SETTERS
  async setFirstName(firstName) {
    await this.adminFormFirstName.setValue(firstName);
  }
  async setLastName(lastName) {
    await this.adminFormLastName.setValue(lastName);
  }
  async setEmail(email) {
    await this.adminFormEmail.setValue(email);
  }
  async setPassword(password) {
    await this.adminFormPassword.setValue(password);
  }
}

module.exports = new adminsFormPage();
