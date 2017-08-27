import { Pierrethelusma.Web1Page } from './app.po';

describe('pierrethelusma.web1 App', () => {
  let page: Pierrethelusma.Web1Page;

  beforeEach(() => {
    page = new Pierrethelusma.Web1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
