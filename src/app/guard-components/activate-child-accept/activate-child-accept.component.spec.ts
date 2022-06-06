import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateChildAcceptComponent } from './activate-child-accept.component';

describe('ActivateChildAcceptComponent', () => {
  let component: ActivateChildAcceptComponent;
  let fixture: ComponentFixture<ActivateChildAcceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivateChildAcceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateChildAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
