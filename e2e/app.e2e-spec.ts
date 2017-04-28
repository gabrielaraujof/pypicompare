import { PypicomparePage } from './app.po';

describe('pypicompare App', function() {
  let page: PypicomparePage;

  beforeEach(() => {
    page = new PypicomparePage();
  });

  it('should have welcome text saying You\'re home', () => {
    page.navigateTo();
    expect(page.getWelcomeText()).toEqual('You\'re in home!');
  });
});
