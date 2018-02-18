import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FokaGameComponent } from './foka-game.component';

describe('FokaGameComponent', () => {
  let component: FokaGameComponent;
  let fixture: ComponentFixture<FokaGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FokaGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FokaGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
