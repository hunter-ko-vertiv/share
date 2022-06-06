import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateChildFailComponent } from './activate-child-fail.component';

describe('ActivateChildFailComponent', () => {
  let component: ActivateChildFailComponent;
  let fixture: ComponentFixture<ActivateChildFailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivateChildFailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateChildFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
