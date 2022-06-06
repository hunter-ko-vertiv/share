import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateChildComponent } from './activate-child.component';

describe('ActivateChildComponent', () => {
  let component: ActivateChildComponent;
  let fixture: ComponentFixture<ActivateChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivateChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
