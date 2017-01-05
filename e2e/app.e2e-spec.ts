import { CorsExamplePage } from './app.po';

describe('cors-example App', function() {
  let page: CorsExamplePage;

  beforeEach(() => {
    page = new CorsExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
