import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryHttpHandleComponent } from './try-http-handle.component';

describe('TryHttpHandleComponent', () => {
  let component: TryHttpHandleComponent;
  let fixture: ComponentFixture<TryHttpHandleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TryHttpHandleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TryHttpHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
