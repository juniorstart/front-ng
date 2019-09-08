import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentInfoDetailsComponent } from './recruitment-info-details.component';

describe('RecruitmentInfoDetailsComponent', () => {
  let component: RecruitmentInfoDetailsComponent;
  let fixture: ComponentFixture<RecruitmentInfoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitmentInfoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitmentInfoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
