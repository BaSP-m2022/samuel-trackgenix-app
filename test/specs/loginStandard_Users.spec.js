import LoginPage from '../pageobjects/login.page';
import MainPage from '../pageobjects/main.page';

describe('test of the login page Stadard user', () => {
  beforeAll('open browser', () => {
    browser.url('https://www.saucedemo.com/');
  });
  it('check browser', async () => {
    await browser.url('https://www.saucedemo.com/');
    await expect(browser).toHaveUrl('https://www.saucedemo.com/');
  });
  it('login succesfull', async () => {
    await LoginPage.login('standard_user', 'secret_sauce');
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
  });
  it('Select product ', async () => {
    await LoginPage.selectProduct();
    await expect(LoginPage.Cart).toHaveText('0');
  });
  it('select product 2', async () => {
    await LoginPage.selectSecodProduct();
    await expect(LoginPage.Cart).toHaveText('2');
  });
  it('select third product', async () => {
    await LoginPage.selectThirdProduct();
    await expect(LoginPage.Cart).toHaveText('3');
  });
  it('select Fourth product', async () => {
    await LoginPage.selectFourthProduct();
    await expect(LoginPage.Cart).toHaveText('4');
  });
  it('select fifth product', async () => {
    await LoginPage.selectFifthProduct();
    await expect(LoginPage.Cart).toHaveText('5');
  });
  it('select sixth product', async () => {
    await LoginPage.selectSixthProduct();
    await expect(LoginPage.Cart).toHaveText('6');
  });
  it('remove first product to cart in homepage', async () => {
    await LoginPage.firstRemove.click();
    await expect(LoginPage.Cart).toHaveText('5');
  });
  it('remove second product to cart', async () => {
    await LoginPage.secondRemove.click();
    await expect(LoginPage.Cart).toHaveText('4');
  });
  it('remove third product to cart', async () => {
    await LoginPage.thirdRemove.click();
    await expect(LoginPage.Cart).toHaveText('3');
  });
  it('remove fourth product to cart', async () => {
    await LoginPage.fourthRemove.click();
    await expect(LoginPage.Cart).toHaveText('2');
  });
  it('remove fifth product to cart', async () => {
    await LoginPage.fifthRemove.click();
    await expect(LoginPage.Cart).toHaveText('1');
  });
  it('GO TO CART', async () => {
    await LoginPage.Cart.click();
    await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
  });
  it('Click in logout', async () => {
    await MainPage.btnMainMenu.click();
    await MainPage.clickLogout();
    await expect(browser).toHaveUrl('https://www.saucedemo.com/');
  });
});
