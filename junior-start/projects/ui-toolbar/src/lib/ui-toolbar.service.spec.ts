import { TestBed } from '@angular/core/testing';

import { UiToolbarService } from './ui-toolbar.service';

describe('UiToolbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UiToolbarService = TestBed.get(UiToolbarService);
    expect(service).toBeTruthy();
  });
});
