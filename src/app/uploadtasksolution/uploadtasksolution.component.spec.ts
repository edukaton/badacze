import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { UploadtasksolutionComponent } from './uploadtasksolution.component';

describe('UploadtasksolutionComponent', () => {
  let component: UploadtasksolutionComponent;
  let fixture: ComponentFixture<UploadtasksolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadtasksolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadtasksolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
