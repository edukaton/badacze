import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalstudentratingComponent } from './finalstudentrating.component';

describe('FinalstudentratingComponent', () => {
  let component: FinalstudentratingComponent;
  let fixture: ComponentFixture<FinalstudentratingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalstudentratingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalstudentratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
