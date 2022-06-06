import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterControlPanelComponent } from './router-control-panel.component';

describe('RouterControlPanelComponent', () => {
  let component: RouterControlPanelComponent;
  let fixture: ComponentFixture<RouterControlPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterControlPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
