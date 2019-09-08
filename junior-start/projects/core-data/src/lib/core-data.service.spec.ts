import { TestBed } from '@angular/core/testing';

import { CoreDataService } from './core-data.service';

describe('CoreDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoreDataService = TestBed.get(CoreDataService);
    expect(service).toBeTruthy();
  });
});
