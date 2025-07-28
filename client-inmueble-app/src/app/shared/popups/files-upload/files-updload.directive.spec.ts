import { FilesUploadDirective } from './files-updload.directive';

describe('FilesUploadDirective', () => {
  it('should create an instance', () => {
    const mockDialog = jasmine.createSpyObj('MatDialog', ['open', 'close']);
    const directive = new FilesUploadDirective(mockDialog);
    expect(directive).toBeTruthy();
  });
});
