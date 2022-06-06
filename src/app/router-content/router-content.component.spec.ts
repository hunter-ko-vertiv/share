import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterContentComponent } from './router-content.component';

describe('RouterContentComponent', () => {
  let component: RouterContentComponent;
  let fixture: ComponentFixture<RouterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
