class MainPage {
  //getters
  get firstProduct() {
    return $('#item_4_title_link');
  }
  get btnBackProducts() {
    return $('#back-to-products');
  }
  get btnAddproduct() {
    return $('#add-to-cart-sauce-labs-backpack');
  }
  get deleteProductOne() {
    return $('#remove-sauce-labs-backpack');
  }
  get continuousShopping() {
    return $('#continue-shopping');
  }
  get checkout() {
    return $('#checkout');
  }
  get nameForm() {
    return $('#first-name');
  }
  get lastNameForm() {
    return $('#last-name');
  }
  get zipForm() {
    return $('#postal-code');
  }
  get btnContinousPurchase() {
    return $('#continue');
  }
  get btnConfirm() {
    return $('#finish');
  }
  get btnMainMenu() {
    return $('#react-burger-menu-btn');
  }
  get btnLogout() {
    return $('#logout_sidebar_link');
  }
  //setters
  async setName(name) {
    await this.nameForm.setValue(name);
  }
  async setLastName(lastName) {
    await this.lastNameForm.setValue(lastName);
  }
  async setZip(zipCode) {
    await this.zipForm.setValue(zipCode);
  }
  //metodos
  async goToBack() {
    await this.btnBackProducts.click();
  }
  async addToCart() {
    await this.btnAddproduct.click();
  }
  async deleteFirstProduct() {
    await this.deleteProductOne.click();
  }
  //metodo confirmacion de compra
  async checkInfo(name, lastName, zipCode) {
    await this.setName(name);
    await this.setLastName(lastName);
    await this.setZip(zipCode);
    await this.btnContinousPurchase.click();
  }
  async clickLogout() {
    await this.btnLogout.click();
  }
}
export default new MainPage();
