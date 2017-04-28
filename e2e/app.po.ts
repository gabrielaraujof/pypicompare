import { browser, element, by } from 'protractor';

export class PypicomparePage {
  navigateTo() {
    return browser.get('/');
  }

  getWelcomeText() {
    return element(by.css('app-root .container h1')).getText();
  }
}
