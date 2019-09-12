import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistFormComponent } from './todolist-form.component';

describe('TodolistFormComponent', () => {
  let component: TodolistFormComponent;
  let fixture: ComponentFixture<TodolistFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodolistFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
