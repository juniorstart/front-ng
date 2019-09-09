import { TestBed } from '@angular/core/testing';

import { RecruitmentInfoService } from './recruitment-info.service';

describe('RecruitmentInfoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecruitmentInfoService = TestBed.get(RecruitmentInfoService);
    expect(service).toBeTruthy();
  });
});
