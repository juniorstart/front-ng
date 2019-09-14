import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentInfoListComponent } from './recruitment-info-list.component';

describe('RecruitmentInfoListComponent', () => {
  let component: RecruitmentInfoListComponent;
  let fixture: ComponentFixture<RecruitmentInfoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitmentInfoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitmentInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
