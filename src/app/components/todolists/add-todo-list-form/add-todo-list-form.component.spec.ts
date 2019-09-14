import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoListFormComponent } from './add-todo-list-form.component';

describe('AddTodoListFormComponent', () => {
  let component: AddTodoListFormComponent;
  let fixture: ComponentFixture<AddTodoListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTodoListFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
