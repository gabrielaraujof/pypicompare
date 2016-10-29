import { PypicomparePage } from './app.po';

describe('pypicompare App', function() {
  let page: PypicomparePage;

  beforeEach(() => {
    page = new PypicomparePage();
  });

  it('should have title in the search bar saying PypiCompare', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('PypiCompare');
  });
});
