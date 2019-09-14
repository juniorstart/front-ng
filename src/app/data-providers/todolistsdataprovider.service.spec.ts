import { TestBed } from '@angular/core/testing';

import { TodolistsdataproviderService } from './todolistsdataprovider.service';

describe('TodolistsdataproviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodolistsdataproviderService = TestBed.get(TodolistsdataproviderService);
    expect(service).toBeTruthy();
  });
});
