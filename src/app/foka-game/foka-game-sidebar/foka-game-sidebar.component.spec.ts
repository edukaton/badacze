import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FokaGameSidebarComponent } from './foka-game-sidebar.component';

describe('FokaGameSidebarComponent', () => {
  let component: FokaGameSidebarComponent;
  let fixture: ComponentFixture<FokaGameSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FokaGameSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FokaGameSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
