import { XFilePage } from './app.po';

describe('x-file App', () => {
  let page: XFilePage;

  beforeEach(() => {
    page = new XFilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
