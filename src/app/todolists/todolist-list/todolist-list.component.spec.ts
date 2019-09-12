import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistListComponent } from './todolist-list.component';

describe('TodolistListComponent', () => {
  let component: TodolistListComponent;
  let fixture: ComponentFixture<TodolistListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodolistListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
