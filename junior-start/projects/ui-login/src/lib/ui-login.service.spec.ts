import { TestBed } from '@angular/core/testing';

import { UiLoginService } from './ui-login.service';

describe('UiLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UiLoginService = TestBed.get(UiLoginService);
    expect(service).toBeTruthy();
  });
});
