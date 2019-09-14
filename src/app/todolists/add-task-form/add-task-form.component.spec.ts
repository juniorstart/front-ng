import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskFormComponent } from './add-task-form.component';

describe('AddTaskFormComponent', () => {
  let component: AddTaskFormComponent;
  let fixture: ComponentFixture<AddTaskFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTaskFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
