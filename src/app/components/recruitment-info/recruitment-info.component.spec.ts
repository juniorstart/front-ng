import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentInfoComponent } from './recruitment-info.component';

describe('RecruitmentInfoComponent', () => {
  let component: RecruitmentInfoComponent;
  let fixture: ComponentFixture<RecruitmentInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitmentInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitmentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
