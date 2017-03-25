import { CreativeLabPage } from './app.po';

describe('creative-lab App', () => {
  let page: CreativeLabPage;

  beforeEach(() => {
    page = new CreativeLabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
