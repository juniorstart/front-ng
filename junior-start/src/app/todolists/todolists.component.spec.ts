import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistsComponent } from './todolists.component';

describe('TodolistsComponent', () => {
  let component: TodolistsComponent;
  let fixture: ComponentFixture<TodolistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodolistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
