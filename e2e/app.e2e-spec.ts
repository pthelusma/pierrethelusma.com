import { PierrethelusmaPage } from './app.po';

describe('pierrethelusma App', function() {
  let page: PierrethelusmaPage;

  beforeEach(() => {
    page = new PierrethelusmaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
