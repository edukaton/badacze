import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialstudentratingComponent } from './initialstudentrating.component';

describe('InitialstudentratingComponent', () => {
  let component: InitialstudentratingComponent;
  let fixture: ComponentFixture<InitialstudentratingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialstudentratingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialstudentratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
