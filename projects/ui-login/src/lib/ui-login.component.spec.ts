import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiLoginComponent } from './ui-login.component';

describe('UiLoginComponent', () => {
  let component: UiLoginComponent;
  let fixture: ComponentFixture<UiLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
