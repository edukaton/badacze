import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaytasksolutionComponent } from './displaytasksolution.component';

describe('DisplaytasksolutionComponent', () => {
  let component: DisplaytasksolutionComponent;
  let fixture: ComponentFixture<DisplaytasksolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaytasksolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaytasksolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
