import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrortestComponent } from './errortest.component';

describe('ErrortestComponent', () => {
  let component: ErrortestComponent;
  let fixture: ComponentFixture<ErrortestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrortestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrortestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
