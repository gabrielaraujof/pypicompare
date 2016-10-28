import { browser, element, by } from 'protractor';

export class PypicomparePage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root app-search-bar h1')).getText();
  }
}
